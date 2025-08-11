/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ES: () => S,
  X6: () => N,
  np: () => E,
  qH: () => I,
  tk: () => C,
  vH: () => A,
  y8: () => T
}), require("./388685.js"), require("./642613.js");
var Chunk296009 = require("./296009.js"),
  Chunk224706 = require("./224706.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk247397 = require("./247397.js"),
  Chunk925434 = require("./925434.js"),
  Chunk570911 = require("./570911.js");

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

function m(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function g(e, t) {
  return [...e].sort(() => .5 - Math.random()).slice(0, t)
}

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : new Set,
    n = d.J6.filter(e => !t.has(e)),
    i = {
      applicationId: m(n.length > 0 ? n : d.J6)
    };
  return e === r.l.FAVORITE_GAMES && (i.comment = Math.random() > .5 ? m(u.x) : true), e === r.l.CURRENT_GAMES && (i.tags = Math.random() > .3 ? g(u.T, Math.floor(3 * Math.random()) + 1) : true), i
}

function b() {
  var e, t;
  if (Chunk224724.Z.hasPendingChanges()) return null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [];
  {
    let e = Chunk594174.default.getCurrentUser(),
      n = null != module ? Chunk621853.Z.getUserProfile(module.id) : null;
    return null != (t = null == require ? true : require.widgets) ? exports : []
  }
}

function y(e) {
  return e.sort((e, t) => c.rR.indexOf(e.type) - c.rR.indexOf(t.type))
}

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return h(_({}, {
    id: e
  }), {
    type: e,
    games: t
  })
}

function v(e, t) {
  let n = e.filter(e => e.type !== t.type);
  return y([t, ...n])
}

function I(e) {
  let t = b();
  if (null != t.find(t => t.type === e)) return;
  let n = O(e);
  s.Z.setPendingWidgets(y([n, ...t]))
}

function T(e) {
  let t = b().filter(t => t.type !== e);
  s.Z.setPendingWidgets(t)
}

function S(e, t) {
  let n, o = b(),
    a = o.find(t => t.type === e),
    l = c.Xe[e];
  if (null != a) {
    var u, d;
    if ((null != (d = null == (u = a.games) ? true : u.length) ? d : 0) >= l) return
  }
  let f = {
    applicationId: t
  };
  n = null != a ? e === r.l.FAVORITE_GAMES ? [f] : [...a.games || [], f] : [f];
  let _ = v(o, O(e, n));
  s.Z.setPendingWidgets(_), i.Z.getDetectableGamesSupplemental([t])
}

function A(e) {
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
async function N() {
  let e = Chunk224724.Z.getPendingWidgets();
  if (null !== module) try {
    await Chunk592183.Z.savePendingWidgets(module)
  } catch (e) {
    console.error("Failed to save sample widgets:", module)
  }
}
async function C() {
  try {
    await Chunk592183.Z.savePendingWidgets([])
  } catch (e) {
    console.error("Failed to clear saved widgets", module)
  }
}