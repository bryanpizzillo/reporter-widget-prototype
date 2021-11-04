import register from 'preact-custom-element';
import ReporterComponent from './reporter-component';
import ReporterComponentById from './reporter-component-by-id';

register(ReporterComponent, 'nih-reporter-table', [], {
	shadow: false,
});

register(ReporterComponentById, 'nih-reporter-results', [], {
	shadow: false,
});
