import { useForm, type FieldValues } from 'react-hook-form';
import { useTaskContext } from '../../context/tasks-context';

import { Task, TaskPriority, TaskStatus } from '../../lib/types';
import { TaskPriorityData, TaskStatusData } from '../../lib/data';
import { formatPriorityText, formatStatus } from '../../lib/utils';

const AddTaskForm = () => {
	const { addTask } = useTaskContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const onSubmit = async (data: FieldValues) => {
		addTask(data as Task);
		reset();
	};

	return (
		<section className='min-w-full sm:min-w-[35rem]'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-2 mb-5'>
					<label
						htmlFor='taskSummary'
						className='text-sm font-medium text-gray-700'
					>
						Task Summary
					</label>
					<textarea
						{...register('taskSummary', {
							required: 'Summary is required',
						})}
						id='taskSummary'
						className='h-40 p-4 rounded-lg border border-black/10'
					/>
					{errors.taskSummary && (
						<p className='text-red-500'>{`${errors.taskSummary.message}`}</p>
					)}
				</div>

				<div className='flex flex-col gap-2 mb-5'>
					<label
						htmlFor='assignedTo'
						className='text-sm font-medium text-gray-700'
					>
						Assigned to
					</label>
					<input
						{...register('assignedTo', {
							required: 'Assignee is required',
						})}
						id='assignedTo'
						type='text'
						className='h-14 p-4 rounded-lg border border-black/10'
					/>
					{errors.assignedTo && (
						<p className='text-red-500'>{`${errors.assignedTo.message}`}</p>
					)}
				</div>

				<div className='flex flex-col sm:flex-row gap-5'>
					<div className='flex flex-col gap-2 sm:w-1/2'>
						<label
							htmlFor='taskStatus'
							className='text-sm font-medium text-gray-700'
						>
							Select a status
						</label>
						<select
							{...register('taskStatus')}
							id='taskStatus'
							className='h-14 p-0 rounded-lg border-8 border-black/10 cursor-pointer  border-white outline outline-1 outline-black/10 focus:outline-blue-700 focus:outline-2'
						>
							{TaskStatusData.map((option: TaskStatus, index) => (
								<option
									key={`${option}-${index}`}
									value={option}
								>
									{formatStatus(option)}
								</option>
							))}
						</select>
					</div>

					<div className='flex flex-col gap-2 sm:w-1/2'>
						<label
							htmlFor='priority'
							className='text-sm font-medium text-gray-700'
						>
							Select a priority
						</label>
						<select
							{...register('priority')}
							id='priority'
							className='h-14 p-0 rounded-lg border-8 border-black/10 cursor-pointer  border-white outline outline-1 outline-black/10 focus:outline-blue-700 focus:outline-2'
						>
							{TaskPriorityData.map((option: TaskPriority, index) => (
								<option
									key={`${option}-${index}`}
									value={option}
								>
									{formatPriorityText(option)}
								</option>
							))}
						</select>
					</div>
				</div>

				<button
					type='submit'
					disabled={isSubmitting}
					className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] mt-4 bg-gray-900 text-white rounded-full transition-all hover:bg-gray-950 hover:cursor-pointer hover:transform hover:scale-105  active:scale-100 disabled:scale-100 disabled:bg-gray-500'
				>
					{isSubmitting ? (
						<div className='h-5 w-5 animate-spin rounded-full border-b-2  border-white' />
					) : (
						<>Add Task</>
					)}
				</button>
			</form>
		</section>
	);
};

export default AddTaskForm;
