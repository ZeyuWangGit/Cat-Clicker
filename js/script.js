var $catlist = $('#cat-list');
$catlist.append('<ul>The Cat List</ul>');
$catlist.append('<li id="cat1">One</li>');
$catlist.append('<li id="cat2">Two</li>');
$catlist.append('<li id="cat3">Three</li>');
$catlist.append('<li id="cat4">Four</li>');
$catlist.append('<li id="cat5">Five</li>');

var $cat1 = $('#cat1');
var $cat2 = $('#cat2');
var $cat3 = $('#cat3');
var $cat4 = $('#cat4');
var $cat5 = $('#cat5');
var $catimg = $('#catimg');

$cat1.click(function(e) {
    $catimg.empty();
    $catimg.append('<h3>First Cat</h3>');
    $catimg.append('<ul id="count-number-1">Initial 0 times</ul>');
    $catimg.append('<img id="catimgone" src="img/cat1.jpg" alt="Cat">');
    var $catimgone = $('#catimgone');
    var count1 = 0;
    var $countNumber1 = $('#count-number-1');
    $catimgone.click(function(a) {
        count1 = count1 + 1;
        $countNumber1.text("The Count of cat click is: "+count1);
    });
});

$cat2.click(function(e) {
    $catimg.empty();
    $catimg.append('<h3>Second Cat</h3>');
    $catimg.append('<ul id="count-number-2">Initial 0 times</ul>');
    $catimg.append('<img id="catimg2" src="img/cat2.jpg" alt="Cat">');
    var $catimg2 = $('#catimg2');
    var count2 = 0;
    var $countNumber2 = $('#count-number-2');
    $catimg2.click(function(a) {
        count2 = count2 + 1;
        $countNumber2.text("The Count of cat click is: "+count2);
    });
});

$cat3.click(function(e) {
    $catimg.empty();
    $catimg.append('<h3>Three Cat</h3>');
    $catimg.append('<ul id="count-number-3">Initial 0 times</ul>');
    $catimg.append('<img id="catimg3" src="img/cat3.jpg" alt="Cat">');
    var $catimg3 = $('#catimg3');
    var count3 = 0;
    var $countNumber3 = $('#count-number-3');
    $catimg3.click(function(a) {
        count3 = count3 + 1;
        $countNumber3.text("The Count of cat click is: "+count3);
    });
});

$cat4.click(function(e) {
    $catimg.empty();
    $catimg.append('<h3>Fourth Cat</h3>');
    $catimg.append('<ul id="count-number-4">Initial 0 times</ul>');
    $catimg.append('<img id="catimg4" src="img/cat4.jpg" alt="Cat">');
    var $catimg4 = $('#catimg4');
    var count4 = 0;
    var $countNumber4 = $('#count-number-4');
    $catimg4.click(function(a) {
        count4 = count4 + 1;s
        $countNumber4.text("The Count of cat click is: "+count4);
    });
});

$cat5.click(function(e) {
    $catimg.empty();
    $catimg.append('<h3>Fifth Cat</h3>');
    $catimg.append('<ul id="count-number-5">Initial 0 times</ul>');
    $catimg.append('<img id="catimg5" src="img/cat5.jpg" alt="Cat">');
    var $catimg5 = $('#catimg5');
    var count5 = 0;
    var $countNumber5 = $('#count-number-5');
    $catimg5.click(function(a) {
        count5 = count5 + 1;
        $countNumber5.text("The Count of cat click is: "+count5);
    });
});