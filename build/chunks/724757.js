/** Chunk was on web.js **/
/** chunk id: 724757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function s(e, t, n) {
  let s = (0, o.e7)([a.Z], () => a.Z.keyboardModeEnabled),
    l = r.useCallback(e => {
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
  return (0, i.ZP)({
    id: e,
    isEnabled: s,
    setFocus: l,
    scrollToStart: c,
    scrollToEnd: u,
    orientation: null == n ? true : n.orientation
  })
}