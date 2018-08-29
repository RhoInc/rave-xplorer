import customizeRows from './onDraw/customizeRows';
import customizeCells from './onDraw/customizeCells';
import addRowDisplayToggle from './onDraw/addRowDisplayToggle';
import toggleCellAnnotations from './onDraw/toggleCellAnnotations';
import dataExport from './onDraw/dataExport';

export default function onDraw() {
    const config = this.config;
    const chart = this;

    var t0 = performance.now();
    //begin performance test

    // create strcture to aid in nesting and referncing in addRowDipslayToggle.js
    var id;
    chart.data.raw.forEach(function(d) {
        id = d['id'].split('|');
        if (id[2]) {
            d[config.id_cols[2]] = id[2];
            d[config.id_cols[1]] = id[1];
            d[config.id_cols[0]] = id[0];
        } else if (id[1]) {
            d[config.id_cols[1]] = id[1];
            d[config.id_cols[0]] = id[0];
        } else {
            d[config.id_cols[0]] = id[0];
        }
    });

    if (this.data.summarized.length) {
        customizeRows.call(this);
        customizeCells.call(this);
        addRowDisplayToggle.call(this);
        toggleCellAnnotations.call(this);
        dataExport.call(this);
    }

    //end performance test
    var t1 = performance.now();
    console.log('Call to onDraw took ' + (t1 - t0) + ' milliseconds.');

    this.parent.containers.loading.classed('chm-hidden', true);
}
