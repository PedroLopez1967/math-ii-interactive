import React, { useEffect, useRef } from 'react';
import { Card } from '../../common/Card';

export const IVTVisualizer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Draw axes
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(50, height - 50);
        ctx.lineTo(width - 20, height - 50); // X axis
        ctx.moveTo(50, height - 50);
        ctx.lineTo(50, 20); // Y axis
        ctx.stroke();

        // Points a and b
        const xa = 100;
        const xb = 300;
        const ya = height - 100; // f(a) < 0 relative to mid
        const yb = height - 300; // f(b) > 0 relative to mid

        // Draw function curve (Bezier)
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(xa, ya);
        ctx.bezierCurveTo(xa + 50, ya - 100, xb - 50, yb + 100, xb, yb);
        ctx.stroke();

        // Draw points
        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.arc(xa, ya, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(xb, yb, 5, 0, Math.PI * 2);
        ctx.fill();

        // Labels
        ctx.fillStyle = '#475569';
        ctx.font = '14px sans-serif';
        ctx.fillText('a', xa, height - 30);
        ctx.fillText('b', xb, height - 30);
        ctx.fillText('f(a)', 10, ya);
        ctx.fillText('f(b)', 10, yb);

        // Target value K
        const yk = height - 200;
        ctx.strokeStyle = '#f97316';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(50, yk);
        ctx.lineTo(width - 20, yk);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#f97316';
        ctx.fillText('k', 20, yk);

        // Intersection c
        // Approximate intersection for visual
        const xc = 200;
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.arc(xc, yk, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('c', xc, height - 30);

        ctx.strokeStyle = '#f97316';
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(xc, yk);
        ctx.lineTo(xc, height - 50);
        ctx.stroke();

    }, []);

    return (
        <Card title="Teorema del Valor Intermedio (TVI)">
            <div className="flex flex-col items-center">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={350}
                    className="bg-white rounded-lg border border-slate-200"
                />
                <p className="mt-4 text-sm text-slate-600 text-center max-w-md">
                    Si $f$ es continua en $[a,b]$ y $k$ es un valor entre $f(a)$ y $f(b)$, entonces existe al menos un $c \in (a,b)$ tal que $f(c) = k$.
                </p>
            </div>
        </Card>
    );
};
