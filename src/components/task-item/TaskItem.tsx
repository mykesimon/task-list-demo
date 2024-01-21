import { useTaskContext } from '../../context/tasks-context';
import { MdDelete } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import {
	formatStatus,
	priorityTagColor,
	formatPriorityText,
	renderTaskStatusIcon,
} from '../../lib/utils';
import type { Task } from '../../lib/types';

type TaskItemProps = {
	task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
	const { deleteTask } = useTaskContext();
	const { id, priority, taskStatus, assignedTo, taskSummary } = task;

	return (
		<section className='flex flex-row gap-3 justify-between items-center p-4 border rounded-lg min-w-full sm:min-w-[42rem] mb-3 last:mb-0'>
			<div>
				<h2 className='text-2xl font-medium mb-2'>{taskSummary}</h2>
				<div className='flex flex-col gap-4 text-gray-700'>
					<div className='flex flex-col sm:flex-row gap-2'>
						<p className='flex gap-2 items-center'>
							<IoPersonSharp /> {assignedTo}
						</p>
						<div className='hidden sm:block font-semibold text-gray-400'>
							{' | '}
						</div>
						<div className='flex gap-2 items-center'>
							{renderTaskStatusIcon(taskStatus)}
							<span>{formatStatus(taskStatus)}</span>
						</div>
					</div>
					<p className='flex items-center gap-2 text-xs font-semibold'>
						<FaCircle className={priorityTagColor(priority)} />
						{formatPriorityText(priority)} Priority
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-2 items-center'></div>
			<button
				className='group border flex self-center rounded-full p-2 justify-center items-center hover:bg-red-500 transition-all'
				onClick={() => deleteTask(id as string)}
			>
				<MdDelete className='text-2xl text-red-500 group-hover:text-white transition-all' />
			</button>
		</section>
	);
};

export default TaskItem;
