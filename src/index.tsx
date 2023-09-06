import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

const rootContainer = document.getElementById('root');

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootContainer
);
