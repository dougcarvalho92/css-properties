import React from 'react';

import { CSSProvider } from './context/CSSContext';
import Home from './pages/Home';


const App: React.FC = () => {
  return <CSSProvider><Home /></CSSProvider>
}

export default App;