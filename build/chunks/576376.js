/** Chunk was on 7384 **/
/** chunk id: 576376, original params: e,t,n (module,exports,require) **/
function i(e) {
  let t, n = false;
  return function() {
    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return n || (n = true, t = e(...r)), t
  }
}
require.d(exports, {
  h: () => i
}), require("./388685.js")