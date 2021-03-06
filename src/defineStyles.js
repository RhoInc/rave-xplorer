export const firstColumnWidth = 16;
export const otherColumnWidth = 10.5;
export const paddingRight = 6;
export const paddingLeft = 6;
export const border = 1;

export default function defineStyles() {

  // calculate how many crf & query columns there are to dynamically determine width of legend
  var queriesCount = this.settings.synced.value_cols.filter(
      a => a.type == 'queries'
  ).length;

  var crfsCount = this.settings.synced.value_cols.filter(
      a => a.type == 'crfs'
  ).length;

  // make single column legends little bigger to fit legend
  if (queriesCount == 1) {
    queriesCount = queriesCount + .5;
    crfsCount = crfsCount - .5
  }

  if (crfsCount == 1) {
    crfsCount = crfsCount + .5;
    queriesCount = queriesCount - .5
  }


    const styles = [
        'body {' +
            '    overflow-y: scroll;' +
            '}',
        'body .crf-heat-map {' +
            '    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;' +
            '    font-size: 16px;' +
            '    line-height: normal;' +
            '    max-width: 2200px;' +
            '}',
        '.crf-heat-map {' +
            '}',
        '.crf-heat-map div {' +
            '    box-sizing: content-box;' +
            '}',
        '.crf-heat-map select {' +
            '    font-size: 12px;' +
            '}',
        '.chm-hidden {' +
            '    display: none !important;' +
            '}',
        '.chm-ie-sucks {' +
            '    color: red;',
            '    font-size: 20px;',
            '    padding: 20px;',
            '}',
        '.chm-column {' +
            '    display: inline-block;' +
            '}',
        '.chm-column > * {' +
            '    width: 100%;' +
            '}',
        '.chm-row {' +
            '    display: inline-block;' +
            '}',
        '.summary {' +
                'border-bottom:2px solid;' +
                '}',
        '.chm-row > * {' +
            '    display: inline-block;' +
            '}',
        '.chm-row--1 {' +
            '    height: 6em;' +
            '    padding-bottom: 10px;' +
            '    border-bottom: 1px solid lightgray;' +
            '    margin-bottom: 10px;' +
            '}',

        /***--------------------------------------------------------------------------------------\
          Left column
        \--------------------------------------------------------------------------------------***/

            '#chm-left-column {' +
                '    float: left;' +
                '    width: 19.4%;' +
                '    padding-right: .5%;' +
                '}',

            /****---------------------------------------------------------------------------------\
              Row 1 - Data Export
            \---------------------------------------------------------------------------------****/

                '#chm-left-column-row-1 {' +
                    '    position: relative;' +
                    '}',
                '#chm-loading {' +
                    '    font-size: 24px;' +
                    '    font-weight: bold;' +
                    '    color: #045a8d;' +
                    '}',
                '#chm-nest-label {' +
                    '    float: right;' +
                    '}',
                '#chm-controls-label {' +
                    '    position: absolute;' +
                    '    bottom: 0;' +
                    '    width: 100%;' +
                    '    text-align: center;' +
                    '    vertical-align: bottom;' +
                    '    font-size: 24px;' +
                    '    font-weight: bold;' +
                    '}',

            /****---------------------------------------------------------------------------------\
              Row 2 - Controls
            \---------------------------------------------------------------------------------****/
                '#chm-controls {' +
                    '    display: block;' +
                    '}',
                '#chm-controls .wc-controls {' +
                    '    margin-right: 10px;' +
                    '}',
                '#chm-controls .control-group {' +
                    '    width: 100%;' +
                    '    margin: 0 0 5px 0;' +
                    '    display: block;' +
                    '}',
                '#chm-controls .control-group > * {' +
                    '    display: block;' +
                    '    width: auto;' +
                    '}',
                '#chm-controls .wc-control-label {' +
                    '    text-align: center;' +
                    '}',
                '#chm-controls .span-description {' +
                    '}',
                '#chm-controls select.changer {' +
                    '    margin: 0 auto;' +
                    '}',
                '.chm-control-grouping {' +
                    '    display: inline-block;' +
                    '}',
                '.chm-control-grouping .control-group .wc-control-label {' +
                    '    text-align: center;' +
                    '}',
                '.chm-control-grouping--label {' +
                    '    text-align: center;' +
                    '    width: 100%;' +
                    '    font-size: 20px;' +
                    '    margin-bottom: 5px;' +
                    '}',
                '.chm-filters {' +
                    '    display: flex;' +
                    '    flex-wrap: wrap ;' +
                    '    justify-content: space-evenly;' +
                    '    border-bottom: 1px solid lightgray;' +
                    '    padding-bottom: 7px;' +
                    '}',
                '.chm-other-controls {' +
                    '    margin-top: 10px;' +
                    '    display: flex;' +
                    '    flex-wrap: wrap;' +
                    '    justify-content: space-evenly;' +
                    '}',


                //checkboxes
                '.chm-checkbox {' +
                    '    display: inline-flex !important;' +
                    '    justify-content: center;' +
                    '}',
                '.chm-checkbox .wc-control-label {' +
                    '    margin-right: 5px;' +
                    '}',
                '.chm-checkbox .changer {' +
                    '    margin-top: 5px !important;' +
                    '}',

        /***--------------------------------------------------------------------------------------\
          Right column
        \--------------------------------------------------------------------------------------***/

            '#chm-right-column {' +
                '    float: right;' +
                '    width: 79.4%;' +
                '    border-left: 1px solid lightgray;' +
                '    padding-left: .5%;' +
                '}',
            '#chm-right-column-row-1 > * {' +
                '    display: inline-block;' +
                '}',
            '#chm-right-column-row-2 > * {' +
                '}',

            /****---------------------------------------------------------------------------------\
              Nest controls
            \---------------------------------------------------------------------------------****/

                '#chm-nest-controls {' +
                    `    width: ${firstColumnWidth}%;` +
                    '    height: 100%;' +
                    '}',
                '.chm-nest-control {' +
                    '    float: left;' +
                    '    display: block;' +
                    '    clear: left;' +
                    `    padding-left: ${paddingLeft}px;` +
                    '    min-width : 100px;' +
                    '}',
                  '.chm-nest-control.chm-hide {' +
                      '    float: left;' +
                      '    display: none;' +
                      '    clear: left;' +
                      `    padding-left: ${paddingLeft}px;` +
                      '}',
                '#chm-nest-control--1 {' +
                    '    margin-left: 0;' +
                    '}',
                '#chm-nest-control--2 {' +
                    '    margin-left: 1em;' +
                    '}',
                '#chm-nest-control--3 {' +
                    '    margin-left: 2em;' +
                    '}',

            /****---------------------------------------------------------------------------------\
              Legend
            \---------------------------------------------------------------------------------****/

                '#chm-legend-container {' +
                    `    width: ${100 - firstColumnWidth}%;` +
                    '    float: right;' +
                    '    display: inline-block;' +
                    '    height: 100%;' +
                    '}',
                '.chm-legend {' +
                    '    padding-top: 17px;' +
                    '    display: inline-block;' +
                    '}',
                '.chm-legend > * {' +
                    '}',
                '#chm-crf-legend {' +
                    '    float: left;' +
                    `    width: ${12.5 * crfsCount}%;` +
                    '}',
                '#chm-query-legend {' +
                    '    float: right;' +
                    `    width: ${12.5 * queriesCount}%;` +
                    '}',

                '.chm-legend-title {' +
                    '    font-size: 20px;' +
                    '    font-weight: bold;' +
                    '}',

                '#chm-query-legend .chm-legend-title {' +
                    '    text-align: right;' +
                    '}',

                '.chm-legend-div {' +
                    '    display: inline-block;' +
                    '    height: 20px;' +
                    '    text-align: center;' +
                    '    font-weight: bold;' +
                    '    font-size: 14px;' +
                    '}',
                '#chm-crf-legend .chm-legend-div {' +
                    '    width: 20%;' +
                    '}',
                '#chm-query-legend .chm-legend-div {' +
                    '    width: 20%;' +
                    '}',

            /****---------------------------------------------------------------------------------\
              Table
            \---------------------------------------------------------------------------------****/

                '#chm-table {' +
                    '    width: 100%;' +
                    '}',
                '#chm-table table {' +
                    '    display: table;' +
                    '    width: 100%;' +
                    '}',
                  '.wc-table {' +
                        '    display: block;' +
                        '}',
                '.wc-table table thead tr th {' +
                    '    cursor: default;' +
                    '}',
                '.wc-table table thead tr th,' +
                '.wc-table table tbody tr td {' +
                    `    padding-right: ${paddingRight}px;` +
                    `    padding-left: ${paddingLeft}px;` +
                    '}',
                '.wc-table table thead tr th:first-child,' +
                '.wc-table table tbody tr td:first-child {' +
                    `    width: ${firstColumnWidth}% !important;` +
                    '    text-align: left;' +
                    '}',
                '.wc-table table thead tr:not(#column-controls) th:nth-child(n + 2),' +
                '.wc-table table tbody tr td:nth-child(n + 2) {' +
                    `    width: ${otherColumnWidth}% !important;` +
                    '    text-align: left;' +
                    '}',

                /* range sliders */

                '#column-controls th {' +
                    '}',
                '.reset-button {' +
                    '    width: 100%;' +
                    '    font-weight: bold;' +
                    '    font-size: 15px;' +
                    '}',
                '.range-slider-container {' +
                    '    position: relative;' +
                    '    width: 100%;' +
                    '    height: 30px;' +
                    '}',
                '.range-slider {' +
                    '    width: 100%;' +
                    '    pointer-events: none;' +
                    '    position: absolute;' +
                    '    height: 15px;' +
                    '    top: 1px;' +
                    '    overflow: hidden;' +
                    '    outline: none;' +
                    '}',
                '.range-annotation {' +
                    '    width: 100%;' +
                    '    position: absolute;' +
                    '    font-size: 12px;' +
                    '    top: 16px;' +
                    '    overflow: hidden;' +
                    '    font-weight: normal;' +
                    '}',
                '.range-annotation--lower {' + '    text-align: left;' + '}',
                '.range-annotation--upper {' + '    text-align: right;' +
                    '    width: 50%;' +
                    '    position: absolute;' +
                    '    right: 0;' +
                    '    bottom: 0;' +
                    '}',
                '.range-slider::-webkit-slider-thumb {' +
                    '    pointer-events: all;' +
                    '    position: relative;' +
                    '    z-index: 1;' +
                    '    outline: 0;' +
                    '}',
                '.range-slider::-moz-range-thumb {' +
                    '    pointer-events: all;' +
                    '    position: relative;' +
                    '    z-index: 10;' +
                    '    -moz-appearance: none;' +
                    '    width: 9px;' +
                    '}',
                '.range-slider::-moz-range-track {' +
                    '    position: relative;' +
                    '    z-index: -1;' +
                    '    background-color: rgba(0, 0, 0, 1);' +
                    '    border: 0;' +
                    '}',
                '.range-slider::-moz-range-track {' +
                    '    -moz-appearance: none;' +
                    '    background: none transparent;' +
                    '    border: 0;' +
                    '}',
                '.range-slider::-moz-focus-outer {' + '    border: 0;' + '}',
                '.range-value-container {' +
                    '    display: inline-block;' +
                    '    width: 45%;' +
                    '}',
                  '.range-value-parent {' +
                      'display: inline-block;' +
                        '    position: relative;' +
                        '    width: 100%;' +
                      '  vertical-align: middle;' +
                      '    text-align: center;' +
                        '}',
                '.range-value-container > * {' +
                    '    text-align: right;' +
                    '}',
                '.range-value-container--lower {' +
                    '    float: left;' +
                    '    width: 55px;' +
                    '}',
                '.range-value-container--upper {' +
                    '    float: right;' +
                    '    width: 55px;' +
                    '}',
                '.range-value {' +
                  '    width: 74%;' +
                  '    font-weight: normal;' +
                  '    font-size: small;' +
                  '    padding: 0;' +
                  '}',
                '.chm-text {' +
                    '    font-size: 12px;' +
                    '    font-weight: normal;' +
                    '}',

                /* Table body rows */

                '.wc-table table tbody tr:hover td {' +
                    '    border-bottom: 1px solid black;' +
                    '}',
                '.wc-table table tbody tr:hover td:first-child {' +
                    '    border-left: 1px solid black;' +
                    '}',
                '.wc-table table tbody tr.grayParent td:not(:first-child) {' +
                  '    background: #CCCCCC;' +
                  '    color: black;' +
                  '}',

                /* ID cells */

                '.chm-cell--id {' + '    background: white;' +
                    '   text-overflow: ellipsis;' +
                    '   white-space: nowrap;' +
                    '   overflow: hidden;' +
                    '   max-width: 0px;' +
                    '}' ,
                '.chm-table-row--expandable .chm-cell--id {' +
                    '    color: blue;' +
                    '    cursor: pointer;' +
                    '    text-decoration: underline;' +
                    '}',
                '.chm-cell--id--level2 {' + '    text-indent: 1em;' + '}',
                '.chm-cell--id--level3 {' + '    text-indent: 2em;' + '}',

                /* heat cells */

                '.chm-cell--heat {' +
                    '    text-align: right;' +
                    '    font-size: 12px;' +
                    '    border: 1px solid white;' +
                    '}',

                '.chm-cell--heat--level1 {' +
                '    background: #edf8e9;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level2 {' +
                '    background: #bae4b3;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level3 {' +
                '    background: #74c476;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level4 {' +
                '    background: #31a354;' +
                '    color: #ffffff;' +
                '}',
                '.chm-cell--heat--level5 {' +
                '    background: #006d2c;' +
                '    color: #ffffff;' +
                '}',
                '.chm-cell--heat--level6 {' +
                '    background: #eff3ff;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level7 {' +
                '    background: #bdd7e7;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level8 {' +
                '    background: #6baed6;' +
                '    color: #000000;' +
                '}',
                '.chm-cell--heat--level9 {' +
                '    background: #3182bd;' +
                '    color: #ffffff;' +
                '}',
                '.chm-cell--heat--level10 {' +
                '    background: #08519c;' +
                '    color: #ffffff;' +
                '}',
                '.chm-cell--heat--level11 {' +
                '    background: #08519c;' +
                '    color: #ffffff;' +
                '}'
            ];

    //Attach styles to DOM.
    this.style = this.document.createElement('style');
    this.style.type = 'text/css';
    this.style.innerHTML = styles.join('\n');
    this.document.getElementsByTagName('head')[0].appendChild(this.style);
}
