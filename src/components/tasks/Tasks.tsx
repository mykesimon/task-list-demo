import { Fragment, useState } from 'react';
import { useTaskContext } from '../../context/tasks-context';
import { TaskItem } from '..';

const Tasks = () => {
	const TASKS_TO_DISPLAY = 3;

	const { tasks, loading } = useTaskContext();
	const [displayedTasks, setDisplayedTasks] = useState(TASKS_TO_DISPLAY);

	const handleLoadMore = () => {
		setDisplayedTasks(prev => prev + TASKS_TO_DISPLAY);
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{tasks.length === 0 ? (
				<p>No tasks to show!</p>
			) : (
				tasks.slice(0, displayedTasks).map(task => (
					<Fragment key={task.id}>
						<TaskItem task={task} />
					</Fragment>
				))
			)}

			{tasks.length > displayedTasks && (
				<button
					className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] mt-4 bg-gray-900 text-white rounded-full transition-all hover:bg-gray-950 hover:cursor-pointer hover:transform hover:scale-105  active:scale-100 disabled:scale-100 disabled:bg-gray-500'
					type='button'
					onClick={handleLoadMore}
				>
					Load More
				</button>
			)}
		</>
	);
};

export default Tasks;
