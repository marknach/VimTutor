
$(document).ready(function() {
    var v = new Vim();

    $(document).keypress(function (e) {
        v.handleKey(e.keyCode);
    });
});
