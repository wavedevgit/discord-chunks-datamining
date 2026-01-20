/** Chunk was on web.js **/
/** chunk id: 404577, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => $,
  m: () => B
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var i, a, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk642047 = require("./642047.js"),
  Chunk180138 = require("./180138.js"),
  Chunk189451 = require("./189451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk973616 = require("./973616.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = "GameStoreReportedGames",
  C = 0x80000000,
  A = Chunk70956.Z.Millis.DAY,
  N = new Chunk642047.Z,
  P = {},
  w = {},
  R = null != (i = Chunk433517.K.get(T)) ? i : {},
  D = "",
  x = null,
  L = false,
  j = null,
  M = false,
  k = "",
  U = [],
  G = [],
  Z = new Map,
  F = Chunk70956.Z.Millis.HOUR;

function B(e) {
  var t, n, r, i, a, o, s, l, c, u;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(_.BA),
    overlay: null != (n = e.overlay) && n,
    overlayWarn: null != (r = e.overlay_warn) && r,
    overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
    hook: null == (a = e.hook) || a,
    aliases: null != (o = e.aliases) ? o : [],
    supportsOutOfProcessOverlay: _.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
    themes: null != (s = e.themes) ? s : [],
    icon: null != (l = e.icon_hash) ? l : true,
    thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
    cover_image_hash: null != (u = e.cover_image_hash) ? u : true
  }
}

function V(e) {
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

function H(e) {
  let t = e instanceof f.ZP ? V(e) : e;
  for (let n of (N.set(e.id, t), P[e.name.toLowerCase()] = t, e.aliases)) P[n.toLowerCase()] = t;
  if ((0, g.isDesktop)())
    for (let n of e.executables) w[n.name] = t
}

function Y(e) {
  let {
    detectableApplications: t
  } = e;
  for (let e of (N.clear(), P = {}, w = {}, t)) H(e)
}

function W() {
  r = true
}

function K() {
  r = false, L = true
}

function z(e) {
  let {
    games: t,
    etag: n
  } = e;
  for (let e of (null != n && D !== n && (N.clear(), P = {}, w = {}, D = n), t)) H(B(e));
  r = true, x = Date.now(), L = true
}

function q() {
  M = true
}

function Q() {
  M = false
}

function X(e) {
  let {
    executables: t,
    patterns: n,
    etag: r
  } = e;
  null != r && k !== r && (k = r, U = t.map(e => e.toLowerCase()), G = n.map(e => RegExp(e, "i"))), M = false, j = Date.now()
}
class J extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (D = e.detectableGamesEtag), null != e.blocklistEtag && (k = e.blocklistEtag), null != e.blocklistExecutables && (U = e.blocklistExecutables), null != e.blocklistPatterns && (G = e.blocklistPatterns.map(e => RegExp(e, "i"))), null == (t = e.detectableGames) || t.forEach(e => H(e)))
  }
  getState() {
    return (0, g.isDesktop)() ? {
      detectableGamesEtag: D,
      detectableGames: N.values(),
      blocklistEtag: k,
      blocklistExecutables: U,
      blocklistPatterns: G.map(e => e.source)
    } : {
      detectableGamesEtag: "",
      detectableGames: [],
      blocklistEtag: "",
      blocklistExecutables: [],
      blocklistPatterns: []
    }
  }
  get games() {
    return N.values()
  }
  getDetectableGame(e) {
    return N.get(E.default.cast(e))
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(P, t) ? P[t] : null
  }
  getOfficialGame(e) {
    let t;
    if (null == e) return null;
    if (e.type === y.wW.GAME) t = e.id;
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
    return null != this.getGameByName(e.name) || true !== e.nativeProcessObserverId && (e.nativeProcessObserverId & C) == 0
  }
  get fetching() {
    returntrue === r
  }
  get detectableGamesEtag() {
    return D
  }
  get blocklistEtag() {
    return k
  }
  get lastFetched() {
    return x
  }
  get hasAttemptedFetch() {
    return L
  }
  get detectableGamesTtl() {
    return A
  }
  canFetchDetectableGames() {
    returntrue !== r && (null == x || Date.now() >= x + A)
  }
  canFetchExecutableBlocklist() {
    return !!d.x.getConfig({
      location: "GameStore.shouldBlock"
    }).enabled && !M && (null == j || Date.now() >= j + A)
  }
  getGameByExecutable(e) {
    return w[e]
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
  shouldBlock(e) {
    if (!d.x.getConfig({
        location: "GameStore.shouldBlock"
      }).enabled || null == e.exePath || "" === e.exePath) returnfalse;
    let t = e.exePath.toLowerCase(),
      n = U.find(e => t.includes(e));
    if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), true;
    let r = G.find(t => t.test(e.exePath));
    return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), true)
  }
  maybeTrackBlock(e, t, n) {
    var r, i;
    let a = null != (r = e.exePath.split(/[/\\]/).pop()) ? r : "unknown",
      o = Z.get(a),
      s = Date.now();
    (null == o || s - o >= F) && (Z.set(a, s), h.default.track(b.rMx.GAME_BLOCKLIST_TRIGGERED, {
      block_type: t,
      matched_entry: n,
      game_name: null != (i = e.gameName) ? i : e.origGameName,
      executable_name: a
    }))
  }
  shouldReport(e) {
    if (this.shouldBlock(e)) returnfalse;
    let t = null != this.getGameByName(e.name),
      n = null != e.name && null != R[e.name];
    return p.G6.getSetting() && !r && !(t || n)
  }
  markGameReported(e) {
    R[e] = true, s.K.set(T, R)
  }
}
O(J, "displayName", "GameStore"), O(J, "persistKey", "GameStore"), O(J, "migrations", [e => {
  var t, n;
  return null == e ? {
    detectableGamesEtag: "",
    detectableGames: []
  } : {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null != (n = null == (t = e.detectableGames) ? true : t.map(e => V(new f.ZP(e)))) ? n : []
  }
}, e => (0, g.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}, () => ({
  detectableGamesEtag: "",
  detectableGames: []
}), e => {
  var t, n, r;
  return I(v({}, e), {
    blocklistEtag: null != (t = e.blocklistEtag) ? t : "",
    blocklistExecutables: null != (n = e.blocklistExecutables) ? n : [],
    blocklistPatterns: null != (r = e.blocklistPatterns) ? r : []
  })
}]);
let $ = new J(Chunk570140.Z, {
  OVERLAY_INITIALIZE: Y,
  GAMES_DATABASE_FETCH: W,
  GAMES_DATABASE_FETCH_FAIL: K,
  GAMES_DATABASE_UPDATE: z,
  GAMES_BLOCKLIST_FETCH: q,
  GAMES_BLOCKLIST_FETCH_FAIL: Q,
  GAMES_BLOCKLIST_UPDATE: X
})