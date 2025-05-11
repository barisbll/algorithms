/**
 * Problem: valid-anagram
 * 
 * Description:
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

 * An anagram is a string that contains the exact same characters as another string, 
 * but the order of the characters can be different.
 * 
 * Examples:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 */

// Solution
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string) {
    return this.areMapsEqual(this.mapWord(s), this.mapWord(t));
  }

  /**
   * @param {string} word
   * @return {Map<string, number>}
   */
  mapWord(word: string): Map<string, number> {
    const map = new Map();
    for (const c of word) {
      if (map.get(c)) {
        map.set(c, (map.get(c) + 1));
      } else {            
        map.set(c, 1);
      }

    }

    return map;
  }

  /**
   * @param {Map<char, number>} mapA
   * @param {Map<char, number>} mapB
   * @return bool
   */
  areMapsEqual(mapA: Map<string, number>, mapB: Map<string, number>) {
    if (mapA.size !== mapB.size) {
      return false;
    }

    for (const [key, valA] of mapA) {
      if (!mapB.has(key) || (mapB.get(key) !== mapA.get(key))) {
        return false;
      }
    }

    return true;
  }
}



// Test cases
function runTests() {
  // Add your test cases here
  console.log('Running tests for valid-anagram...');

  const solution = new Solution();

  console.log(solution.isAnagram('xx', 'x'));
}

runTests();

export {}; // Makes this file a module
