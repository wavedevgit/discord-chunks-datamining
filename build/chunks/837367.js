/** Chunk was on 9207 **/
/** chunk id: 837367, original params: e,t,n (module,exports,require) **/
function r(e) {
  let t, n = false;
  return function() {
    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
    return n || (n = true, t = e(...i)), t
  }
}
require.d(exports, {
  q: () => r
}), require("./896048.js")