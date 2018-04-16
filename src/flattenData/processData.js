export default function processData(data, settings, level) {
    const longData = [];
    data.forEach(d => {
        settings.value_cols.forEach(flag => {
            const newD = {};
            for (const key of Object.keys(d)) newD[key] = d[key];
            newD.flag = flag;
            //    newD.stat = d[flag];
            longData.push(newD);
        });
    });

    //make key variable for specified levels
    longData.forEach(function(d) {
        d.nestKey = '';
        settings.id_cols
            .filter(function(d, i) {
                return i < level;
            })
            .forEach(function(l, i) {
                d.nestKey = d.nestKey + ':' + d[l];
            });
        d.nestKey = '' + level + ':' + d.nestKey.slice(1);
    });

    //Nest data and calculate proportions
    var ptCols = d3.merge([settings.id_cols, settings.filter_cols]);

    var nested = d3
        .nest()
        .key(function(d) {
            return d.nestKey;
        })
        .key(function(d) {
            return d['flag'];
        })
        .rollup(function(v) {
            // Sums for Queriy variables
            if (v[0].flag == 'has_open_query' || v[0].flag == 'has_answered_query') {
                return {
                    raw: v,
                    proportion: d3.sum(v, function(d) {
                        return d[d.flag];
                    })
                };

                // Proportions for is_signed using needs_signature as denominator
            } else if (v[0].flag == 'is_signed') {
                //If there's a denominator of zero we want to catch that - right now I'm saying they're 100% done, may change that
                if (v.filter(d => d.needs_signature === '1').length === 0) {
                    return {
                        raw: v,
                        proportion: 1
                    };
                } else {
                    return {
                        raw: v,
                        proportion:
                            d3.sum(v, function(d) {
                                return d[d.flag];
                            }) / v.filter(d => d.needs_signature === '1').length
                    };
                }
                // Proportions for is_verified using needs_verification as denominator
            } else if (v[0].flag == 'is_verified') {
                //If there's a denominator of zero we want to catch that - right now I'm saying they're 100% done, may change that
                if (v.filter(d => d.needs_verification === '1').length === 0) {
                    return {
                        raw: v,
                        proportion: 1
                    };
                    // Proportions using total as denominator (for the rest of them)
                } else {
                    return {
                        raw: v,
                        proportion:
                            d3.sum(v, function(d) {
                                return d[d.flag];
                            }) / v.filter(d => d.needs_verification === '1').length
                    };
                }
            } else {
                return {
                    //proprotions for everybody else
                    raw: v,
                    proportion:
                        d3.sum(v, function(d) {
                            return d[d.flag];
                        }) / v.length
                };
            }
        })
        .entries(longData);

    //Flatten the nested data
    var flatData = [];

    /* THIS IS NEW */
    nested.forEach(function(d) {
        var ptObj = {};
        ptObj.id = d.key;
        ptObj.level = level;
        var ptCols = d3.merge([settings.id_cols, settings.filter_cols]);
        ptCols.forEach(function(col) {
            ptObj[col] = d.values[0].values.raw[0][col];
        });
        d.values.forEach(function(v) {
            ptObj[v.key] = v.values.proportion;
        });
        flatData.push(ptObj);
    });
    return flatData;
}
