

function mergeArray(left, right){
    let leftCount = 0;
    let rightCount = 0;
    let array = [];
    for(let i = 0; i < (left.length + right.length); i++){
        if(leftCount >= left.length){
            array.push(right[rightCount]);
            rightCount++;
        }else if(rightCount >= right.length){
            array.push(left[leftCount]);
            leftCount++;
        } else if(right[rightCount] < left[leftCount]){
            array.push(right[rightCount]);
            rightCount++;
        }else{
            array.push(left[leftCount]);
            leftCount++;
        }

    }
    return array;
}

function mergesort(array){
    if(array.length <= 1){
        return array;
    }
    let index = Math.floor(array.length/2);
    return mergeArray(mergesort(array.slice(0, index)),mergesort(array.slice(index)));
}


let testArray = [3, 5 ,1 ,33 ,2321 ,2523, 2, 0 , 464 ,22 , 4];
console.log(mergesort(testArray));