//Ambient Declarations
//#1. References for the DOM and JavaScript 
//    are already preloaded
document.title = "My New Title";
/// <reference path="typings/jquery/jquery.d.ts" />
var onClicked = function () {
    alert("Clicked!");
};
var main = function () {
    $("#greet").click(onClicked);
};
$(document).ready(function () {
    main();
});
//# sourceMappingURL=03-working-with-typings.js.map