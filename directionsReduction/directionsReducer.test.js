import DirectionsReducer from './directionsReducer';

describe('DirectionsReducer', () => {
  describe('.reduce()', () => {
    it('reduces list of adjacent, opposite directions to []', () => {
      const directions = ['North', 'South'];
      expect(DirectionsReducer.reduce(directions)).toBe([]);
    });
    it('reduces adjacent, opposite directions recursiely', () => {
      const directions = ['North', 'East', 'West', 'South'];
      expect(DirectionsReducer.reduce(directions)).toBe([]);
    });
    it('does not reduce non-opposite directions', () => {
      const directions = ['North', 'East'];
      expect(DirectionsReducer.reduce(directions)).toBe(directions);
    });
    it('does not reduce non-adjacent opposite directions', () => {
      const directions = ['North', 'East', 'South', 'West'];
      expect(DirectionsReducer.reduce(directions)).toBe(directions);
    });
  });
});
