/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => ew,
  ZP: () => e5,
  b6: () => eA,
  ik: () => eC,
  rH: () => eI
}), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./704826.js"), require("./290780.js"), require("./642613.js");
var i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = new Chunk710845.Z("RunningGameStore"),
  H = "RunningGameStore",
  Y = false,
  W = [],
  K = [{
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
  z = [],
  q = true,
  X = new Set,
  Q = [],
  J = [],
  $ = [],
  ee = null,
  et = [],
  en = {},
  er = {},
  ei = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableOverlayV3: {},
    enableDetection: {}
  },
  eo = function() {},
  ea = {},
  es = 0,
  el = null,
  ec = null,
  eu = {},
  ed = new Set,
  ef = new Set,
  e_ = null,
  ep = null,
  eh = new Map,
  em = new Map;

function eg(e, t, n) {
  let r = e[t];
  true !== r && (delete e[t], e[n] = r)
}

function eE(e) {
  let t = {
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  };
  return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = true), e.block && (t.block = true), null != e.distributor && (t.distributor = e.distributor), null != e.gameName && (t.gameName = e.gameName), eb(t, e), t
}

function eb(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function ey(e) {
  var t, n, r, i;
  let o = em.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != o) return o;
  let a = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = eh.get(a.toLowerCase());
  if (null != s) return s;
  for (let [t, n] of eh) {
    let r = e.exePath.toLowerCase(),
      i = t.toLowerCase();
    if (r.endsWith(i)) {
      let e = r.length - i.length;
      if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n
    }
  }
  return null
}

function eO(e) {
  let t = ey(e);
  return (null == t ? true : t.streamerTool) === true
}

function ev() {
  if ($.length > 0) {
    let e = ee;
    ee = $[0], null != module && ee.pid === module.pid ? ee.start = module.start : ee.start = Date.now()
  } else ee = null;
  let e = [];
  for (let n of $)
    if (!(require.pid in eu)) {
      var t;
      eu[require.pid] = require, module.push(require);
      let r = Chunk77498.Z.getGameByName(require.name);
      Chunk626135.default.track(Chunk981631.rMx.GAME_DETECTED, {
        game: require.name,
        orig_game_name: require.origGameName,
        game_id: null == r ? true : r.id,
        distributor: require.distributor,
        verified: (0, Chunk581567.vp)(require.exePath, null != (t = null == r ? true : r.executables) ? exports : []),
        game_platform: Chunk981631.M7m.DESKTOP,
        is_launcher: require.isLauncher,
        detection_method: "process_observer",
        game_detection_enabled: eC(require),
        executable_path: require.exePath,
        distributor_game_id: require.sku,
        hidden_by_distributor: require.hidden,
        game_metadata: (0, Chunk509003.sD)(require)
      })
    } let n = [];
  for (let e of Object.values(eu)) $.some(t => t.pid === e.pid) || (require.push(module), delete eu[module.pid]);
  V.info("Running Games Changed", {
    runningGames: $,
    added: module,
    removed: require,
    previousGames: eu
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: $,
    added: module,
    removed: require
  })
}

