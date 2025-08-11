/** Chunk was on web.js **/
/** chunk id: 73274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk73800 = require("./73800.js"),
  Chunk924826 = require("./924826.js"),
  Chunk448986 = require("./448986.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk534091 = require("./534091.js"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js");

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function _(e) {
  var {
    scrollerRef: t
  } = e, n = d(e, ["scrollerRef"]);
  let f = (0, o.Z)(() => {
      let e = t.current;
      return null == e ? Promise.resolve() : new Promise(t => {
        e.scrollToBottom({
          callback: () => requestAnimationFrame(t)
        })
      })
    }),
    _ = (0, o.Z)(() => {
      let e = t.current;
      return null == e ? Promise.resolve() : new Promise(t => {
        e.scrollToTop({
          callback: () => requestAnimationFrame(t)
        })
      })
    }),
    p = r.useCallback(e => {
      var r, i, o;
      if (!n.keyboardModeEnabled) return;
      let a = null == (i = t.current) || null == (r = i.getScrollerNode()) ? true : r.ownerDocument,
        s = null == a ? true : a.querySelector(e);
      null != s && (null == (o = t.current) || o.scrollIntoViewNode({
        node: s,
        padding: 4 * c.kQ,
        callback: () => null == s ? true : s.focus()
      }))
    }, [n.keyboardModeEnabled, t]),
    h = r.useCallback(() => {
      n.hasMoreAfter || s.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)
    }, [n.hasMoreAfter]),
    m = (0, i.ZP)({
      id: l.W,
      preserveFocusPosition: false,
      setFocus: p,
      isEnabled: n.keyboardModeEnabled && !n.isEditing,
      scrollToStart: _,
      scrollToEnd: f,
      onNavigateNextAtEnd: h
    }),
    g = r.useCallback(e => {
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