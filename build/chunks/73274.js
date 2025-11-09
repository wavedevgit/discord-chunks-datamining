/** Chunk was on 50642 **/
/** chunk id: 73274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
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
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
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
    h = i.useCallback(e => {
      var i, r, l;
      if (!n.keyboardModeEnabled) return;
      let a = null == (r = t.current) || null == (i = r.getScrollerNode()) ? true : i.ownerDocument,
        o = null == a ? true : a.querySelector(e);
      null != o && (null == (l = t.current) || l.scrollIntoViewNode({
        node: o,
        padding: 4 * c.kQ,
        callback: () => null == o ? true : o.focus()
      }))
    }, [n.keyboardModeEnabled, t]),
    f = i.useCallback(() => {
      n.hasMoreAfter || o.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)
    }, [n.hasMoreAfter]),
    m = (0, r.ZP)({
      id: s.W,
      preserveFocusPosition: false,
      setFocus: h,
      isEnabled: n.keyboardModeEnabled && !n.isEditing,
      scrollToStart: p,
      scrollToEnd: d,
      onNavigateNextAtEnd: f
    }),
    g = i.useCallback(e => {
      let {
        atEnd: t = false
      } = e;
      t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem()
    }, [m]);
  return (0, a.yp)({
    event: u.CkL.FOCUS_MESSAGES,
    handler: g
  }), m
}