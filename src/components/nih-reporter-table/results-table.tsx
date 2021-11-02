import ResultsTableRow from './results-table-row';
import { ReporterSearchResult } from '../../services/reporter-search';

/**
 * Defines the props for the ResultsTable component.
 */
type ResultsTableProps = {
	results: Array<ReporterSearchResult>;
};

export default function ResultsTable({ results }: ResultsTableProps) {
	return (
		<table className="table-default complex-table">
			<thead>
				<tr>
					{/* Handle header click, or find preact/react table? */}
					<th scope="col">Year</th>
					<th scope="col">Award Type</th>
					<th scope="col">FOA</th>
					<th scope="col">Title</th>
					<th scope="col">PI/Project Leader</th>
					<th scope="col">Institution</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result: ReporterSearchResult) => (
					<ResultsTableRow result={result} key={result.appl_id} />
				))}
			</tbody>
			<tfoot></tfoot>
		</table>
	);
}
