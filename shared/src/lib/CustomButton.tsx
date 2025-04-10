import { Button } from '@salt-ds/core';

export function CustomButton() {
  const getButton = () => {
    return (
      <Button sentiment="accented" appearance="solid">
        Saltss
      </Button>
    );
  };
  return getButton();
}

export default CustomButton;
