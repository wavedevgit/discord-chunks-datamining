/** Chunk was on 31253 **/
/** chunk id: 724757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function a(e, t, n) {
  let a = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
    c = r.useCallback(e => {
      let n = document.querySelector(e),
        r = t.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    s = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    u = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, i.ZP)({
    id: e,
    isEnabled: a,
    setFocus: c,
    scrollToStart: s,
    scrollToEnd: u,
    orientation: null == n ? true : n.orientation
  })
}