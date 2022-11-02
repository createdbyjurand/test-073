import { Checkbox } from '@local/components';
import { ICheckbox } from '@local/interfaces';
import { TAppCheckboxIDs } from '@local/types';
import React from 'react';
import './App.css';

export default function App() {
  const [checkbox, setCheckbox] = React.useState<ICheckbox>({
    all: { checked: 'indeterminate' },
    cond1: { checked: false },
    cond2: { checked: false },
    cond3: { checked: true },
    cond4: { checked: false },
  });

  const handleCheckboxChange = (id: TAppCheckboxIDs) => {
    const change: ICheckbox = checkbox;
    if (id === 'all') {
      if (change.cond1.checked && change.cond2.checked && change.cond3.checked && change.cond4.checked) {
        change.all.checked = false;
        change.cond1.checked = false;
        change.cond2.checked = false;
        change.cond3.checked = false;
        change.cond4.checked = false;
      } else {
        change.all.checked = true;
        change.cond1.checked = true;
        change.cond2.checked = true;
        change.cond3.checked = true;
        change.cond4.checked = true;
      }
    } else {
      change[id].checked = !change[id].checked;
      if (change.cond1.checked && change.cond2.checked && change.cond3.checked && change.cond4.checked) {
        change.all.checked = true;
      } else if (
        !change.cond1.checked &&
        !change.cond2.checked &&
        !change.cond3.checked &&
        !change.cond4.checked
      ) {
        change.all.checked = false;
      } else {
        change.all.checked = 'indeterminate';
      }
    }
    setCheckbox({ ...checkbox, ...change });
  };

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>

      <h2>Checkbox Documentation:</h2>
      <a href='https://www.radix-ui.com/docs/primitives/components/checkbox' target='_blank'>
        https://www.radix-ui.com/docs/primitives/components/checkbox
      </a>

      <h2>W3C ARIA guidelines:</h2>
      <a href='https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/' target='_blank'>
        https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
      </a>

      {/* As per the ARIA guidelines and using the installed radix-ui third party library,
       render here a checkbox group */}

      {/* Here's an example of a pure html implementation with no logic. */}
      <fieldset className='checkbox-mixed'>
        <legend>Asset Classes</legend>
        <Checkbox
          checked={checkbox.all.checked}
          handleCheckboxChange={handleCheckboxChange}
          id='all'
          label='All asset classes'
        />
        <ul className='checkboxes'>
          <li>
            <Checkbox
              checked={checkbox.cond1.checked}
              handleCheckboxChange={handleCheckboxChange}
              id='cond1'
              label='Fixed Income'
            />
          </li>
          <li>
            <Checkbox
              checked={checkbox.cond2.checked}
              handleCheckboxChange={handleCheckboxChange}
              id='cond2'
              label='Liquidity'
            />
          </li>
          <li>
            <Checkbox
              checked={checkbox.cond3.checked}
              handleCheckboxChange={handleCheckboxChange}
              id='cond3'
              label='Bonds'
            />
          </li>
          <li>
            <Checkbox
              checked={checkbox.cond4.checked}
              handleCheckboxChange={handleCheckboxChange}
              id='cond4'
              label='Equities'
            />
          </li>
        </ul>
      </fieldset>
    </div>
  );
}

