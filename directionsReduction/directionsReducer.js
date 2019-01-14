export default class DirectionReducer {
  static reduceOnce(directions) {
    const oppositeDirections = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      WEST: 'EAST',
      EAST: 'WEST',
    };
    const reducedOnceDirections = directions.slice();
    // const deleteFrom = reducedDirections.findIndex((index) => {
    //
    // })

    for (let i = directions.length - 1; i >= 0; i -= 1) {
      const currentDirection = directions[i];
      const nextDirection = directions[i - 1];
      if (oppositeDirections[currentDirection] === nextDirection) {
        reducedOnceDirections.splice(i - 1, 2);
      }
    }
    return reducedOnceDirections;
  }

  static reduce(directions) {
    let reducedDirections = directions;
    while (reducedDirections.length !== this.reduceOnce(reducedDirections).length) {
      reducedDirections = this.reduceOnce(reducedDirections);
    }
    return reducedDirections;
  }
}
