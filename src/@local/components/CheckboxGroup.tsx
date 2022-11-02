import './CheckboxGroup.css';
import { Checkbox } from './Checkbox';
import * as RadixUIReactCheckbox from '@radix-ui/react-checkbox';
import React from 'react';

interface ICheckboxGroupProps {
  children: React.ReactNode;
  label: string;
  legend: string;
}

export interface ICheckboxGroupState {
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

  const handleCheckboxChange = (id: string, value: RadixUIReactCheckbox.CheckedState) => {
    if (id === 'all') {
      setCheckboxGroupState(Object.fromEntries(Object.keys(checkboxGroupState).map(id => [id, value])));
      return;
    }

    console.log(id, value);
    setCheckboxGroupState({ ...checkboxGroupState, [id]: value });
  };

  let totalValue;
  if (Object.values(checkboxGroupState).every(value => value === true)) {
    totalValue = true;
  } else if (Object.values(checkboxGroupState).every(value => value === false)) {
    totalValue = false;
  } else {
    totalValue = 'indeterminate';
  }

  return (
    <fieldset className='checkbox-mixed'>
      <legend>{props.legend}</legend>
      <Checkbox
        checked={totalValue as any}
        handleCheckboxChange={handleCheckboxChange}
        id='all'
        label={props.label}
      />
      <ul>
        {React.Children.toArray(props.children)
          .filter(child => React.isValidElement(child) && child.type === Checkbox)
          .map((child, index) => (
            <li>
              {React.cloneElement(child as any, {
                id: index,
                checked: checkboxGroupState[index],
                handleCheckboxChange: handleCheckboxChange,
              })}
            </li>
          ))}
      </ul>
    </fieldset>
  );
};

CheckboxGroup.Checkbox = Checkbox;
