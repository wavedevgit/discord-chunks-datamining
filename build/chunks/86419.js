/** Chunk was on web.js **/
/** chunk id: 86419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ES: () => I,
  X6: () => S,
  qH: () => v,
  tk: () => A,
  vH: () => T
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

function v(e) {
  var t, n;
  let u, d;
  if (l.Z.hasPendingChanges()) u = null != (t = l.Z.getPendingWidgets()) ? t : [];
  else {
    let e = o.default.getCurrentUser(),
      t = null != e ? a.Z.getUserProfile(e.id) : null;
    u = null != (n = null == t ? true : t.widgets) ? n : []
  }
  let f = u.find(t => t.type === e);
  if (null != f)
    if (e === r.l.FAVORITE_GAMES) d = E(e);
    else {
      let t = f.games || [];
      if (t.length >= c.Xe[e]) return;
      d = [...t, E(e)]
    }
  else d = e === r.l.FAVORITE_GAMES ? E(e) : [E(e)];
  let _ = O(u, y(e, d));
  s.Z.setPendingWidgets(_);
  let p = [];
  e === r.l.FAVORITE_GAMES ? p.push(d.applicationId) : d.forEach(e => {
    p.push(e.applicationId)
  }), i.Z.getDetectableGamesSupplemental(p)
}

function I(e, t) {
  var n, u, d;
  let f, _;
  if (l.Z.hasPendingChanges()) f = null != (n = l.Z.getPendingWidgets()) ? n : [];
  else {
    let e = o.default.getCurrentUser(),
      t = null != e ? a.Z.getUserProfile(e.id) : null;
    f = null != (u = null == t ? true : t.widgets) ? u : []
  }
  let p = f.find(t => t.type === e),
    h = c.Xe[e];
  if (null != p) {
    if (e === r.l.FAVORITE_GAMES);
    else if (((null == (d = p.games) ? true : d.length) || 0) >= h) return
  }
  let m = {
    applicationId: t
  };
  _ = null != p ? e === r.l.FAVORITE_GAMES ? m : [...p.games || [], m] : e === r.l.FAVORITE_GAMES ? m : [m];
  let g = O(f, y(e, _));
  s.Z.setPendingWidgets(g), i.Z.getDetectableGamesSupplemental([t])
}

function T(e) {
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
async function S() {
  let e = Chunk224724.Z.getPendingWidgets();
  if (null !== module) try {
    await Chunk592183.Z.savePendingWidgets(module)
  } catch (e) {
    console.error("Failed to save sample widgets:", module)
  }
}
async function A() {
  try {
    await Chunk592183.Z.savePendingWidgets([])
  } catch (e) {
    console.error("Failed to clear saved widgets", module)
  }
}