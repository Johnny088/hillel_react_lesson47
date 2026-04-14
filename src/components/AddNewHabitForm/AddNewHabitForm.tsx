import { selectAddHabit, useHabitStore } from '../../stores/habitStore';

export const AddNewHabitForm = () => {
  const addHabit = useHabitStore(selectAddHabit);
  const submitHandler = (formData: FormData) => {
    const newHabit = formData.get('habit') as string;

    addHabit({
      habit: newHabit,
      id: Date.now(),
      isChecked: false,
    });
  };
  return (
    <form action={submitHandler}>
      <input name="habit" type="text" />
      <button className="submitBtn">add</button>
    </form>
  );
};
