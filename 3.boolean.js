// Boolean
const isTrue = new Boolean(true);
console.log(isTrue.valueOf());

const x = new Boolean(false);
console.log(x);
if (x) {
  // this code is executed
  console.log('ok');
}
/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 *
 */
