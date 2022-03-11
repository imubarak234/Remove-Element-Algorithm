var removeElement = function(nums, val) {
     let k = 0;
    for(let x = 0; x < nums.length; x++){
        if(nums[x] === val){
          nums.splice(x,1)
          nums.push("_")
          k++;
          x--;
        }
    }
    
    return nums.length - k;
};
