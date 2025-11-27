import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { MathInput } from '../../math/MathInput';
import { SolutionSteps } from '../../math/SolutionSteps';
import { HintSystem } from '../../math/HintSystem';
import { SpecialLimitsTable } from './SpecialLimitsTable';
import { TrigTransformer } from './TrigTransformer';
import type { Problem } from '../../../constants/problems';
import { useProgressStore } from '../../../stores/progressStore';
import toast, { Toaster } from 'react-hot-toast';


interface LimitDetectiveLabProps {
    problem: Problem;
}

export const LimitDetectiveLab: React.FC<LimitDetectiveLabProps> = ({ problem }) => {
    const [answer, setAnswer] = useState('');
    const { updateProgress } = useProgressStore();

    const checkAnswer = () => {
        if (answer.trim() === problem.correctAnswer) {
            toast.success('¡Correcto! Has ganado 100 puntos.');
            updateProgress(problem.id, 100);
        } else {
            toast.error('Incorrecto. Intenta de nuevo.');
        }
    };

    return (
        <div className="space-y-6">
            <Toaster />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="mb-6 text-center">
                            <h2 className="text-xl font-bold mb-2">{problem.title}</h2>
                            <div className="text-2xl py-4 font-mono text-slate-800">
                                {problem.initialExpression}
                            </div>
                            <p className="text-slate-600">{problem.description}</p>
                        </div>

                        <div className="space-y-4">
                            <MathInput value={answer} onChange={setAnswer} placeholder="Ingresa el valor del límite..." />
                            <Button onClick={checkAnswer} className="w-full">Verificar Respuesta</Button>
                        </div>
                    </Card>

                    <Card title="Solución Paso a Paso">
                        <SolutionSteps steps={problem.steps} />
                    </Card>
                </div>

                <div className="space-y-6">
                    <SpecialLimitsTable />
                    <TrigTransformer />
                    <Card title="Pistas">
                        <HintSystem hints={problem.hints} />
                    </Card>
                </div>
            </div>
        </div>
    );
};
