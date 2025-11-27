import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ChevronLeft, ChevronRight, BookOpen, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROBLEMS_II1 } from '../constants/problems';
import { LimitCalculator } from '../components/objectives/I1/LimitCalculator';
import { DerivativePlayground } from '../components/objectives/II1/DerivativePlayground';
import { RuleExplorer } from '../components/objectives/II1/RuleExplorer';

export const ObjectiveII1: React.FC = () => {
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [showTheory, setShowTheory] = useState(false);

    const currentProblem = PROBLEMS_II1[currentProblemIndex];

    const nextProblem = () => {
        if (currentProblemIndex < PROBLEMS_II1.length - 1) {
            setCurrentProblemIndex(prev => prev + 1);
        }
    };

    const prevProblem = () => {
        if (currentProblemIndex > 0) {
            setCurrentProblemIndex(prev => prev - 1);
        }
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                        <Link to="/dashboard" className="hover:text-slate-700 transition-colors">Dashboard</Link>
                        <span>/</span>
                        <span>Objetivo II.1</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">Derivadas</h1>
                    <p className="text-slate-600">Comprende la definición de derivada y sus reglas básicas.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => setShowTheory(!showTheory)}
                        className="flex items-center gap-2"
                    >
                        <BookOpen size={18} />
                        {showTheory ? 'Ocultar Teoría' : 'Ver Teoría'}
                    </Button>
                </div>
            </div>

            {/* Theory Section */}
            {showTheory && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4">
                    <DerivativePlayground />
                    <RuleExplorer />
                </div>
            )}

            {/* Practice Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Activity className="text-purple-500" />
                        Práctica
                    </h2>
                    <span className="text-sm text-slate-500">
                        Problema {currentProblemIndex + 1} de {PROBLEMS_II1.length}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Problem Navigation */}
                    <div className="lg:col-span-1 space-y-4">
                        <Card>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-slate-700">Lista de Problemas</h3>
                                <div className="space-y-2">
                                    {PROBLEMS_II1.map((problem, index) => (
                                        <button
                                            key={problem.id}
                                            onClick={() => setCurrentProblemIndex(index)}
                                            className={`w-full text-left p-3 rounded-lg transition-colors ${index === currentProblemIndex
                                                    ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                                    : 'hover:bg-slate-50 text-slate-600'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">#{index + 1}</span>
                                                {problem.difficulty === 'easy' && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Fácil</span>}
                                                {problem.difficulty === 'medium' && <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Medio</span>}
                                                {problem.difficulty === 'hard' && <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Difícil</span>}
                                            </div>
                                            <p className="text-sm mt-1 truncate">{problem.title}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Active Problem */}
                    <div className="lg:col-span-2">
                        <LimitCalculator
                            key={currentProblem.id}
                            problem={currentProblem}
                        />

                        <div className="flex justify-between mt-4">
                            <Button
                                variant="outline"
                                onClick={prevProblem}
                                disabled={currentProblemIndex === 0}
                                className="flex items-center gap-2"
                            >
                                <ChevronLeft size={16} />
                                Anterior
                            </Button>
                            <Button
                                variant="primary"
                                onClick={nextProblem}
                                disabled={currentProblemIndex === PROBLEMS_II1.length - 1}
                                className="flex items-center gap-2"
                            >
                                Siguiente
                                <ChevronRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
