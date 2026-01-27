/** Chunk was on 77870 **/
/** chunk id: 517461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk506774 = require("./506774.js"),
  Chunk964486 = require("./964486.js");

function s(e, t) {
  let [n, s] = r.useState(() => {
    let n = l.w.get(e);
    return null != n ? n : t
  });
  return (0, i.Ay)(() => {
    null == l.w.get(e) && l.w.set(e, t)
  }), [n, r.useCallback(t => {
    s(t), l.w.set(e, t)
  }, [e])]
}