import React from 'react';
import { Card } from '../../common/Card';


export const SpecialLimitsTable: React.FC = () => {
    const limits = [
        { name: 'Límite Trigonométrico Básico', formula: 'lim(x→0) sin(x)/x = 1' },
        { name: 'Límite Exponencial', formula: 'lim(x→0) (e^x - 1)/x = 1' },
        { name: 'Límite Logarítmico', formula: 'lim(x→0) ln(1+x)/x = 1' },
        { name: 'Límite del Coseno', formula: 'lim(x→0) (1 - cos(x))/x = 0' },
    ];

    return (
        <Card title="Límites Especiales de Referencia">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {limits.map((limit, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center hover:bg-slate-100 transition-colors">
                        <span className="text-xs font-semibold text-slate-500 mb-2">{limit.name}</span>
                        <div className="font-mono text-lg text-slate-800">
                            {limit.formula}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