function eI(e) {
  if ((0, T.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}
K.forEach(e => {
  var t;
  em.set(e.name.toLowerCase(), e), (null != (t = e.executables) ? t : []).forEach(t => {
    eh.set(t.name.toLowerCase(), e)
  })
});
let eT = new Set(["1314395942253756416"]);

function eS(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = A.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && eT.has(t)
}

function eA(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [A.Z, N.Z];
  if (e.isLauncher) return {
    source: y.d0.LAUNCHER,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled
  };
  if ("pid" in e && !v.Z.acquireLock(e.pid)) return {
    source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled
  };
  let i = n.getGameByName(e.name);
  if (null != i) {
    let e = r.getActiveLibraryApplication(i.id);
    if (null != e) return {
      source: y.d0.LIBRARY_APPLICATION,
      enabledOOP: e.isOverlayV3Enabled(),
      enabledLegacy: e.isLegacyOverlayEnabled(),
      overlayMethod: y.gl.Disabled
    }
  }
  let o = (0, O.NW)("getRawOverlayGameStatus") && (0, M.supportsOutOfProcess)() && !t,
    a = eS(null != i ? i : e),
    s = b.v.legacyEnabled,
    l = o && !a,
    c = ei.enableOverlay[eI(e)],
    u = ei.enableOverlayV3[eI(e)];
  if (null != c || null != u) {
    let e = null != u ? u : l,
      t = null != c ? c : s,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !a ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: l ? n : y.gl.Hook
    }
  }
  let d = null == e.id ? null : ea[e.id];
  if (null != d) {
    var f, _;
    let e = null != (f = d.enabledOOP) ? f : l,
      t = null != (_ = d.enabled) ? _ : s,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !a ? y.d0.OOP_DEFAULT_DATABASE : y.d0.DATABASE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: l ? n : y.gl.Hook
    }
  }
  return {
    source: y.d0.DEFAULT,
    enabledOOP: Y || l,
    enabledLegacy: Y,
    overlayMethod: l ? y.gl.OutOfProcess : y.gl.Disabled
  }
}

function eN(e) {
  let t = ei.enableOverlay[eI(e)],
    n = ei.enableOverlayV3[eI(e)];
  if (null != t || null != n) return null != t ? t : n;
  let r = eA(e);
  return r.enabledLegacy || r.enabledOOP
}

function eC(e) {
  let t = ei.enableDetection[eI(e)];
  return null == t || t
}

function eR(e) {
  return !e.hidden && eC(e)
}

function eP() {
  Chunk433517.K.set(H, ei)
}

function ew(e, t, n, r) {
  let i = F(B({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow() : " ",
    overlay: eN(e),
    verified: n.isGameInDatabase(e),
    detectable: eC(e)
  });
  return null != e.id && null != ea[e.id] && (i.overlayWarn = ea[e.id].warn), i
}

function eD(e) {
  return {
    name: e.name,
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  }
}

function eL() {
  let e = false;
  return Q = a().values(Chunk283595.Z.libraryApplications).reduce((t, n) => {
    let r = A.Z.getDetectableGame(n.id);
    if (null == r) return t;
    for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
      let o = "".concat(n.id, ":").concat(n.branchId);
      X.has(o) || (e = true, X.add(o));
      let {
        fullExecutablePath: a
      } = i, s = a.replace(/\\/g, "/").toLowerCase();
      en[s] = r.id, t.push({
        id: r.id,
        name: r.name,
        exePath: s,
        cmdLine: "",
        lastFocused: 0,
        add: true
      })
    }
    return t
  }, []), module && ex(), module
}

function ex() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...Q, ...a().values(ei.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function eM(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (ei.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = ei.gameOverrides[eI(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), eb(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      ei.gamesSeen.unshift(eE(e))
    }
  }), ei.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), eP(), w.Z.setRecentGames(ej().map(e => ew(e, e3, A.Z, N.Z))))
}

function ej() {
  let e = a().values(ei.gameOverrides);
  return ei.gamesSeen.filter(e => true === ei.gameOverrides[eI(e)]).concat(module)
}

function ek(e, t) {
  if (true === t) {
    let t = x.ZP.getDiscordUtils();
    if (null != t && null != t.getWindowHandleFromPid) {
      let n = t.getWindowHandleFromPid(e);
      return null != n && "0" !== n ? n : null
    }
    return null
  }
  return "0" === t ? null : t
}

function eU() {
  ee = ($ = $.map(e => e.distributor === k.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e)).length > 0 ? $[0] : null, eM($)
}

function eG(e) {
  eM($)
}

function eB(e) {
  J = e.games
}

function eZ() {
  q = false
}

function eF(e) {
  let {
    pid: t
  } = e;
  el = t, ec = null
}

function eV(e) {
  let {
    pid: t
  } = e;
  ec = t, el = null
}

function eH() {
  el = null
}

