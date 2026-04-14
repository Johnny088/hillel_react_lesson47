import type { Habit } from '../../types';
interface Props {
  item: Habit;
  onChangeStatus: (id: number) => void;
}
export const HabitItem = ({ item, onChangeStatus }: Props) => {
  const stateHandler = () => {
    onChangeStatus(item.id);
  };
  return (
    <li>
      <label>
        {item.habit}
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={stateHandler}
        />
      </label>
    </li>
  );
};
