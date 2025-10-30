/** Chunk was on web.js **/
/** chunk id: 48481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uc: () => p,
  ac: () => E,
  cv: () => b,
  d5: () => g,
  i7: () => S,
  kI: () => m,
  re: () => O,
  tU: () => C,
  u0: () => I,
  uL: () => T,
  xU: () => y,
  xt: () => A
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./583741.js");
var Chunk647943 = require("./647943.js"),
  Chunk581282 = require("./581282.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk377108 = require("./377108.js"),
  Chunk524437 = require("./524437.js"),
  Chunk397696 = require("./397696.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js");

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
let p = {
    readerFactory: e => new r.o(e, new TextDecoder("utf-8"))
  },
  h = {
    [Chunk526761.yP.PRELOADED_USER_SETTINGS]: Chunk524437.o8,
    [Chunk526761.yP.FRECENCY_AND_FAVORITES_SETTINGS]: Chunk377108.ji
  };

function m(e, t) {
  return null != t && e in h ? g(h[e], t) : null
}

function g(e, t) {
  if (null == t) return null;
  let n = (0, i.c)(t);
  try {
    return e.fromBinary(n, p)
  } catch (e) {
    throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
  }
}

function E(e) {
  return g(l.o8, e)
}

function b(e, t) {
  return y(h[e], t)
}

function y(e, t) {
  return (0, i.m)(e.toBinary(t))
}

function O(e, t, n) {
  for (let e in t = _({}, t), n) delete t[e];
  return e.mergePartial(t, n), t
}

function v(e, t, n) {
  return null == e.guilds && (e.guilds = l.os.create()), I(e.guilds, t, n)
}

function I(e, t, n) {
  return (null == t || "null" === t) && (t = d.aIL), t in e.guilds || (e.guilds[t] = l.C4.create()), n(e.guilds[t])
}

function S(e, t, n, r) {
  return v(e, t, e => T(e, n, r))
}

function T(e, t, n) {
  return t in e.channels || (e.channels[t] = l.p5.create()), n(e.channels[t])
}

function A(e, t) {
  null == e.versions && (e.versions = c.L.create());
  let n = 0;
  for (let e of t) {
    if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
    n = e.version
  }
  let r = .1 > Math.random(),
    i = false,
    a = [];
  for (let n of t) {
    var o, s;
    if (n.version <= e.versions.clientVersion) {
      r && (null == (o = n.cleanup) || o.call(n));
      continue
    }
    let t = n.run(e);
    if (e.versions.clientVersion = n.version, false === t) {
      null == (s = n.cleanup) || s.call(n);
      continue
    }
    i = true, null != n.cleanup && a.push(n.cleanup)
  }
  return {
    proto: e,
    isDirty: i,
    cleanupFuncs: a
  }
}

function C(e, t) {
  let n = Object.entries(e);
  if (n.length > t)
    for (n = o().sortBy(n, e => {
        let [t, n] = e;
        return n.recentUses[n.recentUses.length - 1]
      }).reverse(); n.length > t;) n.pop();
  let r = {};
  for (let [e, t] of n) {
    let n = s._F.create();
    n.frecency = t.frecency, n.recentUses = t.recentUses.filter(e => null != e && e > 0).map(String), n.score = Math.round(t.score), n.totalUses = t.totalUses, r[e] = n
  }
  return r
}