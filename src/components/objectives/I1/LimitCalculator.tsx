import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { MathInput } from '../../math/MathInput';
import { SolutionSteps } from '../../math/SolutionSteps';
import { HintSystem } from '../../math/HintSystem';
import type { Problem } from '../../../constants/problems';
import { useProgressStore } from '../../../stores/progressStore';
import toast, { Toaster } from 'react-hot-toast';


interface LimitCalculatorProps {
    problem: Problem;
}

export const LimitCalculator: React.FC<LimitCalculatorProps> = ({ problem }) => {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="Pistas">
                    <HintSystem hints={problem.hints} />
                </Card>
                <Card title="Solución Paso a Paso">
                    <SolutionSteps steps={problem.steps} />
                </Card>
            </div>
        </div>
    );
};
