import { useEffect, useReducer } from 'preact/hooks';

import { default as reducer, fetchSuccess, fetchFailed } from '../store/reducer';
import dataFetcher from '../services/dataFetcher';
import ResultsTable from './results-table';

export default function NihReporterTable({
	queryfoa,
	queryfiscalyears,
	queryawardtypes,
}) {
	const [state, dispatch] = useReducer(reducer, {
		results: null,
		error: null,
		isLoading: true,
		query: {
			criteria: {
				foa: queryfoa.split(','),
				fiscal_years: queryfiscalyears.split(',').map(_ => parseInt(_)),
				award_types: queryawardtypes.split(','),
			},
			offset: 0, // Page 1 is 0
			limit: 50, // Items Per Page
			sort_field: '',
			sort_order: '',
		},
	});

	const queryKey = JSON.stringify(state.query);
	useEffect(() => {
		// Fire off our query fetcher cause it needs to
		// be called.
		dataFetcher(state.query)
			.then((results) => {
				dispatch(fetchSuccess(results));
				console.log(results);
			})
			.catch((err) => {
				dispatch(fetchFailed(err));
			});
	}, [queryKey]);

	return (
		<>
			<h1>My Widget</h1>
			{(() => {
				if (state.isLoading) {
					return <h4>Loading...</h4>;
				} else if (!state.isLoading && state.results) {
					if (state.results.meta.total > 0) {
						return <ResultsTable results={state.results.results} />;
					} else {
						return <h4>Has no Results</h4>;
					}
				} else {
					return <h4>Error</h4>;
				}
			})()}
		</>
	);
}
