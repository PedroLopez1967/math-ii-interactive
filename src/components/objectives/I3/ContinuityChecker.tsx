import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { Check, X } from 'lucide-react';


interface ContinuityCheckerProps {
    point: string;
    f_a: string;
    limit: string;
}

export const ContinuityChecker: React.FC<ContinuityCheckerProps> = ({ point, f_a, limit }) => {
    const [checks, setChecks] = useState<{ [key: string]: boolean | null }>({
        defined: null,
        exists: null,
        equal: null,
    });

    const handleCheck = (key: string, value: boolean) => {
        setChecks(prev => ({ ...prev, [key]: value }));
    };

    const isComplete = Object.values(checks).every(v => v !== null);
    const isContinuous = Object.values(checks).every(v => v === true);

    const renderMath = (text: string) => {
        return <span className="font-mono">{text}</span>;
    };

    return (
        <Card title={`Verificación de Continuidad en ${point}`}>
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">1. ¿Está definida f(a)?</span>
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.defined === true ? 'bg-green-600 text-white' : ''}
                                onClick={() => handleCheck('defined', true)}
                            >
                                Sí
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.defined === false ? 'bg-red-600 text-white' : ''}
                                onClick={() => handleCheck('defined', false)}
                            >
                                No
                            </Button>
                        </div>
                    </div>
                    <div className="text-sm text-slate-600">
                        Valor: {renderMath(f_a)}
                    </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">2. ¿Existe el límite?</span>
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.exists === true ? 'bg-green-600 text-white' : ''}
                                onClick={() => handleCheck('exists', true)}
                            >
                                Sí
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.exists === false ? 'bg-red-600 text-white' : ''}
                                onClick={() => handleCheck('exists', false)}
                            >
                                No
                            </Button>
                        </div>
                    </div>
                    <div className="text-sm text-slate-600">
                        Valor: {renderMath(limit)}
                    </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">3. ¿Es el límite igual a f(a)?</span>
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.equal === true ? 'bg-green-600 text-white' : ''}
                                onClick={() => handleCheck('equal', true)}
                            >
                                Sí
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className={checks.equal === false ? 'bg-red-600 text-white' : ''}
                                onClick={() => handleCheck('equal', false)}
                            >
                                No
                            </Button>
                        </div>
                    </div>
                </div>

                {isComplete && (
                    <div className="p-4 rounded-lg border flex items-center gap-3">
                        {isContinuous ? <Check size={24} className="text-green-600" /> : <X size={24} className="text-red-600" />}
                        <div>
                            <p className="font-bold">{isContinuous ? 'La función es CONTINUA' : 'La función es DISCONTINUA'}</p>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};
