import * as RadixUIReactCheckbox from '@radix-ui/react-checkbox';

interface ICheckboxProps {
  checked: RadixUIReactCheckbox.CheckedState;
  handleCheckboxChange?: (id: string, value: RadixUIReactCheckbox.CheckedState) => void;
  id?: string;
  label: string;
}

export const Checkbox = (props: ICheckboxProps) => {
  const id = props.id ?? props.label;

  return (
    <RadixUIReactCheckbox.Root
      id={props.id}
      checked={props.checked}
      onCheckedChange={(checkedState: RadixUIReactCheckbox.CheckedState) =>
        props.handleCheckboxChange?.(id, checkedState)
      }
    >
      {props.label}
    </RadixUIReactCheckbox.Root>
  );
};
