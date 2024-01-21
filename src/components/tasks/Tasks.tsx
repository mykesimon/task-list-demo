import { Fragment } from 'react';
import { useTaskContext } from '../../context/tasks-context';
import { PageHeading, TaskItem } from '..';

const Tasks = () => {
	const { tasks, loading } = useTaskContext();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (tasks.length === 0) {
		return <p>No tasks to show...</p>;
	}

	return (
		<>
			<PageHeading>Task List</PageHeading>

			{tasks.length === 0 ? (
				<p>No tasks to show...</p>
			) : (
				tasks.map(task => (
					<Fragment key={task.id}>
						<TaskItem task={task} />
					</Fragment>
				))
			)}
		</>
	);
};

export default Tasks;
