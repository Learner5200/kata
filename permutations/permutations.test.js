import Permuter from './permuter';

describe('Permuter', () => {
  describe('.permute()', () => {
    it('does not alter single character', () => {
      expect(Permuter.permute('a')).toEqual(['a']);
    });
    it('returns both permutations for two character string', () => {
      expect(Permuter.permute('ab')).toEqual(['ab', 'ba']);
    });
    it('returns all three permutations for three character string', () => {
      expect(Permuter.permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    });
  });
});
