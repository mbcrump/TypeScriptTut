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
//# sourceMappingURL=03.js.map