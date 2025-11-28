import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { ProgressTracker } from '../components/math/ProgressTracker';
import { Calculator, Zap, Activity, TrendingUp, ArrowRight } from 'lucide-react';

export const Dashboard: React.FC = () => {
    const objectives = [
        {
            id: 'I1',
            title: 'Objetivo I.1',
            description: 'Límites con Cambio de Variable',
            icon: <Calculator className="text-primary" size={24} />,
            path: '/objective/i1',
            status: 'active',
            color: 'bg-primary/10'
        },
        {
            id: 'I2',
            title: 'Objetivo I.2',
            description: 'Límites Especiales',
            icon: <Zap className="text-accent" size={24} />,
            path: '/objective/i2',
            status: 'active',
            color: 'bg-accent/10'
        },
        {
            id: 'I3',
            title: 'Objetivo I.3',
            description: 'Continuidad de Funciones',
            icon: <Activity className="text-secondary" size={24} />,
            path: '/objective/i3',
            status: 'active',
            color: 'bg-secondary/10'
        },
        {
            id: 'II1',
            title: 'Objetivo II.1',
            description: 'Derivadas',
            icon: <TrendingUp className="text-primary-light" size={24} />,
            path: '/objective/ii1',
            status: 'active',
            color: 'bg-primary-light/10'
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-text-main mb-2">Panel Principal</h2>
                    <p className="text-text-muted">Bienvenido a tu viaje por Matemática II</p>
                </div>
                <div className="w-full md:w-72">
                    <ProgressTracker />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((obj) => (
                    <Link
                        key={obj.id}
                        to={obj.status === 'active' ? obj.path! : '#'}
                        className={`group block transition-all hover:-translate-y-1 ${obj.status === 'locked' ? 'cursor-not-allowed opacity-60' : ''}`}
                    >
                        <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-all p-6">
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-xl ${obj.color} transition-colors group-hover:scale-110 duration-300`}>
                                    {obj.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold mb-1 text-text-main group-hover:text-primary transition-colors">
                                            {obj.title}
                                        </h3>
                                        {obj.status === 'active' && (
                                            <ArrowRight size={20} className="text-slate-300 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                                        )}
                                    </div>
                                    <p className="text-text-muted text-sm mb-3">{obj.description}</p>

                                    {obj.status === 'active' ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                                            Disponible
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                                            Bloqueado
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};
