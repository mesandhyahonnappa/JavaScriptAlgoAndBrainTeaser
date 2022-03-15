// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counter = [0];
  let queue = [root, "|"];
  while (queue.length > 1) {
    const curNode = queue.shift();
    if (curNode !== "|") {
      queue.push(...curNode.children);
      counter[counter.length - 1]++;
    } else {
      queue.push("|");
      counter.push(0);
    }
  }
  return counter;
}

module.exports = levelWidth;
