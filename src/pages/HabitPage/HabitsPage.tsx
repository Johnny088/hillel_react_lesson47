import { UseHabitStore } from '../../stores/habitStore';

export const HabitsPage = () => {
  const habits = UseHabitStore;
  return (
    <>
      <h1>Todays tasks</h1>
    </>
  );
};
