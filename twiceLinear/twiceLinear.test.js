import TwiceLinearSolver from './twiceLinear';

describe('TwiceLinearSolver', () => {
  describe('.solve()', () => {
    it('outputs 1 when given 0', () => {
      expect(TwiceLinearSolver.solve(0)).toBe(1);
    });
    it('outputs 10 when given 5', () => {
      expect(TwiceLinearSolver.solve(5)).toBe(10);
    });
    it('outputs 22 when given 10', () => {
      expect(TwiceLinearSolver.solve(10)).toBe(22);
    });
  });
});
