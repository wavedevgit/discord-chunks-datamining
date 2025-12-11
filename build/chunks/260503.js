/** Chunk was on 193 **/
/** chunk id: 260503, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js");

function i(e) {
  let {
    listRef: t,
    padding: n,
    channel: i,
    isEnabled: l
  } = e, s = a.useCallback(e => {
    let a = t.current,
      r = document.querySelector(e);
    null != r && (null == a || a.scrollIntoViewNode({
      node: r,
      padding: n,
      callback: () => {
        var t;
        null == (t = document.querySelector(e)) || t.focus({
          preventScroll: true
        })
      }
    }))
  }, [n, t]), o = a.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]), c = a.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]);
  return (0, r.ZP)({
    id: "forum-channel-list-".concat(i.id),
    isEnabled: l,
    scrollToStart: o,
    scrollToEnd: c,
    setFocus: s
  })
}