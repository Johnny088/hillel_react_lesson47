import { create } from 'zustand';
import type { Habit, HabitStore } from '../types';
import { persist } from 'zustand/middleware';
persist;

export const UseHabitStore = create<HabitStore>()(
  persist(
    set => {
      return {
        habits: [],
        addHabit: (newHabit: Habit) => {},
      };
    },

    {
      name: 'habits',
      partialize: state => {
        return {
          habit: state.habit,
          id: state.id,
          isChecked: state.isChecked,
        };
      },
    },
  ),
);

export const selectlang = (state: HabitStore) => state.habits;
