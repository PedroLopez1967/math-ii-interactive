import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

export const MainLayout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background font-sans text-text-main flex flex-col">
            <header className="bg-surface shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl hover:opacity-80 transition-opacity">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Calculator className="w-6 h-6" />
                        </div>
                        <span>Math II Interactive</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-text-muted hover:text-primary font-medium transition-colors">Inicio</Link>
                        <Link to="/about" className="text-text-muted hover:text-primary font-medium transition-colors">Acerca de</Link>
                        <Link to="/dashboard" className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
                            Comenzar
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-slate-100 bg-surface absolute w-full shadow-lg animate-in slide-in-from-top-2">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                to="/"
                                className="px-4 py-3 rounded-lg hover:bg-primary/5 text-text-muted hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/about"
                                className="px-4 py-3 rounded-lg hover:bg-primary/5 text-text-muted hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Acerca de
                            </Link>
                            <Link
                                to="/dashboard"
                                className="px-4 py-3 bg-primary text-white rounded-lg font-medium text-center hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Comenzar
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <footer className="bg-surface border-t border-slate-100 py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-text-muted text-sm">
                    <p>© 2024 Math II Interactive. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};
