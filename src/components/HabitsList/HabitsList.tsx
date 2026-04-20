import { AddNewHabitForm } from '../AddNewHabitForm/AddNewHabitForm';
import { HabitItem } from '../HabitItem/HabitItem';
import { HabitsEmptyState } from '../HabitsEmptyState/HabitsEmptyState';
import { selectHabits, useHabitStore } from '../../stores/habitStore';
import css from './HabitsList.module.css';

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
