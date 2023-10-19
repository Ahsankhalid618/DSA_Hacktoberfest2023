let queue = [];

// Enqueue elements into the queue
queue.push(1);
queue.push(2);

// Dequeue the front element from the queue
let dequeuedItem = queue.shift();

console.log(dequeuedItem); // Output: 1 (First-in, first-out)
