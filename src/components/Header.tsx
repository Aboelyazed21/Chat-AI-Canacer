import React from 'react';
import { MessageSquare, Camera } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  onOpenCamera: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenCamera
}) => {
  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-amber-500/50 shadow-lg shadow-amber-500/5 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Brand Logo & Title */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group shrink min-w-0" 
            onClick={() => setActiveTab('chat')}
          >
            <div className="relative shrink-0">
              <img 
                src="https://thumbs.dreamstime.com/z/farmacia-m%C3%A9dica-logo-cross-en-manos-sanidad-vector-dise%C3%B1o-gr%C3%A1fico-plantilla-de-logotipo-abstracto-medicamento-el-archivo-ai-207949259.jpg" 
                alt="ZEZOX MEDICAL Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover shadow-md border-2 border-amber-400"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-black shadow-sm"></span>
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="font-extrabold text-sm sm:text-base md:text-lg bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent tracking-tight truncate">
                  ZEZOX MEDICAL
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-amber-200/80 hidden sm:block truncate">
                AI Assistant & Camera Scanner
              </p>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <nav className="flex items-center gap-1.5 sm:gap-2 bg-neutral-900/90 p-1 sm:p-1.5 rounded-xl border border-amber-500/50 shadow-inner shrink-0">
            {/* 1. AI Assistant Tab */}
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'chat'
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black shadow-md border border-amber-300 font-extrabold'
                  : 'text-amber-200 hover:text-amber-100 hover:bg-neutral-800/80'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
              <span className="text-[11px] sm:text-xs">AI Assistant</span>
            </button>

            {/* 2. Camera Analysis Button */}
            <button
              onClick={onOpenCamera}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-extrabold rounded-lg text-xs shadow-lg border border-amber-300 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0"
            >
              <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
              <span className="text-[11px] sm:text-xs">Camera Scan</span>
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};
