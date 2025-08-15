/** Chunk was on 54157 **/
/** chunk id: 72006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FZ: () => A,
  Hl: () => L,
  NJ: () => w,
  R8: () => M,
  Sq: () => P,
  Wg: () => D,
  Zn: () => j,
  c2: () => N,
  eE: () => k,
  iE: () => F,
  iK: () => Z,
  lv: () => T,
  nR: () => I,
  q0: () => l.a,
  x0: () => v,
  xb: () => H,
  yd: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk399834 = require("./399834.js"),
  Chunk598335 = require("./598335.js"),
  l = require.n(Chunk598335),
  Chunk596464 = require("./596464.js"),
  i = require.n(Chunk596464),
  Chunk476363 = require("./476363.js"),
  c = require.n(Chunk476363),
  Chunk963782 = require("./963782.js"),
  d = require.n(Chunk963782),
  Chunk904112 = require("./904112.js"),
  p = require.n(Chunk904112),
  Chunk599552 = require("./599552.js"),
  _ = require.n(Chunk599552),
  Chunk544611 = require("./544611.js"),
  S = require.n(Chunk544611),
  Chunk803068 = require("./803068.js"),
  y = require.n(Chunk803068),
  Chunk561099 = require("./561099.js"),
  E = require.n(Chunk561099),
  Chunk655000 = require("./655000.js"),
  C = require.n(Chunk655000);

function O(e, t, n, s) {
  let l = s.getCurrentContent(),
    a = null;
  null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
  let i = l.getFirstBlock(),
    o = new r.SelectionState({
      anchorKey: i.getKey(),
      anchorOffset: t,
      focusKey: i.getKey(),
      focusOffset: n
    });
  return l = r.Modifier.applyEntity(l, o, a), r.EditorState.set(s, {
    currentContent: l
  })
}

function v(e, t, n, s) {
  let l, a, o = t.getCurrentContent(),
    c = o.getFirstBlock(),
    u = c.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != s && s > u.length && (s = u.length), l = new r.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: n,
    focusKey: c.getKey(),
    focusOffset: null != s && 0 !== s ? s : n
  })) : l = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    h = i()(o, l);
  return l.isCollapsed() ? (o = r.Modifier.insertText(o, l, e, d, h), a = "insert-characters") : (o = r.Modifier.replaceText(o, l, e, d, h), a = "replace-characters"), r.EditorState.push(t, o, a)
}

function R(e, t) {
  switch (e) {
    case "delete":
      return E()(t);
    case "delete-word":
      return p()(t);
    case "backspace":
      return y()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return c()(t);
    default:
      return t
  }
}

function j(e, t) {
  switch (e) {
    case "transpose-characters":
      return C()(t);
    case "move-selection-to-start-of-block":
      return S()(t);
    case "move-selection-to-end-of-block":
      return _()(t);
    default:
      return t
  }
}

function P(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function T(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    s = r.getFirstBlock(),
    l = s.getText(),
    a = [];
  return s.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(s.getEntityAt(e)).getType(),
      i = l.substring(e, t);
    a.push({
      processed: false,
      type: n,
      start: e,
      end: t,
      text: i
    })
  }), e.forEach(e => {
    let r = false;
    if (a.forEach(n => {
        let {
          type: s,
          start: l,
          end: a
        } = e, i = e.getFullMatch();
        !n.processed && (n.type === s && n.start === l && n.text === i ? (n.processed = true, r = true) : (l >= n.start && l < n.end || a > n.start && a <= n.end) && (n.processed = true, t = O(null, n.start, n.end, t)))
      }), r) return;
    let s = n[e.type];
    t = O([e.type, null != s && s.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), a.forEach(e => {
    e.processed || (t = O(null, e.start, e.end, t))
  }), t
}

function I(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function A(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function N(e, t) {
  let n = P(t);
  return v(e, t, 0, n.length)
}

function Z(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function w(e) {
  return Z(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function k(e) {
  return Z(0, e)
}

function M(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", true), r.EditorState.forceSelection(e, t)
}

function D(e) {
  let t = P(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", false), r.EditorState.forceSelection(e, n)
}

function L(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 512,
    n = P(e);
  if (n.length > t) {
    let s = e.getSelection();
    e = v("", e, t, n.length), s.getAnchorOffset() > t && (s = s.set("anchorOffset", t)), s.getFocusOffset() > t && (s = s.set("focusOffset", t)), e = r.EditorState.forceSelection(e, s)
  }
  return e
}

function F(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (! function(e, t) {
      for (; null != e;) {
        if (e === t) returntrue;
        e = e.parentNode
      }
      returnfalse
    }(n.commonAncestorContainer, e)) return;
  let r = n.getClientRects()[0],
    s = e.getClientRects()[0];
  if (null == r || null == s) return;
  let l = r.left - s.left + e.scrollLeft;
  l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
}

function H(e) {
  return 0 === P(e).length
}