/**
 * Defines Reporter Search Criteria
 */
export interface ReporterSearchCriteria {
	/** One or more fiscal years to retrieve projects that correspond to (or started in) one of the fiscal years entered. */
	fiscal_years: Array<number> | null;
	/** One or more foa to retrieve associated projects for. */
	foa: Array<string> | null;
	/** One or more  award types to retrieve all projects associated with any of the award types passed. */
	award_types: Array<string> |  null;
}

/**
 * Defines the structure of a Reporter Query
 *
 * (We are cheating with the criteria element)
 */
export default interface ReporterSearchQuery {
	/** The search criteria */
	criteria: ReporterSearchCriteria | null;
	/** The number to start the search results at */
	offset: number;
	/** The number of results to fetch */
	limit: number;
	/** The fields to include in the search results */
	include_fields: Array<string>;
	/** The field to sort by */
	sort_field: string;
	/** Sort ascending or descending */
	sort_order: string;
}
