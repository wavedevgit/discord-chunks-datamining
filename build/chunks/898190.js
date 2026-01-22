/** Chunk was on 97492 **/
/** chunk id: 898190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk181940 = require("./181940.js");

function i(e, t) {
  let {
    isLoading: n,
    error: i,
    onToggle: a
  } = (0, l.A)(e, t);
  return {
    isLoading: n,
    error: i,
    onDeactivate: r.useCallback(() => a(false), [a])
  }
}