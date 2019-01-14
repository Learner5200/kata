export default class DirectionReducer {
  static reduce(directions) {
    const oppositeDirections = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      WEST: 'EAST',
      EAST: 'WEST',
    };
    let i = 0;
    while (directions[i + 1] !== undefined) {
      const currentDirection = directions[i];
      const nextDirection = directions[i + 1];
      if (oppositeDirections[currentDirection] === nextDirection) {
        directions.splice(i, 2);
        i -= 1;
      } else {
        i += 1;
      }
    }
    return directions;
  }
}
