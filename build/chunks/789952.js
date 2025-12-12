/** Chunk was on web.js **/
/** chunk id: 789952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  hasDomParent: () => a,
  isDOMRangeCollapsed: () => s,
  normalizeDOMPoint: () => l
}), require("./415506.js"), require("./388685.js");
var Chunk685578 = require("./685578.js");

function i(e) {
  return f(e) ? {
    anchorNode: e.anchorNode,
    anchorOffset: e.anchorOffset,
    focusNode: e.focusNode,
    focusOffset: e.focusOffset
  } : {
    anchorNode: e.startContainer,
    anchorOffset: e.startOffset,
    focusNode: e.endContainer,
    focusOffset: e.endOffset
  }
}
let o = false;
{
  Chunk685578.F3.toSlateRange = (e, t, n) => {
    let {
      exactMatch: o,
      suppressThrow: a
    } = n, {
      anchorNode: l,
      anchorOffset: c,
      focusNode: u,
      focusOffset: d
    } = i(t), f = s(l, c, u, d);
    if (null == l || null == u || null == c || null == d) {
      if (a) return null;
      throw Error("Cannot resolve a Slate range from DOM range")
    }
    let p = r.F3.toSlatePoint(e, [l, c], {
        exactMatch: o,
        suppressThrow: a
      }),
      _ = f ? p : r.F3.toSlatePoint(e, [u, d], {
        exactMatch: o,
        suppressThrow: a
      });
    return null != p && null != _ ? {
      anchor: p,
      focus: _
    } : null
  };
  let e = Chunk685578.F3.toSlatePoint;
  Chunk685578.F3.toSlatePoint = (t, n, r) => {
    let {
      exactMatch: i,
      suppressThrow: o,
      direction: a = "forward"
    } = r;
    i || (n = l(n, a));
    try {
      return e(t, n, {
        exactMatch: true,
        suppressThrow: o
      })
    } catch (e) {
      if (o) return null;
      throw e
    }
  }, o = true
}

function a(e, t) {
  if (null == t) returnfalse;
  for (; null != e;) {
    if (e === t) returntrue;
    e = e.parentNode
  }
  returnfalse
}

function s(e, t, n, r) {
  return e === n && t === r
}

function l(e, t) {
  let n, [r, i] = e;
  if (!d(r) || 0 === r.childNodes.length) return e;
  for ("forward" === t && i === r.childNodes.length && (t = "backward"), "backward" === t && i--, [r, n] = c(r, i, t), "forward" === t && n < i ? t = "backward" : "backward" === t && n > i && (t = "forward"), i = n; d(r) && r.childNodes.length > 0;) {
    let e = "backward" === t ? r.childNodes.length - 1 : 0;
    r = c(r, e, t)[0]
  }
  let o = "backward" === t && null != r.textContent ? r.textContent.length : 0;
  return [r, o]
}

function c(e, t, n) {
  let {
    childNodes: r
  } = e, i = r[t], o = t, a = false, s = false;
  for (;
    (u(i) || d(i) && 0 === i.childNodes.length || d(i) && "false" === i.getAttribute("contenteditable")) && (!a || !s);) {
    if (o >= r.length) {
      a = true, o = t - 1, n = "backward";
      continue
    }
    if (o < 0) {
      s = true, o = t + 1, n = "forward";
      continue
    }
    i = r[o], t = o, o += "forward" === n ? 1 : false
  }
  return [i, t]
}

function u(e) {
  return p(e) && 8 === e.nodeType
}

function d(e) {
  return p(e) && 1 === e.nodeType
}

function f(e) {
  let t = e && e.anchorNode && _(e.anchorNode);
  return null != t && e instanceof t.Selection
}

function p(e) {
  let t = _(e);
  return null != t && e instanceof t.Node
}

function _(e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView || null
}