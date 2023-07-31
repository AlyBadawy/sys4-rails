import { useFlipper } from './useFlipper';

export const useIsAppOnline = () => {
  const isOnline = useFlipper('app_online');

  return isOnline;
};
