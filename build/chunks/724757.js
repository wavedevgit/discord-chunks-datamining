/** Chunk was on 24262 **/
/** chunk id: 724757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function o(e, t, n) {
  let o = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
    s = i.useCallback(e => {
      let n = document.querySelector(e),
        i = t.current;
      null != n && null != i && (n.focus(), i.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    c = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    d = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, r.ZP)({
    id: e,
    isEnabled: o,
    setFocus: s,
    scrollToStart: c,
    scrollToEnd: d,
    orientation: null == n ? true : n.orientation
  })
}