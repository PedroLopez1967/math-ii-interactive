import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '../common/Button';

interface HintSystemProps {
    hints: string[];
}

export const HintSystem: React.FC<HintSystemProps> = ({ hints }) => {
    const [revealedCount, setRevealedCount] = useState(0);

    const revealHint = () => {
        if (revealedCount < hints.length) {
            setRevealedCount(prev => prev + 1);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                    <Lightbulb className="text-yellow-500" size={20} />
                    Pistas ({revealedCount}/{hints.length})
                </h3>
                {revealedCount < hints.length && (
                    <Button variant="outline" size="sm" onClick={revealHint}>
                        Revelar Pista
                    </Button>
                )}
            </div>

            <div className="space-y-3">
                {hints.slice(0, revealedCount).map((hint, index) => (
                    <div key={index} className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-slate-700 text-sm animate-in fade-in slide-in-from-top-2">
                        <span className="font-bold mr-2">Pista {index + 1}:</span>
                        {hint}
                    </div>
                ))}
                {revealedCount === 0 && (
                    <p className="text-sm text-slate-400 italic">¿Necesitas ayuda? Revela una pista.</p>
                )}
            </div>
        </div>
    );
};
