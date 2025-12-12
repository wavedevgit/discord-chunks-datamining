/** Chunk was on web.js **/
/** chunk id: 72006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FZ: () => D,
  Hl: () => Z,
  NJ: () => j,
  R8: () => k,
  Sq: () => N,
  Wg: () => U,
  Zn: () => A,
  c2: () => x,
  eE: () => M,
  iE: () => F,
  iK: () => L,
  l8: () => w,
  lv: () => P,
  m1: () => G,
  nR: () => R,
  q0: () => o.a,
  x0: () => T,
  xb: () => V,
  yd: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk923010 = require("./923010.js"),
  Chunk797487 = require("./797487.js"),
  o = require.n(Chunk797487),
  Chunk520480 = require("./520480.js"),
  s = require.n(Chunk520480),
  Chunk868149 = require("./868149.js"),
  c = require.n(Chunk868149),
  Chunk558094 = require("./558094.js"),
  d = require.n(Chunk558094),
  Chunk76443 = require("./76443.js"),
  p = require.n(Chunk76443),
  Chunk633868 = require("./633868.js"),
  m = require.n(Chunk633868),
  Chunk277816 = require("./277816.js"),
  g = require.n(Chunk277816),
  Chunk257834 = require("./257834.js"),
  b = require.n(Chunk257834),
  Chunk259303 = require("./259303.js"),
  O = require.n(Chunk259303),
  Chunk269166 = require("./269166.js"),
  S = require.n(Chunk269166);

function I(e, t, n, i) {
  let o = i.getCurrentContent(),
    a = null;
  null != e && (a = (o = o.createEntity(...e)).getLastCreatedEntityKey());
  let s = o.getFirstBlock(),
    l = new r.SelectionState({
      anchorKey: s.getKey(),
      anchorOffset: t,
      focusKey: s.getKey(),
      focusOffset: n
    });
  return o = r.Modifier.applyEntity(o, l, a), r.EditorState.set(i, {
    currentContent: o
  })
}

function T(e, t, n, i) {
  let o, a, l = t.getCurrentContent(),
    c = l.getFirstBlock(),
    u = c.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != i && i > u.length && (i = u.length), o = new r.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: n,
    focusKey: c.getKey(),
    focusOffset: null != i && 0 !== i ? i : n
  })) : o = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = s()(l, o);
  return o.isCollapsed() ? (l = r.Modifier.insertText(l, o, e, d, f), a = "insert-characters") : (l = r.Modifier.replaceText(l, o, e, d, f), a = "replace-characters"), r.EditorState.push(t, l, a)
}

function C(e, t) {
  switch (e) {
    case "delete":
      return O()(t);
    case "delete-word":
      return p()(t);
    case "backspace":
      return b()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return c()(t);
    default:
      return t
  }
}

function A(e, t) {
  switch (e) {
    case "transpose-characters":
      return S()(t);
    case "move-selection-to-start-of-block":
      return g()(t);
    case "move-selection-to-end-of-block":
      return m()(t);
    default:
      return t
  }
}

function N(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    i = r.getFirstBlock(),
    o = i.getText(),
    a = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(i.getEntityAt(e)).getType(),
      s = o.substring(e, t);
    a.push({
      processed: false,
      type: n,
      start: e,
      end: t,
      text: s
    })
  }), e.forEach(e => {
    let r = false;
    if (a.forEach(n => {
        let {
          type: i,
          start: o,
          end: a
        } = e, s = e.getFullMatch();
        !n.processed && (n.type === i && n.start === o && n.text === s ? (n.processed = true, r = true) : (o >= n.start && o < n.end || a > n.start && a <= n.end) && (n.processed = true, t = I(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = I([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), a.forEach(e => {
    e.processed || (t = I(null, e.start, e.end, t))
  }), t
}

function R(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function w(e, t) {
  return r.EditorState.createWithContent(t, new r.CompositeDecorator(e))
}

function D(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function x(e, t) {
  let n = N(t);
  return T(e, t, 0, n.length)
}

function L(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function j(e) {
  return L(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function M(e) {
  return L(0, e)
}

function k(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", true), r.EditorState.forceSelection(e, t)
}

function U(e) {
  let t = N(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", false), r.EditorState.forceSelection(e, n)
}

function G(e) {
  let t = e.getCurrentContent().getFirstBlock(),
    n = new r.SelectionState({
      anchorKey: t.getKey(),
      anchorOffset: 0,
      focusKey: t.getKey(),
      focusOffset: t.getLength()
    });
  return r.EditorState.forceSelection(e, n)
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 512,
    n = N(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = T("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
  }
  return e
}

function F(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (!B(n.commonAncestorContainer, e)) return;
  let r = n.getClientRects()[0],
    i = e.getClientRects()[0];
  if (null == r || null == i) return;
  let o = r.left - i.left + e.scrollLeft;
  o < e.scrollLeft ? e.scrollLeft = o - 10 : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3)
}

function B(e, t) {
  for (; null != e;) {
    if (e === t) returntrue;
    e = e.parentNode
  }
  returnfalse
}

function V(e) {
  return 0 === N(e).length
}