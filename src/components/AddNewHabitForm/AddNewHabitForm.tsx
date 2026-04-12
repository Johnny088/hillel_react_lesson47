import { useId } from 'react';

export const AddNewHabitForm = () => {
  const id = useId();
  const submitHandler = (formData: FormData) => {
    const newHabit = formData.get('habit') as string;
  };
  return (
    <form action={submitHandler}>
      <input id={`checkBox-${id}`} name="habit" type="text" />
      <button className="submitBtn">add</button>
    </form>
  );
};
