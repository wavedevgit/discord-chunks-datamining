/** Chunk was on 46875 **/
/** chunk id: 375907, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js");

function i(e) {
  let {
    listRef: t,
    padding: n,
    channel: i,
    isEnabled: a
  } = e, s = r.useCallback(e => {
    let r = t.current,
      l = document.querySelector(e);
    null != l && (null == r || r.scrollIntoViewNode({
      node: l,
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
  return (0, l.Ay)({
    id: "forum-channel-list-".concat(i.id),
    isEnabled: a,
    scrollToStart: o,
    scrollToEnd: c,
    setFocus: s
  })
}