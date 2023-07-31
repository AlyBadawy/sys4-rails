import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import React from 'react';
import { s4render } from '../../jest/testUtils';
import { SignIn } from '../auth/SignIn';

describe('Sing In page with a confirmed Email Error', () => {
  it('Shows a error message on email confirmed error', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-global-assign
    window = Object.create(window);
    const location = {
      ...window.location,
      search: '?confirmed=confirmationError',
    };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: location,
    });
    s4render(<SignIn />);
    expect(await screen.findByText('confirmationError')).toBeInTheDocument();
  });
});
