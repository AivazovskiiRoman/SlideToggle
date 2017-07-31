$(document).ready(function () {
    $('.item__label').click(function () {
        var div = $('#' + this.name);
        div.slideToggle('fast');
    });
});