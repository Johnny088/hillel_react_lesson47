import {
  selectRemoveHabit,
  selectToggleHabit,
  useHabitStore,
} from '../../stores/habitStore';
import type { Habit } from '../../types';
import css from './HabitItem.module.css';
interface Props {
  item: Habit;
}
export const HabitItem = ({ item }: Props) => {
  const removeHabit = useHabitStore(selectRemoveHabit);
  const changeBoxState = useHabitStore(selectToggleHabit);
  const onChangeStatus = (): void => {
    changeBoxState(item.id);
  };

  const removeHabitHandler = () => {
    removeHabit(item.id);
  };
  return (
    <>
      <label>
        {item.title}
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={onChangeStatus}
        />
      </label>
      <button className={css.deleteBtn} onClick={removeHabitHandler}>
        delete
      </button>
    </>
  );
};
