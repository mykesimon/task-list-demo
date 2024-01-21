import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { TaskProvider } from './context/tasks-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<TaskProvider>
				<App />
			</TaskProvider>
		</BrowserRouter>
	</React.StrictMode>
);
