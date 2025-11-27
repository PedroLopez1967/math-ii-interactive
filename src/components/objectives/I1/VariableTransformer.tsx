import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { MathInput } from '../../math/MathInput';


export const VariableTransformer: React.FC = () => {
    const [u, setU] = useState('');
    const [transformed, setTransformed] = useState<string | null>(null);

    const handleTransform = () => {
        // Mock transformation logic for MVP
        if (u.includes('1+x')) {
            setTransformed('lim(u→1) (u^5 - 1)/(u-1)');
        } else if (u.includes('x-\\pi/4') || u.includes('x - \\pi/4')) {
            setTransformed('lim(h→0) (tan(h+π/4) - 1)/h');
        } else {
            setTransformed('No se reconoce el cambio de variable. Intenta otro.');
        }
    };

    return (
        <Card title="Transformador de Variable">
            <div className="space-y-4">
                <p className="text-sm text-slate-600">
                    Propón un cambio de variable u en función de x.
                </p>
                <div className="flex gap-2 items-end">
                    <div className="flex-1">
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">u = </label>
                        <MathInput value={u} onChange={setU} placeholder="Ej: 1+x" />
                    </div>
                    <Button onClick={handleTransform}>Transformar</Button>
                </div>

                {transformed && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-xs text-slate-500 mb-2">Límite transformado (Simulado):</p>
                        <div className="font-mono text-slate-800">
                            {transformed}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};
