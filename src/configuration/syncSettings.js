export default function syncSettings(settings) {

    // sort value_cols so that crfs come before query cols regardless of order in rendererSettings
    settings.value_cols.sort(function(a, b) {
        return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
    });

    // Assign nest variables with specfic roles to specific settings
    settings.nestings.map(function(d){
      if (typeof(d.role) != "undefined") settings[d.role] = d.value_col
    })

    //Define initial nesting variables.
    settings.id_cols = settings.nestings
        .filter(d => d.default_nesting === true)
        .map(f => f.value_col)
        .slice(0, 3);

    //Define table column variables.
    settings.cols = d3.merge([['id'], settings.value_cols.map(d => d.col)]);

    //Define filter variables.
    settings.filter_cols = Array.isArray(settings.filter_cols)
        ? [settings.site_col, settings.id_freeze_col, settings.id_status_col].concat(
              settings.filter_cols
          )
        : [settings.site_col, settings.id_freeze_col, settings.id_status_col];

    // add labels specified in rendererSettings as headers
    settings.headers = settings.value_cols.map(d => d.label);

    // throw an error if there are more than 8 columns (due to current css set up)
    if (settings.headers.length > 8) {
        throw "A maximum of eight statistic columns is allowed. There are more than 8 value_col entries in rendererSettings currently. Don't be so greedy.";
    }

    //add ID header
    settings.headers.unshift('ID');

    return settings;
}
