var TableFilter = require('tablefilter');

var tf = new TableFilter('demo', {
    base_path: 'node_modules/tablefilter/dist/tablefilter/',
    alternate_rows: true,
    rows_counter: true,
    btn_reset: true,
    no_results_message: true,
    auto_filter: true,
    auto_filter_delay: 250,
    mark_active_columns: true,
    col_1: 'select',
    col_2: 'select',
    col_widths: [
        '150px', '70px', '70px',
        '120px', '120px', '100px',
        '100px', '100px', '100px'
    ],
    extensions:[{
        name: 'sort',
        types: [
            'string', 'string', 'number',
            'number', 'number', 'number',
            'number', 'number', 'number'
        ]
    }, {
        name: 'colsVisibility',
        text: 'Hide columns: '
    }, {
        name: 'filtersVisibility'
    }]
});
tf.init();
