/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => ej,
  ZP: () => e9,
  b6: () => eP,
  ik: () => eD,
  ow: () => ev,
  rH: () => eC
}), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./704826.js"), require("./290780.js"), require("./642613.js");
var i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk593472 = require("./593472.js"),
  Chunk726542 = require("./726542.js"),
  Chunk439849 = require("./439849.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk855403 = require("./855403.js"),
  Chunk444295 = require("./444295.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk948897 = require("./948897.js"),
  Chunk817788 = require("./817788.js"),
  Chunk509003 = require("./509003.js"),
  Chunk802512 = require("./802512.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk877481 = require("./877481.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk581567 = require("./581567.js"),
  Chunk624126 = require("./624126.js"),
  Chunk220410 = require("./220410.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = new Chunk710845.Z("RunningGameStore"),
  W = "RunningGameStore",
  K = false,
  z = "4294967293",
  q = [],
  X = [{
    executables: [{
      os: "win32",
      name: "obs/obs.exe"
    }, {
      os: "win32",
      name: "obs32.exe"
    }, {
      os: "win32",
      name: "obs64.exe"
    }, {
      os: "darwin",
      name: "OBS.app"
    }, {
      os: "linux",
      name: "obs"
    }],
    name: "OBS",
    streamerTool: true
  }, {
    executables: [{
      os: "win32",
      name: "XSplit.Gamecaster.exe"
    }, {
      os: "win32",
      name: "XSplit.Core.exe"
    }, {
      os: "win32",
      name: "Gamecaster.exe"
    }],
    name: "XSplit",
    streamerTool: true
  }, {
    executables: [{
      os: "win32",
      name: "bebo.exe"
    }],
    name: "Bebo",
    streamerTool: true
  }, {
    executables: [{
      os: "win32",
      name: "Streamlabs OBS.exe"
    }, {
      os: "win32",
      name: "Streamlabs Desktop.exe"
    }, {
      os: "darwin",
      name: "Streamlabs Desktop.app"
    }],
    name: "Streamlabs Desktop",
    streamerTool: true
  }, {
    executables: [{
      os: "win32",
      name: "TwitchStudio.exe"
    }, {
      os: "darwin",
      name: "Twitch Studio.app"
    }],
    name: "Twitch Studio",
    streamerTool: true
  }, {
    executables: [{
      os: "win32",
      name: "Spotify.exe"
    }, {
      os: "darwin",
      name: "Spotify.app"
    }, {
      os: "linux",
      name: "spotify"
    }],
    name: Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY).name
  }],
  Q = [],
  J = true,
  $ = new Set,
  ee = [],
  et = [],
  en = [],
  er = null,
  ei = [],
  ea = {},
  eo = {},
  es = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableOverlayV3: {},
    enableDetection: {}
  },
  el = function() {},
  ec = {},
  eu = 0,
  ed = null,
  ef = null,
  e_ = {},
  ep = new Set,
  eh = new Set,
  em = null,
  eg = null,
  eE = new Map,
  eb = new Map;

function ey(e, t, n) {
  let r = e[t];
  true !== r && (delete e[t], e[n] = r)
}

function eO(e) {
  let t = {
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  };
  return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = true), e.block && (t.block = true), null != e.distributor && (t.distributor = e.distributor), null != e.gameName && (t.gameName = e.gameName), eI(t, e), t
}

function ev(e) {
  return e.distributor === G.GQo.ROBLOX ? (0, T.oK)(e) : e
}

function eI(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function eT(e) {
  var t, n, r, i;
  let a = eb.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != a) return a;
  let o = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = eE.get(o.toLowerCase());
  if (null != s) return s;
  for (let [t, n] of eE) {
    let r = e.exePath.toLowerCase(),
      i = t.toLowerCase();
    if (r.endsWith(i)) {
      let e = r.length - i.length;
      if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n
    }
  }
  return null
}

function eS(e) {
  let t = eT(e);
  return (null == t ? true : t.streamerTool) === true
}

function eA() {
  if (en.length > 0) {
    let e = er;
    er = en[0], null != module && er.pid === module.pid ? er.start = module.start : er.start = Date.now()
  } else er = null;
  let e = [];
  for (let t of en) exports.pid in e_ || (e_[exports.pid] = exports, module.push(exports));
  let t = [];
  for (let e of Object.values(e_)) en.some(t => t.pid === e.pid) || (exports.push(module), delete e_[module.pid]);
  Y.info("Running Games Changed", {
    runningGames: en,
    added: module,
    removed: exports,
    previousGames: e_
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: en,
    added: module,
    removed: exports
  })
}

function eC(e) {
  if ((0, T.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}
X.forEach(e => {
  var t;
  eb.set(e.name.toLowerCase(), e), (null != (t = e.executables) ? t : []).forEach(t => {
    eE.set(t.name.toLowerCase(), e)
  })
});
let eN = new Set(["1314395942253756416"]);

function eR(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = A.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && eN.has(t)
}

function eP(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [A.Z, C.Z],
    i = ev(e);
  if (i.isLauncher) return {
    source: y.d0.LAUNCHER,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled
  };
  if ("pid" in i && !v.Z.acquireLock(i.pid)) return {
    source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled
  };
  let a = n.getGameByName(i.name);
  if (null != a) {
    let e = r.getActiveLibraryApplication(a.id);
    if (null != e) return {
      source: y.d0.LIBRARY_APPLICATION,
      enabledOOP: e.isOverlayV3Enabled(),
      enabledLegacy: e.isLegacyOverlayEnabled(),
      overlayMethod: y.gl.Disabled
    }
  }
  let o = (0, O.NW)("getRawOverlayGameStatus") && (0, j.supportsOutOfProcess)() && !t,
    s = eR(null != a ? a : i),
    l = b.v.legacyEnabled,
    c = o && !s,
    u = es.enableOverlay[eC(i)],
    d = es.enableOverlayV3[eC(i)];
  if (null != u || null != d) {
    let e = null != d ? d : c,
      t = null != u ? u : l,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !s ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: c ? n : y.gl.Hook
    }
  }
  let f = null == i.id ? null : ec[i.id];
  if (null != f) {
    var _, p;
    let e = null != (_ = f.enabledOOP) ? _ : c,
      t = null != (p = f.enabled) ? p : l,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !s ? y.d0.OOP_DEFAULT_DATABASE : y.d0.DATABASE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: c ? n : y.gl.Hook
    }
  }
  return {
    source: y.d0.DEFAULT,
    enabledOOP: K || c,
    enabledLegacy: K,
    overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled
  }
}

function ew(e) {
  let t = ev(e),
    n = es.enableOverlay[eC(t)],
    r = es.enableOverlayV3[eC(t)];
  if (null != n || null != r) return null != n ? n : r;
  let i = eP(t);
  return i.enabledLegacy || i.enabledOOP
}

function eD(e) {
  let t = es.enableDetection[eC(e)];
  return null == t || t
}

function ex(e) {
  return !e.hidden && eD(e)
}

function eL() {
  Chunk433517.K.set(W, es)
}

function ej(e, t, n, r) {
  let i = H(F({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow() : " ",
    overlay: ew(e),
    verified: n.isGameInDatabase(e),
    detectable: eD(e)
  });
  return null != e.id && null != ec[e.id] && (i.overlayWarn = ec[e.id].warn), i
}

function eM(e) {
  return {
    name: e.name,
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  }
}

function ek() {
  let e = false;
  return ee = o().values(Chunk283595.Z.libraryApplications).reduce((t, n) => {
    let r = A.Z.getDetectableGame(n.id);
    if (null == r) return t;
    for (let i of N.Z.getLaunchOptions(n.id, n.branchId)) {
      let a = "".concat(n.id, ":").concat(n.branchId);
      $.has(a) || (e = true, $.add(a));
      let {
        fullExecutablePath: o
      } = i, s = o.replace(/\\/g, "/").toLowerCase();
      ea[s] = r.id, t.push({
        id: r.id,
        name: r.name,
        exePath: s,
        cmdLine: "",
        lastFocused: 0,
        add: true
      })
    }
    return t
  }, []), module && eU(), module
}

function eU() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...ee, ...o().values(es.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function eG(e, t) {
  let n = es.gameOverrides[e];
  null != n && (es.gameOverrides[t] = n, delete es.gameOverrides[e]);
  let r = es.enableOverlay[e];
  null != r && (es.enableOverlay[t] = r, delete es.enableOverlay[e]);
  let i = es.enableOverlayV3[e];
  null != i && (es.enableOverlayV3[t] = i, delete es.enableOverlayV3[e]);
  let a = es.enableDetection[e];
  null != a && (es.enableDetection[t] = a, delete es.enableDetection[e])
}

function eB(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (es.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = es.gameOverrides[eC(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), t.id === e.id && eC(t) !== eC(e) && (eG(eC(t), eC(e)), t.exePath = e.exePath), eI(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      es.gamesSeen.unshift(eO(e))
    }
  }), es.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), eL(), w.Z.setRecentGames(eZ().map(e => ej(e, e7, A.Z, C.Z))))
}

function eZ() {
  let e = o().values(es.gameOverrides);
  return es.gamesSeen.filter(e => true === es.gameOverrides[eC(e)]).concat(module)
}

function eF(e, t) {
  if (true === t) {
    let t = L.ZP.getDiscordUtils();
    if (null != t && null != t.getWindowHandleFromPid) {
      let n = t.getWindowHandleFromPid(e);
      return null != n && "0" !== n ? n : null
    }
    return null
  }
  return "0" === t ? null : t
}

function eV() {
  er = (en = en.map(e => e.distributor === G.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e)).length > 0 ? en[0] : null, eB(en)
}

function eH(e) {
  eB(en)
}

function eY(e) {
  et = e.games
}

function eW() {
  J = false
}

function eK(e) {
  let {
    pid: t
  } = e;
  ed = t, ef = null
}

function ez(e) {
  let {
    pid: t
  } = e;
  ef = t, ed = null
}

function eq() {
  ed = null
}

function eX(e) {
  let t, n = e.pid,
    r = en.find(e => e.pid === n);
  if (null == r) {
    let e = et.find(e => e.pid === n);
    if (null == e) return;
    (r = F({}, e)).hidden = false, en.push(r), t = eC(r)
  } else t = eC(r), r.hidden && (eo[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), es.gameOverrides[t] = H(F({}, r), {
    add: true
  }), eB(en), eU(), eL(), eA()
}

function eQ() {
  eU()
}

function eJ(e) {
  em = e.level, eg = e.intervalSeconds
}

function e$() {
  em = null, eg = null, ep.clear()
}

function e0(e) {
  let t = e.processes.map(e => {
    var t;
    return {
      pid: e.pid,
      cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
    }
  }).filter(e => {
    if (ep.has(e.pid) || eh.has(e.cleanedExePath)) returnfalse;
    let t = Q.some(t => e.cleanedExePath.includes(t));
    return t && ep.add(e.pid), t
  }).map(e => e.cleanedExePath);
  t.length > 0 && R.default.track(G.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: Q,
    paths: t,
    debugging_level: em,
    interval_seconds: eg
  })
}

function e1(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== es.enableOverlay[eC(t)], a = r !== es.enableOverlayV3[eC(t)];
  if (i && (es.enableOverlay[eC(t)] = n), a && null != r && (es.enableOverlayV3[eC(t)] = r), eL(), !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null)) {
    var o, s;
    i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function e2(e) {
  let {
    game: t
  } = e, n = eD(t);
  es.enableDetection[eC(t)] = !n, eL(), en.length > 0 && en.some(e => e.distributor === G.GQo.ROBLOX) && eV(), R.default.track(G.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function e3(e) {
  let t = eC(e.game),
    n = es.gameOverrides[t];
  null == n && ((n = eM(e.game)).add = true), n.name = e.newName;
  let r = eC(n);
  delete es.gameOverrides[t], es.gameOverrides[r] = n, ey(es.enableOverlay, t, r), ey(es.enableDetection, t, r), ey(eo, t, r), es.gamesSeen.forEach(n => {
    eC(n) === t && (n.name = e.newName)
  });
  let i = false;
  en.forEach(n => {
    eC(n) === t && (n.name = e.newName, i = true)
  }), eU(), eL(), i && eA()
}

function e4(e) {
  let t = eC(e.game);
  delete es.gameOverrides[t], delete es.enableOverlay[t], delete es.enableDetection[t], es.gamesSeen = es.gamesSeen.filter(e => eC(e) !== t), eo[t] && (en.forEach(e => {
    t === eC(e) && (e.hidden = true)
  }), delete eo[t]), en.some(e => eC(e) === t) && eA(), eU(), eL()
}

function e8(e) {
  var t;
  if (__OVERLAY__ || !x.isPlatformEmbedded) return;
  let n = L.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = A.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e6() {
  Chunk353926.Z.hasLoadedExperiments && q.length > 0 && (eB(q), q = [])
}!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP) && (el = function() {
  let e = [],
    t = new Set;
  r = {};
  let n = Chunk77498.Z.games,
    i = (0, Chunk32300.NW)("handleGamesDatabaseUpdate") && (0, Chunk145597.supportsOutOfProcess)();
  for (let e of require) {
    var a, o, s, l;
    let t = eR(module),
      n = i && !exports || Chunk593472.r.enabledOOP,
      r = null != (a = module.overlay) ? Chunk392711 : Chunk593472.r.enabled;
    ec[module.id] = {
      compatibilityHook: null != (o = module.overlayCompatibilityHook) ? o : Chunk593472.r.compatibilityHook,
      warn: null != (s = module.overlayWarn) ? Chunk913527 : Chunk593472.r.warn,
      enabled: r,
      enabledOOP: require,
      allowHook: null != (l = module.hook) ? l : Chunk593472.r.allowHook,
      supportsOutOfProcessOverlay: module.supportsOutOfProcessOverlay
    }
  }
  let c = new Set;
  X.forEach(e => {
    var t;
    (null != (t = e.executables) ? t : []).forEach(e => {
      c.add(e.name.toLowerCase())
    })
  }), [...require.filter(e => {
    var t;
    return !(null != (t = e.executables) ? t : []).some(e => eE.has(e.name.toLowerCase()))
  }), ...X].forEach(n => {
    let r = null != n.executables ? n.executables : [],
      i = {};
    r.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(i).forEach(t => {
      var r;
      return e.push({
        name: n.name,
        id: n.id,
        executables: i[t],
        cmdLine: "null" !== t ? t : null,
        thirdPartySkus: null != (r = n.thirdPartySkus) ? r : []
      })
    })
  }), e = module.filter(e => null != e.executables && e.executables.length > 0);
  let u = Chunk220410.T.getConfig({
    location: "RunningGameStore.handleGamesDatabaseUpdate"
  }).useDetectionV2;
  Chunk998502.ZP.setObservedGamesCallback(module, Chunk433517, e => {
    let n = [],
      i = {};
    e = e.filter(e => ((null == e.distributor || "" === e.distributor) && e.id === I.eB && (e.distributor = G.GQo.ROBLOX), e.isLauncher = e.isLauncher || t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = eF(e.pid, e.windowHandle), null == eT(e) || (n.push(e), false)));
    let a = n.filter(eS).length;
    a !== eu && (eu = a, d.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: eu
    })), en = e, ei = n, r = i, eA()
  }), eU(), Chunk998502.ZP.setGameDetectionCallback((e, t) => {
    if (e.length === t.length)
      for (let [a, o] of e.entries()) {
        var n, r, i;
        let e = t[a],
          s = A.Z.getGameByName(o.name),
          l = A.Z.getGameByName(e.name),
          c = null != (n = (null == e ? true : e.id) !== z ? null == e ? true : e.id : null == l ? true : l.id) ? n : "";
        R.default.track(G.rMx.GAME_DETECTION_COMPARISON, {
          game_platform: G.M7m.DESKTOP,
          detection_method: u ? "process_observer_v2" : "process_observer_v1",
          game_v1: o.name,
          orig_game_name_v1: o.origGameName,
          game_id_v1: null == s ? true : s.id,
          distributor_v1: o.distributor,
          verified_v1: (0, M.vp)(o.exePath, null != (r = null == s ? true : s.executables) ? r : []),
          is_launcher_v1: o.isLauncher,
          game_detection_enabled_v1: eD(o),
          executable_path_v1: (0, M.N6)(o.exePath),
          distributor_game_id_v1: o.sku,
          hidden_by_distributor_v1: o.hidden,
          game_metadata_v1: (0, T.sD)(o),
          game_v2: e.name,
          orig_game_name_v2: e.origGameName,
          game_id_v2: c,
          distributor_v2: e.distributor,
          verified_v2: (0, M.vp)(e.exePath, null != (i = null == l ? true : l.executables) ? i : []),
          is_launcher_v2: e.isLauncher,
          game_detection_enabled_v2: eD(e),
          executable_path_v2: (0, M.N6)(e.exePath),
          distributor_game_id_v2: e.sku,
          hidden_by_distributor_v2: e.hidden,
          game_metadata_v2: (0, T.sD)(e)
        })
      }
  });
  let _ = Chunk624126.g.getConfig({
    location: "RunningGameStore.handleGamesDatabaseUpdate"
  }).enabled;
  Chunk998502.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
    _ && R.default.track(G.rMx.GAME_DETECTION_ERROR, {
      error_code: e.toString(),
      distributor: t,
      commit_hash: n,
      file_name: r,
      line_number: i
    })
  })
});
class e5 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let a = null != (e = Chunk433517.K.get(W)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    es.gameOverrides = {};
    let s = false;
    if (o().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eC(e);
        es.gameOverrides[t] = e
      }), es.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, es.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, es.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, eU(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk77498.Z, Chunk353926.Z, Chunk802512.Z), q = Chunk392711.gamesSeen, this.syncWith([Chunk353926.Z], e6), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], o().throttle(ek, 1e3)), Chunk913527 && eL()
  }
  getVisibleGame() {
    return null == er || ex(er) ? er : null
  }
  getCurrentGameForAnalytics() {
    return er
  }
  getVisibleRunningGames() {
    return en.filter(ex)
  }
  getRunningGames() {
    return en
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of en) null != ea[exports.exePath] && module.push(ea[exports.exePath]);
    return module
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => A.Z.getGameByName(e.name)).filter(Chunk823379.lm).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null != (t = en.find(t => t.pid === e)) ? t : null
  }
  getGameOrTransformedSubgameForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? ev(t) : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t && null != t.id ? r[t.id] : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : F({}, ec[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != ed && ed === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ef && ef === e
  }
  getCandidateGames() {
    return et.filter(e => e.hidden || null == e.id).filter(e => true === es.gameOverrides[eC(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = eZ();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eC(e);
        n = n.filter(e => eC(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return es.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return ei.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(es.gameOverrides)
  }
  getOverrideForGame(e) {
    return es.gameOverrides[eC(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return Y.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = eP(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return Y.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = eP(e);
    return t.enabledLegacy || t.enabledOOP ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null != (n = null == (t = ei.find(t => (0, g.Z)(e, t.windowHandle))) ? true : t.name) ? n : null
  }
  get canShowAdminWarning() {
    return J
  }
  isDetectionEnabled(e) {
    return eD(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    eh.add(null != (t = (0, p.F)(e)) ? t : e)
  }
}
Z(e5, "displayName", "RunningGameStore");
let e7 = new e5(Chunk570140.Z, {
    ROBLOX_SUBGAME_UPDATE: eV,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eV,
    RUNNING_GAMES_CHANGE: eH,
    CANDIDATE_GAMES_CHANGE: eY,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eW,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eK,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eq,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: ez,
    RUNNING_GAME_ADD_OVERRIDE: eX,
    RUNNING_GAME_TOGGLE_OVERLAY: e1,
    RUNNING_GAME_TOGGLE_DETECTION: e2,
    RUNNING_GAME_EDIT_NAME: e3,
    RUNNING_GAME_DELETE_ENTRY: e4,
    GAMES_DATABASE_UPDATE: el,
    GAME_LAUNCH_SUCCESS: e8,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eQ,
    GAME_DETECTION_DEBUGGING_START: eJ,
    GAME_DETECTION_DEBUGGING_STOP: e$,
    GAME_DETECTION_DEBUGGING_TICK: e0
  }),
  e9 = e7