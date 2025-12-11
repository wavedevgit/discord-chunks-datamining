/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => Z,
  Bu: () => M,
  ES: () => k,
  Eq: () => G,
  Gv: () => I,
  Hy: () => y,
  IM: () => U,
  M8: () => S,
  RZ: () => j,
  X6: () => F,
  kQ: () => V,
  mR: () => b,
  n$: () => L,
  np: () => A,
  ou: () => W,
  qH: () => D,
  tk: () => B,
  vI: () => v,
  ww: () => O,
  y8: () => x
}), require("./388685.js"), require("./642613.js");
var Chunk624238 = require("./624238.js"),
  Chunk379405 = require("./379405.js"),
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

function h(e) {
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

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = e => d.Wk[e.type](e);

function y(e, t) {
  let {
    isCurrentUser: n
  } = t, i = e.games.length > 0;
  if (n && i) return 1 === r.kp[e.type] ? _.intl.string(_.t.wiXdEa) : _.intl.format(_.t["zR1+0/"], {
    numGames: r.kp[e.type]
  })
}

function O(e) {
  var t;
  return (null == e || null == (t = e.widgets) ? true : t.some(s.Wc)) === true
}

function v(e) {
  return d.S5.includes(e)
}

function S(e) {
  return d.uX.includes(e)
}

function I(e) {
  return e in r.kp ? r.kp[e] : 0
}

function T(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function C(e, t) {
  return [...e].sort(() => .5 - Math.random()).slice(0, t)
}

function A(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : new Set,
    n = p.J6.filter(e => !t.has(e)),
    r = {
      applicationId: T(n.length > 0 ? n : p.J6)
    };
  return v(e) && (r.comment = Math.random() > .5 ? T(f.x) : true), S(e) && (r.tags = Math.random() > .3 ? C(f.T, f.T.length) : true), r
}

function N() {
  var e;
  let t = Chunk594174.default.getCurrentUser(),
    n = null != exports ? Chunk621853.Z.getUserProfile(exports.id) : null;
  return null != (e = null == require ? true : require.widgets) ? module : []
}

function P() {
  var e;
  return Chunk224724.Z.hasPendingChanges() ? null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [] : N()
}

function R(e) {
  return P().find(t => t.type === e)
}

function w(e) {
  let t = P(),
    n = t.findIndex(t => t.type === e.type);
  if (false === n) return [...t, e];
  {
    let r = [...t];
    return r[n] = e, r
  }
}

function D(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = P();
  null == r.find(t => t.type === e) && (n ? c.Z.setPendingWidgets([t, ...r]) : c.Z.setPendingWidgets([...r, t]))
}

function x(e) {
  let t = P().filter(t => t.type !== e);
  c.Z.setPendingWidgets(t)
}

function L(e, t, n) {
  let r = Object.values(i._).length;
  if (n.length > r) return;
  let a = R(e);
  if (null == a) return;
  let o = a.games.find(e => e.applicationId === t);
  if (null == o) return;
  let l = E(h({}, o), {
      tags: n
    }),
    u = a.games.map(e => e.applicationId === t ? l : e),
    d = w(new s.zy(E(h({}, a), {
      games: u
    })));
  c.Z.setPendingWidgets(d)
}

function j(e, t, n) {
  let r = R(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || null == i.tags || 0 === i.tags.length) return;
  let a = i.tags.filter(e => e !== n);
  L(r.type, t, a.length > 0 ? a : [])
}

function M(e, t, n) {
  let r = R(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || n === i.comment) return;
  let a = E(h({}, i), {
      comment: n
    }),
    o = r.games.map(e => e.applicationId === t ? a : e),
    l = w(new s.zy(E(h({}, r), {
      games: o
    })));
  c.Z.setPendingWidgets(l)
}

function k(e, t) {
  var n, r, i, o;
  let l, u = R(e),
    d = I(e);
  if (null != u && ((null != (r = null == (n = u.games) ? true : n.length) ? r : 0) >= d || (null != (i = u.games) ? i : []).some(e => e.applicationId === t.applicationId))) return;
  let f = {
    applicationId: t.applicationId,
    comment: t.comment,
    tags: t.tags
  };
  l = null != u ? [...null != (o = u.games) ? o : [], f] : [f];
  let p = w(new s.zy(E(h({}, null != u ? u : {
    type: e
  }), {
    games: l
  })));
  c.Z.setPendingWidgets(p), a.Z.getDetectableGamesSupplemental([t.applicationId])
}

function U(e, t) {
  if (e === t) return;
  let n = P();
  if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
  let r = [...n],
    [i] = r.splice(e, 1);
  r.splice(t, 0, i), c.Z.setPendingWidgets(r)
}

function G(e, t, n) {
  let r = R(e);
  if (null == r || null == r.games || t === n) return;
  let i = [...r.games];
  if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
  let [a] = i.splice(t, 1);
  i.splice(n, 0, a);
  let o = w(new s.zy(E(h({}, r), {
    games: i
  })));
  c.Z.setPendingWidgets(o)
}

function Z(e, t) {
  let n = R(e);
  if (null == n) return;
  let r = (null != n.games ? n.games : []).filter(e => e.applicationId !== t),
    i = w(new s.zy(E(h({}, n), {
      games: r
    })));
  c.Z.setPendingWidgets(i)
}
async function F() {
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

function V(e) {
  let t = I(e.type);
  return e.games.length >= t
}

function H(e) {
  return null == e || "" === e || Array.isArray(e) && 0 === e.length ? null : e
}

function Y(e, t, n) {
  if (e.applicationId !== t.applicationId || v(n) && H(e.comment) !== H(t.comment)) returnfalse;
  if (S(n)) {
    let n = H(e.tags),
      r = H(t.tags);
    if (null === n != (null === r) || null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t]))) returnfalse
  }
  returntrue
}

function W(e, t, n) {
  return e.length === t.length && e.every((e, r) => Y(e, t[r], n))
}