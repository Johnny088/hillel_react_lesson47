import { AddNewHabitForm } from '../../components/AddNewHabitForm/AddNewHabitForm';
import { HabitItem } from '../../components/HabitItem/HabitItem';
import css from './habitsPage.module.css';
import { selectHabits, useHabitStore } from '../../stores/habitStore';
import { HabitsEmptyState } from '../../components/HabitsEmptyState/HabitsEmptyState';

export const HabitsPage = () => {
  const habits = useHabitStore(selectHabits);

  return (
    <div className={css.container}>
      <h1>Todays tasks</h1>
      <ul>
        {habits.length === 0 && <HabitsEmptyState />}
        {habits.length > 0 &&
          habits.map(habit => <HabitItem key={habit.id} item={habit} />)}
      </ul>
      <AddNewHabitForm />
    </div>
  );
};
