//1.
var arr = [1, 2, 8, 5, 12, 30, 10];
var max = arr[0];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
        if(max === undefined || max < arr [i]) max = arr[i];
    }
    else if(arr[i]%2 === 1){
        if(min === undefined || min > arr [i]) min = arr[i];
    }
}
console.log("max = ", max);
console.log("min = ", min);

//2.
var list = [2, 10, 5, 2, 8, 10, 10, 0, -1];
var flag = [];
for(var i = 0; i < list.length; i++){
    var j = 0;
    var counter = 0;
    do{
        if(flag[j] === list[i]){
            i++;
            j = 0;
            break;
        }
        counter++;
        j++;
    } while(j < flag.length + 1);
    if(counter === flag.length + 1){
        flag[j-1] = list[i];
        counter = 0;
        for(var k = i; k < list.length; k++){
            if(list[i] === list[k]){
                counter++
            }
        }
        console.log(list[i], "->", counter)
    }
}