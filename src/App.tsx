import { CheckboxGroup } from '@local/components';
import './App.css';

export default function App() {
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

      <CheckboxGroup legend='Asset Classes' label='All asset classes'>
        <CheckboxGroup.Checkbox label='Fixed Income' checked={false} />
        <CheckboxGroup.Checkbox label='Liquidity' checked={false} />
        <CheckboxGroup.Checkbox label='Bonds' checked={true} />
        <CheckboxGroup.Checkbox label='Equities' checked={false} />
      </CheckboxGroup>
    </div>
  );
}

