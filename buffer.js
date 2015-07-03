(function(buffer) {
    buffer.lines = [];

    buffer.init = function(text) {
        this.lines = text.map(function(line, i) {
            return new buffer.line(line, i);
        });
    }

    /**
     * Calculates the new row based on the current row and the
     * given offset and returns the line at the new row.
     *
     * If the new row is less than zero, return the first line.
     * If the new row is greater than the number of lines, return
     * the last line.
     */
    buffer.offset = function(row, diff) {
        var numLines = this.lines.length;
        var newRow = row + diff;
        newRow = Math.max(0, newRow);
        if (newRow >= numLines)
            newRow = Math.max(0, numLines - 1);

        return this.lines[newRow];
    };

    /**
     * Returns the last line in the buffer.
     */
    buffer.last = function() {
        var len = this.lines.length;
        if (len == 0)
            return null;

        return this.lines[len - 1];
    };

    /**
     * Get a string array of all the lines in the buffer.
     */
    buffer.allLines = function() {
        return this.lines.map(function(line) {
            return line.toString();
        });
    };

    /**
     * Concat the following two lines
     */

    buffer.mergeLines = function(i, j) {
        buffer.lines[i] = new buffer.line(buffer.lines[i].toString() +
            buffer.lines[j].toString(), i);
        buffer.lines.remove(j);
    };

})(window.buffer = window.buffer || {});
