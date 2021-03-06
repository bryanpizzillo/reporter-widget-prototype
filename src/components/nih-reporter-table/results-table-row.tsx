import { ReporterSearchResult } from '../../services/reporter-search';

/**
 * Defines properties for the ResultsTableRow component.
 */
type ResultsTableProps = {
	result: ReporterSearchResult;
};

export default function ResultsTableRow({ result }: ResultsTableProps) {
	return (
		<tr>
			<th scope="col">{result?.fiscal_year}</th>
			<th scope="col">{result?.activity_code}</th>
			<th scope="col">{result?.full_foa}</th>
			<th scope="col">
				<a href={result?.project_detail_url}>{result?.project_title}</a>
			</th>
			<th scope="col">{result?.contact_pi_name}</th>
			<th scope="col">{result?.organization?.org_name}</th>
		</tr>
	);
}
