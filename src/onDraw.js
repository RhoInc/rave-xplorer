import customizeRows from './onDraw/customizeRows';
import customizeCells from './onDraw/customizeCells';
import addRowDisplayToggle from './onDraw/addRowDisplayToggle';
import toggleCellAnnotations from './onDraw/toggleCellAnnotations';
import dataExport from './onDraw/dataExport';

export default function onDraw() {
    var t0 = performance.now();
    //begin performance test

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

//2762 milliseconds- 2901 milliseconds

    this.parent.containers.loading.classed('chm-hidden', true);
}
