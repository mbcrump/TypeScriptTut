/// <reference path="typings/jquery/jquery.d.ts" />

declare var $: JQueryStatic;

var onClicked = function () {
    alert("Clicked!");
}

var main = function () {
    $("#greet").click(onClicked);
}

$(document).ready(function () {
    main();
});
