import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../common/Card';


export const DerivativePlayground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [h, setH] = useState(2); // Distance between x and x+h

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Coordinate system
        const originX = 50;
        const originY = height - 50;
        const scaleX = 40;
        const scaleY = 40;

        // Draw axes
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, height); // Y axis
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY); // X axis
        ctx.stroke();

        // Function f(x) = 0.1x^2
        const f = (x: number) => 0.1 * x * x;

        // Draw function
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let px = 0; px < width; px++) {
            const x = (px - originX) / scaleX;
            const y = f(x);
            const py = originY - y * scaleY;
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Points
        const x1 = 3;
        const x2 = x1 + h;
        const y1 = f(x1);
        const y2 = f(x2);

        const px1 = originX + x1 * scaleX;
        const py1 = originY - y1 * scaleY;
        const px2 = originX + x2 * scaleX;
        const py2 = originY - y2 * scaleY;

        // Draw secant line
        ctx.strokeStyle = '#f97316'; // Orange
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Extend line
        const slope = (y2 - y1) / (x2 - x1);
        // y - y1 = m(x - x1) => y = m(x - x1) + y1
        const startX = 0;
        const startY = slope * (startX - x1) + y1;
        const endX = 10;
        const endY = slope * (endX - x1) + y1;

        ctx.moveTo(originX + startX * scaleX, originY - startY * scaleY);
        ctx.lineTo(originX + endX * scaleX, originY - endY * scaleY);
        ctx.stroke();

        // Draw points
        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.arc(px1, py1, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('P', px1 + 10, py1);

        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.arc(px2, py2, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('Q', px2 + 10, py2);

        // Draw h label
        ctx.strokeStyle = '#64748b';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillText('h', (px1 + px2) / 2, py1 + 15);

    }, [h]);

    return (
        <Card title="Definición de Derivada">
            <div className="flex flex-col items-center space-y-4">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={300}
                    className="bg-white rounded-lg border border-slate-200"
                />

                <div className="w-full max-w-md space-y-2">
                    <div className="flex justify-between text-sm text-slate-600">
                        <span>Secante (h grande)</span>
                        <span>Tangente (h → 0)</span>
                    </div>
                    <input
                        type="range"
                        min="0.1"
                        max="3"
                        step="0.1"
                        value={h}
                        onChange={(e) => setH(parseFloat(e.target.value))}
                        className="w-full"
                    />
                    <p className="text-center font-mono text-sm">
                        h = {h.toFixed(1)}
                    </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                    <p className="mb-2 text-sm text-slate-600">La derivada es el límite de la pendiente de la recta secante cuando h → 0.</p>
                    <div className="font-mono text-lg text-slate-800">
                        f'(x) = lim(h→0) (f(x+h) - f(x))/h
                    </div>
                </div>
            </div>
        </Card>
    );
};
