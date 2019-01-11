export default class DirectionReducer {
  static reduceOnce(directions) {
    const oppositeDirections = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      WEST: 'EAST',
      EAST: 'WEST',
    };
    const reducedDirections = directions.slice();
    for (let i = 0; i < directions.length; i += 1) {
      const currentDirection = directions[i];
      const nextDirection = directions[i + 1];
      if (oppositeDirections[currentDirection] === nextDirection) {
        reducedDirections.splice(i, 2);
      }
    }
    return reducedDirections;
  }

  static reduce(directions) {
    while (directions.length !== this.reduceOnce(directions).length) {
      directions = this.reduceOnce(directions);
    }
    return directions;
  }
}
