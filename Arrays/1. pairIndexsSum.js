/** 
  Find pair with given sum in the array
  arr = [8, 7, 2, 5, 3, 1]
  sum = 10
  
  Output:
  [[0, 2],[1, 4]]
*/

let findPairSum = (arr, sum) => {
    let map = {}, result = [];
    for(let i = 0; i < arr.length; i++){
        let remainder = sum-arr[i];
        if(map.hasOwnProperty(remainder)){
	    result = [...result, [map[remainder], i]];
        }
	    map[arr[i]] = i;
    }
    return result;
}


findPairSum([8, 7, 2, 5, 3, 1], 10);
