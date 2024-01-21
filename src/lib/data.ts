import { TaskPriority, TaskStatus } from './types';

export const TaskStatusData: TaskStatus[] = [
	'OPEN',
	'IN_PROGRESS',
	'COMPLETED',
];

export const TaskPriorityData: TaskPriority[] = [
	'UNASSIGNED',
	'LOW',
	'MEDIUM',
	'HIGH',
];

export const pathsConstant = {
	HOME: {
		path: '/',
		name: 'Home',
	},
	ADD_TASK: {
		path: '/add-task',
		name: 'Add Task',
	},
} as const;
