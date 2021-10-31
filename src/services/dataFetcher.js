import axios from 'axios';

export default async function dataFetcher(query) {
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
