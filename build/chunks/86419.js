/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => L,
  Bu: () => D,
  ES: () => x,
  M8: () => y,
  Nc: () => E,
  RZ: () => w,
  X6: () => M,
  kQ: () => U,
  n$: () => P,
  np: () => I,
  ou: () => V,
  qH: () => N,
  tk: () => k,
  vH: () => j,
  vI: () => b,
  y8: () => R
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk624238 = require("./624238.js"),
  Chunk379405 = require("./379405.js"),
  Chunk296009 = require("./296009.js"),
  Chunk224706 = require("./224706.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk286957 = require("./286957.js"),
  Chunk925434 = require("./925434.js"),
  Chunk570911 = require("./570911.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = e => d.Wk[e]();

function b(e) {
  return d.S5.includes(e)
}

function y(e) {
  return d.uX.includes(e)
}

function O(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function v(e, t) {
  return [...e].sort(() => .5 - Math.random()).slice(0, t)
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : new Set,
    n = _.J6.filter(e => !t.has(e)),
    r = {
      applicationId: O(n.length > 0 ? n : _.J6)
    };
  return b(e) && (r.comment = Math.random() > .5 ? O(f.x) : true), y(e) && (r.tags = Math.random() > .3 ? v(f.T, f.T.length) : true), r
}

function S() {
  var e;
  let t = Chunk594174.default.getCurrentUser(),
    n = null != exports ? Chunk621853.Z.getUserProfile(exports.id) : null;
  return null != (e = null == require ? true : require.widgets) ? module : []
}

function T() {
  var e;
  return Chunk224724.Z.hasPendingChanges() ? null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [] : S()
}

function A(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    r = S().find(t => t.type === e);
  return g(h({}, {
    id: null != (t = null == r ? true : r.id) ? t : e
  }), {
    type: e,
    games: n
  })
}

function C(e, t) {
  let n = e.findIndex(e => e.id === t.id);
  if (false === n) return [...e, t];
  {
    let r = [...e];
    return r[n] = t, r
  }
}

function N(e) {
  let t = T();
  if (null != t.find(t => t.type === e)) return;
  let n = A(e);
  c.Z.setPendingWidgets([...t, n])
}

function R(e) {
  let t = T().filter(t => t.type !== e);
  c.Z.setPendingWidgets(t)
}

function P(e, t, n) {
  let r = Object.values(i._).length;
  if (n.length > r) return;
  let a = T(),
    o = a.find(t => t.type === e);
  if (null == o) return;
  let s = o.games.find(e => e.applicationId === t);
  if (null == s) return;
  let l = g(h({}, s), {
      tags: n
    }),
    u = o.games.map(e => e.applicationId === t ? l : e),
    d = C(a, g(h({}, o), {
      games: u
    }));
  c.Z.setPendingWidgets(d)
}

function w(e, t, n) {
  let r = T().find(t => t.type === e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || null == i.tags || 0 === i.tags.length) return;
  let a = i.tags.filter(e => e !== n);
  P(e, t, a.length > 0 ? a : [])
}

function D(e, t, n) {
  let r = T(),
    i = r.find(t => t.type === e);
  if (null == i) return;
  let a = i.games.find(e => e.applicationId === t);
  if (null == a || n === a.comment) return;
  let o = g(h({}, a), {
      comment: n
    }),
    s = i.games.map(e => e.applicationId === t ? o : e),
    l = C(r, g(h({}, i), {
      games: s
    }));
  c.Z.setPendingWidgets(l)
}

function x(e, t) {
  var n, i, a;
  let s, l = T(),
    u = l.find(t => t.type === e),
    d = r.k[e];
  if (null != u && (null != (i = null == (n = u.games) ? true : n.length) ? i : 0) >= d) return;
  let f = {
      applicationId: t.applicationId,
      comment: t.comment,
      tags: t.tags
    },
    _ = C(l, A(e, s = null != u ? [...null != (a = u.games) ? a : [], f] : [f]));
  c.Z.setPendingWidgets(_), o.Z.getDetectableGamesSupplemental([t.applicationId])
}

function L(e, t) {
  let n = T(),
    r = n.find(t => t.type === e);
  if (null == r) return;
  let i = C(n, A(e, (null != r.games ? r.games : []).filter(e => e.applicationId !== t)));
  c.Z.setPendingWidgets(i)
}

function j(e) {
  let t = e => ({
      game_id: e.applicationId,
      comment: e.comment,
      tags: e.tags
    }),
    n = e.games.map(t);
  return {
    id: e.id !== e.type ? e.id : true,
    data: {
      type: e.type,
      games: n
    }
  }
}
async function M() {
  let e = Chunk224724.Z.getPendingWidgets();
  if (null !== module) try {
    await Chunk592183.Z.savePendingWidgets(module)
  } catch (e) {
    console.error("Failed to save sample widgets:", module)
  }
}
async function k() {
  try {
    await Chunk592183.Z.savePendingWidgets([])
  } catch (e) {
    console.error("Failed to clear saved widgets", module)
  }
}

function U(e) {
  let t = r.k[e.type];
  return e.games.length >= t
}

function G(e) {
  return null == e || "" === e || Array.isArray(e) && 0 === e.length ? null : e
}

function B(e, t) {
  return e.applicationId === t.applicationId && G(e.comment) === G(t.comment)
}

function Z(e, t) {
  if (e.applicationId !== t.applicationId) returnfalse;
  let n = G(e.tags),
    r = G(t.tags);
  return null === n && null === r || null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t])
}

function F(e, t) {
  return e.applicationId === t.applicationId
}

function V(e, t, n) {
  let r;
  if (e.length !== t.length) returnfalse;
  switch (n) {
    case a.l.FAVORITE_GAMES:
      r = B;
      break;
    case a.l.CURRENT_GAMES:
      r = Z;
      break;
    case a.l.WANT_TO_PLAY_GAMES:
    case a.l.PLAYED_GAMES:
      r = F;
      break;
    default:
      throw Error("Unknown widget type: ".concat(n))
  }
  return e.every((e, n) => r(e, t[n]))
}