/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0;
    let r = nums.length-1;
    while(l<=r){
        let m = l + Math.floor((r-l)/2)
        if(nums[m]===target){
            return m
        }
        //check which side is sorted
        if(nums[m]<nums[r]){
            if(target>nums[m]&&target<=nums[r]){
                l = m+1
            }else{
                r = m-1
            }
        }else{
            if(target<nums[m]&&target>=nums[l]){
                r= m-1
            }else{
                l = m+1
            }
        }
    }
    return -1
};