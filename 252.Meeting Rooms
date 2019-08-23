/*
Time complexity  Space Complexity   LeetCode-level
---------------  ----------------   -------------

O(nlogn)	       O(1)		            Easy

*/


function canAttendMeeting(intervals){ 
    intervals.sort((a,b)=> a[0]-b[0]);
    let intervalLastTime = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(intervalLastTime < intervals[i][0]){
            intervalLastTime = intervals[i][1];
        }else{
            return false;
        }
    }
    return true;
}


/* ====Test====== */

canAttendMeeting([[0,30],[5,10],[15,20]])
false

canAttendMeeting([[7,10],[2,4]])
true
