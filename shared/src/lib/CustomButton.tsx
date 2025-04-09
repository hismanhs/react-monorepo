import { Button } from '@salt-ds/core';
import withSaltDS from './SaltProvider';

export function CustomButton() {
  const getButton = () => {
    return <Button>Saltss</Button>;
  };
  return withSaltDS(getButton());
}

export default CustomButton;
