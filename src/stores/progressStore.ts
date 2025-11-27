import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ProblemProgress {
    problemId: string;
    completed: boolean;
    score: number; // 0-100
    attempts: number;
}

interface ProgressState {
    progress: Record<string, ProblemProgress>;
    totalPoints: number;
    level: number;
    badges: string[];
    updateProgress: (problemId: string, score: number) => void;
    unlockBadge: (badgeId: string) => void;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set) => ({
            progress: {},
            totalPoints: 0,
            level: 1,
            badges: [],
            updateProgress: (problemId, score) => {
                set((state) => {
                    const current = state.progress[problemId] || { problemId, completed: false, score: 0, attempts: 0 };
                    const newProgress = {
                        ...current,
                        completed: score >= 70, // Threshold for completion
                        score: Math.max(current.score, score),
                        attempts: current.attempts + 1,
                    };

                    // Calculate points
                    const pointsEarned = score - current.score;
                    const newTotalPoints = state.totalPoints + (pointsEarned > 0 ? pointsEarned : 0);

                    return {
                        progress: { ...state.progress, [problemId]: newProgress },
                        totalPoints: newTotalPoints,
                        level: Math.floor(newTotalPoints / 100) + 1,
                    };
                });
            },
            unlockBadge: (badgeId) => {
                set((state) => {
                    if (state.badges.includes(badgeId)) return state;
                    return { badges: [...state.badges, badgeId] };
                });
            },
        }),
        {
            name: 'math-ii-progress-storage',
        }
    )
);
