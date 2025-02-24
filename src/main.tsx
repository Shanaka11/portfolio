import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import ScrollToTop from './components/custom/ScrollToTop.tsx';
import { ThemeProvider } from './components/custom/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<ScrollToTop />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
