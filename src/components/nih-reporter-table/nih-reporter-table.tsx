import { ReporterSearchResults } from '../../services/reporter-search';
import ResultsTable from './results-table';

/**
 * Defines the props for the reporter table display.
 */
type NihReporterTableProps = {
	results: ReporterSearchResults;
};

/**
 * Component to display table of NIH Reporter Results
 * @param NihReporterTableProps
 * @returns
 */
export default function NihReporterTable (
	{ results }: NihReporterTableProps
) {
	// TODO: This might not be needed. Or this wrapper can wire things up.
	return <ResultsTable results={results.results} />;
}
