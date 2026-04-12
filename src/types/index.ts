export type Habit = {
  habit: string;
  isChecked: boolean;
  id: number;
};
export interface HabitStore {
  // habit: string;
  // isChecked: boolean;
  // id: number;
  habits: Habit[];

  addHabit: (habit: Habit) => void;
}
