import React, { useState } from 'react';
import { ContinuityChecker } from '../components/objectives/I3/ContinuityChecker';
import { IVTVisualizer } from '../components/objectives/I3/IVTVisualizer';
import { PROBLEMS_I3 } from '../constants/problems';
import { Button } from '../components/common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressTracker } from '../components/math/ProgressTracker';
import { Card } from '../components/common/Card';
import { MathInput } from '../components/math/MathInput';
import { SolutionSteps } from '../components/math/SolutionSteps';
import { HintSystem } from '../components/math/HintSystem';
import { useProgressStore } from '../stores/progressStore';
import toast, { Toaster } from 'react-hot-toast';


export const ObjectiveI3: React.FC = () => {
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const currentProblem = PROBLEMS_I3[currentProblemIndex];
    const [answer, setAnswer] = useState('');
    const { updateProgress } = useProgressStore();

    const nextProblem = () => {
        if (currentProblemIndex < PROBLEMS_I3.length - 1) {
            setCurrentProblemIndex(prev => prev + 1);
            setAnswer('');
        }
    };

    const prevProblem = () => {
        if (currentProblemIndex > 0) {
            setCurrentProblemIndex(prev => prev - 1);
            setAnswer('');
        }
    };

    const checkAnswer = () => {
        if (answer.toLowerCase().trim() === currentProblem.correctAnswer) {
            toast.success('¡Correcto! Has ganado 100 puntos.');
            updateProgress(currentProblem.id, 100);
        } else {
            toast.error('Incorrecto. Intenta de nuevo.');
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <Toaster />
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">Objetivo I.3</h1>
                    <p className="text-slate-600">Continuidad de Funciones</p>
                </div>
                <div className="w-64">
                    <ProgressTracker />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="mb-6 text-center">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{currentProblem.title}</h2>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={prevProblem}
                                        disabled={currentProblemIndex === 0}
                                    >
                                        <ChevronLeft size={16} />
                                    </Button>
                                    <span className="flex items-center text-sm font-medium text-slate-500">
                                        {currentProblemIndex + 1} / {PROBLEMS_I3.length}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={nextProblem}
                                        disabled={currentProblemIndex === PROBLEMS_I3.length - 1}
                                    >
                                        <ChevronRight size={16} />
                                    </Button>
                                </div>
                            </div>

                            <div className="text-xl py-4 overflow-x-auto font-mono text-slate-800">
                                {currentProblem.initialExpression}
                            </div>
                            <p className="text-slate-600">{currentProblem.description}</p>
                        </div>

                        <div className="space-y-4">
                            <MathInput value={answer} onChange={setAnswer} placeholder="Escribe 'continua' o 'si'..." />
                            <Button onClick={checkAnswer} className="w-full">Verificar Respuesta</Button>
                        </div>
                    </Card>

                    <Card title="Solución Paso a Paso">
                        <SolutionSteps steps={currentProblem.steps} />
                    </Card>
                </div>

                <div className="space-y-6">
                    {currentProblem.id === 'continuity_01' ? (
                        <ContinuityChecker point="x=2" f_a="3" limit="3" />
                    ) : (
                        <IVTVisualizer />
                    )}

                    <Card title="Pistas">
                        <HintSystem hints={currentProblem.hints} />
                    </Card>
                </div>
            </div>
        </div>
    );
};
