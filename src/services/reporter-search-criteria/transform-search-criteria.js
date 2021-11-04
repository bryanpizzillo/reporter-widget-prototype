import { ReporterSearchCriteria } from '../reporter-search/reporter-search-query'

const splitStrValue = (val) => {
	if (val === null) {
		return val;
	} else {
		return val.split(';').map((_) => _.trim());
	}
}

const splitIntValue = (val) => {
	if (val === null) {
		return val;
	} else {
		return val.split(';').map((_) => parseInt(_));
	}
}

/**
 * Transforms the search criteria from the criteria endpoint into a format usable by the search
 * endpoint.
 *
 * @param criteria
 */
export default function transformSearchCriteria(criteria) {

	const newCriteria = Object.entries(criteria).reduce(
		(ac, [key, value]) => {
			switch (key) {

				case 'fiscal_years': {
					return {
						...ac,
						fiscal_years: value !== 'ap' ? splitIntValue(value) : null,
					};
				}

				case 'award_types': {
					return {
						...ac,
						award_types: splitStrValue(value),
					};
				}

				case 'foa': {
					return {
						...ac,
						foa: splitStrValue(value),
					};
				}

				default: {
					return ac;
				}
			}
		},
		{
			fiscal_years: null,
			award_types: null,
			foa: null,
		}
	);

	return newCriteria;
}
