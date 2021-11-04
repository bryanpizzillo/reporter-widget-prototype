import { useEffect, useReducer } from 'preact/hooks';
import {
	storeReducer,
	setFetchSuccess,
	setFetchFailed,
	initialState,
} from './store';
import { getReporterSearchResults } from './services/reporter-search';
import { NihReporterTable } from './components';

enum DisplayModes {
	Table = 'table',
};

/**
 * Allowable Properties of the ReporterComponent
 */
type ReporterComponentByIdProps = {
	searchid: string;
	display: DisplayModes;
};

/**
 * The main component.
 * @param ReporterComponentProps the component props
 * @returns
 */
export default function ReporterComponentById({
	searchid,
	display,
}: ReporterComponentByIdProps) {

	const [state, dispatch] = useReducer(storeReducer, {
		...initialState,
		query: {
			...initialState.query,
			criteria: {
				foa: [],
				fiscal_years: [],
				award_types: [],
			},
		},
	});

	// This effect handles fetching results from the API, and updating the store with
	// successful results, or an error if it failed.
	useEffect(() => {
		getReporterSearchResults(state.query)
			.then((results) => {
				dispatch(setFetchSuccess(results));
				console.log(results);
			})
			.catch((err) => {
				dispatch(setFetchFailed(err));
			});
	}, [state.query]);

	return (
		<>
			<h1>My Widget</h1>
			{(() => {
				if (state.isLoading) {
					return <h4>Loading...</h4>;
				} else if (!state.isLoading && state.results) {
					if (state.results.meta.total > 0) {
						switch (display) {
							case DisplayModes.Table:
								return <NihReporterTable results={state.results} />;
							default:
								return <h4>Unknown Display Mode</h4>;
						}
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
