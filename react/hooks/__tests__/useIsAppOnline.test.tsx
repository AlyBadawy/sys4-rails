import '@testing-library/jest-dom/extend-expect';
import { useIsAppOnline } from '../useIsAppOnline';

describe('useIsAppOnline', () => {
  it('returns true when flipper is on', () => {
    window.FLIPPERS = { app_online: true };

    expect(useIsAppOnline()).toBe(true);
  });

  it('returns false when flipper is off', () => {
    window.FLIPPERS = { app_online: false };

    expect(useIsAppOnline()).toBe(false);
  });

  it('returns true when flipper is not defined', () => {
    expect(useIsAppOnline()).toBe(false);
  });
});
