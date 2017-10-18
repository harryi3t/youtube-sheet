var GoogleSpreadsheet = require('google-spreadsheet'),
    spreadsheet;

module.exports = {
    init: function (spreadsheetId, credentials, cb) {
        spreadsheet = new GoogleSpreadsheet(spreadsheetId);
        spreadsheet.useServiceAccountAuth(credentials, cb);
    },

    getSheetInfo: function (cb) {
        if (!spreadsheet) return cb(new Error('spreadsheet not initialized, call init() first'));
        spreadsheet.getInfo(cb);
    },

    /**
     * @param {number} worksheetId index of the worksheet (starting from 1)
     * @param {object} [options] Optional parameters
     * @param {number} [options.offset] start reading from row #
     * @param {number} [options.limit] max # of rows to read at once
     * @param {string} [options.orderby] column key to order by
     * @param {bool} [options.reverse] reverse results
     * @param {string} [options.query] send a structured query for rows
     */
    getRows: function (worksheetId, options, cb) {
        if (!spreadsheet) return cb(new Error('spreadsheet not initialized, call init() first'));

        if (typeof options === 'function') {
            cb = options;
            options = {};
        }

        spreadsheet.getRows(worksheetId, options, cb);
    },

    /**
     * @param {number} worksheetId index of the worksheet (starting from 1)
     * @param {object} [options] Optional parameters
     * @param {number} [options.minRow] row range min (uses #s visible on the left)
     * @param {number} [options.maxRow] row range max
     * @param {number} [options.minCol] column range min (uses numbers, not letters!)
     * @param {number} [options.maxCol] column range max
     * @param {bool} [options.returnEmpty] include empty cells
     */
    getCells: function (worksheetId, options, cb) {
        if (!spreadsheet) return cb(new Error('spreadsheet not initialized, call init() first'));

        if (typeof options === 'function') {
            cb = options;
            options = {};
        }

        spreadsheet.getRows(worksheetId, options, cb);
    },

    bulkUpdateCells: function (cells, cb) {
        if (!spreadsheet) return cb(new Error('spreadsheet not initialized, call init() first'));

        spreadsheet.bulkUpdateCells(cells, cb);
    }
};