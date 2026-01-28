/** Chunk was on 44384 **/
/** chunk id: 928039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function a(e, t, n) {
  let a = (0, l.bG)([o.A], () => o.A.keyboardModeEnabled),
    s = r.useCallback(e => {
      let n = document.querySelector(e),
        r = t.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    c = r.useCallback(() => new Promise(e => {
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
  return (0, i.Ay)({
    id: e,
    isEnabled: a,
    setFocus: s,
    scrollToStart: c,
    scrollToEnd: u,
    orientation: null == n ? true : n.orientation
  })
}