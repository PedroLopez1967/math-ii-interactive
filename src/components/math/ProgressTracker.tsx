import React from 'react';
import { useProgressStore } from '../../stores/progressStore';

export const ProgressTracker: React.FC = () => {
    const { totalPoints, level, badges } = useProgressStore();

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-500">Nivel {level}</span>
                <span className="text-sm font-bold text-primary">{totalPoints} XP</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4">
                <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(totalPoints % 100)}%` }}
                ></div>
            </div>
            <div className="flex gap-2 flex-wrap">
                {badges.map((badge, i) => (
                    <span key={i} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                        {badge}
                    </span>
                ))}
                {badges.length === 0 && <span className="text-xs text-slate-400">Sin insignias aún</span>}
            </div>
        </div>
    );
};
