/** Chunk was on 17534 **/
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
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
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
  }), p = r.useCallback(e => {
    var r, l, i;
    if (!n.keyboardModeEnabled) return;
    let s = null == (l = t.current) || null == (r = l.getScrollerNode()) ? true : r.ownerDocument,
      a = null == s ? true : s.querySelector(e);
    null != a && (null == (i = t.current) || i.scrollIntoViewNode({
      node: a,
      padding: 4 * c.mZ,
      callback: () => null == a ? true : a.focus()
    }))
  }, [n.keyboardModeEnabled, t]), g = r.useCallback(() => {
    n.hasMoreAfter || a._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
  }, [n.hasMoreAfter]), f = (0, l.Ay)({
    id: o.D,
    preserveFocusPosition: false,
    setFocus: p,
    isEnabled: n.keyboardModeEnabled && !n.isEditing,
    scrollToStart: h,
    scrollToEnd: d,
    onNavigateNextAtEnd: g
  }), m = r.useCallback(e => {
    let {
      atEnd: t = false
    } = e;
    t ? f.focusLastVisibleItem() : f.focusFirstVisibleItem()
  }, [f]);
  return (0, s.Vo)({
    event: u.jej.FOCUS_MESSAGES,
    handler: m
  }), f
}