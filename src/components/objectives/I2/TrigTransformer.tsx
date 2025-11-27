import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';


export const TrigTransformer: React.FC = () => {
    const [expression, setExpression] = useState('tan(x)');

    const identities = [
        { from: 'tan(x)', to: 'sin(x)/cos(x)' },
        { from: 'csc(x)', to: '1/sin(x)' },
        { from: 'sec(x)', to: '1/cos(x)' },
        { from: 'sin²(x) + cos²(x)', to: '1' },
        { from: '1 - cos²(x)', to: 'sin²(x)' },
    ];

    const applyIdentity = (to: string) => {
        setExpression(to);
    };

    return (
        <Card title="Transformador Trigonométrico">
            <div className="space-y-6">
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 min-h-[100px]">
                    <div className="text-2xl font-mono text-slate-800">
                        {expression}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-slate-600 mb-3">Aplicar Identidad:</h4>
                    <div className="flex flex-wrap gap-2">
                        {identities.map((identity, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => applyIdentity(identity.to)}
                                className="font-mono text-xs"
                            >
                                {identity.from} → {identity.to}
                            </Button>
                        ))}
                        <Button variant="ghost" size="sm" onClick={() => setExpression('tan(x)')}>Reiniciar</Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};
