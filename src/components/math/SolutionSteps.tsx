import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface Step {
    title: string;
    content: React.ReactNode;
}

interface SolutionStepsProps {
    steps: Step[];
}

export const SolutionSteps: React.FC<SolutionStepsProps> = ({ steps }) => {
    const [openStep, setOpenStep] = useState<number | null>(null);

    const toggleStep = (index: number) => {
        setOpenStep(openStep === index ? null : index);
    };

    return (
        <div className="space-y-2">
            {steps.map((step, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleStep(index)}
                        className="w-full px-4 py-3 bg-slate-50 flex justify-between items-center hover:bg-slate-100 transition-colors"
                    >
                        <span className="font-medium text-slate-700">Paso {index + 1}: {step.title}</span>
                        {openStep === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openStep === index && (
                        <div className="p-4 bg-white border-t border-slate-200">
                            <div className="font-mono text-slate-700">
                                {step.content}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
