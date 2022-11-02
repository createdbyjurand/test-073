import { TAppCheckboxIDs } from '@local/types';
import * as RadixUIReactCheckbox from '@radix-ui/react-checkbox';

interface ICheckboxProps {
  checked: RadixUIReactCheckbox.CheckedState;
  handleCheckboxChange: (id: TAppCheckboxIDs) => void;
  id: TAppCheckboxIDs;
  label: string;
}

export const Checkbox = (props: ICheckboxProps) => {
  return (
    <RadixUIReactCheckbox.Root
      id={props.id}
      checked={props.checked}
      onCheckedChange={(checkedState: RadixUIReactCheckbox.CheckedState) =>
        props.handleCheckboxChange(props.id)
      }
    >
      {props.label}
    </RadixUIReactCheckbox.Root>
  );
};
