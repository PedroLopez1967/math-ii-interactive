import React, { useState } from 'react';
import { VariableTransformer } from '../components/objectives/I1/VariableTransformer';
import { LimitCalculator } from '../components/objectives/I1/LimitCalculator';
import { PROBLEMS_I1 } from '../constants/problems';
import { Button } from '../components/common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressTracker } from '../components/math/ProgressTracker';

export const ObjectiveI1: React.FC = () => {
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const currentProblem = PROBLEMS_I1[currentProblemIndex];

    const nextProblem = () => {
        if (currentProblemIndex < PROBLEMS_I1.length - 1) {
            setCurrentProblemIndex(prev => prev + 1);
        }
    };

    const prevProblem = () => {
        if (currentProblemIndex > 0) {
            setCurrentProblemIndex(prev => prev - 1);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">Objetivo I.1</h1>
                    <p className="text-slate-600">Límites con Cambio de Variable</p>
                </div>
                <div className="w-64">
                    <ProgressTracker />
                </div>
            </div>

            <VariableTransformer />

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-slate-800">Práctica Interactiva</h2>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={prevProblem}
                            disabled={currentProblemIndex === 0}
                        >
                            <ChevronLeft size={16} /> Anterior
                        </Button>
                        <span className="flex items-center text-sm font-medium text-slate-500">
                            Problema {currentProblemIndex + 1} de {PROBLEMS_I1.length}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={nextProblem}
                            disabled={currentProblemIndex === PROBLEMS_I1.length - 1}
                        >
                            Siguiente <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>

                <LimitCalculator key={currentProblem.id} problem={currentProblem} />
            </div>
        </div>
    );
};
