/** Chunk was on 9456 **/
/** chunk id: 260503, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk924826 = require("./924826.js");

function a(e) {
  let {
    listRef: t,
    padding: n,
    channel: a,
    isEnabled: l
  } = e, s = r.useCallback(e => {
    let r = t.current,
      i = document.querySelector(e);
    null != i && (null == r || r.scrollIntoViewNode({
      node: i,
      padding: n,
      callback: () => {
        var t;
        null == (t = document.querySelector(e)) || t.focus({
          preventScroll: true
        })
      }
    }))
  }, [n, t]), o = r.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]), c = r.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]);
  return (0, i.ZP)({
    id: "forum-channel-list-".concat(a.id),
    isEnabled: l,
    scrollToStart: o,
    scrollToEnd: c,
    setFocus: s
  })
}