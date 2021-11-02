import { ReporterSearchResults } from '../services/reporter-search';

/**
 * Defines the actions available for the store reducer.
 */
export enum ActionType {
	FETCH_SUCCSESSFUL = 'fetch/successful',
	FETCH_FAILED = 'fetch/failed',
	PAGENUM_CHANGED = 'pagenum/changed',
}

/**
 * Represents an Action for updating the store based on a successful fetch.
 */
export interface SuccessfulFetchAction {
	readonly type: ActionType.FETCH_SUCCSESSFUL;
	results: ReporterSearchResults;
}

/**
 * Gets an action for updating the store with results of successful fetch.
 *
 * @param results The results to update
 * @returns SuccessfulFetchAction
 */
export const setFetchSuccess = (
	results: ReporterSearchResults
): SuccessfulFetchAction => {
	return {
		type: ActionType.FETCH_SUCCSESSFUL,
		results,
	};
};

/**
 * Represents an Action for updating the store based on a failed fetch.
 */
export interface FailedFetchAction {
	readonly type: ActionType.FETCH_FAILED;
	error: Error;
}

/**
 * Gets an action for updating the store with results of failed fetch.
 *
 * @param error The error encountered
 * @returns FailedFetchAction
 */
export const setFetchFailed = (error: Error): FailedFetchAction => {
	return {
		type: ActionType.FETCH_FAILED,
		error,
	};
};

/**
 * Represents an Action for updating the query in the story to change pagenum.
 */
export interface UpdatePageNumAction {
	readonly type: ActionType.PAGENUM_CHANGED;
	pageNum: number;
}

/**
 * Gets an action for updating the query in the story to change pagenum.
 *
 * @param pageNum The new page number
 * @returns UpdatePageNumAction
 */
export const updatePageNumber = (pageNum: number): UpdatePageNumAction => {
	return {
		type: ActionType.PAGENUM_CHANGED,
		pageNum,
	};
};

/**
 * Type union for
 */
export type StoreAction =
	| SuccessfulFetchAction
	| FailedFetchAction
	| UpdatePageNumAction;
