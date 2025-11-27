import React, { useState } from 'react';
import { LimitDetectiveLab } from '../components/objectives/I2/LimitDetectiveLab';
import { PROBLEMS_I2 } from '../constants/problems';
import { Button } from '../components/common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressTracker } from '../components/math/ProgressTracker';

export const ObjectiveI2: React.FC = () => {
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const currentProblem = PROBLEMS_I2[currentProblemIndex];

    const nextProblem = () => {
        if (currentProblemIndex < PROBLEMS_I2.length - 1) {
            setCurrentProblemIndex(prev => prev + 1);
        }
    };

    const prevProblem = () => {
        if (currentProblemIndex > 0) {
            setCurrentProblemIndex(prev => prev - 1);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">Objetivo I.2</h1>
                    <p className="text-slate-600">Límites Especiales</p>
                </div>
                <div className="w-64">
                    <ProgressTracker />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-slate-800">Laboratorio de Detectives de Límites</h2>
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
                            Problema {currentProblemIndex + 1} de {PROBLEMS_I2.length}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={nextProblem}
                            disabled={currentProblemIndex === PROBLEMS_I2.length - 1}
                        >
                            Siguiente <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>

                <LimitDetectiveLab key={currentProblem.id} problem={currentProblem} />
            </div>
        </div>
    );
};
