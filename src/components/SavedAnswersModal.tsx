import React from 'react';
import { Bookmark, X, Trash2 } from 'lucide-react';
import { ChatMessage, Language } from '../types';

interface SavedAnswersModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedMessages: ChatMessage[];
  onRemoveBookmark: (id: string) => void;
  language: Language;
}

export const SavedAnswersModal: React.FC<SavedAnswersModalProps> = ({
  isOpen,
  onClose,
  savedMessages,
  onRemoveBookmark
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-2xl rounded-3xl border border-amber-500/60 shadow-2xl p-6 space-y-4 max-h-[85vh] flex flex-col">
        
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/40 shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h2 className="font-extrabold text-lg text-amber-300">
              Saved Answers & Clinical Favorites
            </h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-amber-300 hover:bg-neutral-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedMessages.length === 0 ? (
          <div className="text-center py-12 text-amber-200/80 text-sm font-medium">
            No saved answers yet. Bookmark answers during your chat sessions.
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {savedMessages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 bg-neutral-950 rounded-2xl border border-amber-500/40 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400">
                    {msg.timestamp}
                  </span>
                  <button
                    onClick={() => onRemoveBookmark(msg.id)}
                    className="text-amber-200/60 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {msg.structuredResponse ? (
                  <div>
                    <strong className="block text-amber-300 text-sm mb-1 font-extrabold">
                      {msg.structuredResponse.summary}
                    </strong>
                    <p className="text-amber-100/90 line-clamp-3">
                      {msg.structuredResponse.detailedExplanation}
                    </p>
                  </div>
                ) : (
                  <p className="text-amber-100">{msg.content}</p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
