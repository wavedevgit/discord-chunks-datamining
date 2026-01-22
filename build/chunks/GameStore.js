/** Chunk was on web.js **/
/** chunk id: 760751, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => J,
  M: () => B
}), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./747238.js");
var i, a, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk194862 = require("./194862.js"),
  Chunk690511 = require("./690511.js"),
  Chunk223273 = require("./223273.js"),
  Chunk253932 = require("./253932.js"),
  Chunk611010 = require("./611010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = "GameStoreReportedGames",
  T = 0x80000000,
  C = Chunk927813.A.Millis.DAY,
  N = new Chunk194862.A,
  R = {},
  w = {},
  P = null != (i = Chunk506774.w.get(I)) ? i : {},
  D = "",
  x = null,
  L = false,
  j = null,
  M = false,
  k = "",
  U = [],
  G = [],
  V = new Map,
  F = Chunk927813.A.Millis.HOUR;

function B(e) {
  var t, n, r, i, a, s, o, l, c, u;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(_.lg),
    overlay: null != (n = e.overlay) && n,
    overlayWarn: null != (r = e.overlay_warn) && r,
    overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
    hook: null == (a = e.hook) || a,
    aliases: null != (s = e.aliases) ? s : [],
    supportsOutOfProcessOverlay: _.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
    themes: null != (o = e.themes) ? o : [],
    icon: null != (l = e.icon_hash) ? l : true,
    thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
    cover_image_hash: null != (u = e.cover_image_hash) ? u : true
  }
}

function H(e) {
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

function Y(e) {
  let t = e instanceof f.Ay ? H(e) : e;
  for (let n of (N.set(e.id, t), R[e.name.toLowerCase()] = t, e.aliases)) R[n.toLowerCase()] = t;
  if ((0, g.isDesktop)())
    for (let n of e.executables) w[n.name] = t
}

function W(e) {
  let {
    detectableApplications: t
  } = e;
  for (let e of (N.clear(), R = {}, w = {}, t)) Y(e)
}

function K() {
  r = true
}

function z() {
  r = false, L = true
}

function q(e) {
  let {
    games: t,
    etag: n
  } = e;
  for (let e of (null != n && D !== n && (N.clear(), R = {}, w = {}, D = n), t)) Y(B(e));
  r = true, x = Date.now(), L = true
}

function X() {
  M = true
}

function Z() {
  M = false
}

function Q(e) {
  let {
    executables: t,
    patterns: n,
    etag: r
  } = e;
  null != r && k !== r && (k = r, U = t.map(e => e.toLowerCase()), G = n.map(e => RegExp(e, "i"))), M = false, j = Date.now()
}
class $ extends(a = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (D = e.detectableGamesEtag), null != e.blocklistEtag && (k = e.blocklistEtag), null != e.blocklistExecutables && (U = e.blocklistExecutables), null != e.blocklistPatterns && (G = e.blocklistPatterns.map(e => RegExp(e, "i"))), null == (t = e.detectableGames) || t.forEach(e => Y(e)))
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
    return Object.prototype.hasOwnProperty.call(R, t) ? R[t] : null
  }
  getOfficialGame(e) {
    let t;
    if (null == e) return null;
    if (e.type === y.S7.GAME) t = e.id;
    else {
      var n, r;
      t = null == (r = e.linkedGames) || null == (n = r.find(e => e.type === c.Mh.OFFICIAL)) ? true : n.id
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
    return null != this.getGameByName(e.name) || true !== e.nativeProcessObserverId && (e.nativeProcessObserverId & T) == 0
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
    return C
  }
  canFetchDetectableGames() {
    returntrue !== r && (null == x || Date.now() >= x + C)
  }
  canFetchExecutableBlocklist() {
    return !!d.n.getConfig({
      location: "GameStore.shouldBlock"
    }).enabled && !M && (null == j || Date.now() >= j + C)
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
    return null != (t = null != (n = this.getGameByExecutable(i)) ? n : this.getGameByExecutable(a)) ? t : r
  }
  shouldBlock(e) {
    if (!d.n.getConfig({
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
      s = V.get(a),
      o = Date.now();
    (null == s || o - s >= F) && (V.set(a, o), h.default.track(b.HAw.GAME_BLOCKLIST_TRIGGERED, {
      block_type: t,
      matched_entry: n,
      game_name: null != (i = e.gameName) ? i : e.origGameName,
      executable_name: a
    }))
  }
  shouldReport(e) {
    if (this.shouldBlock(e)) returnfalse;
    let t = null != this.getGameByName(e.name),
      n = null != e.name && null != P[e.name];
    return p.tz.getSetting() && !r && !(t || n)
  }
  markGameReported(e) {
    P[e] = true, o.w.set(I, P)
  }
}
O($, "displayName", "GameStore"), O($, "persistKey", "GameStore"), O($, "migrations", [e => {
  var t, n;
  return null == e ? {
    detectableGamesEtag: "",
    detectableGames: []
  } : {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null != (t = null == (n = e.detectableGames) ? true : n.map(e => H(new f.Ay(e)))) ? t : []
  }
}, e => (0, g.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}, () => ({
  detectableGamesEtag: "",
  detectableGames: []
}), e => {
  var t, n, r;
  return S(A({}, e), {
    blocklistEtag: null != (t = e.blocklistEtag) ? t : "",
    blocklistExecutables: null != (n = e.blocklistExecutables) ? n : [],
    blocklistPatterns: null != (r = e.blocklistPatterns) ? r : []
  })
}]);
let J = new $(Chunk73153.h, {
  OVERLAY_INITIALIZE: W,
  GAMES_DATABASE_FETCH: K,
  GAMES_DATABASE_FETCH_FAIL: z,
  GAMES_DATABASE_UPDATE: q,
  GAMES_BLOCKLIST_FETCH: X,
  GAMES_BLOCKLIST_FETCH_FAIL: Z,
  GAMES_BLOCKLIST_UPDATE: Q
})