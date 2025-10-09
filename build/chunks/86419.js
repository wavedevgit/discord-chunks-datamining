/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => U,
  Bu: () => k,
  ES: () => j,
  Gv: () => T,
  Hy: () => O,
  M8: () => I,
  RZ: () => M,
  X6: () => G,
  kQ: () => Z,
  mR: () => y,
  n$: () => x,
  np: () => C,
  ou: () => W,
  qH: () => D,
  tk: () => B,
  y8: () => L
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk624238 = require("./624238.js"),
  Chunk379405 = require("./379405.js"),
  Chunk296009 = require("./296009.js"),
  Chunk224706 = require("./224706.js"),
  Chunk594174 = require("./594174.js"),
  Chunk836197 = require("./836197.js"),
  Chunk621853 = require("./621853.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk247397 = require("./247397.js"),
  Chunk925434 = require("./925434.js"),
  Chunk570911 = require("./570911.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = e => f.Wk[e.type](e);

function O(e, t) {
  let {
    isCurrentUser: n
  } = t, i = e.games.length > 0;
  if (n && i) return 1 === r.kp[e.type] ? h.intl.string(h.t.wiXdER) : h.intl.format(h.t["zR1+09"], {
    numGames: r.kp[e.type]
  })
}

function v(e) {
  return f.S5.includes(e)
}

function I(e) {
  return f.uX.includes(e)
}

function T(e) {
  return e in r.kp ? r.kp[e] : 0
}

function S(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function A(e, t) {
  return [...e].sort(() => .5 - Math.random()).slice(0, t)
}

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : new Set,
    n = p.J6.filter(e => !t.has(e)),
    r = {
      applicationId: S(n.length > 0 ? n : p.J6)
    };
  return v(e) && (r.comment = Math.random() > .5 ? S(_.x) : true), I(e) && (r.tags = Math.random() > .3 ? A(_.T, _.T.length) : true), r
}

function N() {
  var e;
  let t = Chunk594174.default.getCurrentUser(),
    n = null != exports ? Chunk621853.Z.getUserProfile(exports.id) : null;
  return null != (e = null == require ? true : require.widgets) ? module : []
}

function R() {
  var e;
  return Chunk224724.Z.hasPendingChanges() ? null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [] : N()
}

function P(e) {
  return R().find(t => t.type === e)
}

function w(e) {
  let t = R(),
    n = t.findIndex(t => t.type === e.type);
  if (false === n) return [...t, e];
  {
    let r = [...t];
    return r[n] = e, r
  }
}

function D(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = R();
  null == r.find(t => t.type === e) && (n ? u.Z.setPendingWidgets([t, ...r]) : u.Z.setPendingWidgets([...r, t]))
}

function L(e) {
  let t = R().filter(t => t.type !== e);
  u.Z.setPendingWidgets(t)
}

function x(e, t, n) {
  let r = Object.values(i._).length;
  if (n.length > r) return;
  let a = P(e);
  if (null == a) return;
  let o = a.games.find(e => e.applicationId === t);
  if (null == o) return;
  let s = b(g({}, o), {
      tags: n
    }),
    c = a.games.map(e => e.applicationId === t ? s : e),
    d = w(new l.zy(b(g({}, a), {
      games: c
    })));
  u.Z.setPendingWidgets(d)
}

function M(e, t, n) {
  let r = P(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || null == i.tags || 0 === i.tags.length) return;
  let a = i.tags.filter(e => e !== n);
  x(r.type, t, a.length > 0 ? a : [])
}

function k(e, t, n) {
  let r = P(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || n === i.comment) return;
  let a = b(g({}, i), {
      comment: n
    }),
    o = r.games.map(e => e.applicationId === t ? a : e),
    s = w(new l.zy(b(g({}, r), {
      games: o
    })));
  u.Z.setPendingWidgets(s)
}

function j(e, t) {
  var n, r, i;
  let a, s = P(e),
    c = T(e);
  if (null != s && (null != (r = null == (n = s.games) ? true : n.length) ? r : 0) >= c) return;
  let d = {
    applicationId: t.applicationId,
    comment: t.comment,
    tags: t.tags
  };
  a = null != s ? [...null != (i = s.games) ? i : [], d] : [d];
  let f = w(new l.zy(b(g({}, null != s ? s : {
    type: e
  }), {
    games: a
  })));
  u.Z.setPendingWidgets(f), o.Z.getDetectableGamesSupplemental([t.applicationId])
}

function U(e, t) {
  let n = P(e);
  if (null == n) return;
  let r = (null != n.games ? n.games : []).filter(e => e.applicationId !== t),
    i = w(new l.zy(b(g({}, n), {
      games: r
    })));
  u.Z.setPendingWidgets(i)
}
async function G() {
  let e = Chunk224724.Z.getPendingWidgets();
  if (null !== module) try {
    await Chunk592183.Z.savePendingWidgets(module)
  } catch (e) {
    console.error("Failed to save sample widgets:", module)
  }
}
async function B() {
  try {
    await Chunk592183.Z.savePendingWidgets([])
  } catch (e) {
    console.error("Failed to clear saved widgets", module)
  }
}

function Z(e) {
  let t = T(e.type);
  return e.games.length >= t
}

function F(e) {
  return null == e || "" === e || Array.isArray(e) && 0 === e.length ? null : e
}

function V(e, t) {
  return e.applicationId === t.applicationId && F(e.comment) === F(t.comment)
}

function H(e, t) {
  if (e.applicationId !== t.applicationId) returnfalse;
  let n = F(e.tags),
    r = F(t.tags);
  return null === n && null === r || null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t])
}

function Y(e, t) {
  return e.applicationId === t.applicationId
}

function W(e, t, n) {
  let r;
  if (e.length !== t.length) returnfalse;
  switch (n) {
    case a.l.FAVORITE_GAMES:
      r = V;
      break;
    case a.l.CURRENT_GAMES:
      r = H;
      break;
    case a.l.WANT_TO_PLAY_GAMES:
    case a.l.PLAYED_GAMES:
      r = Y;
      break;
    default:
      throw Error("Unknown widget type: ".concat(n))
  }
  return e.every((e, n) => r(e, t[n]))
}