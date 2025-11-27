import React, { useEffect, useRef } from 'react';

interface InteractiveGraphProps {
    fn: (x: number) => number;
    domain?: [number, number];
    range?: [number, number];
    width?: number;
    height?: number;
}

export const InteractiveGraph: React.FC<InteractiveGraphProps> = ({
    fn,
    domain = [-10, 10],
    range = [-10, 10],
    width = 600,
    height = 400,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        const [xMin, xMax] = domain;
        const [yMin, yMax] = range;
        const xScale = width / (xMax - xMin);
        const yScale = height / (yMax - yMin);

        const toCanvasX = (x: number) => (x - xMin) * xScale;
        const toCanvasY = (y: number) => height - (y - yMin) * yScale;

        // Grid lines
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = Math.ceil(xMin); x <= xMax; x++) {
            const cx = toCanvasX(x);
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, height);
        }
        for (let y = Math.ceil(yMin); y <= yMax; y++) {
            const cy = toCanvasY(y);
            ctx.moveTo(0, cy);
            ctx.lineTo(width, cy);
        }
        ctx.stroke();

        // Axes
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // X axis
        if (yMin <= 0 && yMax >= 0) {
            const cy = toCanvasY(0);
            ctx.moveTo(0, cy);
            ctx.lineTo(width, cy);
        }
        // Y axis
        if (xMin <= 0 && xMax >= 0) {
            const cx = toCanvasX(0);
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, height);
        }
        ctx.stroke();

        // Plot function
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.beginPath();
        let first = true;
        for (let px = 0; px <= width; px++) {
            const x = xMin + (px / width) * (xMax - xMin);
            try {
                const y = fn(x);
                if (isNaN(y) || !isFinite(y)) {
                    first = true;
                    continue;
                }
                const py = toCanvasY(y);
                if (first) {
                    ctx.moveTo(px, py);
                    first = false;
                } else {
                    ctx.lineTo(px, py);
                }
            } catch (e) {
                first = true;
            }
        }
        ctx.stroke();

    }, [fn, domain, range, width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-200 rounded-lg bg-white shadow-sm w-full h-auto"
            style={{ maxWidth: '100%' }}
        />
    );
};
