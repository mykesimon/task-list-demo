import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Task } from '../lib/types';
import { getErrorMessage } from '../lib/utils';

const BASE_URL = 'http://localhost:3001';

type TaskContextType = {
	tasks: Task[];
	loading: boolean;
	addTask: (newTask: Task) => Promise<void>;
	deleteTask: (taskId: string) => Promise<void>;
};

type TaskProviderProps = {
	children: React.ReactNode;
};

export const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${BASE_URL}/tasks`)
			.then(response => response.json())
			.then(data => {
				setTasks(data);
				setLoading(false);
			})
			.catch(error => {
				console.log('failed on fetch');
				toast.error(getErrorMessage(error));
				setLoading(false);
			});
	}, []);

	const addTask = async (newTask: Task) => {
		try {
			const response = await fetch(`${BASE_URL}/tasks`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTask),
			});

			if (!response.ok) {
				throw new Error('Failed to add task');
			}

			const data = await response.json();
			setTasks([...tasks, data]);
			toast.success('Task added successfully');
		} catch (error: unknown) {
			toast.error(getErrorMessage(error));
		}
	};

	const deleteTask = async (id: string) => {
		try {
			const response = await fetch(`${BASE_URL}/tasks/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Failed to delete task');
			}

			setTasks(tasks.filter(task => task.id !== id));
			toast.success('Task deleted successfully');
		} catch (error: unknown) {
			toast.error(getErrorMessage(error));
		}
	};

	const value = { tasks, loading, addTask, deleteTask };

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

function useTaskContext() {
	const context = useContext(TaskContext);
	if (context === null) {
		throw new Error('useTaskContext must be used within a TaskProvider');
	}
	return context;
}

export { useTaskContext, TaskProvider };
