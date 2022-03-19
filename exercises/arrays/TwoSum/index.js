// --- Directions
// Given an numsay of integers, return the indices of two numbers that add up to the given target
// --- Examples
// twoSum([1,3,7,9,2], 11) => [3,4]
//Edge cases
// constraint - no duplicate numbers
// all positive integers
// there might not always be a solution ? what to return if there is no solution? -1 or null or []
// can there be multiple pairs that add up to the value
//
// Edge cases
// [1,3,7,9,2], 99 => null //No possible solution
// [1], <any> => null
// [], <any> => null
// [1,2], 3 => nums[0] + nums[1] === 3 ? [0,1] : null

var twoSum = function (nums, target) {
  const readNums = {};

  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    console.log(readNums);
    const pairIndex = readNums[target - nums[i]];
    console.log(pairIndex);
    console.log(nums[i]);
    readNums[nums[i]] = i;
    if (pairIndex !== undefined) {
      return [pairIndex, i];
    }
  }

  return [];
};

console.log(twoSum([3, 2, 4], 6));
