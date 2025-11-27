import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    userId: string | null;
    territory: 'alpha' | 'beta' | null; // Based on last digit
    setUserId: (id: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            userId: null,
            territory: null,
            setUserId: (id) => {
                const lastDigit = parseInt(id.slice(-1));
                // Even = alpha, Odd = beta
                const territory = isNaN(lastDigit) ? 'alpha' : (lastDigit % 2 === 0 ? 'alpha' : 'beta');
                set({ userId: id, territory });
            },
            logout: () => set({ userId: null, territory: null }),
        }),
        {
            name: 'math-ii-user-storage',
        }
    )
);
