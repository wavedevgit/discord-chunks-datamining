/** Chunk was on web.js **/
/** chunk id: 761821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $o: () => A,
  Gd: () => E,
  Mr: () => C,
  RK: () => O,
  Su: () => _,
  VB: () => S,
  Y5: () => m,
  aw: () => y,
  gc: () => I,
  ii: () => g,
  ob: () => b,
  vI: () => T
}), require("./65821.js"), require("./896048.js"), require("./321073.js"), require("./264879.js");
var Chunk638504 = require("./638504.js"),
  Chunk65412 = require("./65412.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk803805 = require("./803805.js"),
  Chunk873298 = require("./873298.js"),
  Chunk813827 = require("./813827.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}
let _ = {
    readerFactory: e => new r.V(e, new TextDecoder("utf-8"))
  },
  h = {
    [Chunk355097.oD.PRELOADED_USER_SETTINGS]: Chunk873298.nT,
    [Chunk355097.oD.FRECENCY_AND_FAVORITES_SETTINGS]: Chunk803805.aw
  };

function m(e, t) {
  return null != t && e in h ? g(h[e], t) : null
}

function g(e, t) {
  if (null == t) return null;
  let n = (0, i.A)(t);
  try {
    return e.fromBinary(n, _)
  } catch (e) {
    throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
  }
}

function E(e) {
  return g(l.nT, e)
}

function y(e, t) {
  return b(h[e], t)
}

function b(e, t) {
  return (0, i.C)(e.toBinary(t))
}

function O(e, t, n) {
  for (let e in t = p({}, t), n) delete t[e];
  return e.mergePartial(t, n), t
}

function v(e, t, n) {
  return null == e.guilds && (e.guilds = l.KJ.create()), A(e.guilds, t, n)
}

function A(e, t, n) {
  return (null == t || "null" === t) && (t = d.D0I), t in e.guilds || (e.guilds[t] = l.nx.create()), n(e.guilds[t])
}

function I(e, t, n, r) {
  return v(e, t, e => S(e, n, r))
}

function S(e, t, n) {
  return t in e.channels || (e.channels[t] = l.Ju.create()), n(e.channels[t])
}

function T(e, t) {
  null == e.versions && (e.versions = c.u.create());
  let n = 0;
  for (let e of t) {
    if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
    n = e.version
  }
  let r = .1 > Math.random(),
    i = false,
    a = [];
  for (let n of t) {
    var s, o;
    if (n.version <= e.versions.clientVersion) {
      r && (null == (s = n.cleanup) || s.call(n));
      continue
    }
    let t = n.run(e);
    if (e.versions.clientVersion = n.version, false === t) {
      null == (o = n.cleanup) || o.call(n);
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
    for (n = s().sortBy(n, e => {
        let [t, n] = e;
        return n.recentUses[n.recentUses.length - 1]
      }).reverse(); n.length > t;) n.pop();
  let r = {};
  for (let [e, t] of n) {
    let n = o.zT.create();
    n.frecency = t.frecency, n.recentUses = t.recentUses.filter(e => null != e && e > 0).map(String), n.score = Math.round(t.score), n.totalUses = t.totalUses, r[e] = n
  }
  return r
}