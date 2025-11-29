import React, { useState } from 'react';
import { Character } from '../types';
import { X, User, Eye, Brain, Stars, Sparkles, Loader2 } from 'lucide-react';
import { generateCharacterAnalysis } from '../services/geminiService';

interface CharacterDetailProps {
  character: Character;
  onClose: () => void;
  apiKey: string | null;
  onRequestApiKey: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, onClose, apiKey, onRequestApiKey }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(character.imagePrompt)}?width=600&height=800&nologo=true`;

  const handleAnalyze = async () => {
    if (!apiKey) {
      onRequestApiKey();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await generateCharacterAnalysis(character, apiKey);
      setAnalysis(result);
    } catch (e) {
      setError("Chyba při komunikaci s Gemini. Zkontrolujte API klíč.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
          <img 
            src={imageUrl} 
            alt={character.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 overflow-y-auto scrollbar-hide">
          <h2 className="font-cinzel text-4xl font-bold text-white mb-2">{character.name}</h2>
          {character.nickname && <p className="text-xl text-slate-400 italic mb-6">"{character.nickname}"</p>}
          
          <div className="space-y-6">
            
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wider text-sm">
                    <User size={16} /> Role
                </div>
                <p className="text-slate-200 bg-slate-800/50 p-3 rounded-lg border-l-2 border-sky-500">
                    {character.role}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider text-sm">
                        <Eye size={16} /> Vzhled
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {character.appearance}
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm">
                        <Brain size={16} /> Povaha
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {character.personality}
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-sm">
                    <Stars size={16} /> Příběh
                </div>
                <p className="text-slate-300 leading-relaxed border-t border-slate-800 pt-2">
                    {character.description}
                </p>
            </div>

            {/* AI Analysis Section */}
            <div className="mt-8 border-t border-slate-700 pt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-cinzel text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 flex items-center gap-2">
                        <Sparkles size={20} className="text-pink-400" />
                        Gemini AI Analýza
                    </h3>
                    {!analysis && (
                        <button 
                            onClick={handleAnalyze}
                            disabled={loading}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-bold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Brain size={16} />}
                            {loading ? "Analyzuji..." : "Analyzovat postavu"}
                        </button>
                    )}
                </div>

                {error && (
                    <div className="p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-200 text-sm">
                        {error}
                    </div>
                )}

                {analysis && (
                    <div className="p-5 bg-slate-800/80 rounded-xl border border-indigo-500/30 text-slate-200 text-sm leading-7 shadow-inner animate-fade-in">
                        {analysis.split('\n').map((line, i) => (
                            <p key={i} className="mb-2">{line}</p>
                        ))}
                    </div>
                )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;