/** Chunk was on web.js **/
/** chunk id: 504531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Im: () => H,
  K6: () => a.a,
  L9: () => F,
  Le: () => U,
  ON: () => C,
  Rg: () => P,
  Tj: () => j,
  UO: () => L,
  Xq: () => D,
  a4: () => V,
  aB: () => M,
  e_: () => w,
  le: () => I,
  mQ: () => k,
  pe: () => N,
  t7: () => x,
  uD: () => R,
  vE: () => T,
  y8: () => G
}), require("./896048.js"), require("./321073.js");
var Chunk271830 = require("./271830.js"),
  Chunk673776 = require("./673776.js"),
  a = require.n(Chunk673776),
  Chunk197576 = require("./197576.js"),
  o = require.n(Chunk197576),
  Chunk768260 = require("./768260.js"),
  c = require.n(Chunk768260),
  Chunk589834 = require("./589834.js"),
  d = require.n(Chunk589834),
  Chunk288598 = require("./288598.js"),
  p = require.n(Chunk288598),
  Chunk832368 = require("./832368.js"),
  h = require.n(Chunk832368),
  Chunk692807 = require("./692807.js"),
  g = require.n(Chunk692807),
  Chunk907014 = require("./907014.js"),
  b = require.n(Chunk907014),
  Chunk70986 = require("./70986.js"),
  O = require.n(Chunk70986),
  Chunk1214 = require("./1214.js"),
  v = require.n(Chunk1214);

function S(e, t, n, i) {
  let a = i.getCurrentContent(),
    s = null;
  null != e && (s = (a = a.createEntity(...e)).getLastCreatedEntityKey());
  let o = a.getFirstBlock(),
    l = new r.SelectionState({
      anchorKey: o.getKey(),
      anchorOffset: t,
      focusKey: o.getKey(),
      focusOffset: n
    });
  return a = r.Modifier.applyEntity(a, l, s), r.EditorState.set(i, {
    currentContent: a
  })
}

function I(e, t, n, i) {
  let a, s, l = t.getCurrentContent(),
    c = l.getFirstBlock(),
    u = c.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != i && i > u.length && (i = u.length), a = new r.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: n,
    focusKey: c.getKey(),
    focusOffset: null != i && 0 !== i ? i : n
  })) : a = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = o()(l, a);
  return a.isCollapsed() ? (l = r.Modifier.insertText(l, a, e, d, f), s = "insert-characters") : (l = r.Modifier.replaceText(l, a, e, d, f), s = "replace-characters"), r.EditorState.push(t, l, s)
}

function T(e, t) {
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

function C(e, t) {
  switch (e) {
    case "transpose-characters":
      return v()(t);
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
    s = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(i.getEntityAt(e)).getType(),
      o = a.substring(e, t);
    s.push({
      processed: false,
      type: n,
      start: e,
      end: t,
      text: o
    })
  }), e.forEach(e => {
    let r = false;
    if (s.forEach(n => {
        let {
          type: i,
          start: a,
          end: s
        } = e, o = e.getFullMatch();
        !n.processed && (n.type === i && n.start === a && n.text === o ? (n.processed = true, r = true) : (a >= n.start && a < n.end || s > n.start && s <= n.end) && (n.processed = true, t = S(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = S([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), s.forEach(e => {
    e.processed || (t = S(null, e.start, e.end, t))
  }), t
}

function w(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function P(e, t) {
  return r.EditorState.createWithContent(t, new r.CompositeDecorator(e))
}

function D(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function x(e, t) {
  let n = N(t);
  return I(e, t, 0, n.length)
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

function V(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 512,
    n = N(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = I("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
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
  let a = r.left - i.left + e.scrollLeft;
  a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
}

function B(e, t) {
  for (; null != e;) {
    if (e === t) returntrue;
    e = e.parentNode
  }
  returnfalse
}

function H(e) {
  return 0 === N(e).length
}