export default class Permuter {
  static permute(string, cumul = '', array = []) {
    for (let i = 0; i < string.length; i += 1) {
      const newCumul = cumul + string[i];
      if (string.length <= 1) array.push(newCumul);
      else {
        const restOfString = string.slice(0, i) + string.slice(i + 1);
        this.permute(restOfString, newCumul, array);
      }
    }
    return array;
  }
}
