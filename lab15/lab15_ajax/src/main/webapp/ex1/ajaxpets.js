document.observe("dom:loaded", function() {
    $("puppies").observe("click", updatePictures);
    $("kitties").observe("click", updatePictures);
});
function updatePictures(event) {
    var animal = "";
    if ($("puppies").checked) {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    new Ajax.Request("http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php", {
        method: "get",
        onSuccess: displayPictures,
        parameters: {"animal": animal}
    });
}
function displayPictures(ajax) {
    $("pictures").innerHTML = (ajax.responseText);
}