/*navigation.js */

var pages = [
        "animal/animal.html",
        "basketball2.html",
        "benzene.html",
        "clock.html",
        "college/college.html",
        "gear/gear.html",
        "givingtree/givingtree.html",
        "halloweenposter/halloween.html",
        "navicons/iconsai.html",
       "racismfolder/racism.html",
        "randomcircles.html",
        "resistor.html",
        "tictactoe.html",
        "zodiac.html",
        "resume/resume.html",
    ];
function findPage(url) {
    for (var i=0; i<pages.length; i++){
        if (url.indexOf(pages[i]) > -1){
            return i;
        }
    }
    return -1;
}
window.onload = function(e) {
    //1. figure out what page we're on
    var here = document.location.href;
    // alert (here);
    //2. find that page in the list
    var index = findPage(here);
    // alert (index);
    //3. find the previous and next pages
    var prev = (index - 1 + pages.length) % pages.length;
    var next = (index + 1) % pages.length;
    // alert (pages[prev] + "\n" + pages[next]);
    
    // 3b. account for files in folders
    if (pages[index].indexOf("/") > -1){
        pages[prev] = "../" + pages[prev];
        pages[next] = "../" + pages[next];
    }
    
    //4. put those pages on the left and right arrows
var arrows = document.getElementById("navigation").getElementsByTagName("a");
    // alert (arrows.length);
    arrows[0].href = pages[prev];
    arrows[2].href = pages[next];




}


















