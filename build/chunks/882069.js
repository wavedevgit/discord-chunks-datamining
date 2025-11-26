/** Chunk was on 88569 **/
/** chunk id: 882069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk386239 = require("./386239.js");

function i(e) {
  let [t, n] = (0, l.z)(e.isExpanded, e.defaultExpanded || false, e.onExpandedChange), i = (0, r.useCallback)(() => {
    n(true)
  }, [n]), o = (0, r.useCallback)(() => {
    n(false)
  }, [n]), a = (0, r.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isExpanded: t,
    setExpanded: n,
    expand: i,
    collapse: o,
    toggle: a
  }
}