/*
Given an array A of integers, return the length of the longest arithmetic subsequence in A.

Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

 

Example 1:

Input: [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
Example 2:

Input: [9,4,7,2,10]
Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].
Example 3:

Input: [20,1,15,3,10,5,8]
Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].

Input: [83,20,17,43,52,78,68,45]
Output: 2
*/

//Solution


var longestArithSeqLength = function(A) {
    var count = 0;
    for(var i=0; i<A.length-1; i++){
        for(var j=i+1; j<A.length; j++) {
            //try to establish sequence with every A[i], A[j], ....
            var last = A[j];
            var diff = A[j] - A[i];
            var curr = 2; //already 2 elements are in
            var k = j;
            while(true) {
                var next = last + diff;
                var index = A.indexOf(next, k+1);
                if(index == -1)
                {
                    //next not found or found in bad spot, curr seq stops here
                    if(curr > count)
                    {
                        count = curr;
                    }
                    break;
                }
                else if(index > k){
                    last = next;
                    k = index;
                    curr++;
                }
            }
        }
        
        //max seq is found & longer sequence is not possible
        if(count > A.length-i)
        {
            break;
        }

    }
    
    return count;
};
