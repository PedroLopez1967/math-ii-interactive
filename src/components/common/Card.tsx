import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
    return (
        <div className={cn("bg-white rounded-xl shadow-sm border border-slate-200 p-6", className)}>
            {title && <h3 className="text-lg font-semibold mb-4 text-slate-800">{title}</h3>}
            {children}
        </div>
    );
};
