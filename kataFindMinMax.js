var min = function(list){
    var minNum = list[0]; // set to list[0] instead of just num = 0 incase of negative numbers
    for (var i = 0; i < list.length; i++){
        if (list[i] <= minNum){
            minNum = list[i];
        }
    }
    return minNum;
}

var max = function(list){
    var maxNum = list[0];
    for (var i = 0; i < list.length; i++){
        if (list[i] >= maxNum){
            maxNum = list[i]
        }
    }
    return maxNum;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])); // Returns -110
console.log(min([42, 54, 65, 87, 0])); // Returns 0
console.log(max([4,6,2,1,9,63,-134,566])); // Returns 566
console.log(max([5])); // Returns 5

