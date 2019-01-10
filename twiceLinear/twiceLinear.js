/*
Start with 1 in array
maintain a bench array of the 2x+1 and 3x+1 of every item in the array.
add the smallest thing in the bench to the list
add that thing's 2x+1 and 3x+1 to the bench
iterate until the array is of size
*/

export default class TwiceLinearSolver {
  static solve(integer) {
    const FIRST = 1;
    const sequence = [FIRST];
    let numbersToAdd = [this.doubleAddOne(FIRST), this.tripleAddOne(FIRST)];
    while (sequence.length <= integer) {
      numbersToAdd = this.process(numbersToAdd, sequence);
    }
    return sequence.pop();
  }

  static process(numbersToAdd, sequence) {
    const nextNumber = Math.min(...numbersToAdd);
    sequence.push(nextNumber);
    numbersToAdd.push(this.doubleAddOne(nextNumber));
    numbersToAdd.push(this.tripleAddOne(nextNumber));
    const newNumbersToAdd = numbersToAdd.filter(number => number !== nextNumber);
    return newNumbersToAdd;
  }

  static doubleAddOne(integer) {
    return (2 * integer) + 1;
  }

  static tripleAddOne(integer) {
    return (3 * integer) + 1;
  }
}
