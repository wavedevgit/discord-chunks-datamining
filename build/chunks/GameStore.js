/** Chunk was on web.js **/
/** chunk id: 77498, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => k,
  m: () => P
}), require("./388685.js"), require("./35282.js");
var i, a, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk642047 = require("./642047.js"),
  Chunk189451 = require("./189451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk973616 = require("./973616.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk674563 = require("./674563.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = "GameStoreReportedGames",
  y = 0x80000000,
  O = Chunk70956.Z.Millis.DAY,
  v = new Chunk642047.Z,
  S = {},
  I = {},
  T = null != (i = Chunk433517.K.get(b)) ? i : {},
  C = "",
  A = null,
  N = false;

function P(e) {
  var t, n, r, i, a, o, s, l, c, u;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(p.BA),
    overlay: null != (n = e.overlay) && n,
    overlayWarn: null != (r = e.overlay_warn) && r,
    overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
    hook: null == (a = e.hook) || a,
    aliases: null != (o = e.aliases) ? o : [],
    supportsOutOfProcessOverlay: p.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
    themes: null != (s = e.themes) ? s : [],
    icon: null != (l = e.icon_hash) ? l : true,
    thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
    cover_image_hash: null != (u = e.cover_image_hash) ? u : true
  }
}

function R(e) {
  var t, n, r;
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
    thirdPartySkus: null != (n = e.thirdPartySkus) ? n : [],
    cover_image_hash: null != (r = e.cover_image_hash) ? r : true
  }
}

function w(e) {
  let t = e instanceof d.ZP ? R(e) : e;
  for (let n of (v.set(e.id, t), S[e.name.toLowerCase()] = t, e.aliases)) S[n.toLowerCase()] = t;
  if ((0, m.isDesktop)())
    for (let n of e.executables) I[n.name] = t
}

function D(e) {
  let {
    detectableApplications: t
  } = e;
  for (let e of (v.clear(), S = {}, I = {}, t)) w(e)
}

function x() {
  r = true
}

function L() {
  r = false, N = true
}

function j(e) {
  let {
    games: t,
    etag: n
  } = e;
  for (let e of (null != n && C !== n && (v.clear(), S = {}, I = {}, C = n), t)) w(P(e));
  r = true, A = Date.now(), N = true
}
class M extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (C = e.detectableGamesEtag), null == (t = e.detectableGames) || t.forEach(e => w(e)))
  }
  getState() {
    return (0, Chunk358085.isDesktop)() ? {
      detectableGamesEtag: C,
      detectableGames: v.values()
    } : {
      detectableGamesEtag: "",
      detectableGames: []
    }
  }
  get games() {
    return v.values()
  }
  getDetectableGame(e) {
    return v.get(h.default.cast(e))
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(S, t) ? S[t] : null
  }
  getOfficialGame(e) {
    let t;
    if (null == e) return null;
    if (e.type === g.wW.GAME) t = e.id;
    else {
      var n, r;
      t = null == (r = e.linkedGames) || null == (n = r.find(e => e.type === c.tE.OFFICIAL)) ? true : n.id
    }
    return null == t ? null : this.getDetectableGame(t)
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
    return null != this.getGameByName(e.name) || true !== e.nativeProcessObserverId && (e.nativeProcessObserverId & y) == 0
  }
  get fetching() {
    returntrue === r
  }
  get detectableGamesEtag() {
    return C
  }
  get lastFetched() {
    return A
  }
  get hasAttemptedFetch() {
    return N
  }
  get detectableGamesTtl() {
    return O
  }
  canFetchDetectableGames() {
    returntrue !== r && (null == A || Date.now() >= A + O)
  }
  getGameByExecutable(e) {
    return I[e]
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
      n = null != T[e];
    return f.G6.getSetting() && !r && !(t || n)
  }
  markGameReported(e) {
    T[e] = true, s.K.set(b, T)
  }
}
E(M, "displayName", "GameStore"), E(M, "persistKey", "GameStore"), E(M, "migrations", [e => {
  var t, n;
  return null == e ? {
    detectableGamesEtag: "",
    detectableGames: []
  } : {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null != (n = null == (t = e.detectableGames) ? true : t.map(e => R(new d.ZP(e)))) ? n : []
  }
}, e => (0, m.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}, () => ({
  detectableGamesEtag: "",
  detectableGames: []
})]);
let k = new M(Chunk570140.Z, {
  OVERLAY_INITIALIZE: D,
  GAMES_DATABASE_FETCH: x,
  GAMES_DATABASE_FETCH_FAIL: L,
  GAMES_DATABASE_UPDATE: j
})