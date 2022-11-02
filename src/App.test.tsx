import { Checkbox } from '@local/components';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testing <App />', () => {
  it('renders Checkbox Documentation link', () => {
    render(<App />);
    const linkElement = screen.getByText(
      /https:\/\/www.radix-ui.com\/docs\/primitives\/components\/checkbox/i,
    );
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Testing <Checkbox id="all" label="All asset classes" />', () => {
  it('renders and can be found by text', () => {
    render(<App />);
    const checkboxText = screen.getByText('All asset classes');
    expect(checkboxText).toBeInTheDocument();
  });

  it('renders and can be found by id', () => {
    render(<App />);
    const checkboxID = screen.getByTestId('all');
    expect(checkboxID).toBeInTheDocument();
  });

  it('changes state after mouse click', () => {
    render(<App />);
    const checkboxID = screen.getByTestId('all');
    // expect(checkboxID).toEqual(false);
    fireEvent.click(checkboxID);
  });

  it('changes state by mouse click', () => {
    render(<App />);
    // const checkboxID = screen.getByTestId('all');
    // expect(checkboxID).toEqual('indeterminate');
    // expect(div.style['display']).toEqual('none');
    // fireEvent.click(checkbox);
    // expect(checkbox.checked).toEqual(true);
    // expect(div.style['display']).toEqual('block');
    // fireEvent.click(checkbox);
    // expect(checkbox.checked).toEqual(false);
    // expect(div.style['display']).toEqual('none');
    // fireEvent.click(checkbox);
    // expect(checkbox.all.checked).toEqual('indeterminate');
    // expect(div.style['display']).toEqual('none');
  });

  it('changes state after keyboard space press', () => {
    render(<App />);
  });

  // Outline the test cases you feel appropriate to be confident your code is robust.
  // We don't require a test to be implemented, the case definition is enough.
});

describe('Testing <Checkbox id="all" checked="indeterminate" handleCheckboxChange={jest.fn()} label="All asset classes" />', () => {
  it('renders label', () => {
    render(
      <Checkbox
        id='all'
        checked='indeterminate'
        handleCheckboxChange={jest.fn()}
        label='All asset classes'
      />,
    );
  });

  it('renders id', () => {
    render(
      <Checkbox
        id='all'
        checked='indeterminate'
        handleCheckboxChange={jest.fn()}
        label='All asset classes'
      />,
    );
  });

  it('renders true icon', () => {
    render(<Checkbox id='all' checked={true} handleCheckboxChange={jest.fn()} label='All asset classes' />);
  });

  it('renders indeterminate icon', () => {
    render(
      <Checkbox
        id='all'
        checked='indeterminate'
        handleCheckboxChange={jest.fn()}
        label='All asset classes'
      />,
    );
  });

  it('renders false icon', () => {
    render(<Checkbox id='all' checked={false} handleCheckboxChange={jest.fn()} label='All asset classes' />);
  });

  it('executes handleCheckboxChange function', () => {
    render(<Checkbox id='all' checked={false} handleCheckboxChange={jest.fn()} label='All asset classes' />);
  });
});

