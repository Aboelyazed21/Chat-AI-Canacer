import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Download,
  Bookmark,
  ExternalLink,
  RefreshCw,
  Paperclip,
  FileSpreadsheet,
  Bot,
  User,
  ArrowRight,
  Camera
} from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { exportChatToPDF } from '../services/pdfExporter';

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (text: string, attachment?: { fileData: string; fileName: string; mimeType: string }) => Promise<void>;
  isLoading: boolean;
  language: Language;
  onSaveBookmark: (msg: ChatMessage) => void;
  savedIds: string[];
  onOpenCamera?: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  onSendMessage,
  isLoading,
  onSaveBookmark,
  savedIds,
  onOpenCamera
}) => {
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{ name: string; base64: string; mime: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle Voice Input
  const toggleRecording = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
      setIsRecording(false);
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);

    recognition.start();
  };

  // Handle Speech Synthesis
  const toggleSpeech = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.onend = () => setSpeakingMsgId(null);
    utterance.onerror = () => setSpeakingMsgId(null);

    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  // Handle File Select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setSelectedFile({
        name: file.name,
        base64,
        mime: file.type || 'image/jpeg'
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!inputText.trim() && !selectedFile) || isLoading) return;

    const textToSend = inputText;
    const fileToSend = selectedFile
      ? { fileData: selectedFile.base64, fileName: selectedFile.name, mimeType: selectedFile.mime }
      : undefined;

    setInputText('');
    setSelectedFile(null);

    onSendMessage(textToSend, fileToSend);
  };

  const suggestedQueries = [
    'What are the latest FDA-approved treatments for Stage 3 NSCLC?',
    'How to manage nausea and fatigue during chemotherapy?',
    'Explain TNM Cancer Staging System simply',
    'Check drug interactions for Cisplatin & Gentamicin'
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] max-w-6xl mx-auto px-2 sm:px-4">
      
      {/* PDF Export Action if messages exist */}
      {messages.length > 0 && (
        <div className="flex justify-end py-1.5 border-b border-amber-500/30 shrink-0">
          <button
            onClick={() => exportChatToPDF(messages)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 text-xs font-extrabold transition-all border border-amber-500/50 shadow-md active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">Export Consultation PDF</span>
          </button>
        </div>
      )}

      {/* Main Message History Area */}
      <div className="flex-1 overflow-y-auto py-3 sm:py-4 space-y-4 sm:space-y-6 pr-1 scrollbar-thin">
        {messages.length === 0 && (
          <div className="text-center py-6 sm:py-8 px-2 sm:px-4 max-w-2xl mx-auto">
            <img 
              src="https://thumbs.dreamstime.com/z/farmacia-m%C3%A9dica-logo-cross-en-manos-sanidad-vector-dise%C3%B1o-gr%C3%A1fico-plantilla-de-logotipo-abstracto-medicamento-el-archivo-ai-207949259.jpg" 
              alt="ZEZOX MEDICAL Logo" 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover mx-auto mb-3 sm:mb-4 border-2 border-amber-400 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-xl sm:text-2xl font-extrabold text-amber-300 mb-1.5 sm:mb-2 tracking-tight">
              Welcome to ZEZOX MEDICAL
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-lg mx-auto mb-5 leading-relaxed font-medium">
              Your clinical AI companion for oncology guidance, trial options, report interpretation, and drug checking.
            </p>

            {/* Camera Scan Banner */}
            <div className="mb-5 p-3.5 sm:p-4 bg-neutral-950 text-white rounded-2xl border border-amber-500/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                  <Camera className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-amber-300">
                    Camera Medical Report Analysis
                  </h3>
                  <p className="text-[11px] sm:text-xs text-amber-100/80">
                    Point camera at oncology report or lab result for instant AI analysis
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenCamera}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-extrabold rounded-xl text-xs transition-all shrink-0 flex items-center justify-center gap-2 shadow-md border border-amber-300 active:scale-95 whitespace-nowrap"
              >
                <Camera className="w-4 h-4 text-black shrink-0" />
                <span>Open Camera Scanner</span>
              </button>
            </div>

            {/* Suggested Starter Prompts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {suggestedQueries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => onSendMessage(q)}
                  className="p-3 rounded-xl border border-amber-500/40 hover:border-amber-400 bg-neutral-900/80 text-xs font-semibold text-amber-100 hover:text-amber-300 transition-all shadow-sm flex items-center justify-between gap-2 group text-left backdrop-blur-sm active:scale-95"
                >
                  <span className="line-clamp-2">{q}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 opacity-70 group-hover:opacity-100 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const isSaved = savedIds.includes(msg.id);
          const resp = msg.structuredResponse;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-4xl mx-auto w-full`}
            >
              <div
                className={`w-full rounded-2xl p-3.5 sm:p-5 border transition-all ${
                  isUser
                    ? 'bg-neutral-900 text-amber-100 border-amber-500/60 shadow-lg'
                    : 'bg-black/90 backdrop-blur-md border-amber-500/50 shadow-md text-amber-50'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isUser ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50' : 'bg-amber-500/20 text-amber-300 border border-amber-400/50'
                    }`}>
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>
                    <span className="font-bold text-xs text-amber-200 opacity-95 whitespace-nowrap">
                      {isUser ? 'Your Question:' : 'Medical Analysis'}
                    </span>
                    {!isUser && resp?.confidenceScore && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 rounded-full border border-amber-400/50 whitespace-nowrap">
                        {resp.confidenceScore}% Accuracy
                      </span>
                    )}
                  </div>

                  {!isUser && (
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => toggleSpeech(msg.id, msg.content)}
                        className="p-1 rounded-lg hover:bg-neutral-800 text-amber-300 transition-colors"
                        title="Text-to-speech voice output"
                      >
                        {speakingMsgId === msg.id ? (
                          <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onSaveBookmark(msg)}
                        className="p-1 rounded-lg hover:bg-neutral-800 text-amber-300 transition-colors"
                        title="Save to bookmarks"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'text-amber-400 fill-amber-400' : ''}`} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Attachments Preview */}
                {msg.attachments && msg.attachments.length > 0 && (
                  <div className="mb-3 p-2.5 bg-neutral-900 rounded-xl flex items-center gap-2 text-xs border border-amber-500/40">
                    <Paperclip className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold truncate text-amber-100">{msg.attachments[0].name}</span>
                  </div>
                )}

                {/* Structured Medical Breakdown or Text */}
                {resp ? (
                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Executive Summary Card */}
                    <div className="p-3 sm:p-3.5 bg-neutral-900/90 rounded-xl border border-amber-500/40 text-amber-50">
                      <span className="font-bold text-amber-300 text-xs block mb-1">
                        💡 Summary:
                      </span>
                      <p className="font-medium text-xs sm:text-sm leading-relaxed">{resp.summary}</p>
                    </div>

                    {/* Detailed Explanation */}
                    <div className="leading-relaxed whitespace-pre-wrap text-amber-100">
                      {resp.detailedExplanation}
                    </div>

                    {/* Treatment Options & Side Effects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                      {resp.treatmentOptions && resp.treatmentOptions.length > 0 && (
                        <div className="p-3 rounded-xl bg-neutral-900/80 border border-amber-500/40 space-y-1.5">
                          <h4 className="font-bold text-xs text-amber-300 flex items-center gap-1.5">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              alt="Treatment Options Icon"
                              className="w-5 h-5 object-contain shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            Treatment Options:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-amber-100/90 text-xs">
                            {resp.treatmentOptions.map((opt, i) => (
                              <li key={i}>{opt}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {resp.sideEffects && resp.sideEffects.length > 0 && (
                        <div className="p-3 rounded-xl bg-neutral-900/80 border border-amber-500/40 space-y-1.5">
                          <h4 className="font-bold text-xs text-amber-300 flex items-center gap-1.5">
                            <img
                              src="https://png.pngtree.com/png-vector/20241025/ourmid/pngtree-tired-man-in-a-dress-shirt-leaning-forward-with-his-head-png-image_14167253.png"
                              alt="Side Effects Icon"
                              className="w-5 h-5 object-contain shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            Side Effects & Advice:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-amber-100/90 text-xs">
                            {resp.sideEffects.map((se, i) => (
                              <li key={i}>{se}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Medical Citations & References */}
                    {resp.references && resp.references.length > 0 && (
                      <div className="pt-2.5 border-t border-amber-500/30">
                        <h4 className="text-[11px] font-bold text-amber-400 mb-2 uppercase tracking-wider">
                          Verified PubMed & NCI Citations:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {resp.references.map((ref, idx) => (
                            <a
                              key={idx}
                              href={ref.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-amber-200 hover:text-amber-300 rounded-xl text-[11px] font-semibold border border-amber-500/40 transition-all"
                            >
                              <span className="font-bold text-amber-400">[{ref.source}]</span>
                              <span className="truncate max-w-[180px] sm:max-w-[220px]">{ref.title}</span>
                              <ExternalLink className="w-3 h-3 shrink-0 text-amber-400" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Medical Disclaimer */}
                    <div className="text-[11px] text-amber-200/70 italic pt-2 border-t border-amber-500/30">
                      ⚠️ {resp.medicalDisclaimer}
                    </div>
                  </div>
                ) : (
                  <p className="leading-relaxed whitespace-pre-wrap text-xs sm:text-sm text-amber-100">{msg.content}</p>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3 p-3.5 bg-neutral-950 border border-amber-500/60 rounded-2xl max-w-xl shadow-xl animate-pulse">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
              <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-amber-300">
                Connecting to NCI, PubMed, & ClinicalTrials.gov...
              </p>
              <p className="text-[11px] text-amber-200/80">
                Evaluating evidence-based oncology guidelines
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Floating Input Console */}
      <div className="pt-2 pb-3">
        {selectedFile && (
          <div className="mb-2 p-2 bg-neutral-950 border border-amber-500/60 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-amber-300 font-bold truncate">
              <FileSpreadsheet className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">{selectedFile.name}</span>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="p-1 hover:bg-neutral-800 rounded-lg text-amber-300 font-bold shrink-0"
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,application/pdf,.doc,.docx,.txt"
            className="hidden"
          />

          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask oncology questions or upload report..."
              className="w-full py-3 sm:py-3.5 pl-3 pr-28 bg-neutral-950 border border-amber-500/60 rounded-2xl text-xs sm:text-sm text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl transition-all"
            />

            <div className="absolute top-1/2 -translate-y-1/2 right-1.5 flex items-center gap-1">
              <button
                type="button"
                onClick={onOpenCamera}
                className="p-1.5 sm:p-2 text-amber-400 hover:text-amber-300 rounded-xl hover:bg-neutral-800 transition-colors font-bold"
                title="Camera Scan"
              >
                <Camera className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 sm:p-2 text-amber-400 hover:text-amber-300 rounded-xl hover:bg-neutral-800 transition-colors"
                title="Upload Document"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={toggleRecording}
                className={`p-1.5 sm:p-2 rounded-xl transition-colors ${
                  isRecording
                    ? 'bg-rose-600 text-white animate-pulse'
                    : 'text-amber-300 hover:text-amber-100 hover:bg-neutral-800'
                }`}
                title="Voice Dictation"
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || (!inputText.trim() && !selectedFile)}
            className="p-3 sm:p-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 disabled:opacity-40 text-black font-extrabold rounded-2xl shadow-lg border border-amber-300 transition-all shrink-0 flex items-center justify-center active:scale-95"
          >
            <Send className="w-4 h-4 text-black" />
          </button>
        </form>
      </div>

    </div>
  );
};
