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
      {habits.length === 0 && <HabitsEmptyState />}
      <ul>
        {habits.length > 0 &&
          habits.map(habit => (
            <li>
              <HabitItem key={habit.id} item={habit} />
            </li>
          ))}
      </ul>
      <AddNewHabitForm />
    </div>
  );
};
