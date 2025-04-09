import { Button } from '@salt-ds/core';
import withSaltDS from './SaltProvider';

export function CustomButton() {
  const getButton = () => {
    return (
      <Button className="bg-salt text-white font-bold py-2 px-4 rounded">
        Salt
      </Button>
    );
  };
  return withSaltDS(getButton());
}

export default CustomButton;
