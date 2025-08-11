/** Chunk was on web.js **/
/** chunk id: 77498, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./35282.js");
var i, o, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk642047 = require("./642047.js"),
  Chunk695346 = require("./695346.js"),
  Chunk973616 = require("./973616.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = "GameStoreReportedGames",
  m = 0x80000000,
  g = Chunk70956.Z.Millis.DAY,
  E = new Chunk642047.Z,
  b = {},
  y = {},
  O = null != (i = Chunk433517.K.get(h)) ? i : {},
  v = "",
  I = null;

function T(e) {
  var t, n, r, i, o, a, s, l;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(d.BA),
    overlay: null != (n = e.overlay) && n,
    overlayWarn: null != (r = e.overlay_warn) && r,
    overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
    hook: null == (o = e.hook) || o,
    aliases: null != (a = e.aliases) ? a : [],
    supportsOutOfProcessOverlay: d.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
    themes: null != (s = e.themes) ? s : [],
    icon: null != (l = e.icon_hash) ? l : true
  }
}

function S(e) {
  return {
    id: e.id,
    name: e.name,
    executables: e.executables,
    overlayWarn: e.overlayWarn,
    overlayCompatibilityHook: e.overlayCompatibilityHook,
    overlay: e.overlay,
    hook: e.hook,
    aliases: e.aliases,
    supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
    themes: [],
    icon: e.icon
  }
}

function A(e) {
  let t = e instanceof d.ZP ? S(e) : e;
  for (let n of (E.set(e.id, t), b[e.name.toLowerCase()] = t, e.aliases)) b[n.toLowerCase()] = t;
  if ((0, _.isDesktop)())
    for (let n of e.executables) y[n.name] = t
}

function N(e) {
  let {
    detectableApplications: t
  } = e;
  for (let e of t) A(e)
}

function C() {
  r = true
}

function R() {
  r = false
}

function P(e) {
  let {
    games: t,
    etag: n
  } = e;
  for (let e of (null != n && v !== n && (v = n), t)) A(T(e));
  r = true, I = Date.now()
}
class w extends(o = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (v = e.detectableGamesEtag), null == (t = e.detectableGames) || t.forEach(e => A(e)))
  }
  getState() {
    return (0, Chunk358085.isDesktop)() ? {
      detectableGamesEtag: v,
      detectableGames: E.values()
    } : {
      detectableGamesEtag: "",
      detectableGames: []
    }
  }
  get games() {
    return E.values()
  }
  getDetectableGame(e) {
    return E.get(e)
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(b, t) ? b[t] : null
  }
  isGameInDatabase(e) {
    return null != this.getGameByName(e.name) || true !== e.nativeProcessObserverId && (e.nativeProcessObserverId & m) == 0
  }
  get fetching() {
    returntrue === r
  }
  get detectableGamesEtag() {
    return v
  }
  get lastFetched() {
    return I
  }
  get detectableGamesTtl() {
    return g
  }
  canFetchDetectableGames() {
    returntrue !== r && (null == I || Date.now() >= I + g)
  }
  getGameByExecutable(e) {
    return y[e]
  }
  getGameByGameData(e) {
    var t, n;
    let r;
    if (null == e.exePath) return null;
    let i = e.exePath.split("/").pop(),
      o = e.exePath.split("/").slice(false).join("/");
    if (null != e.name) {
      if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
        let e = r.executables.map(e => e.name);
        if (e.includes(i) || e.includes(o)) return r
      } else if (null != r) return null
    }
    return null != (n = null != (t = this.getGameByExecutable(i)) ? t : this.getGameByExecutable(o)) ? n : r
  }
  shouldReport(e) {
    let t = null != this.getGameByName(e),
      n = null != O[e];
    return u.G6.getSetting() && !r && !(t || n)
  }
  markGameReported(e) {
    O[e] = true, s.K.set(h, O)
  }
}
p(w, "displayName", "GameStore"), p(w, "persistKey", "GameStore"), p(w, "migrations", [e => {
  var t, n;
  return null == e ? {
    detectableGamesEtag: "",
    detectableGames: []
  } : {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null != (n = null == (t = e.detectableGames) ? true : t.map(e => S(new d.ZP(e)))) ? n : []
  }
}, e => (0, _.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}]);
let D = new w(Chunk570140.Z, {
  OVERLAY_INITIALIZE: N,
  GAMES_DATABASE_FETCH: C,
  GAMES_DATABASE_FETCH_FAIL: R,
  GAMES_DATABASE_UPDATE: P
})