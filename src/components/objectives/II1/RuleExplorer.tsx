import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';


export const RuleExplorer: React.FC = () => {
    const [activeRule, setActiveRule] = useState('power');

    const rules = {
        power: {
            name: 'Regla de la Potencia',
            formula: "d/dx(x^n) = nx^(n-1)",
            example: "d/dx(x^3) = 3x^2"
        },
        product: {
            name: 'Regla del Producto',
            formula: "d/dx(f · g) = f'g + fg'",
            example: "d/dx(x sin(x)) = sin(x) + x cos(x)"
        },
        quotient: {
            name: 'Regla del Cociente',
            formula: "d/dx(f/g) = (f'g - fg')/g^2",
            example: "d/dx(sin(x)/x) = (x cos(x) - sin(x))/x^2"
        },
        chain: {
            name: 'Regla de la Cadena',
            formula: "d/dx(f(g(x))) = f'(g(x)) · g'(x)",
            example: "d/dx(sin(x^2)) = cos(x^2) · 2x"
        }
    };

    return (
        <Card title="Reglas de Derivación">
            <div className="space-y-6">
                <div className="flex flex-wrap gap-2 justify-center">
                    {Object.entries(rules).map(([key, rule]) => (
                        <Button
                            key={key}
                            variant={activeRule === key ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setActiveRule(key)}
                        >
                            {rule.name}
                        </Button>
                    ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <h3 className="text-lg font-bold text-slate-800">{rules[activeRule as keyof typeof rules].name}</h3>

                    <div className="py-2">
                        <p className="text-sm text-slate-500 mb-2">Fórmula General:</p>
                        <div className="text-xl font-mono text-slate-800">
                            {rules[activeRule as keyof typeof rules].formula}
                        </div>
                    </div>

                    <div className="py-2 border-t border-slate-200">
                        <p className="text-sm text-slate-500 mb-2">Ejemplo:</p>
                        <div className="text-lg text-blue-700 font-mono">
                            {rules[activeRule as keyof typeof rules].example}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};
