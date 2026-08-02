import React, { useState } from 'react';
import { User, X } from 'lucide-react';
import { UserProfile, Language } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  setUser: (u: UserProfile) => void;
  language: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, user, setUser, language }) => {
  const [email, setEmail] = useState(user.email || '');
  const [name, setName] = useState(user.name || '');
  const [cancerType, setCancerType] = useState(user.diagnosisHistory?.cancerType || 'Breast Cancer');
  const [stage, setStage] = useState(user.diagnosisHistory?.stage || 'Stage II');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: user.id || 'usr-1',
      name: name.trim() || 'Patient',
      email: email.trim() || 'patient@example.com',
      language,
      isLoggedIn: true,
      diagnosisHistory: {
        cancerType,
        stage
      }
    });
    onClose();
  };

  const handleGoogleLogin = () => {
    setUser({
      id: 'usr-google-101',
      name: 'Dr. Sarah Jenkins (Patient Account)',
      email: 's.jenkins@gmail.com',
      language,
      isLoggedIn: true,
      diagnosisHistory: {
        cancerType: 'Non-Small Cell Lung Cancer',
        stage: 'Stage III'
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-md rounded-3xl border border-amber-500/60 shadow-2xl p-6 space-y-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/40">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-amber-400" />
            <h2 className="font-extrabold text-lg text-amber-300">
              {user.isLoggedIn ? 'Patient Medical Profile' : 'Sign In / Profile Setup'}
            </h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-amber-300 hover:bg-neutral-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Google Quick Login */}
        {!user.isLoggedIn && (
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-amber-200 font-bold rounded-2xl border border-amber-500/40 text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Continue with Google</span>
          </button>
        )}

        <form onSubmit={handleSave} className="space-y-3 text-xs">
          <div>
            <label className="font-bold text-amber-200 block mb-1">
              Full Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3 py-2 bg-neutral-900 border border-amber-500/40 rounded-xl text-white"
            />
          </div>

          <div>
            <label className="font-bold text-amber-200 block mb-1">
              Email Address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3 py-2 bg-neutral-900 border border-amber-500/40 rounded-xl text-white"
            />
          </div>

          <div className="pt-2 border-t border-amber-500/40">
            <span className="font-bold text-amber-300 block mb-2">
              Personalized Medical Diagnosis Context:
            </span>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] text-amber-200/70 block mb-1">Cancer Type</label>
                <select
                  value={cancerType}
                  onChange={(e) => setCancerType(e.target.value)}
                  className="w-full px-2 py-2 bg-neutral-900 border border-amber-500/40 rounded-xl text-white"
                >
                  <option value="Breast Cancer">Breast Cancer</option>
                  <option value="Lung Cancer (NSCLC)">Lung Cancer (NSCLC)</option>
                  <option value="Prostate Cancer">Prostate Cancer</option>
                  <option value="Colorectal Cancer">Colorectal Cancer</option>
                  <option value="Melanoma">Melanoma</option>
                  <option value="Glioblastoma">Glioblastoma</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-amber-200/70 block mb-1">Stage</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-2 py-2 bg-neutral-900 border border-amber-500/40 rounded-xl text-white"
                >
                  <option value="Stage I">Stage I</option>
                  <option value="Stage II">Stage II</option>
                  <option value="Stage III">Stage III</option>
                  <option value="Stage IV">Stage IV</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-extrabold rounded-2xl shadow-md border border-amber-300 transition-colors text-xs"
          >
            Save & Update Profile
          </button>
        </form>

      </div>
    </div>
  );
};
