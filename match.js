
/**
 * Module to do regular expression matching.
 */
(function(match) {

    /**
     * Search through the character array until a match is found.
     * 
     * Begin searching at the given starting position and move by
     * offset after each unsuccessful search.  The regex used to
     * search is generated by the regexFactory function.  The regex
     * used depends on the current character being searched.
     */
    var search = function(chars, regexFactory, start, offset) {
        var len = chars.length;
        for (var i = start; i >= 0 && i < len; i += offset) {
            var c = chars[i];
            var regex = regexFactory(c);
            if (regex.test(c))
                return i;
        }

        return -1;
    };

    /**
     * Find a match in the given character array and starting position 
     * using the supplied regular expression.
     */
    match.forward = function(chars, regex, start) {
        var factory = function(c) {
            return regex;
        };

        return match.forwardFactory(chars, factory, start);
    };

    /**
     * Find a match in the given character array and starting position 
     * using the supplied regular expression factory. Searches move forward 
     * through the character array.
     */
    match.forwardFactory = function(chars, regexFactory, start) {
        if (!start)
            start = 0;

        return search(chars, regexFactory, start, 1);
    };

    /**
     * Find a match in the given character array  and starting position using the
     * supplied regular expression. Searches move backwards through the
     * character array.
     */
    match.backwards = function(chars, regexFactory, start) {
        var factory = function(c) {
            return regex;
        };

        return match.backwardsFactory(chars, factory, start);
    };

    /**
     * Find a match in the given character array and starting position 
     * using the supplied regular expression factory. Searches move backwards 
     * through the character array.
     */
    match.backwardsFactory = function(chars, regexFactory, start) {
        if (!start)
            start = 0;

        return search(chars, regexFactory, start, -1);
    };

})(window.match = window.match || {});

