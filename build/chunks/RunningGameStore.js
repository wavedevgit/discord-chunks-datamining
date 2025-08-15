/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => eD,
  ZP: () => e6,
  b6: () => eN,
  ik: () => eR,
  ow: () => eb,
  rH: () => eT
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

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = new Chunk710845.Z("RunningGameStore"),
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
  ea = function() {},
  eo = {},
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
  return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = true), e.block && (t.block = true), null != e.distributor && (t.distributor = e.distributor), null != e.gameName && (t.gameName = e.gameName), ey(t, e), t
}

function eb(e) {
  return e.distributor === j.GQo.ROBLOX ? (0, T.oK)(e) : e
}

function ey(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function eO(e) {
  var t, n, r, i;
  let a = em.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != a) return a;
  let o = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = eh.get(o.toLowerCase());
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

function ev(e) {
  let t = eO(e);
  return (null == t ? true : t.streamerTool) === true
}

function eI() {
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
        game_detection_enabled: eR(require),
        executable_path: require.exePath,
        distributor_game_id: require.sku,
        hidden_by_distributor: require.hidden,
        game_metadata: (0, Chunk509003.sD)(require)
      })
    } let n = [];
  for (let e of Object.values(eu)) $.some(t => t.pid === e.pid) || (require.push(module), delete eu[module.pid]);
  Z.info("Running Games Changed", {
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

function eT(e) {
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
let eS = new Set(["1314395942253756416"]);

function eA(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = A.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && eS.has(t)
}

function eN(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [A.Z, N.Z],
    i = eb(e);
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
  let o = (0, O.NW)("getRawOverlayGameStatus") && (0, M.supportsOutOfProcess)() && !t,
    s = eA(null != a ? a : i),
    l = b.v.legacyEnabled,
    c = o && !s,
    u = ei.enableOverlay[eT(i)],
    d = ei.enableOverlayV3[eT(i)];
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
  let f = null == i.id ? null : eo[i.id];
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
    enabledOOP: Y || c,
    enabledLegacy: Y,
    overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled
  }
}

function eC(e) {
  let t = eb(e),
    n = ei.enableOverlay[eT(t)],
    r = ei.enableOverlayV3[eT(t)];
  if (null != n || null != r) return null != n ? n : r;
  let i = eN(t);
  return i.enabledLegacy || i.enabledOOP
}

function eR(e) {
  let t = ei.enableDetection[eT(e)];
  return null == t || t
}

function eP(e) {
  return !e.hidden && eR(e)
}

function ew() {
  Chunk433517.K.set(H, ei)
}

function eD(e, t, n, r) {
  let i = F(B({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow() : " ",
    overlay: eC(e),
    verified: n.isGameInDatabase(e),
    detectable: eR(e)
  });
  return null != e.id && null != eo[e.id] && (i.overlayWarn = eo[e.id].warn), i
}

function eL(e) {
  return {
    name: e.name,
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  }
}

function ex() {
  let e = false;
  return Q = o().values(Chunk283595.Z.libraryApplications).reduce((t, n) => {
    let r = A.Z.getDetectableGame(n.id);
    if (null == r) return t;
    for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
      let a = "".concat(n.id, ":").concat(n.branchId);
      X.has(a) || (e = true, X.add(a));
      let {
        fullExecutablePath: o
      } = i, s = o.replace(/\\/g, "/").toLowerCase();
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
  }, []), module && eM(), module
}

function eM() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...Q, ...o().values(ei.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function ek(e, t) {
  let n = ei.gameOverrides[e];
  null != n && (ei.gameOverrides[t] = n, delete ei.gameOverrides[e]);
  let r = ei.enableOverlay[e];
  null != r && (ei.enableOverlay[t] = r, delete ei.enableOverlay[e]);
  let i = ei.enableOverlayV3[e];
  null != i && (ei.enableOverlayV3[t] = i, delete ei.enableOverlayV3[e]);
  let a = ei.enableDetection[e];
  null != a && (ei.enableDetection[t] = a, delete ei.enableDetection[e])
}

function ej(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (ei.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = ei.gameOverrides[eT(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), t.id === e.id && eT(t) !== eT(e) && (ek(eT(t), eT(e)), t.exePath = e.exePath), ey(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      ei.gamesSeen.unshift(eE(e))
    }
  }), ei.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ew(), w.Z.setRecentGames(eU().map(e => eD(e, e8, A.Z, N.Z))))
}

function eU() {
  let e = o().values(ei.gameOverrides);
  return ei.gamesSeen.filter(e => true === ei.gameOverrides[eT(e)]).concat(module)
}

function eG(e, t) {
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

function eB() {
  ee = ($ = $.map(e => e.distributor === j.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e)).length > 0 ? $[0] : null, ej($)
}

function eV(e) {
  ej($)
}

function eF(e) {
  J = e.games
}

function eZ() {
  q = false
}

function eH(e) {
  let {
    pid: t
  } = e;
  el = t, ec = null
}

function eY(e) {
  let {
    pid: t
  } = e;
  ec = t, el = null
}

function eW() {
  el = null
}

function eK(e) {
  let t, n = e.pid,
    r = $.find(e => e.pid === n);
  if (null == r) {
    let e = J.find(e => e.pid === n);
    if (null == e) return;
    (r = B({}, e)).hidden = false, $.push(r), t = eT(r)
  } else t = eT(r), r.hidden && (er[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), ei.gameOverrides[t] = F(B({}, r), {
    add: true
  }), ej($), eM(), ew(), eI()
}

function ez() {
  eM()
}

function eq(e) {
  e_ = e.level, ep = e.intervalSeconds
}

function eX() {
  e_ = null, ep = null, ed.clear()
}

function eQ(e) {
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
  t.length > 0 && R.default.track(j.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: z,
    paths: t,
    debugging_level: e_,
    interval_seconds: ep
  })
}

function eJ(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== ei.enableOverlay[eT(t)], a = r !== ei.enableOverlayV3[eT(t)];
  if (i && (ei.enableOverlay[eT(t)] = n), a && null != r && (ei.enableOverlayV3[eT(t)] = r), ew(), !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null)) {
    var o, s;
    i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function e$(e) {
  let {
    game: t
  } = e, n = eR(t);
  ei.enableDetection[eT(t)] = !n, ew(), $.length > 0 && $.some(e => e.distributor === j.GQo.ROBLOX) && eB(), R.default.track(j.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function e0(e) {
  let t = eT(e.game),
    n = ei.gameOverrides[t];
  null == n && ((n = eL(e.game)).add = true), n.name = e.newName;
  let r = eT(n);
  delete ei.gameOverrides[t], ei.gameOverrides[r] = n, eg(ei.enableOverlay, t, r), eg(ei.enableDetection, t, r), eg(er, t, r), ei.gamesSeen.forEach(n => {
    eT(n) === t && (n.name = e.newName)
  });
  let i = false;
  $.forEach(n => {
    eT(n) === t && (n.name = e.newName, i = true)
  }), eM(), ew(), i && eI()
}

function e1(e) {
  let t = eT(e.game);
  delete ei.gameOverrides[t], delete ei.enableOverlay[t], delete ei.enableDetection[t], ei.gamesSeen = ei.gamesSeen.filter(e => eT(e) !== t), er[t] && ($.forEach(e => {
    t === eT(e) && (e.hidden = true)
  }), delete er[t]), $.some(e => eT(e) === t) && eI(), eM(), ew()
}

function e2(e) {
  var t;
  if (__OVERLAY__ || !L.isPlatformEmbedded) return;
  let n = x.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = A.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e3() {
  Chunk353926.Z.hasLoadedExperiments && W.length > 0 && (ej(W), W = [])
}!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP) && (ea = function() {
  let e = [],
    t = new Set;
  r = {};
  let n = Chunk77498.Z.games,
    i = (0, Chunk32300.NW)("handleGamesDatabaseUpdate") && (0, Chunk145597.supportsOutOfProcess)();
  for (let e of require) {
    var a, o, s, l;
    let t = eA(module),
      n = i && !exports || Chunk593472.r.enabledOOP,
      r = null != (a = module.overlay) ? Chunk392711 : Chunk593472.r.enabled;
    eo[module.id] = {
      compatibilityHook: null != (o = module.overlayCompatibilityHook) ? o : Chunk593472.r.compatibilityHook,
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
    e = e.filter(e => ((null == e.distributor || "" === e.distributor) && e.id === I.eB && (e.distributor = j.GQo.ROBLOX), e.isLauncher = e.isLauncher || t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = eG(e.pid, e.windowHandle), null == eO(e) || (n.push(e), false)));
    let a = n.filter(ev).length;
    a !== es && (es = a, d.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: es
    })), $ = e, et = n, r = i, eI()
  }), eM()
});
class e4 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let a = null != (e = Chunk433517.K.get(H)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    ei.gameOverrides = {};
    let s = false;
    if (o().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eT(e);
        ei.gameOverrides[t] = e
      }), ei.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, ei.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, ei.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, eM(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk77498.Z, Chunk353926.Z, Chunk802512.Z), W = Chunk392711.gamesSeen, this.syncWith([Chunk353926.Z], e3), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], o().throttle(ex, 1e3)), Chunk913527 && ew()
  }
  getVisibleGame() {
    return null == ee || eP(ee) ? ee : null
  }
  getCurrentGameForAnalytics() {
    return ee
  }
  getVisibleRunningGames() {
    return $.filter(eP)
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
  getGameOrTransformedSubgameForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? eb(t) : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t && null != t.id ? r[t.id] : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : B({}, eo[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != el && el === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ec && ec === e
  }
  getCandidateGames() {
    return J.filter(e => e.hidden || null == e.id).filter(e => true === ei.gameOverrides[eT(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = eU();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eT(e);
        n = n.filter(e => eT(e) !== t)
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
    return ei.gameOverrides[eT(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return Z.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = eN(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return Z.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = eN(e);
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
    return eR(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    ef.add(null != (t = (0, p.F)(e)) ? t : e)
  }
}
G(e4, "displayName", "RunningGameStore");
let e8 = new e4(Chunk570140.Z, {
    ROBLOX_SUBGAME_UPDATE: eB,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eB,
    RUNNING_GAMES_CHANGE: eV,
    CANDIDATE_GAMES_CHANGE: eF,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eZ,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eH,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eW,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eY,
    RUNNING_GAME_ADD_OVERRIDE: eK,
    RUNNING_GAME_TOGGLE_OVERLAY: eJ,
    RUNNING_GAME_TOGGLE_DETECTION: e$,
    RUNNING_GAME_EDIT_NAME: e0,
    RUNNING_GAME_DELETE_ENTRY: e1,
    GAMES_DATABASE_UPDATE: ea,
    GAME_LAUNCH_SUCCESS: e2,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ez,
    GAME_DETECTION_DEBUGGING_START: eq,
    GAME_DETECTION_DEBUGGING_STOP: eX,
    GAME_DETECTION_DEBUGGING_TICK: eQ
  }),
  e6 = e8