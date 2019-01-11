import DirectionsReducer from './directionsReducer';

describe('DirectionsReducer', () => {
  describe('.reduce()', () => {
    it('reduces list of adjacent, opposite directions to []', () => {
      const directions = ['NORTH', 'SOUTH'];
      expect(DirectionsReducer.reduce(directions)).toEqual([]);
    });
    it('reduces adjacent, opposite directions recursiely', () => {
      const directions = ['NORTH', 'EAST', 'WEST', 'SOUTH'];
      expect(DirectionsReducer.reduce(directions)).toEqual([]);
    });
    it('does not reduce non-opposite directions', () => {
      const directions = ['NORTH', 'EAST'];
      expect(DirectionsReducer.reduce(directions)).toEqual(directions);
    });
    it('does not reduce non-adjacent opposite directions', () => {
      const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
      expect(DirectionsReducer.reduce(directions)).toEqual(directions);
    });
  });
});
