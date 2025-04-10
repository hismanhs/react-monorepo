import { CustomButton } from '@react-monorepo/shared';
import { withSaltDS } from '@react-monorepo/shared';

export function App() {
  return (
    <>
      {withSaltDS(
        <>
          <CustomButton />
          <h1>Reference Data Page</h1>
        </>
      )}
    </>
  );
}

export default App;
