let characters1 = ["A", "B", "C", "D", "E", 10, 15, 6];
characters1.copyWithin(3, 0);
console.log(characters1);

let characters2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
characters2.sort();
characters2.copyWithin(0, 4, 8);
console.log(characters2);

let characters3 = ["Z", "Y", "A", "D", "E", 10, 1];
characters3.copyWithin(4, 2, 5);
characters3.copyWithin(2, 0, 2);
console.log(characters3);
console.log("---------------------------------------");