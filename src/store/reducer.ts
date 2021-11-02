import { ActionType, StoreAction } from './actions';
import {
	ReporterSearchQuery,
	ReporterSearchResults,
} from '../services/reporter-search';

/**
 * Defines the structure of our store.
 *
 * (We are cheating with the results element)
 */
export interface Store {
	/** The results of a successful search */
	results: ReporterSearchResults | null;
	/** The error of a failed search */
	error: Error | null;
	/** Is the request still loading? */
	isLoading: boolean;
	/** The query for the search request */
	query: ReporterSearchQuery;
}

/**
 * The initial Store state.
 */
export const initialState: Store = {
	results: null,
	error: null,
	isLoading: true,
	query: {
		criteria: {
			fiscal_years: [],
			foa: [],
			award_types: [],
		},
		offset: 0, // Page 1 is 0
		limit: 50, // Items Per Page
		include_fields: [
			'ApplId',
			'FiscalYear',
			'Organization',
			'AwardType',
			'ActivityCode',
			'ContactPiName',
			'FullFoa',
			'ProjectDetailUrl',
		],
		sort_field: '',
		sort_order: '',
	},
};

/**
 * The Store reducer
 * @param state the current state to update (Defaults to initialState)
 * @param action the action to update the state
 * @returns the new state
 */
export default function reducer(
	state: Store = initialState,
	action: StoreAction
): Store {
	switch (action.type) {
		case ActionType.FETCH_SUCCSESSFUL: {
			return {
				...state,
				isLoading: false,
				results: action.results,
				error: null,
			};
		}
		case ActionType.FETCH_FAILED: {
			return {
				...state,
				isLoading: false,
				results: null,
				error: action.error,
			};
		}
		case ActionType.PAGENUM_CHANGED: {
			const pageNum = action.pageNum;
			const itemsPerPage = state.query.limit;
			const newOffset = (pageNum - 1) * itemsPerPage;

			return {
				...state,
				query: {
					...state.query,
					offset: newOffset,
				},
			};
		}
		default:
			return state;
	}
}