function eY(e) {
  let t, n = e.pid,
    r = $.find(e => e.pid === n);
  if (null == r) {
    let e = J.find(e => e.pid === n);
    if (null == e) return;
    (r = B({}, e)).hidden = false, $.push(r), t = eI(r)
  } else t = eI(r), r.hidden && (er[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), ei.gameOverrides[t] = F(B({}, r), {
    add: true
  }), eM($), ex(), eP(), ev()
}

function eW() {
  ex()
}

function eK(e) {
  e_ = e.level, ep = e.intervalSeconds
}

function ez() {
  e_ = null, ep = null, ed.clear()
}

function eq(e) {
  let t = e.processes.map(e => {
    var t;
    return {
      pid: e.pid,
      cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
    }
  }).filter(e => {
    if (ed.has(e.pid) || ef.has(e.cleanedExePath)) returnfalse;
    let t = z.some(t => e.cleanedExePath.includes(t));
    return t && ed.add(e.pid), t
  }).map(e => e.cleanedExePath);
  t.length > 0 && R.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: z,
    paths: t,
    debugging_level: e_,
    interval_seconds: ep
  })
}

function eX(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== ei.enableOverlay[eI(t)], o = r !== ei.enableOverlayV3[eI(t)];
  if (i && (ei.enableOverlay[eI(t)] = n), o && null != r && (ei.enableOverlayV3[eI(t)] = r), eP(), !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null)) {
    var a, s;
    i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (a = t.id) ? a : null), o && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function eQ(e) {
  let {
    game: t
  } = e, n = eC(t);
  ei.enableDetection[eI(t)] = !n, eP(), $.length > 0 && $.some(e => e.distributor === k.GQo.ROBLOX) && eU(), R.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function eJ(e) {
  let t = eI(e.game),
    n = ei.gameOverrides[t];
  null == n && ((n = eD(e.game)).add = true), n.name = e.newName;
  let r = eI(n);
  delete ei.gameOverrides[t], ei.gameOverrides[r] = n, eg(ei.enableOverlay, t, r), eg(ei.enableDetection, t, r), eg(er, t, r), ei.gamesSeen.forEach(n => {
    eI(n) === t && (n.name = e.newName)
  });
  let i = false;
  $.forEach(n => {
    eI(n) === t && (n.name = e.newName, i = true)
  }), ex(), eP(), i && ev()
}

function e$(e) {
  let t = eI(e.game);
  delete ei.gameOverrides[t], delete ei.enableOverlay[t], delete ei.enableDetection[t], ei.gamesSeen = ei.gamesSeen.filter(e => eI(e) !== t), er[t] && ($.forEach(e => {
    t === eI(e) && (e.hidden = true)
  }), delete er[t]), $.some(e => eI(e) === t) && ev(), ex(), eP()
}

function e0(e) {
  var t;
  if (__OVERLAY__ || !L.isPlatformEmbedded) return;
  let n = x.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = A.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e1() {
  Chunk353926.Z.hasLoadedExperiments && W.length > 0 && (eM(W), W = [])
}!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP) && (eo = function() {
  let e = [],
    t = new Set;
  r = {};
  let n = Chunk77498.Z.games,
    i = (0, Chunk32300.NW)("handleGamesDatabaseUpdate") && (0, Chunk145597.supportsOutOfProcess)();
  for (let e of require) {
    var o, a, s, l;
    let t = eS(module),
      n = i && !exports || Chunk593472.r.enabledOOP,
      r = null != (o = module.overlay) ? Chunk392711 : Chunk593472.r.enabled;
    ea[module.id] = {
      compatibilityHook: null != (a = module.overlayCompatibilityHook) ? a : Chunk593472.r.compatibilityHook,
      warn: null != (s = module.overlayWarn) ? Chunk913527 : Chunk593472.r.warn,
      enabled: r,
      enabledOOP: require,
      allowHook: null != (l = module.hook) ? l : Chunk593472.r.allowHook,
      supportsOutOfProcessOverlay: module.supportsOutOfProcessOverlay
    }
  }
  let c = new Set;
  K.forEach(e => {
    var t;
    (null != (t = e.executables) ? t : []).forEach(e => {
      c.add(e.name.toLowerCase())
    })
  }), [...require.filter(e => {
    var t;
    return !(null != (t = e.executables) ? t : []).some(e => eh.has(e.name.toLowerCase()))
  }), ...K].forEach(n => {
    let r = null != n.executables ? n.executables : [],
      i = {};
    r.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(i).forEach(t => e.push({
      name: n.name,
      id: n.id,
      executables: i[t],
      cmdLine: "null" !== t ? t : null
    }))
  }), e = module.filter(e => null != e.executables && e.executables.length > 0), Chunk998502.ZP.setObservedGamesCallback(module, e => {
    let n = [],
      i = {};
    e = e.filter(e => ((null == e.distributor || "" === e.distributor) && e.id === I.eB && (e.distributor = k.GQo.ROBLOX), e.isLauncher = e.isLauncher || t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = ek(e.pid, e.windowHandle), null == ey(e) || (n.push(e), false)));
    let o = n.filter(eO).length;
    o !== es && (es = o, d.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: es
    })), $ = e, et = n, r = i, ev()
  }), ex()
});
class e2 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let o = null != (e = Chunk433517.K.get(H)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    ei.gameOverrides = {};
    let s = false;
    if (a().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eI(e);
        ei.gameOverrides[t] = e
      }), ei.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, ei.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, ei.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, ex(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk77498.Z, Chunk353926.Z, Chunk802512.Z), W = Chunk392711.gamesSeen, this.syncWith([Chunk353926.Z], e1), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], a().throttle(eL, 1e3)), Chunk913527 && eP()
  }
  getVisibleGame() {
    return null == ee || eR(ee) ? ee : null
  }
  getCurrentGameForAnalytics() {
    return ee
  }
  getVisibleRunningGames() {
    return $.filter(eR)
  }
  getRunningGames() {
    return $
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of $) null != en[exports.exePath] && module.push(en[exports.exePath]);
    return module
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => A.Z.getGameByName(e.name)).filter(Chunk823379.lm).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null != (t = $.find(t => t.pid === e)) ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t && null != t.id ? r[t.id] : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : B({}, ea[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != el && el === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ec && ec === e
  }
  getCandidateGames() {
    return J.filter(e => e.hidden || null == e.id).filter(e => true === ei.gameOverrides[eI(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = ej();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eI(e);
        n = n.filter(e => eI(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return ei.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return et.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(ei.gameOverrides)
  }
  getOverrideForGame(e) {
    return ei.gameOverrides[eI(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = eA(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = eA(e);
    return t.enabledLegacy || t.enabledOOP ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null != (n = null == (t = et.find(t => (0, g.Z)(e, t.windowHandle))) ? true : t.name) ? n : null
  }
  get canShowAdminWarning() {
    return q
  }
  isDetectionEnabled(e) {
    return eC(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    ef.add(null != (t = (0, p.F)(e)) ? t : e)
  }
}
G(e2, "displayName", "RunningGameStore");
let e3 = new e2(Chunk570140.Z, {
    ROBLOX_SUBGAME_UPDATE: eU,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eU,
    RUNNING_GAMES_CHANGE: eG,
    CANDIDATE_GAMES_CHANGE: eB,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eZ,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eF,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eH,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eV,
    RUNNING_GAME_ADD_OVERRIDE: eY,
    RUNNING_GAME_TOGGLE_OVERLAY: eX,
    RUNNING_GAME_TOGGLE_DETECTION: eQ,
    RUNNING_GAME_EDIT_NAME: eJ,
    RUNNING_GAME_DELETE_ENTRY: e$,
    GAMES_DATABASE_UPDATE: eo,
    GAME_LAUNCH_SUCCESS: e0,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eW,
    GAME_DETECTION_DEBUGGING_START: eK,
    GAME_DETECTION_DEBUGGING_STOP: ez,
    GAME_DETECTION_DEBUGGING_TICK: eq
  }),
  e5 = e3