import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root : ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(<App />);
