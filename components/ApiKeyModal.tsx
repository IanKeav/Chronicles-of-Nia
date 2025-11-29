import React, { useState } from 'react';
import { Key, Check, AlertCircle } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-4 text-indigo-400">
            <Key size={24} />
            <h2 className="text-xl font-bold text-white font-cinzel">Gemini API Klíč</h2>
        </div>
        
        <p className="text-slate-400 text-sm mb-6">
            Pro odemknutí pokročilé AI analýzy postav zadejte prosím svůj Google Gemini API klíč. 
            Klíč je uložen pouze v paměti prohlížeče.
        </p>

        <input 
            type="password" 
            placeholder="Vložte API klíč..." 
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 mb-6 transition-colors"
        />

        <div className="flex justify-end gap-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold"
            >
                Zrušit
            </button>
            <button 
                onClick={() => {
                    if (key.trim()) {
                        onSave(key.trim());
                        onClose();
                    }
                }}
                disabled={!key.trim()}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Check size={16} /> Uložit
            </button>
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-xs text-amber-500/80">
            <AlertCircle size={12} />
            <span>Bez klíče funguje pouze základní zobrazení karet.</span>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;