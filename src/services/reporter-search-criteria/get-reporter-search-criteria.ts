import axios from 'axios';
import { ReporterSearchCriteria } from '../reporter-search';

/**
 * Fetches a set of search results from the Reporter API
 *
 * @param query The search Query
 * @returns Results
 */
export default async function getReporterSearchResults(
	searchId: string
): Promise<ReporterSearchCriteria> {
	try {
		const res = await axios.get(
			`https://reporter.nih.gov/services/Projects/SearchCriteria?searchid=${searchId}`,
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
			// Now we need to transform the response into a
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
