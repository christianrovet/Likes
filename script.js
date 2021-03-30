var likeCount = {
    count: 0,
    count1: 0,
    count2: 0,
}


var counter = document.querySelector("#counter");
var counter1 = document.querySelector("#counter1");
var counter2 = document.querySelector("#counter2");

function add1() {
    likeCount.count ++;
    counter.innerText = likeCount.count + "  like(s)";
}
function add1_() {
    likeCount.count1 ++;
    counter1.innerText = likeCount.count1 + "  like(s)";
}
function add1__() {
    likeCount.count2 ++;
    counter2.innerText = likeCount.count2 + "  like(s)";
}