/**
 * The metadata of Reporter search response
 */
interface ResultMetadata {
	searchId: string;
	total: number;
	offset: number;
	limit: number;
	sortField: string;
	sortOrder: string;
	sortedByRelevance: boolean;
	properties: unknown;
}

/**
 * Organization Information
 */
interface ResultOrganization {
	org_name: string;
	city: string;
	country: string;
	org_city: string;
	org_state: string;
	org_state_name: string;
	dept_type: string;
	fips_country_code: string;
	org_duns: Array<string>;
	org_fips: string;
	org_ipf_code: string;
	org_zipcode: string;
	external_org_id: number;
}

/**
 * The structure of a result.
 */
export interface ReporterSearchResult {
	appl_id: number;
	project_title: string;
	fiscal_year: number;
	organization: ResultOrganization;
	award_type: string;
	activity_code: string;
	contact_pi_name: string;
	full_foa: string;
	project_detail_url: string;
}

/**
 * Defines the structure of a Reporter search results
 */
export default interface ReporterSearchResults {
	meta: ResultMetadata;
	results: Array<ReporterSearchResult>;
}
