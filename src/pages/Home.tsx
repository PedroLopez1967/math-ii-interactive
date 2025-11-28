import React, { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Target, Calculator } from 'lucide-react';

export const Home: React.FC = () => {
    const [input, setInput] = useState('');
    const setUserId = useUserStore((state) => state.setUserId);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim().length > 0) {
            setUserId(input.trim());
            navigate('/dashboard');
        }
    };

    const features = [
        { icon: Brain, text: "Aprendizaje adaptativo" },
        { icon: Target, text: "Objetivos claros" },
        { icon: Sparkles, text: "Feedback instantáneo" }
    ];

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">

                {/* Hero Section */}
                <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-left-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                        <Calculator size={16} />
                        <span>Matemática II Interactiva</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-text-main leading-tight">
                        Domina el cálculo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            a tu propio ritmo
                        </span>
                    </h1>

                    <p className="text-lg text-text-muted max-w-xl mx-auto lg:mx-0">
                        Una plataforma diseñada para ayudarte a comprender conceptos complejos de cálculo a través de ejercicios interactivos y visualizaciones dinámicas.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-text-muted bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                <feature.icon size={18} className="text-secondary" />
                                <span className="text-sm font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Login Card */}
                <div className="w-full max-w-md mx-auto lg:ml-auto animate-in slide-in-from-right-4 duration-700 delay-200">
                    <div className="bg-surface p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

                        <h2 className="text-2xl font-bold text-text-main mb-2">Bienvenido</h2>
                        <p className="text-text-muted mb-8">Ingresa tu identificación para continuar tu progreso.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="userId" className="text-sm font-medium text-text-main">
                                    Identificación de Estudiante
                                </label>
                                <input
                                    id="userId"
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ej: 12345678"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
                            >
                                Comenzar Aventura <ArrowRight size={20} />
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                            <p className="text-xs text-text-muted">
                                Al ingresar, aceptas nuestros términos de uso y política de privacidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
