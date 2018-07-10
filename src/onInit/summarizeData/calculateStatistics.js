export default function calculateStatistics() {
    //Nest data by the ID variable defined above and calculate statistics for each summary variable.
    const nest = d3
        .nest()
        .key(d => d.id)
        .rollup(d => {
            //Define denominators.
            const summary = {
                nForms: d.length,
                nNeedsVerification: d.filter(di => di.needs_verification === '1').length,
                nNeedsSignature: d.filter(di => di.needs_signature === '1').length
            };

            //Define summarized values, either rates or counts.
            this.config.value_cols.forEach(value_col => {
                const count = d3.sum(d, di => di[value_col]);
                summary[value_col] =
                    ['is_partial_entry', 'ready_for_freeze', 'is_frozen', 'is_locked'].indexOf(
                        value_col
                    ) > -1
                        ? summary.nForms
                            ? count / summary.nForms
                            : 'N/A'
                        : ['DATA_PAGE_VERIFIED'].indexOf(value_col) > -1
                            ? summary.nNeedsVerification
                                ? count / summary.nNeedsVerification
                                : 'N/A'
                            : ['is_signed'].indexOf(value_col) > -1
                                ? summary.nNeedsSignature
                                    ? count / summary.nNeedsSignature
                                    : 'N/A'
                                : ['open_query_cnt', 'answer_query_cnt'].indexOf(value_col) > -1
                                    ? count
                                    : console.log(`Missed one: ${value_col}`);
            });

            return summary;
        })
        .entries(this.data.initial_filtered);

    //Convert the nested data array to a flat data array.
    nest.forEach(d => {
        d.id = d.key;
        delete d.key;
        this.config.value_cols.forEach(value_col => {
            d[value_col] = d.values[value_col];
        });
        delete d.values;
    });

    //Add summarized data to array of summaries.
    this.data.summaries.push(nest);
}
