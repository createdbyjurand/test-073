import * as RadixUIReactCheckbox from '@radix-ui/react-checkbox';
import { generateId } from './generateId';

interface ICheckboxProps {
  checked: RadixUIReactCheckbox.CheckedState;
  handleCheckboxChange: (id: string, value: RadixUIReactCheckbox.CheckedState) => void;
  id: string;
  label: string;
}

export const Checkbox = (props: Partial<ICheckboxProps>) => {
  const checked = props.checked ?? false;
  const id = props.id ?? generateId();
  const label = props.label ?? '';

  return (
    <RadixUIReactCheckbox.Root
      id={id}
      checked={checked}
      onCheckedChange={(checkedState: RadixUIReactCheckbox.CheckedState) =>
        props.handleCheckboxChange?.(id, checkedState)
      }
    >
      {label}
    </RadixUIReactCheckbox.Root>
  );
};
