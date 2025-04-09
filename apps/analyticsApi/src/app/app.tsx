import '../styles.css';
import { CustomButton } from '@react-monorepo/shared';
import { withSaltDS } from '@react-monorepo/shared';
import '@salt-ds/theme/index.css';

export function App() {
  return withSaltDS(<CustomButton />);
}

export default App;
