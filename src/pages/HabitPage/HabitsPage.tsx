import { AddNewHabitForm } from '../../components/AddNewHabitForm/AddNewHabitForm';
import { HabitItem } from '../../components/HabitItem/HabitItem';
import css from './habitsPage.module.css';
import { selectHabits, useHabitStore } from '../../stores/habitStore';

export const HabitsPage = () => {
  const habits = useHabitStore(selectHabits);

  return (
    <div className={css.container}>
      <h1>Todays tasks</h1>
      <ul>
        {habits.length === 0 && <p>There's not any task for today yet</p>}
        {habits.length > 0 &&
          habits.map(habit => <HabitItem key={habit.id} item={habit} />)}
      </ul>
      <AddNewHabitForm />
    </div>
  );
};
