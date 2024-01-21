import React from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import { TaskPriority, TaskStatus } from './types';

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === 'object' && 'message' in error) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else {
		message = 'An unexpected error occurred.';
	}

	return message;
};

export const formatStatus = (text: TaskStatus) => {
	return text
		.toLowerCase()
		.split('_')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const renderPriorityIconColor = (priority: TaskPriority) => {
	switch (priority) {
		case 'HIGH':
			return 'text-red-600';
		case 'MEDIUM':
			return 'text-orange-500';
		case 'LOW':
			return 'text-green-700';
		default:
			return 'text-gray-500';
	}
};

export const formatPriorityText = (string: TaskPriority) => {
	const firstLetter = string.charAt(0);
	const restLetters = string.slice(1).toLowerCase();

	return `${firstLetter}${restLetters}`;
};

export const renderTaskStatusIcon = (taskStatus: TaskStatus) => {
	if (taskStatus === 'COMPLETED') {
		return React.createElement(FaCircle);
	} else if (taskStatus === 'IN_PROGRESS') {
		return React.createElement(FaCircleHalfStroke);
	} else {
		return React.createElement(FaRegCircle);
	}
};
