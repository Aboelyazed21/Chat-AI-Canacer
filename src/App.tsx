/**
 * ZEZOX MEDICAL AI - Primary Web Application Component
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthModal } from './components/AuthModal';
import { SavedAnswersModal } from './components/SavedAnswersModal';
import { CameraScannerModal } from './components/CameraScannerModal';
import { ChatMessage, Language, UserProfile } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [language] = useState<Language>('en');

  // User Profile
  const [user, setUser] = useState<UserProfile>({
    id: 'usr-default',
    name: 'Patient Account',
    email: 'patient@oncocare.ai',
    language: 'en',
    isLoggedIn: false
  });

  // Modal Visibility
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Messages State
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const local = localStorage.getItem('oncocare_chat_history');
    return local ? JSON.parse(local) : [];
  });

  // Bookmarked Saved Message IDs
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const local = localStorage.getItem('oncocare_saved_ids');
    return local ? JSON.parse(local) : [];
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('oncocare_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('oncocare_saved_ids', JSON.stringify(savedIds));
  }, [savedIds]);

  // Set LTR direction always
  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, []);

  // Handle Send Message & Document Analysis
  const handleSendMessage = async (text: string, attachment?: { fileData: string; fileName: string; mimeType: string }) => {
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text || (attachment ? `Uploaded file: ${attachment.fileName}` : ''),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      attachments: attachment ? [{ type: 'image', name: attachment.fileName }] : undefined
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setIsLoading(true);

    try {
      if (attachment) {
        // Document OCR & Report Analysis Route
        const res = await fetch('/api/analyze-document', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileData: attachment.fileData,
            fileName: attachment.fileName,
            mimeType: attachment.mimeType,
            userPrompt: text
          })
        });

        if (res.ok) {
          const docResult = await res.json();
          const assistantMsg: ChatMessage = {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: `${docResult.analysisTitle}\n\nKey Findings:\n• ${docResult.keyFindings?.join('\n• ')}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            language: 'en',
            structuredResponse: {
              summary: docResult.analysisTitle || 'Document Report Analysis',
              detailedExplanation: docResult.clinicalInterpretation || 'Report parsed successfully.',
              symptoms: docResult.keyFindings || [],
              treatmentOptions: docResult.recommendations || [],
              references: [
                { id: 'ref-doc', source: 'FDA', title: 'Clinical Document OCR Analysis Engine', url: 'https://api.fda.gov' }
              ],
              confidenceScore: docResult.confidenceScore || 95,
              medicalDisclaimer: docResult.disclaimer || 'This document analysis is for educational purposes only. Verify with your physician.'
            }
          };
          setMessages([...updated, assistantMsg]);
        }
      } else {
        // Standard Chat Query with Grounding
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: text,
            language: 'en'
          })
        });

        if (res.ok) {
          const botMsg: ChatMessage = await res.json();
          setMessages([...updated, botMsg]);
        }
      }
    } catch (error) {
      console.error('Error contacting backend server:', error);
      const fallbackMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'Network connection issue. Please retry your medical query.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...updated, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSaveBookmark = (msg: ChatMessage) => {
    if (savedIds.includes(msg.id)) {
      setSavedIds(savedIds.filter((id) => id !== msg.id));
    } else {
      setSavedIds([...savedIds, msg.id]);
    }
  };

  const savedMessagesList = messages.filter((m) => savedIds.includes(m.id));

  return (
    <div className="min-h-screen bg-black text-amber-100 flex flex-col font-sans transition-colors selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* Main Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        onOpenCamera={() => setIsCameraOpen(true)}
      />

      {/* Main Content Render */}
      <main className="flex-1 py-4">
        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          language={language}
          onSaveBookmark={toggleSaveBookmark}
          savedIds={savedIds}
          onOpenCamera={() => setIsCameraOpen(true)}
        />
      </main>

      {/* Footer / Rights Reserved (Centered at bottom only) */}
      <footer className="py-3 px-4 border-t border-amber-500/50 bg-black/95 backdrop-blur-md text-center text-xs text-amber-200 flex items-center justify-center gap-2 max-w-6xl mx-auto w-full mt-auto">
        <div className="flex items-center justify-center gap-2 font-bold text-amber-300 flex-wrap text-center">
          <span>© All Rights Reserved |</span>
          <span className="px-2.5 py-0.5 rounded-lg bg-neutral-900 border border-amber-400/60 text-amber-300 shadow-sm whitespace-nowrap">
            ENG Aboelyazed hatem
          </span>
        </div>
      </footer>

      {/* Modals */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} language={language} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} user={user} setUser={setUser} language={language} />
      <SavedAnswersModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedMessages={savedMessagesList}
        onRemoveBookmark={(id) => setSavedIds(savedIds.filter((sId) => sId !== id))}
        language={language}
      />
      <CameraScannerModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        language={language}
        onAnalyzePhoto={(fileData, fileName, mimeType, promptText) => {
          setActiveTab('chat');
          handleSendMessage(promptText, { fileData, fileName, mimeType });
        }}
      />

    </div>
  );
}
