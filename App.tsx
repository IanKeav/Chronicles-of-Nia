import React, { useState, useEffect } from 'react';
import { CHARACTERS } from './constants';
import { Character, ViewMode } from './types';
import CharacterCard from './components/CharacterCard';
import CharacterDetail from './components/CharacterDetail';
import ApiKeyModal from './components/ApiKeyModal';
import { BookOpen, Sparkles, Key, LayoutGrid, List } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isKeyModalOpen, setKeyModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);

  // Background stars effect
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white opacity-0 animate-pulse';
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      const container = document.getElementById('stars-container');
      if (container) {
        container.appendChild(star);
        setTimeout(() => star.remove(), 5000);
      }
    };

    const interval = setInterval(createStar, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[#0f172a] -z-20" />
      <div id="stars-container" className="fixed inset-0 -z-10 pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BookOpen className="text-indigo-400" size={32} />
            <div>
              <h1 className="font-cinzel text-2xl font-bold text-white tracking-widest">ATUM</h1>
              <p className="text-xs text-indigo-300 uppercase tracking-[0.2em]">Přítel</p>
            </div>
          </div>
          
          <button 
            onClick={() => setKeyModalOpen(true)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-bold uppercase tracking-wider ${apiKey ? 'border-green-500/50 bg-green-500/10 text-green-400' : 'border-slate-600 bg-slate-800 text-slate-400 hover:border-indigo-500 hover:text-indigo-400'}`}
          >
            <Key size={14} />
            {apiKey ? 'API Klíč Aktivní' : 'Nastavit API Klíč'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Postavy
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Osudy propletené ve stínu proroctví. Každá postava nese svůj díl skládačky v příběhu o rovnováze mezi světlem a tmou.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="bg-slate-800 p-1 rounded-lg border border-slate-700 inline-flex">
            <button 
              onClick={() => setViewMode(ViewMode.GRID)}
              className={`p-2 rounded-md transition-all ${viewMode === ViewMode.GRID ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              aria-label="Grid View"
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode(ViewMode.LIST)}
              className={`p-2 rounded-md transition-all ${viewMode === ViewMode.LIST ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              aria-label="List View"
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className={
          viewMode === ViewMode.GRID 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "flex flex-col gap-4 max-w-4xl mx-auto"
        }>
          {CHARACTERS.map((char) => (
            <CharacterCard 
              key={char.id} 
              character={char} 
              onClick={setSelectedCharacter} 
              viewMode={viewMode}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2013 Jan Hlavsa. Visualized with React & Gemini AI.</p>
      </footer>

      {/* Modals */}
      {selectedCharacter && (
        <CharacterDetail 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)}
          apiKey={apiKey}
          onRequestApiKey={() => setKeyModalOpen(true)}
        />
      )}

      <ApiKeyModal 
        isOpen={isKeyModalOpen} 
        onClose={() => setKeyModalOpen(false)} 
        onSave={(key) => {
            setApiKey(key);
            // In a real app, maybe save to localStorage here
        }} 
      />
    </div>
  );
};

export default App;