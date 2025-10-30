/** Chunk was on web.js **/
/** chunk id: 72006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FZ: () => D,
  Hl: () => B,
  NJ: () => M,
  R8: () => j,
  Sq: () => N,
  Wg: () => U,
  Zn: () => C,
  c2: () => x,
  eE: () => k,
  iE: () => Z,
  iK: () => L,
  l8: () => w,
  lv: () => R,
  m1: () => G,
  nR: () => P,
  q0: () => a.a,
  x0: () => S,
  xb: () => V,
  yd: () => A
}), require("./388685.js"), require("./539854.js");
var Chunk258863 = require("./258863.js"),
  Chunk551483 = require("./551483.js"),
  a = require.n(Chunk551483),
  Chunk878694 = require("./878694.js"),
  s = require.n(Chunk878694),
  Chunk924849 = require("./924849.js"),
  c = require.n(Chunk924849),
  Chunk720057 = require("./720057.js"),
  d = require.n(Chunk720057),
  Chunk556924 = require("./556924.js"),
  _ = require.n(Chunk556924),
  Chunk698453 = require("./698453.js"),
  h = require.n(Chunk698453),
  Chunk906757 = require("./906757.js"),
  g = require.n(Chunk906757),
  Chunk568064 = require("./568064.js"),
  b = require.n(Chunk568064),
  Chunk91242 = require("./91242.js"),
  O = require.n(Chunk91242),
  Chunk562531 = require("./562531.js"),
  I = require.n(Chunk562531);

function T(e, t, n, i) {
  let a = i.getCurrentContent(),
    o = null;
  null != e && (o = (a = a.createEntity(...e)).getLastCreatedEntityKey());
  let s = a.getFirstBlock(),
    l = new r.SelectionState({
      anchorKey: s.getKey(),
      anchorOffset: t,
      focusKey: s.getKey(),
      focusOffset: n
    });
  return a = r.Modifier.applyEntity(a, l, o), r.EditorState.set(i, {
    currentContent: a
  })
}

function S(e, t, n, i) {
  let a, o, l = t.getCurrentContent(),
    c = l.getFirstBlock(),
    u = c.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != i && i > u.length && (i = u.length), a = new r.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: n,
    focusKey: c.getKey(),
    focusOffset: null != i && 0 !== i ? i : n
  })) : a = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = s()(l, a);
  return a.isCollapsed() ? (l = r.Modifier.insertText(l, a, e, d, f), o = "insert-characters") : (l = r.Modifier.replaceText(l, a, e, d, f), o = "replace-characters"), r.EditorState.push(t, l, o)
}

function A(e, t) {
  switch (e) {
    case "delete":
      return O()(t);
    case "delete-word":
      return _()(t);
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

function C(e, t) {
  switch (e) {
    case "transpose-characters":
      return I()(t);
    case "move-selection-to-start-of-block":
      return g()(t);
    case "move-selection-to-end-of-block":
      return h()(t);
    default:
      return t
  }
}

function N(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function R(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    i = r.getFirstBlock(),
    a = i.getText(),
    o = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(i.getEntityAt(e)).getType(),
      s = a.substring(e, t);
    o.push({
      processed: false,
      type: n,
      start: e,
      end: t,
      text: s
    })
  }), e.forEach(e => {
    let r = false;
    if (o.forEach(n => {
        let {
          type: i,
          start: a,
          end: o
        } = e, s = e.getFullMatch();
        !n.processed && (n.type === i && n.start === a && n.text === s ? (n.processed = true, r = true) : (a >= n.start && a < n.end || o > n.start && o <= n.end) && (n.processed = true, t = T(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = T([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), o.forEach(e => {
    e.processed || (t = T(null, e.start, e.end, t))
  }), t
}

function P(e) {
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
  return S(e, t, 0, n.length)
}

function L(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function M(e) {
  return L(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function k(e) {
  return L(0, e)
}

function j(e) {
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

function B(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 512,
    n = N(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = S("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
  }
  return e
}

function Z(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (!F(n.commonAncestorContainer, e)) return;
  let r = n.getClientRects()[0],
    i = e.getClientRects()[0];
  if (null == r || null == i) return;
  let a = r.left - i.left + e.scrollLeft;
  a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
}

function F(e, t) {
  for (; null != e;) {
    if (e === t) returntrue;
    e = e.parentNode
  }
  returnfalse
}

function V(e) {
  return 0 === N(e).length
}