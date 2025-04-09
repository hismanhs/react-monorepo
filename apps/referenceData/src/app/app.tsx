import '../styles.css';
import { CustomButton } from '@react-monorepo/shared';
import { withSaltDS } from '@react-monorepo/shared';

export function App() {
  return withSaltDS(<CustomButton />);
}

export default App;
