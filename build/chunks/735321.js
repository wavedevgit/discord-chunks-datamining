/** Chunk was on web.js **/
/** chunk id: 735321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FM: () => y,
  L: () => E,
  R_: () => x,
  Un: () => M,
  XX: () => B,
  Y5: () => N,
  cv: () => A,
  ef: () => j,
  ew: () => L,
  g1: () => V,
  mS: () => v,
  nS: () => F,
  oc: () => D,
  qA: () => w,
  s1: () => R,
  tg: () => P,
  uA: () => k,
  y9: () => O,
  yy: () => b
}), require("./896048.js"), require("./638769.js");
var Chunk926675 = require("./926675.js"),
  Chunk761915 = require("./761915.js"),
  Chunk544420 = require("./544420.js"),
  Chunk223273 = require("./223273.js"),
  Chunk287809 = require("./287809.js"),
  Chunk289173 = require("./289173.js"),
  Chunk622543 = require("./622543.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk229231 = require("./229231.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
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
      _(e, t, n[t])
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
let E = e => f.Ok[e.type](e);

function y(e, t) {
  let {
    isCurrentUser: n
  } = t, i = e.games.length > 0;
  if (n && i) return 1 === r.um[e.type] ? p.intl.string(p.t.wiXdEa) : p.intl.format(p.t["zR1+0/"], {
    numGames: r.um[e.type]
  })
}

function b(e) {
  var t;
  return (null == e || null == (t = e.widgets) ? true : t.some(l.fu)) === true
}

function O(e) {
  return f._u.includes(e)
}

function v(e) {
  return f.gk.includes(e)
}

function A(e) {
  return e in r.um ? r.um[e] : 0
}

function I() {
  var e;
  let t = s.default.getCurrentUser(),
    n = null != t ? c.A.getUserProfile(t.id) : null;
  return null != (e = null == n ? true : n.widgets) ? e : []
}

function S() {
  var e;
  return d.A.hasPendingChanges() ? null != (e = d.A.getPendingWidgets()) ? e : [] : I()
}

function T(e) {
  var t;
  return null != (t = S().filter(l.fu).find(t => t.type === e)) ? t : null
}

function C(e) {
  let t = S(),
    n = t.findIndex(t => t.getUniqueKey() === e.getUniqueKey());
  if (false === n) return [e, ...t];
  {
    let r = [...t];
    return r[n] = e, r
  }
}

function N(e) {
  let t = S();
  null == t.find(t => t.getUniqueKey() === e.getUniqueKey()) && u.A.setPendingWidgets([e, ...t])
}

function w(e) {
  let t = S().filter(t => t.getUniqueKey() !== e.getUniqueKey());
  u.A.setPendingWidgets(t)
}

function R(e, t, n) {
  let r = Object.values(i.X).length;
  if (n.length > r) return;
  let a = T(e);
  if (null == a) return;
  let o = a.games.find(e => e.applicationId === t);
  if (null == o) return;
  let s = g(h({}, o), {
      tags: n
    }),
    c = a.games.map(e => e.applicationId === t ? s : e),
    d = C(new l.Yy(g(h({}, a), {
      games: c
    })));
  u.A.setPendingWidgets(d)
}

function P(e, t, n) {
  let r = T(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || null == i.tags || 0 === i.tags.length) return;
  let a = i.tags.filter(e => e !== n);
  R(r.type, t, a.length > 0 ? a : [])
}

function D(e, t, n) {
  let r = T(e);
  if (null == r) return;
  let i = r.games.find(e => e.applicationId === t);
  if (null == i || n === i.comment) return;
  let a = g(h({}, i), {
      comment: n
    }),
    o = r.games.map(e => e.applicationId === t ? a : e),
    s = C(new l.Yy(g(h({}, r), {
      games: o
    })));
  u.A.setPendingWidgets(s)
}

function L(e) {
  var t, n, r, i;
  let o, {
      widgetType: s,
      game: c,
      ignoreMaxGames: d = false
    } = e,
    f = T(s),
    p = A(s);
  if (null != f) {
    let e = null != (t = null == (r = f.games) ? true : r.length) ? t : 0;
    if (!d && e >= p || (null != (n = f.games) ? n : []).some(e => e.applicationId === c.applicationId)) return
  }
  let _ = {
    applicationId: c.applicationId,
    comment: c.comment,
    tags: c.tags
  };
  o = null != f ? [_, ...null != (i = f.games) ? i : []] : [_];
  let m = C(new l.Yy(g(h({}, null != f ? f : {
    type: s
  }), {
    games: o
  })));
  u.A.setPendingWidgets(m), a.A.getDetectableGamesSupplemental([c.applicationId])
}

function x(e, t) {
  if (e === t) return;
  let n = S();
  if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
  let r = [...n],
    [i] = r.splice(e, 1);
  r.splice(t, 0, i), u.A.setPendingWidgets(r)
}

function M(e, t, n) {
  let r = T(e);
  if (null == r || null == r.games || t === n) return;
  let i = [...r.games];
  if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
  let [a] = i.splice(t, 1);
  i.splice(n, 0, a);
  let o = C(new l.Yy(g(h({}, r), {
    games: i
  })));
  u.A.setPendingWidgets(o)
}

function j(e, t) {
  let n = T(e);
  if (null == n) return;
  let r = (null != n.games ? n.games : []).filter(e => e.applicationId !== t),
    i = C(new l.Yy(g(h({}, n), {
      games: r
    })));
  u.A.setPendingWidgets(i)
}

function k(e) {
  let t = A(e.type);
  return e.games.length >= t
}

function U(e) {
  return null == e || "" === e || Array.isArray(e) && 0 === e.length ? null : e
}

function G(e, t, n) {
  if (e.applicationId !== t.applicationId || O(n) && U(e.comment) !== U(t.comment)) returnfalse;
  if (v(n)) {
    let n = U(e.tags),
      r = U(t.tags);
    if (null === n != (null === r) || null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t]))) returnfalse
  }
  returntrue
}

function V(e, t, n) {
  return e.length === t.length && e.every((e, r) => G(e, t[r], n))
}

function F(e) {
  return (null == e ? true : e.themes) != null && e.themes.includes(o.q0.EROTIC)
}

function B(e) {
  return !F(e) && !r.Zk.has(e.id)
}