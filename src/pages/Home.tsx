import React, { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

    return (
        <div className="max-w-md mx-auto mt-20 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Matemática II</h1>
            <p className="text-slate-600 mb-8">Interfaz Educativa Interactiva</p>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-xl font-semibold mb-6">Ingresa tu Identificación</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Cédula o ID de Estudiante"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        Comenzar <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};
