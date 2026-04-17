import { AddNewHabitForm } from '../components/AddNewHabitForm/AddNewHabitForm';
import { HabitItem } from '../components/HabitItem/HabitItem';
import { HabitsEmptyState } from '../components/HabitsEmptyState/HabitsEmptyState';
import { selectHabits, useHabitStore } from '../stores/habitStore';
import css from './habitsList.module.css';

export const HabitsList = () => {
  const habits = useHabitStore(selectHabits);

  return (
    <div className={css.container}>
      <h1>Todays tasks</h1>
      {habits.length === 0 ? (
        <HabitsEmptyState />
      ) : (
        <ul>
          {habits.map(habit => (
            <li key={habit.id}>
              <HabitItem item={habit} />
            </li>
          ))}
        </ul>
      )}
      <AddNewHabitForm />
    </div>
  );
};
