import ResultsTableRow from './results-table-row';

export default function ResultsTable({ results }) {
	return (
		<table class="table-default complex-table">
			<thead>
				<tr>
					{ /* Handle header click, or find preact/react table? */}
					<th scope="col">Year</th>
					<th scope="col">Award Type</th>
					<th scope="col">FOA</th>
					<th scope="col">Title</th>
					<th scope="col">PI/Project Leader</th>
					<th scope="col">Institution</th>
				</tr>
			</thead>
			<tbody>
				{ results.map(result => <ResultsTableRow result={result} key={result.appl_id} />) }
			</tbody>
			<tfoot></tfoot>
		</table>
	);
}
