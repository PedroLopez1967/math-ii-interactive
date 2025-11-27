import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { ProgressTracker } from '../components/math/ProgressTracker';
import { Calculator, Zap, Activity, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
    const objectives = [
        {
            id: 'I1',
            title: 'Objetivo I.1',
            description: 'Límites con Cambio de Variable',
            icon: <Calculator className="text-blue-500" size={32} />,
            path: '/objective/i1',
            status: 'active'
        },
        {
            id: 'I2',
            title: 'Objetivo I.2',
            description: 'Límites Especiales',
            icon: <Zap className="text-yellow-500" size={32} />,
            path: '/objective/i2',
            status: 'active'
        },
        {
            id: 'I3',
            title: 'Objetivo I.3',
            description: 'Continuidad de Funciones',
            icon: <Activity className="text-green-500" size={32} />,
            path: '/objective/i3',
            status: 'active'
        },
        {
            id: 'II1',
            title: 'Objetivo II.1',
            description: 'Derivadas',
            icon: <TrendingUp className="text-purple-500" size={32} />,
            path: '/objective/ii1',
            status: 'active'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Panel Principal</h2>
                    <p className="text-slate-600">Bienvenido a tu viaje por Matemática II</p>
                </div>
                <div className="w-64">
                    <ProgressTracker />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((obj) => (
                    <Link
                        key={obj.id}
                        to={obj.status === 'active' ? obj.path! : '#'}
                        className={`block transition-transform hover:-translate-y-1 ${obj.status === 'locked' ? 'cursor-not-allowed opacity-60' : ''}`}
                    >
                        <Card className="h-full hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-50 rounded-lg">
                                    {obj.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1 text-slate-800">{obj.title}</h3>
                                    <p className="text-slate-600 text-sm mb-3">{obj.description}</p>
                                    {obj.status === 'active' ? (
                                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                            Disponible
                                        </span>
                                    ) : (
                                        <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-full">
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
