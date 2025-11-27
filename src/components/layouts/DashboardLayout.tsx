import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/userStore';
import { LogOut, User } from 'lucide-react';

export const DashboardLayout: React.FC = () => {
    const { userId, territory, logout } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-background">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-primary">Matemática II</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <User size={16} />
                            <span>ID: {userId}</span>
                            <span className="px-2 py-0.5 bg-slate-100 rounded-full text-xs uppercase">{territory}</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                            title="Cerrar sesión"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};
