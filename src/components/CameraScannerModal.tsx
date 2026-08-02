import React, { useState, useRef, useEffect } from 'react';
import { Camera, X, RefreshCw, Sparkles, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface CameraScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAnalyzePhoto: (fileData: string, fileName: string, mimeType: string, promptText: string) => void;
  language: Language;
}

export const CameraScannerModal: React.FC<CameraScannerModalProps> = ({
  isOpen,
  onClose,
  onAnalyzePhoto
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');

  // Start Camera Stream
  const startCamera = async () => {
    setIsInitializing(true);
    setCameraError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error('Camera access error:', err);
      setCameraError(
        'Unable to access live camera. You can capture or choose a report photo from your device.'
      );
    } finally {
      setIsInitializing(false);
    }
  };

  // Stop Camera Stream
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (isOpen && !capturedImage) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, capturedImage]);

  if (!isOpen) return null;

  // Capture frame from video feed
  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedImage(dataUrl);
        stopCamera();
      }
    }
  };

  // Retake Photo
  const handleRetake = () => {
    setCapturedImage(null);
    startCamera();
  };

  // Upload or camera fallback file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
        stopCamera();
      };
      reader.readAsDataURL(file);
    }
  };

  // Confirm and send for AI Analysis
  const handleConfirmAnalysis = () => {
    if (!capturedImage) return;

    // Convert base64 data url
    const base64Content = capturedImage.split(',')[1] || capturedImage;
    const mimeType = capturedImage.substring(
      capturedImage.indexOf(':') + 1,
      capturedImage.indexOf(';')
    ) || 'image/jpeg';

    const defaultPrompt = userPrompt.trim() || 'Please analyze this captured medical report image, extract key lab values, diagnosis, and medical advice.';

    onAnalyzePhoto(
      base64Content,
      `camera_scan_${Date.now()}.jpg`,
      mimeType,
      defaultPrompt
    );

    stopCamera();
    setCapturedImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-fade-in">
      <div className="bg-black border border-amber-500/60 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 border-b border-amber-500/40 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/50 flex items-center justify-center font-bold shrink-0">
              <Camera className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-amber-300">
                Camera Medical Scanner
              </h3>
              <p className="text-[11px] sm:text-xs text-amber-100/80">
                Point camera at medical report, prescription, or lab result
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopCamera();
              onClose();
            }}
            className="p-2 rounded-xl text-amber-300 hover:text-white hover:bg-neutral-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Camera Viewfinder */}
        <div className="p-3.5 sm:p-4 flex-1 overflow-y-auto space-y-4">
          <canvas ref={canvasRef} className="hidden" />

          {/* Hidden camera input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            capture="environment"
            className="hidden"
          />

          {!capturedImage ? (
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 aspect-[4/3] flex items-center justify-center border border-amber-500/40 shadow-inner">
              {stream ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Viewfinder Overlay Guide */}
                  <div className="absolute inset-6 border-2 border-dashed border-amber-400 rounded-2xl pointer-events-none flex items-center justify-center">
                    <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-full text-amber-300 text-[11px] font-bold border border-amber-400/60 shadow-sm">
                      Fit medical document inside frame
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6 text-center space-y-3">
                  {isInitializing ? (
                    <div className="space-y-2">
                      <RefreshCw className="w-8 h-8 text-amber-300 animate-spin mx-auto" />
                      <p className="text-xs font-semibold text-amber-200">
                        Initializing camera stream...
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
                      <p className="text-xs text-amber-200/90 max-w-xs mx-auto">
                        {cameraError || 'Please allow camera access or pick a photo from device'}
                      </p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black rounded-xl text-xs font-extrabold transition-all shadow-md active:scale-95"
                      >
                        Capture Photo From Camera
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-black border border-amber-400/60 max-h-[280px]">
                <img
                  src={capturedImage}
                  alt="Captured Medical Document"
                  className="w-full h-auto object-contain max-h-[280px] mx-auto"
                />
                <span className="absolute top-2 right-2 px-2.5 py-1 bg-black/90 text-amber-300 border border-amber-400/60 text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  Captured Successfully
                </span>
              </div>

              {/* Optional Prompt Input */}
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-1">
                  Additional note or question (optional):
                </label>
                <input
                  type="text"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="e.g. Explain lab results and medical recommendations..."
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-amber-500/50 rounded-xl text-xs text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-amber-500/30 flex-wrap gap-2">
            {!capturedImage ? (
              <>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-2 text-xs font-semibold text-amber-200 hover:text-white transition-colors"
                >
                  Select from files
                </button>
                <button
                  onClick={handleCapture}
                  disabled={!stream}
                  className="px-5 py-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-md transition-all disabled:opacity-40 active:scale-95 whitespace-nowrap"
                >
                  <Camera className="w-4 h-4 text-black shrink-0" />
                  <span>Snap Photo</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleRetake}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-amber-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all border border-amber-500/40 active:scale-95"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
                <button
                  onClick={handleConfirmAnalysis}
                  className="px-5 py-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black text-xs font-extrabold rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-black shrink-0" />
                  <span>Analyze Report Now</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer Security Note */}
        <div className="p-2.5 bg-neutral-950 border-t border-amber-500/40 text-[11px] text-amber-200/90 flex items-center justify-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Encrypted report OCR analysis with HIPAA-standard privacy</span>
        </div>

      </div>
    </div>
  );
};
