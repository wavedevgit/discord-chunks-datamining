/** Chunk was on 82124 **/
/** chunk id: 180869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk343334 = require("./343334.js");

function l(e, t) {
  let {
    isLoading: n,
    error: l,
    onToggle: a
  } = (0, i.Z)(e, t);
  return {
    isLoading: n,
    error: l,
    onDeactivate: r.useCallback(() => a(false), [a])
  }
}