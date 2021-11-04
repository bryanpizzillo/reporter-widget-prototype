/**
 * Defines a truncated list of properties for the criteria returned by the search criteria endpoint.
 */
type SearchCriteria = {
	// Either a semi-colon delimted list of strings, or "ap" when no fiscal years are specified.
	"fiscal_years": string,
	// Either a semi-colon delimted list of strings, or null.
	"award_types": string | null,
	// Either a semi-colon delimted list of strings, or null.
	"foa": string | null,
}

/**
 * Transforms the search criteria from the criteria endpoint into a format usable by the search
 * endpoint.
 *
 * @param criteria
 */
export default function transformSearchCriteria(criteria: any){

}
