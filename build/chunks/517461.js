/** Chunk was on 97492 **/
/** chunk id: 517461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk506774 = require("./506774.js"),
  Chunk964486 = require("./964486.js");

function a(e, t) {
  let [n, a] = r.useState(() => {
    let n = l.w.get(e);
    return null != n ? n : t
  });
  return (0, i.Ay)(() => {
    null == l.w.get(e) && l.w.set(e, t)
  }), [n, r.useCallback(t => {
    a(t), l.w.set(e, t)
  }, [e])]
}