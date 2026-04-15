import {
  selectRemoveHabit,
  selectToggleState,
  useHabitStore,
} from '../../stores/habitStore';
import type { Habit } from '../../types';
import css from './habitItem.module.css';
interface Props {
  item: Habit;
}
export const HabitItem = ({ item }: Props) => {
  const removeHabit = useHabitStore(selectRemoveHabit);
  const changeBoxState = useHabitStore(selectToggleState);
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
