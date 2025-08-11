/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ES: () => S,
  X6: () => N,
  qH: () => I,
  tk: () => C,
  vH: () => A,
  y8: () => T
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
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

function b(e) {
  return e.sort((e, t) => c.rR.indexOf(e.type) - c.rR.indexOf(t.type))
}

function y(e, t) {
  let n = {
    id: e
  };
  return e === r.l.FAVORITE_GAMES ? h(_({}, n), {
    type: r.l.FAVORITE_GAMES,
    game: t
  }) : h(_({}, n), {
    type: e,
    games: t
  })
}

function O(e, t) {
  let n = e.filter(e => e.type !== t.type);
  return b([t, ...n])
}

function v() {
  var e, t;
  let n;
  if (Chunk224724.Z.hasPendingChanges()) n = null != (e = Chunk224724.Z.getPendingWidgets()) ? module : [];
  else {
    let e = Chunk594174.default.getCurrentUser(),
      r = null != module ? Chunk621853.Z.getUserProfile(module.id) : null;
    n = null != (t = null == Chunk296009 ? true : Chunk296009.widgets) ? exports : []
  }
  return require
}

function I(e) {
  let t, n = v(),
    o = n.find(t => t.type === e);
  if (null != o)
    if (e === r.l.FAVORITE_GAMES) t = E(e);
    else {
      let n = o.games || [];
      if (n.length >= c.Xe[e]) return;
      t = [...n, E(e)]
    }
  else t = e === r.l.FAVORITE_GAMES ? E(e) : [E(e)];
  let a = O(n, y(e, t));
  s.Z.setPendingWidgets(a);
  let l = [];
  e === r.l.FAVORITE_GAMES ? l.push(t.applicationId) : t.forEach(e => {
    l.push(e.applicationId)
  }), i.Z.getDetectableGamesSupplemental(l)
}

function T(e) {
  let t = v().filter(t => t.type !== e);
  s.Z.setPendingWidgets(t)
}

function S(e, t) {
  let n, o = v(),
    a = o.find(t => t.type === e),
    l = c.Xe[e];
  if (null != a)
    if (e === r.l.FAVORITE_GAMES);
    else {
      var u;
      if (((null == (u = a.games) ? true : u.length) || 0) >= l) return
    } let d = {
    applicationId: t
  };
  n = null != a ? e === r.l.FAVORITE_GAMES ? d : [...a.games || [], d] : e === r.l.FAVORITE_GAMES ? d : [d];
  let f = O(o, y(e, n));
  s.Z.setPendingWidgets(f), i.Z.getDetectableGamesSupplemental([t])
}

function A(e) {
  let t, n = e => ({
    game_id: e.applicationId,
    comment: e.comment,
    tags: e.tags
  });
  return t = e.type === r.l.FAVORITE_GAMES ? [n(e.game)] : e.games.map(n), {
    data: {
      type: e.type,
      games: t
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