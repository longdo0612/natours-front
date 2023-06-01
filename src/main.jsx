import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
