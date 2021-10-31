const FETCH_SUCCSESSFUL = 'fetch/successful';
const FETCH_FAILED = 'fetch/failed';
const PAGENUM_CHANGED = 'pagenum/changed';

export const fetchSuccess = (results) => {
	return {
		type: FETCH_SUCCSESSFUL,
		payload: results,
	};
};

export const fetchFailed = (error) => {
	return {
		type: FETCH_FAILED,
		payload: error,
	};
};

export const pageChanged = (pageNum) => {
	return {
		type: PAGENUM_CHANGED,
		payload: pageNum,
	};
};

export default function reducer(state = {}, action) {
	switch (action.type) {
		case FETCH_SUCCSESSFUL: {
			return {
				...state,
				isLoading: false,
				results: action.payload,
				error: null,
			};
		}
		case FETCH_FAILED: {
			return {
				...state,
				isLoading: false,
				results: null,
				error: action.payload,
			};
		}
		case PAGENUM_CHANGED: {
			const pageNum = action.payload;
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
