import { Routes, Route } from 'react-router-dom';
import { AddTask, TaskList } from './routes';
import { pathsConstant } from './lib/data';
import { Layout } from './components';

function App() {
	return (
		<Routes>
			<Route
				path={`${pathsConstant.HOME.path}`}
				element={<Layout />}
			>
				<Route
					path={`${pathsConstant.ADD_TASK.path}`}
					element={<AddTask />}
				/>
				<Route
					index
					element={<TaskList />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
