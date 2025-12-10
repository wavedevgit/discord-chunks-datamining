/** Chunk was on 83037 **/
/** chunk id: 448222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk238343 = require("./238343.jsx"),
  Chunk343334 = require("./343334.js");

function o(e, t) {
  let {
    isLoading: n,
    error: o,
    onToggle: a
  } = (0, l.Z)(e, t), {
    onActivate: s
  } = (0, i._C)(e, t), c = r.useCallback(() => a(false), [a]);
  return {
    isLoading: n,
    error: o,
    onActivate: s,
    onDeactivate: c,
    onShowDeactivate: r.useCallback(() => {
      (0, i.Aw)(e, t)
    }, [e, t]),
    onShowMore: r.useCallback(() => {
      (0, i.KE)(e, t)
    }, [e, t])
  }
}