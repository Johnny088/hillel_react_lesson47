import { create } from 'zustand';
import type { Habit } from '../types';
import { persist } from 'zustand/middleware';

export interface HabitStore {
  habits: Habit[];

  addHabit: (habit: string) => void;

  toggleHabit: (id: number) => void;
  removeHabit: (id: number) => void;
}

export const useHabitStore = create<HabitStore>()(
  persist(
    set => {
      return {
        habits: [],
        addHabit: (habitTitle: string) =>
          set(state => {
            const newHabit: Habit = {
              title: habitTitle,
              id: Date.now(),
              isChecked: false,
            };

            return { habits: [...state.habits, newHabit] };
          }),

        toggleHabit: (id: number) =>
          set(state => ({
            habits: state.habits.map(habit =>
              habit.id === id
                ? { ...habit, isChecked: !habit.isChecked }
                : habit,
            ),
          })),
        removeHabit: (id: number) =>
          set(state => ({
            habits: state.habits.filter(habit => habit.id !== id),
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
export const selectToggleHabit = (state: HabitStore) => state.toggleHabit;
export const selectRemoveHabit = (state: HabitStore) => state.removeHabit;
