import React, { useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { useUserStore } from '../../stores/userStore';
import { LogOut, User, Menu, X, LayoutDashboard, BookOpen, ChevronRight } from 'lucide-react';

export const DashboardLayout: React.FC = () => {
    const { userId, territory, logout } = useUserStore();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/objective/i1', label: 'Objetivo I.1', icon: BookOpen },
        { path: '/objective/i2', label: 'Objetivo I.2', icon: BookOpen },
        { path: '/objective/i3', label: 'Objetivo I.3', icon: BookOpen },
        { path: '/objective/ii1', label: 'Objetivo II.1', icon: BookOpen },
    ];

    return (
        <div className="min-h-screen bg-background flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface border-r border-slate-100 transform transition-transform duration-200 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
                    <span className="text-xl font-bold text-primary">Matemática II</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-text-muted">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`
                                    flex items-center justify-between px-4 py-3 rounded-lg transition-colors
                                    ${isActive
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-text-muted hover:bg-slate-50 hover:text-text-main'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </div>
                                {isActive && <ChevronRight size={16} />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50">
                        <div className="p-2 bg-white rounded-full shadow-sm">
                            <User size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-main truncate">ID: {userId}</p>
                            <p className="text-xs text-text-muted uppercase">{territory}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-surface border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 text-text-muted hover:bg-slate-50 rounded-lg"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex-1" /> {/* Spacer */}

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-error hover:bg-error/5 rounded-lg transition-colors"
                    >
                        <LogOut size={18} />
                        <span className="hidden sm:inline">Cerrar Sesión</span>
                    </button>
                </header>

                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
