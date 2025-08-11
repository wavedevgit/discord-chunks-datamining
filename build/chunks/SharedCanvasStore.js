/** Chunk was on web.js **/
/** chunk id: 673125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk633302 = require("./633302.js"),
  Chunk594174 = require("./594174.js"),
  Chunk176354 = require("./176354.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk813900 = require("./813900.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {},
  g = {},
  E = {},
  b = true,
  y = null;

function O(e) {
  if (null == g[e]) {
    let t = s.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.Ks),
      r = new Image;
    r.src = n, g[e] = r
  }
}

function v(e) {
  let {
    lineId: t,
    newPoints: n,
    userId: r,
    streamerId: i
  } = e, o = m[i];
  if (null == o) m[i] = [{
    type: c.W.LINE,
    id: t,
    userId: r,
    points: n
  }];
  else {
    let e = o.find(e => e.id === t);
    null == e ? o.push({
      type: c.W.LINE,
      id: t,
      userId: r,
      points: n
    }) : (0, u.P7)(e) && e.points.push(...n)
  }
  O(r)
}

function I(e) {
  var t, n, r;
  let {
    emojiHose: i,
    streamerId: o,
    userId: s
  } = e, u = h(_({}, i), {
    type: c.W.EMOJI_HOSE
  });
  if (null == m[o]) m[o] = [u];
  else {
    let e = m[o].findIndex(e => e.id === i.id);
    e >= 0 ? m[o][e] = _({}, m[o][e], u) : m[o].push(u)
  }
  let f = null != (n = null != (t = i.emojiId) ? t : i.emojiName) ? n : "";
  if (null == E[f]) {
    let e = null != i.emojiName ? a.ZP.convertNameToSurrogate(i.emojiName) : null;
    E[f] = new Image, E[f].src = (0, l.qc)({
      id: i.emojiId,
      name: null != (r = null != e ? e : i.emojiName) ? r : "",
      animated: false
    }, d.qh)
  }
  O(s)
}

function T(e) {
  let {
    drawables: t,
    streamerId: n
  } = e;
  if (null != m[n]) {
    let e = new Set;
    t.forEach(t => e.add(t.id)), m[n] = m[n].filter(t => !e.has(t.id))
  }
}

function S(e) {
  let {
    drawMode: t
  } = e;
  y = t
}

function A(e) {
  let {} = e;
  b = !b
}
class N extends(r = Chunk442837.ZP.Store) {
  get visibleOverlayCanvas() {
    return b
  }
  getDrawables(e) {
    return null != m[e] ? m[e] : []
  }
  getAvatarImage(e) {
    return g[e]
  }
  getEmojiImage(e) {
    return E[e]
  }
  getDrawMode() {
    return y
  }
}
f(N, "displayName", "SharedCanvasStore");
let C = new N(Chunk570140.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: v,
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: I,
  SHARED_CANVAS_CLEAR_DRAWABLES: T,
  SHARED_CANVAS_SET_DRAW_MODE: S,
  TOGGLE_OVERLAY_CANVAS: A
})