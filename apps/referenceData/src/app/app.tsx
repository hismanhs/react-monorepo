import { CustomButton } from '@react-monorepo/shared';
import { withSaltDS } from '@react-monorepo/shared';
import { useSelector } from 'react-redux';

export function App() {
  const state = useSelector((state: any) => state);
  return (
    <>
      {withSaltDS(
        <>
          <CustomButton />
          <h1>Reference Data Page</h1>
          {JSON.stringify(state.posts)}
        </>
      )}
    </>
  );
}

export default App;
