import TwiceLinearSolver from './twiceLinear';

describe('TwiceLinearSolver', () => {
  describe('.solve()', () => {
    it('outputs 22 when given 10', () => {
      expect(TwiceLinearSolver.solve(10)).toBe(22);
    });
  });
});
