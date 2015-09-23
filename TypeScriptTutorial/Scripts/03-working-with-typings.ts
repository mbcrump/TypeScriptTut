//Ambient Declarations

//#1. references for the DOM and JavaScript are already preloaded
document.title = "My New Title";

//#2: You can reference external libraries as shown below. 
/// <reference path="typings/jquery/jquery.d.ts" />

//http://definitelytyped.org/

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
