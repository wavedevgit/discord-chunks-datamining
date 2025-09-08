/** Chunk was on web.js **/
/** chunk id: 77498, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./35282.js");
var i, a, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk642047 = require("./642047.js"),
  Chunk189451 = require("./189451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk973616 = require("./973616.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = "GameStoreReportedGames",
  E = 0x80000000,
  b = Chunk70956.Z.Millis.DAY,
  y = new Chunk642047.Z,
  O = {},
  v = {},
  I = null != (i = Chunk433517.K.get(g)) ? i : {},
  T = "",
  S = null;

function A(e) {
  var t, n, r, i, a, o, s, l, c;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(f.BA),
    overlay: null != (n = e.overlay) && n,
    overlayWarn: null != (r = e.overlay_warn) && r,
    overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
    hook: null == (a = e.hook) || a,
    aliases: null != (o = e.aliases) ? o : [],
    supportsOutOfProcessOverlay: f.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
    themes: null != (s = e.themes) ? s : [],
    icon: null != (l = e.icon_hash) ? l : true,
    thirdPartySkus: null != (c = e.third_party_skus) ? c : []
  }
}

function C(e) {
  var t, n;
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
    themes: null != (t = e.themes) ? t : [],
    icon: e.icon,
    thirdPartySkus: null != (n = e.thirdPartySkus) ? n : []
  }
}

function N(e) {
  let t = e instanceof u.ZP ? C(e) : e;
  for (let n of (y.set(e.id, t), O[e.name.toLowerCase()] = t, e.aliases)) O[n.toLowerCase()] = t;
  if ((0, p.isDesktop)())
    for (let n of e.executables) v[n.name] = t
}

function R(e) {
  let {
    detectableApplications: t
  } = e;
  for (let e of t) N(e)
}

function P() {
  r = true
}

function w() {
  r = false
}

function D(e) {
  let {
    games: t,
    etag: n
  } = e;
  for (let e of (null != n && T !== n && (T = n), t)) N(A(e));
  r = true, S = Date.now()
}
class x extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (T = e.detectableGamesEtag), null == (t = e.detectableGames) || t.forEach(e => N(e)))
  }
  getState() {
    return (0, Chunk358085.isDesktop)() ? {
      detectableGamesEtag: T,
      detectableGames: y.values()
    } : {
      detectableGamesEtag: "",
      detectableGames: []
    }
  }
  get games() {
    return y.values()
  }
  getDetectableGame(e) {
    return y.get(h.default.cast(e))
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(O, t) ? O[t] : null
  }
  getGameByApplication(e) {
    let t = this.getDetectableGame(e.id);
    if (null != t) return t;
    if (null != e.linkedGames) {
      for (let n of e.linkedGames)
        if (null != (t = this.getDetectableGame(n.id))) return t
    }
    return this.getGameByName(e.name)
  }
  isGameInDatabase(e) {
    return null != this.getGameByName(e.name) || true !== e.nativeProcessObserverId && (e.nativeProcessObserverId & E) == 0
  }
  get fetching() {
    returntrue === r
  }
  get detectableGamesEtag() {
    return T
  }
  get lastFetched() {
    return S
  }
  get detectableGamesTtl() {
    return b
  }
  canFetchDetectableGames() {
    returntrue !== r && (null == S || Date.now() >= S + b)
  }
  getGameByExecutable(e) {
    return v[e]
  }
  getGameByGameData(e) {
    var t, n;
    let r;
    if (null == e.exePath) return null;
    let i = e.exePath.split("/").pop(),
      a = e.exePath.split("/").slice(false).join("/");
    if (null != e.name) {
      if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
        let e = r.executables.map(e => e.name);
        if (e.includes(i) || e.includes(a)) return r
      } else if (null != r) return null
    }
    return null != (n = null != (t = this.getGameByExecutable(i)) ? t : this.getGameByExecutable(a)) ? n : r
  }
  shouldReport(e) {
    let t = null != this.getGameByName(e),
      n = null != I[e];
    return d.G6.getSetting() && !r && !(t || n)
  }
  markGameReported(e) {
    I[e] = true, s.K.set(g, I)
  }
}
m(x, "displayName", "GameStore"), m(x, "persistKey", "GameStore"), m(x, "migrations", [e => {
  var t, n;
  return null == e ? {
    detectableGamesEtag: "",
    detectableGames: []
  } : {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null != (n = null == (t = e.detectableGames) ? true : t.map(e => C(new u.ZP(e)))) ? n : []
  }
}, e => (0, p.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}, () => ({
  detectableGamesEtag: "",
  detectableGames: []
})]);
let L = new x(Chunk570140.Z, {
  OVERLAY_INITIALIZE: R,
  GAMES_DATABASE_FETCH: P,
  GAMES_DATABASE_FETCH_FAIL: w,
  GAMES_DATABASE_UPDATE: D
})