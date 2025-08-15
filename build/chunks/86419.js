/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => R,
  ES: () => C,
  RZ: () => N,
  X6: () => w,
  kQ: () => L,
  n$: () => A,
  np: () => b,
  qH: () => T,
  tk: () => D,
  vH: () => P,
  y8: () => S
}), require("./388685.js"), require("./642613.js");
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk224706 = require("./224706.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk247397 = require("./247397.js"),
  Chunk925434 = require("./925434.js"),
  Chunk570911 = require("./570911.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function E(e, t) {
  return [...e].sort(() => .5 - Math.random()).slice(0, t)
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : new Set,
    n = f.J6.filter(e => !t.has(e)),
    r = {
      applicationId: g(n.length > 0 ? n : f.J6)
    };
  return e === i.l.FAVORITE_GAMES && (r.comment = Math.random() > .5 ? g(d.x) : true), e === i.l.CURRENT_GAMES && (r.tags = Math.random() > .3 ? E(d.T, d.T.length) : true), r
}

function y() {
  var e, t;
  if (Chunk224724.Z.hasPendingChanges()) return null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [];
  {
    let e = Chunk594174.default.getCurrentUser(),
      n = null != module ? Chunk621853.Z.getUserProfile(module.id) : null;
    return null != (t = null == require ? true : require.widgets) ? exports : []
  }
}

function O(e) {
  return e.sort((e, t) => u.r.indexOf(e.type) - u.r.indexOf(t.type))
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return m(p({}, {
    id: e
  }), {
    type: e,
    games: t
  })
}

function I(e, t) {
  let n = e.filter(e => e.type !== t.type);
  return O([t, ...n])
}

function T(e) {
  let t = y();
  if (null != t.find(t => t.type === e)) return;
  let n = v(e);
  l.Z.setPendingWidgets(O([n, ...t]))
}

function S(e) {
  let t = y().filter(t => t.type !== e);
  l.Z.setPendingWidgets(t)
}

function A(e, t, n) {
  let r = y(),
    i = r.find(t => t.type === e);
  if (null == i) return;
  let a = i.games.find(e => e.applicationId === t);
  if (null == a) return;
  let o = m(p({}, a), {
      tags: n
    }),
    s = i.games.map(e => e.applicationId === t ? o : e),
    c = I(r, m(p({}, i), {
      games: s
    }));
  l.Z.setPendingWidgets(c)
}

function N(e, t, n) {
  let r = y().find(t => t.type === e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || null == i.tags || 0 === i.tags.length) return;
  let a = i.tags.filter(e => e !== n);
  A(e, t, a.length > 0 ? a : [])
}

function C(e, t) {
  let n, o = y(),
    s = o.find(t => t.type === e),
    c = r.k[e];
  if (null != s) {
    var u, d;
    if ((null != (d = null == (u = s.games) ? true : u.length) ? d : 0) >= c) return
  }
  let f = {
    applicationId: t.applicationId,
    comment: t.comment,
    tags: t.tags
  };
  n = null != s ? e === i.l.FAVORITE_GAMES ? [f] : [...s.games || [], f] : [f];
  let _ = I(o, v(e, n));
  l.Z.setPendingWidgets(_), a.Z.getDetectableGamesSupplemental([t.applicationId])
}

function R(e, t) {
  let n = y(),
    r = n.find(t => t.type === e);
  if (null == r) return;
  let i = I(n, v(e, (null != r.games ? r.games : []).filter(e => e.applicationId !== t)));
  l.Z.setPendingWidgets(i)
}

function P(e) {
  let t = e => ({
      game_id: e.applicationId,
      comment: e.comment,
      tags: e.tags
    }),
    n = e.games.map(t);
  return {
    data: {
      type: e.type,
      games: n
    }
  }
}
async function w() {
  let e = Chunk224724.Z.getPendingWidgets();
  if (null !== module) try {
    await Chunk592183.Z.savePendingWidgets(module)
  } catch (e) {
    console.error("Failed to save sample widgets:", module)
  }
}
async function D() {
  try {
    await Chunk592183.Z.savePendingWidgets([])
  } catch (e) {
    console.error("Failed to clear saved widgets", module)
  }
}

function L(e) {
  let t = r.k[e.type];
  return e.games.length >= t
}