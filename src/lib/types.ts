export type TaskStatus = 'IN_PROGRESS' | 'COMPLETED' | 'OPEN';

export type TaskPriority = 'UNASSIGNED' | 'LOW' | 'MEDIUM' | 'HIGH';

export type Task = {
	id?: string;
	priority: TaskPriority;
	taskStatus: TaskStatus;
	assignedTo: string;
	taskSummary: string;
};
