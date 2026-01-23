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
  } = e, s = l.useCallback(e => {
    let l = t.current,
      r = document.querySelector(e);
    null != r && (null == l || l.scrollIntoViewNode({
      node: r,
      padding: n,
      callback: () => {
        var t;
        null == (t = document.querySelector(e)) || t.focus({
          preventScroll: true
        })
      }
    }))
  }, [n, t]), o = l.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]), c = l.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), [t]);
  return (0, r.Ay)({
    id: "forum-channel-list-".concat(i.id),
    isEnabled: a,
    scrollToStart: o,
    scrollToEnd: c,
    setFocus: s
  })
}