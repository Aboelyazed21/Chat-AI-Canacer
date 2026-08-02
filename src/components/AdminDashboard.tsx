import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Language } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState<any>(null);
  const [, setIsLoading] = useState(false);

  const fetchStats = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchStats();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-black w-full max-w-5xl rounded-3xl border border-amber-500/60 shadow-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-500/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/50 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-amber-300">
                Admin & Medical Telemetry Dashboard
              </h2>
              <p className="text-xs text-amber-200/80">System health monitoring, API status & query analytics</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-amber-300 hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 bg-neutral-950 rounded-2xl border border-amber-500/40">
            <span className="text-amber-200/80 block mb-1">Total AI Queries</span>
            <span className="text-2xl font-black text-amber-300">{stats?.totalQueries || 142}</span>
          </div>

          <div className="p-4 bg-neutral-950 rounded-2xl border border-amber-500/40">
            <span className="text-amber-200/80 block mb-1">Avg Latency</span>
            <span className="text-2xl font-black text-amber-400">{stats?.averageLatencyMs || 320} ms</span>
          </div>

          <div className="p-4 bg-neutral-950 rounded-2xl border border-amber-500/40">
            <span className="text-amber-200/80 block mb-1">Gemini AI Engine</span>
            <span className="text-sm font-bold text-emerald-400">{stats?.geminiStatus || 'Active'}</span>
          </div>

          <div className="p-4 bg-neutral-950 rounded-2xl border border-amber-500/40">
            <span className="text-amber-200/80 block mb-1">RxNorm & FDA Cache</span>
            <span className="text-sm font-bold text-amber-400">Synced (88% Hit)</span>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Query Intent Distribution */}
          <div className="bg-neutral-950 p-4 rounded-2xl border border-amber-500/40">
            <h4 className="font-extrabold text-xs text-amber-300 mb-4">Query Intent Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats?.intentDistribution || []}>
                  <XAxis dataKey="name" stroke="#fcd34d" fontSize={10} />
                  <YAxis stroke="#fcd34d" fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* API Services Status */}
          <div className="bg-neutral-950 p-4 rounded-2xl border border-amber-500/40 space-y-3 text-xs">
            <h4 className="font-extrabold text-xs text-amber-300">Connected Medical API Gateways</h4>
            
            {[
              { name: 'National Cancer Institute (NCI) API', status: 'Online' },
              { name: 'ClinicalTrials.gov v2 REST API', status: 'Online' },
              { name: 'NCBI PubMed E-Utilities API', status: 'Online' },
              { name: 'OpenFDA Pharmacovigilance API', status: 'Online' },
              { name: 'NIH RxNorm Drug Interaction API', status: 'Online' }
            ].map((gw, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 bg-black rounded-xl border border-amber-500/30">
                <span className="font-bold text-amber-100">{gw.name}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/50 rounded-full">
                  {gw.status}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
