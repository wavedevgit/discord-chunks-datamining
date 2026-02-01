/** Chunk was on 52199 **/
/** chunk id: 504531, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Im: () => q,
  K6: () => s.a,
  L9: () => U,
  Le: () => M,
  ON: () => x,
  Rg: () => N,
  Tj: () => k,
  UO: () => w,
  Xq: () => C,
  a4: () => H,
  aB: () => P,
  e_: () => j,
  le: () => O,
  mQ: () => W,
  pe: () => I,
  t7: () => F,
  uD: () => L,
  vE: () => T,
  y8: () => D
}), require("./896048.js"), require("./321073.js");
var Chunk271830 = require("./271830.js"),
  Chunk673776 = require("./673776.js"),
  s = require.n(Chunk673776),
  Chunk197576 = require("./197576.js"),
  i = require.n(Chunk197576),
  Chunk768260 = require("./768260.js"),
  c = require.n(Chunk768260),
  Chunk589834 = require("./589834.js"),
  d = require.n(Chunk589834),
  Chunk288598 = require("./288598.js"),
  f = require.n(Chunk288598),
  Chunk832368 = require("./832368.js"),
  g = require.n(Chunk832368),
  Chunk692807 = require("./692807.js"),
  E = require.n(Chunk692807),
  Chunk907014 = require("./907014.js"),
  A = require.n(Chunk907014),
  Chunk70986 = require("./70986.js"),
  m = require.n(Chunk70986),
  Chunk1214 = require("./1214.js"),
  R = require.n(Chunk1214);

function v(e, t, r, l) {
  let s = l.getCurrentContent(),
    a = null;
  null != e && (a = (s = s.createEntity(...e)).getLastCreatedEntityKey());
  let i = s.getFirstBlock(),
    o = new n.SelectionState({
      anchorKey: i.getKey(),
      anchorOffset: t,
      focusKey: i.getKey(),
      focusOffset: r
    });
  return s = n.Modifier.applyEntity(s, o, a), n.EditorState.set(l, {
    currentContent: s
  })
}

function O(e, t, r, l) {
  let s, a, o = t.getCurrentContent(),
    c = o.getFirstBlock(),
    u = c.getText();
  "number" == typeof r ? (r > u.length && (r = u.length), null != l && l > u.length && (l = u.length), s = new n.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: r,
    focusKey: c.getKey(),
    focusOffset: null != l && 0 !== l ? l : r
  })) : s = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    h = i()(o, s);
  return s.isCollapsed() ? (o = n.Modifier.insertText(o, s, e, d, h), a = "insert-characters") : (o = n.Modifier.replaceText(o, s, e, d, h), a = "replace-characters"), n.EditorState.push(t, o, a)
}

function T(e, t) {
  switch (e) {
    case "delete":
      return m()(t);
    case "delete-word":
      return f()(t);
    case "backspace":
      return A()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return c()(t);
    default:
      return t
  }
}

function x(e, t) {
  switch (e) {
    case "transpose-characters":
      return R()(t);
    case "move-selection-to-start-of-block":
      return E()(t);
    case "move-selection-to-end-of-block":
      return g()(t);
    default:
      return t
  }
}

function I(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function L(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    n = t.getCurrentContent(),
    l = n.getFirstBlock(),
    s = l.getText(),
    a = [];
  return l.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let r = n.getEntity(l.getEntityAt(e)).getType(),
      i = s.substring(e, t);
    a.push({
      processed: false,
      type: r,
      start: e,
      end: t,
      text: i
    })
  }), e.forEach(e => {
    let n = false;
    if (a.forEach(r => {
        let {
          type: l,
          start: s,
          end: a
        } = e, i = e.getFullMatch();
        !r.processed && (r.type === l && r.start === s && r.text === i ? (r.processed = true, n = true) : (s >= r.start && s < r.end || a > r.start && a <= r.end) && (r.processed = true, t = v(null, r.start, r.end, t)))
      }), n) return;
    let l = r[e.type];
    t = v([e.type, null != l && l.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), a.forEach(e => {
    e.processed || (t = v(null, e.start, e.end, t))
  }), t
}

function j(e) {
  return n.EditorState.createEmpty(new n.CompositeDecorator(e))
}

function N(e, t) {
  return n.EditorState.createWithContent(t, new n.CompositeDecorator(e))
}

function C(e) {
  let t = n.EditorState.push(e, n.ContentState.createFromText("")),
    r = e.getSelection();
  return null != r && r.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t
}

function F(e, t) {
  let r = I(t);
  return O(e, t, 0, r.length)
}

function w(e, t) {
  let r = t.getSelection();
  return r = (r = r.set("focusOffset", e)).set("anchorOffset", e), n.EditorState.forceSelection(t, r)
}

function k(e) {
  return w(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function P(e) {
  return w(0, e)
}

function W(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", true), n.EditorState.forceSelection(e, t)
}

function M(e) {
  let t = I(e),
    r = e.getSelection();
  return r = (r = r.set("focusOffset", t.length)).set("isBackward", false), n.EditorState.forceSelection(e, r)
}

function D(e) {
  let t = e.getCurrentContent().getFirstBlock(),
    r = new n.SelectionState({
      anchorKey: t.getKey(),
      anchorOffset: 0,
      focusKey: t.getKey(),
      focusOffset: t.getLength()
    });
  return n.EditorState.forceSelection(e, r)
}

function H(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 512,
    r = I(e);
  if (r.length > t) {
    let l = e.getSelection();
    e = O("", e, t, r.length), l.getAnchorOffset() > t && (l = l.set("anchorOffset", t)), l.getFocusOffset() > t && (l = l.set("focusOffset", t)), e = n.EditorState.forceSelection(e, l)
  }
  return e
}

function U(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let r = t.getRangeAt(0);
  if (! function(e, t) {
      for (; null != e;) {
        if (e === t) returntrue;
        e = e.parentNode
      }
      returnfalse
    }(r.commonAncestorContainer, e)) return;
  let n = r.getClientRects()[0],
    l = e.getClientRects()[0];
  if (null == n || null == l) return;
  let s = n.left - l.left + e.scrollLeft;
  s < e.scrollLeft ? e.scrollLeft = s - 10 : s > e.scrollLeft + e.offsetWidth && (e.scrollLeft = s - e.offsetWidth + 3)
}

function q(e) {
  return 0 === I(e).length
}