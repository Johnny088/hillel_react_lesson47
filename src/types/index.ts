export type Habit = {
  habit: string;
  isChecked: boolean;
  id: number;
};
export interface HabitStore {
  habits: Habit[];

  addHabit: (habit: Habit) => void;

  changeBoxState: (id: number) => void;
  removeHabit: (id: number) => void;
}
