import { create } from 'zustand';
import type { Habit, HabitStore } from '../types';
import { persist } from 'zustand/middleware';

export const useHabitStore = create<HabitStore>()(
  persist(
    set => {
      return {
        habits: [],
        addHabit: (newHabit: Habit) =>
          set(state => ({ habits: [...state.habits, newHabit] })),
        changeBoxState: (id: number) =>
          set(state => ({
            habits: state.habits.map(habit =>
              habit.id === id
                ? { ...habit, isChecked: !habit.isChecked }
                : habit,
            ),
          })),
      };
    },

    {
      name: 'habits',
      partialize: state => {
        return {
          habits: state.habits,
        };
      },
    },
  ),
);

export const selectHabits = (state: HabitStore) => state.habits;
export const selectAddHabit = (state: HabitStore) => state.addHabit;
export const selectToggleState = (state: HabitStore) => state.changeBoxState;
