import { selectAddHabit, useHabitStore } from '../../stores/habitStore';

export const AddNewHabitForm = () => {
  const addHabit = useHabitStore(selectAddHabit);
  const submitHandler = (formData: FormData) => {
    const title = formData.get('habit') as string;
    if (title.trim() === '') {
      return;
    }
    addHabit(title.trim());
  };
  return (
    <form action={submitHandler}>
      <input name="habit" type="text" />
      <button className="submitBtn">add</button>
    </form>
  );
};
