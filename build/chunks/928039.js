/** Chunk was on 34795 **/
/** chunk id: 928039, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function u(t, e, n) {
  let u = (0, a.bG)([i.A], () => i.A.keyboardModeEnabled),
    o = r.useCallback(t => {
      let n = document.querySelector(t),
        r = e.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [e]),
    s = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    c = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]);
  return (0, l.Ay)({
    id: t,
    isEnabled: u,
    setFocus: o,
    scrollToStart: s,
    scrollToEnd: c,
    orientation: null == n ? true : n.orientation
  })
}