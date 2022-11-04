import * as RadixUIReactCheckbox from '@radix-ui/react-checkbox';
import React from 'react';
import { Checkbox } from './Checkbox';
import './CheckboxGroup.css';

interface ICheckboxGroupProps {
  children: React.ReactNode;
  label?: string;
  legend: string;
}

interface ICheckboxGroupState {
  [key: number]: RadixUIReactCheckbox.CheckedState;
}

export const CheckboxGroup = (props: ICheckboxGroupProps) => {
  const [checkboxGroupState, setCheckboxGroupState] = React.useState<ICheckboxGroupState>(() => {
    const initialState: ICheckboxGroupState = {};
    React.Children.forEach(props.children, (child, index) => {
      initialState[index] =
        React.isValidElement(child) && child.type === Checkbox ? child.props.checked : false;
    });
    return initialState;
  });

  const checkAll = (): RadixUIReactCheckbox.CheckedState => {
    if (Object.values(checkboxGroupState).every(value => value === true)) return true;
    if (Object.values(checkboxGroupState).every(value => value === false)) return false;
    return 'indeterminate';
  };

  const allCheckboxes: RadixUIReactCheckbox.CheckedState = checkAll();

  const handleCheckboxChange = (id: string, value: RadixUIReactCheckbox.CheckedState) => {
    if (id === 'all') {
      if (allCheckboxes === true) {
        setCheckboxGroupState(Object.fromEntries(Object.keys(checkboxGroupState).map(id => [id, false])));
      } else {
        setCheckboxGroupState(Object.fromEntries(Object.keys(checkboxGroupState).map(id => [id, true])));
      }
    } else {
      setCheckboxGroupState({ ...checkboxGroupState, [id]: value });
    }
  };

  return (
    <fieldset className='checkbox-mixed'>
      <legend>{props.legend}</legend>
      {props.label && (
        <Checkbox
          checked={allCheckboxes}
          handleCheckboxChange={handleCheckboxChange}
          id='all'
          label={props.label}
        />
      )}
      <ul>
        {React.Children.toArray(props.children)
          .filter(child => React.isValidElement(child) && child.type === Checkbox)
          .map((child: any, index) => (
            <li>
              {React.cloneElement(child, {
                checked: checkboxGroupState[index],
                handleCheckboxChange: handleCheckboxChange,
                id: index,
              })}
            </li>
          ))}
      </ul>
    </fieldset>
  );
};

CheckboxGroup.Checkbox = Checkbox;
