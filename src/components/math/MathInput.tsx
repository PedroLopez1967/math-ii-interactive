import React from 'react';

interface MathInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const MathInput: React.FC<MathInputProps> = ({ value, onChange, placeholder }) => {
    return (
        <div className="space-y-2">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || "Escribe tu respuesta..."}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm"
            />
            <p className="text-xs text-slate-500">
                Escribe tu respuesta usando notación estándar. Ejemplo: sin(x)/x
            </p>
        </div>
    );
};
