import { selectAddHabit, useHabitStore } from '../../stores/habitStore';

export const AddNewHabitForm = () => {
  const addHabit = useHabitStore(selectAddHabit);
  const submitHandler = (formData: FormData) => {
    const title = formData.get('title') as string;
    const habitTitle = title.trim();
    if (habitTitle === '') {
      return;
    }
    addHabit(habitTitle);
  };
  return (
    <form action={submitHandler}>
      <input name="title" type="text" />
      <button className="submitBtn">add</button>
    </form>
  );
};
