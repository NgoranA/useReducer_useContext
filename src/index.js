import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ContextState from './context_state_config';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextState />
  </StrictMode>
);
