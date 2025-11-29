import React from 'react';
import { Character, ViewMode } from '../types';
import { Info, Sparkles } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
  viewMode: ViewMode;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick, viewMode }) => {
  // Using Pollinations.ai for dynamic image generation based on the extraction
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(character.imagePrompt)}?width=400&height=600&nologo=true`;
  const isGrid = viewMode === ViewMode.GRID;

  return (
    <div 
      onClick={() => onClick(character)}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 ${character.color} bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-inherit
        ${isGrid 
          ? 'h-96 w-full hover:scale-[1.02]' 
          : 'h-auto min-h-[160px] w-full flex flex-row hover:translate-x-1'
        }
      `}
    >
      {/* Background Image Container */}
      <div className={`
        ${isGrid 
          ? 'absolute inset-0' 
          : 'relative w-1/3 sm:w-48 shrink-0'
        }
      `}>
        <img 
          src={imageUrl} 
          alt={character.name} 
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 
            ${isGrid ? 'opacity-80 group-hover:opacity-100' : 'opacity-100'}
          `}
          loading="lazy"
        />
        {/* Gradient Overlay - only for grid or strictly needed visual separation */}
        {isGrid && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        )}
      </div>

      {/* Content Overlay */}
      <div className={`
        ${isGrid 
          ? 'absolute bottom-0 w-full p-6' 
          : 'relative flex-1 p-4 sm:p-6 flex flex-col justify-center'
        }
        text-white
      `}>
        <div className="mb-2 flex items-center justify-between">
            <h3 className={`font-cinzel font-bold tracking-wider text-white drop-shadow-lg ${isGrid ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>
            {character.name}
            </h3>
            <Sparkles className={`h-5 w-5 text-yellow-200 transition-opacity duration-300 ${isGrid ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />
        </div>
        
        {character.nickname && (
          <p className="mb-1 text-sm font-light text-slate-300 italic">"{character.nickname}"</p>
        )}
        
        <p className="mb-3 text-sm font-bold text-slate-200 uppercase tracking-widest opacity-90">
          {character.role}
        </p>

        {/* Description: Hidden in Grid until hover, visible in List */}
        <div className={`
          ${isGrid 
            ? 'h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100' 
            : 'block'
          }
        `}>
            <p className="line-clamp-3 text-sm text-slate-300">
                {character.description}
            </p>
            <div className={`mt-4 flex items-center gap-2 text-xs text-sky-300 font-bold uppercase ${!isGrid && 'mt-2'}`}>
                <Info size={14} />
                <span>Klikni pro detaily</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;