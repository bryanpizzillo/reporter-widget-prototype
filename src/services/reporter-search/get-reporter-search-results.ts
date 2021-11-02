import axios from 'axios';
import ReporterSearchQuery from './reporter-search-query';
import ReporterSearchResults from './reporter-search-results';

/**
 * Fetches a set of search results from the Reporter API
 *
 * @param query The search Query
 * @returns Results
 */
export default async function getReporterSearchResults(
	query: ReporterSearchQuery
): Promise<ReporterSearchResults> {
	console.log(query);
	try {
		const res = await axios.post(
			'https://reporterproxy-dev.cancer.gov/v2/projects/search',
			query,
			{
				responseType: 'json',
				headers: {
					'Content-Type': 'application/json',
					accept: '*/*',
				},
				transitional: { silentJSONParsing: false },
			}
		);

		if (res.status === 200) {
			return res.data;
		} else {
			throw new Error(`Unexpected status ${res.status} for fetching ids`);
		}
	} catch (err) {
		// I don't see a need to log here or anything, so we can just throw.
		if (err.response) {
			throw new Error(
				`Unexpected status ${err.response.status} in response for fetching ids`
			);
		}
		throw err;
	}
}
