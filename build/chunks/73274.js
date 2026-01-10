/** Chunk was on 81985 **/
/** chunk id: 73274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk924826 = require("./924826.js"),
  Chunk448986 = require("./448986.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk534091 = require("./534091.js"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  var {
    scrollerRef: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["scrollerRef"]);
  let d = (0, l.Z)(() => {
      let e = t.current;
      return null == e ? Promise.resolve() : new Promise(t => {
        e.scrollToBottom({
          callback: () => requestAnimationFrame(t)
        })
      })
    }),
    p = (0, l.Z)(() => {
      let e = t.current;
      return null == e ? Promise.resolve() : new Promise(t => {
        e.scrollToTop({
          callback: () => requestAnimationFrame(t)
        })
      })
    }),
    f = r.useCallback(e => {
      var r, i, l;
      if (!n.keyboardModeEnabled) return;
      let a = null == (i = t.current) || null == (r = i.getScrollerNode()) ? true : r.ownerDocument,
        o = null == a ? true : a.querySelector(e);
      null != o && (null == (l = t.current) || l.scrollIntoViewNode({
        node: o,
        padding: 4 * c.kQ,
        callback: () => null == o ? true : o.focus()
      }))
    }, [n.keyboardModeEnabled, t]),
    h = r.useCallback(() => {
      n.hasMoreAfter || o.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)
    }, [n.hasMoreAfter]),
    g = (0, i.ZP)({
      id: s.W,
      preserveFocusPosition: false,
      setFocus: f,
      isEnabled: n.keyboardModeEnabled && !n.isEditing,
      scrollToStart: p,
      scrollToEnd: d,
      onNavigateNextAtEnd: h
    }),
    m = r.useCallback(e => {
      let {
        atEnd: t = false
      } = e;
      t ? g.focusLastVisibleItem() : g.focusFirstVisibleItem()
    }, [g]);
  return (0, a.yp)({
    event: u.CkL.FOCUS_MESSAGES,
    handler: m
  }), g
}