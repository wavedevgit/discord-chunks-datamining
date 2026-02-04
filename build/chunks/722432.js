/** Chunk was on 17869 **/
/** chunk id: 722432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk765548 = require("./765548.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk375901 = require("./375901.js"),
  Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    scrollerRef: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["scrollerRef"]), d = (0, i.A)(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToBottom({
        callback: () => requestAnimationFrame(t)
      })
    })
  }), h = (0, i.A)(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToTop({
        callback: () => requestAnimationFrame(t)
      })
    })
  }), p = l.useCallback(e => {
    var l, r, i;
    if (!n.keyboardModeEnabled) return;
    let a = null == (r = t.current) || null == (l = r.getScrollerNode()) ? true : l.ownerDocument,
      s = null == a ? true : a.querySelector(e);
    null != s && (null == (i = t.current) || i.scrollIntoViewNode({
      node: s,
      padding: 4 * c.mZ,
      callback: () => null == s ? true : s.focus()
    }))
  }, [n.keyboardModeEnabled, t]), f = l.useCallback(() => {
    n.hasMoreAfter || s._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
  }, [n.hasMoreAfter]), m = (0, r.Ay)({
    id: o.D,
    preserveFocusPosition: false,
    setFocus: p,
    isEnabled: n.keyboardModeEnabled && !n.isEditing,
    scrollToStart: h,
    scrollToEnd: d,
    onNavigateNextAtEnd: f
  }), g = l.useCallback(e => {
    let {
      atEnd: t = false
    } = e;
    t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem()
  }, [m]);
  return (0, a.Vo)({
    event: u.jej.FOCUS_MESSAGES,
    handler: g
  }), m
}