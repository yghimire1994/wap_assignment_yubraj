$(document).ready(function () {
    const maze=$('#maze');
    const boundary=$('div.boundary',maze);
    let win=null;
    $('#start').click(function () {
        reset();
        boundary.mouseover(function () {
            lose();
        });
        maze.mouseleave(function () {
            lose();
        })
    });
    $('#end').mouseover(function () {
        if(win==false)
            return;
        boundary.css('background-color','#eeeeee');
        $('#status').text("You win! :)");
        win=true
    });
    function reset() {
        boundary.css('background-color','#eeeeee');
        $('#status').text("Click the \"S\" to begin.");
        win=null;
    }
    function lose() {
        if (win==true)
            return;
        boundary.css('background-color','red');
        $('#status').text("You lose! :(");
        win=false;
    }
});
