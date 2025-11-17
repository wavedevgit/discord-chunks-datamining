/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => eL,
  ZP: () => e7,
  b6: () => eR,
  ik: () => eD,
  ow: () => eO,
  rH: () => eA
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
  Chunk509003 = require("./509003.js"),
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
  Chunk272304 = require("./272304.js"),
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
  W = "4294967293",
  K = [],
  z = [{
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
  q = [],
  X = true,
  Q = {
    "input-service": {
      state: "unknown"
    },
    "tool-service": {
      state: "unknown"
    }
  },
  J = new Set,
  $ = [],
  ee = [],
  et = [],
  en = null,
  er = [],
  ei = {},
  ea = {},
  eo = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableOverlayV3: {},
    enableDetection: {}
  },
  es = function() {},
  el = {},
  ec = 0,
  eu = null,
  ed = null,
  ef = {},
  e_ = new Set,
  ep = new Set,
  eh = null,
  em = null,
  eg = new Map,
  eE = new Map;

function eb(e, t, n) {
  let r = e[t];
  true !== r && (delete e[t], e[n] = r)
}

function ey(e) {
  let t = {
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  };
  return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = true), e.block && (t.block = true), null != e.distributor && (t.distributor = e.distributor), null != e.gameName && (t.gameName = e.gameName), ev(t, e), t
}

function eO(e) {
  return e
}

function ev(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function eI(e) {
  var t, n, r, i;
  let a = eE.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != a) return a;
  let o = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = eg.get(o.toLowerCase());
  if (null != s) return s;
  for (let [t, n] of eg) {
    let r = e.exePath.toLowerCase(),
      i = t.toLowerCase();
    if (r.endsWith(i)) {
      let e = r.length - i.length;
      if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n
    }
  }
  return null
}

function eT(e) {
  let t = eI(e);
  return (null == t ? true : t.streamerTool) === true
}

function eS() {
  if (et.length > 0) {
    let e = en;
    en = et[0], null != module && en.pid === module.pid ? en.start = module.start : en.start = Date.now()
  } else en = null;
  let e = [];
  for (let t of et) exports.pid in ef || (ef[exports.pid] = exports, module.push(exports));
  let t = [];
  for (let e of Object.values(ef)) et.some(t => t.pid === e.pid) || (exports.push(module), delete ef[module.pid]);
  V.info("Running Games Changed", {
    runningGames: et,
    added: module,
    removed: exports,
    previousGames: ef
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: et,
    added: module,
    removed: exports
  })
}

function eA(e) {
  if ((0, I.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}
z.forEach(e => {
  var t;
  eE.set(e.name.toLowerCase(), e), (null != (t = e.executables) ? t : []).forEach(t => {
    eg.set(t.name.toLowerCase(), e)
  })
});
let eC = new Set(["1314395942253756416"]);

function eN(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = T.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && eC.has(t)
}

function eR(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [T.Z, S.Z],
    i = eO(e);
  if (i.isLauncher) return {
    source: y.d0.LAUNCHER,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "Game is launcher"
  };
  if ("pid" in i && !v.Z.acquireLock(i.pid)) return {
    source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "Another Discord instance running overlay for this pid"
  };
  let a = n.getGameByName(i.name);
  if (null != a) {
    let e = r.getActiveLibraryApplication(a.id);
    if (null != e) return {
      source: y.d0.LIBRARY_APPLICATION,
      enabledOOP: e.isOverlayV3Enabled(),
      enabledLegacy: e.isLegacyOverlayEnabled(),
      overlayMethod: y.gl.Disabled,
      reason: "Some library application thing?"
    }
  }
  let o = (0, O.NW)("getRawOverlayGameStatus") && (0, x.supportsOutOfProcess)() && !t,
    s = eN(null != a ? a : i),
    l = b.v.legacyEnabled,
    c = o && !s,
    u = eo.enableOverlay[eA(i)],
    d = eo.enableOverlayV3[eA(i)];
  if (null != u || null != d) {
    let e = null != d ? d : c,
      t = null != u ? u : l,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !s ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: c ? n : y.gl.Hook,
      reason: "Enabled from persistent"
    }
  }
  let f = null == i.id ? null : el[i.id];
  if (null != f) {
    var _, p;
    let e = null != (_ = f.enabledOOP) ? _ : c,
      t = null != (p = f.enabled) ? p : l,
      n = e ? y.gl.OutOfProcess : y.gl.Hook;
    return {
      source: e && !s ? y.d0.OOP_DEFAULT_DATABASE : y.d0.DATABASE,
      enabledOOP: e,
      enabledLegacy: t,
      overlayMethod: c ? n : y.gl.Hook,
      reason: "Enabled from overlayOptions"
    }
  }
  return {
    source: y.d0.DEFAULT,
    enabledOOP: Y || c,
    enabledLegacy: Y,
    overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled,
    reason: "Default enablement"
  }
}

function eP(e) {
  let t = eO(e),
    n = eo.enableOverlay[eA(t)],
    r = eo.enableOverlayV3[eA(t)];
  if (null != n || null != r) return null != n ? n : r;
  let i = eR(t);
  return i.enabledLegacy || i.enabledOOP
}

function eD(e) {
  let t = eo.enableDetection[eA(e)];
  return null == t || t
}

function ew(e) {
  return !e.hidden && eD(e)
}

function ex() {
  Chunk433517.K.set(H, eo)
}

function eL(e, t, n, r) {
  let i = F(B({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : " ",
    overlay: eP(e),
    verified: n.isGameInDatabase(e),
    detectable: eD(e)
  });
  return null != e.id && null != el[e.id] && (i.overlayWarn = el[e.id].warn), i
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
  return $ = o().values(Chunk283595.Z.libraryApplications).reduce((t, n) => {
    let r = T.Z.getDetectableGame(n.id);
    if (null == r) return t;
    for (let i of A.Z.getLaunchOptions(n.id, n.branchId)) {
      let a = "".concat(n.id, ":").concat(n.branchId);
      J.has(a) || (e = true, J.add(a));
      let {
        fullExecutablePath: o
      } = i, s = o.replace(/\\/g, "/").toLowerCase();
      ei[s] = r.id, t.push({
        id: r.id,
        name: r.name,
        exePath: s,
        cmdLine: "",
        lastFocused: 0,
        add: true
      })
    }
    return t
  }, []), module && ej(), module
}

function ej() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...$, ...o().values(eo.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function eU(e, t) {
  let n = eo.gameOverrides[e];
  null != n && (eo.gameOverrides[t] = n, delete eo.gameOverrides[e]);
  let r = eo.enableOverlay[e];
  null != r && (eo.enableOverlay[t] = r, delete eo.enableOverlay[e]);
  let i = eo.enableOverlayV3[e];
  null != i && (eo.enableOverlayV3[t] = i, delete eo.enableOverlayV3[e]);
  let a = eo.enableDetection[e];
  null != a && (eo.enableDetection[t] = a, delete eo.enableDetection[e])
}

function eG(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (eo.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = eo.gameOverrides[eA(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), t.id === e.id && eA(t) !== eA(e) && (eU(eA(t), eA(e)), t.exePath = e.exePath), ev(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      eo.gamesSeen.unshift(ey(e))
    }
  }), eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ex(), R.Z.setRecentGames(eB().map(e => eL(e, e6, T.Z, S.Z))))
}

function eB() {
  let e = o().values(eo.gameOverrides);
  return eo.gamesSeen.filter(e => true === eo.gameOverrides[eA(e)]).concat(module)
}

function eZ(e, t) {
  if (true === t) {
    let t = w.ZP.getDiscordUtils();
    if (null != t && null != t.getWindowHandleFromPid) {
      let n = t.getWindowHandleFromPid(e);
      return null != n && "0" !== n ? n : null
    }
    return null
  }
  return "0" === t ? null : t
}

function eF(e) {
  eG(et)
}

function eV(e) {
  ee = e.games
}

function eH() {
  X = false
}

function eY(e) {
  let {
    pid: t
  } = e;
  eu = t, ed = null
}

function eW(e) {
  let {
    pid: t
  } = e;
  ed = t, eu = null
}

function eK() {
  eu = null
}

function ez(e) {
  let t, n = e.pid,
    r = et.find(e => e.pid === n);
  if (null == r) {
    let e = ee.find(e => e.pid === n);
    if (null == e) return;
    (r = B({}, e)).hidden = false, et.push(r), t = eA(r)
  } else t = eA(r), r.hidden && (ea[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), eo.gameOverrides[t] = F(B({}, r), {
    add: true
  }), eG(et), ej(), ex(), eS()
}

function eq() {
  ej()
}

function eX(e) {
  eh = e.level, em = e.intervalSeconds
}

function eQ() {
  eh = null, em = null, e_.clear()
}

function eJ(e) {
  let t = e.processes.map(e => {
    var t;
    return {
      pid: e.pid,
      cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
    }
  }).filter(e => {
    if (e_.has(e.pid) || ep.has(e.cleanedExePath)) returnfalse;
    let t = q.some(t => e.cleanedExePath.includes(t));
    return t && e_.add(e.pid), t
  }).map(e => e.cleanedExePath);
  t.length > 0 && C.default.track(j.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: q,
    paths: t,
    debugging_level: eh,
    interval_seconds: em
  })
}

function e$(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== eo.enableOverlay[eA(t)], a = r !== eo.enableOverlayV3[eA(t)];
  if (i && (eo.enableOverlay[eA(t)] = n), a && null != r && (eo.enableOverlayV3[eA(t)] = r), ex(), !__OVERLAY__ && null != (null != t.id ? T.Z.getDetectableGame(t.id) : null)) {
    var o, s;
    i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function e0(e) {
  let {
    game: t
  } = e, n = eD(t);
  eo.enableDetection[eA(t)] = !n, ex(), C.default.track(j.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function e1(e) {
  let t = eA(e.game),
    n = eo.gameOverrides[t];
  null == n && ((n = eM(e.game)).add = true), n.name = e.newName;
  let r = eA(n);
  delete eo.gameOverrides[t], eo.gameOverrides[r] = n, eb(eo.enableOverlay, t, r), eb(eo.enableDetection, t, r), eb(ea, t, r), eo.gamesSeen.forEach(n => {
    eA(n) === t && (n.name = e.newName)
  });
  let i = false;
  et.forEach(n => {
    eA(n) === t && (n.name = e.newName, i = true)
  }), ej(), ex(), i && eS()
}

function e3(e) {
  let t = eA(e.game);
  delete eo.gameOverrides[t], delete eo.enableOverlay[t], delete eo.enableDetection[t], eo.gamesSeen = eo.gamesSeen.filter(e => eA(e) !== t), ea[t] && (et.forEach(e => {
    t === eA(e) && (e.hidden = true)
  }), delete ea[t]), et.some(e => eA(e) === t) && eS(), ej(), ex()
}

function e2(e) {
  var t;
  if (__OVERLAY__ || !D.isPlatformEmbedded) return;
  let n = w.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = T.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e4() {
  Chunk353926.Z.hasLoadedExperiments && K.length > 0 && (eG(K), K = [])
}

function e5(e) {
  let {
    status: t,
    modules: n
  } = e;
  for (let e of n) Q[e] = t
}!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP) && (es = function() {
  let e = [],
    t = new Set;
  r = {};
  let n = Chunk77498.Z.games,
    i = (0, Chunk32300.NW)("handleGamesDatabaseUpdate") && (0, Chunk145597.supportsOutOfProcess)();
  for (let e of require) {
    var a, o, s, l;
    let t = eN(module),
      n = i && !exports || Chunk593472.r.enabledOOP,
      r = null != (a = module.overlay) ? Chunk392711 : Chunk593472.r.enabled;
    el[module.id] = {
      compatibilityHook: null != (o = module.overlayCompatibilityHook) ? o : Chunk593472.r.compatibilityHook,
      warn: null != (s = module.overlayWarn) ? Chunk913527 : Chunk593472.r.warn,
      enabled: r,
      enabledOOP: require,
      allowHook: null != (l = module.hook) ? l : Chunk593472.r.allowHook,
      supportsOutOfProcessOverlay: module.supportsOutOfProcessOverlay
    }
  }
  let c = new Set;
  z.forEach(e => {
    var t;
    (null != (t = e.executables) ? t : []).forEach(e => {
      c.add(e.name.toLowerCase())
    })
  }), [...require.filter(e => {
    var t;
    return !(null != (t = e.executables) ? t : []).some(e => eg.has(e.name.toLowerCase()))
  }), ...z].forEach(n => {
    let r = null != n.executables ? n.executables : [],
      i = {};
    if (r.forEach(e => {
        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
        null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name)
      }), Object.keys(i).length > 0) Object.keys(i).forEach(t => {
      var r;
      return e.push({
        name: n.name,
        id: n.id,
        executables: i[t],
        cmdLine: "null" !== t ? t : null,
        thirdPartySkus: null != (r = n.thirdPartySkus) ? r : []
      })
    });
    else {
      var a;
      let t = null != (a = n.thirdPartySkus) ? a : [];
      t.length > 0 && e.push({
        name: n.name,
        id: n.id,
        executables: [],
        cmdLine: null,
        thirdPartySkus: t
      })
    }
  }), e = module.filter(e => null != e.executables && e.executables.length > 0 || null != e.thirdPartySkus && e.thirdPartySkus.length > 0);
  let u = Chunk272304.Tf.getConfig({
    location: "RunningGameStore.handleGamesDatabaseUpdate"
  }).useDetectionV2;
  Chunk998502.ZP.setObservedGamesCallback(module, Chunk433517, e => {
    let n = [],
      i = {};
    e = e.filter(e => (e.isLauncher = e.isLauncher || t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = eZ(e.pid, e.windowHandle), null == eI(e) || (n.push(e), false)));
    let a = n.filter(eT).length;
    a !== ec && (ec = a, d.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: ec
    })), et = e, er = n, r = i, eS()
  }), ej(), Chunk998502.ZP.setGameDetectionCallback((e, t) => {
    if (e.length === t.length)
      for (let [a, o] of e.entries()) {
        var n, r, i;
        let e = t[a],
          s = T.Z.getGameByName(o.name),
          l = T.Z.getGameByName(e.name),
          c = null != (n = (null == e ? true : e.id) !== W ? null == e ? true : e.id : null == l ? true : l.id) ? n : "";
        C.default.track(j.rMx.GAME_DETECTION_COMPARISON, {
          game_platform: j.M7m.DESKTOP,
          detection_method: u ? "process_observer_v2" : "process_observer_v1",
          game_v1: o.name,
          orig_game_name_v1: o.origGameName,
          game_id_v1: null == s ? true : s.id,
          distributor_v1: o.distributor,
          verified_v1: (0, L.vp)(o.exePath, null != (r = null == s ? true : s.executables) ? r : []),
          is_launcher_v1: o.isLauncher,
          game_detection_enabled_v1: eD(o),
          executable_path_v1: (0, L.N6)(o.exePath),
          distributor_game_id_v1: o.sku,
          hidden_by_distributor_v1: o.hidden,
          game_metadata_v1: (0, I.sD)(o),
          game_v2: e.name,
          orig_game_name_v2: e.origGameName,
          game_id_v2: c,
          distributor_v2: e.distributor,
          verified_v2: (0, L.vp)(e.exePath, null != (i = null == l ? true : l.executables) ? i : []),
          is_launcher_v2: e.isLauncher,
          game_detection_enabled_v2: eD(e),
          executable_path_v2: (0, L.N6)(e.exePath),
          distributor_game_id_v2: e.sku,
          hidden_by_distributor_v2: e.hidden,
          game_metadata_v2: (0, I.sD)(e)
        })
      }
  });
  let _ = Chunk624126.g.getConfig({
    location: "RunningGameStore.handleGamesDatabaseUpdate"
  }).enabled;
  Chunk998502.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
    _ && C.default.track(j.rMx.GAME_DETECTION_ERROR, {
      error_code: e.toString(),
      distributor: t,
      commit_hash: n,
      file_name: r,
      line_number: i
    })
  })
});
class e8 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let a = null != (e = Chunk433517.K.get(H)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    eo.gameOverrides = {};
    let s = false;
    if (o().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eA(e);
        (0, I.le)(e) || (eo.gameOverrides[t] = e)
      }), eo.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, eo.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, eo.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, ej(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk417363.Z, Chunk353926.Z, Chunk77498.Z, Chunk283595.Z), K = Chunk392711.gamesSeen.filter(e => !(0, I.le)(e)), this.syncWith([Chunk353926.Z], e4), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], o().throttle(ek, 1e3)), Chunk913527 && ex()
  }
  getVisibleGame() {
    return null == en || ew(en) ? en : null
  }
  getCurrentGameForAnalytics() {
    return en
  }
  getVisibleRunningGames() {
    return et.filter(ew)
  }
  getRunningGames() {
    return et
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of et) null != ei[exports.exePath] && module.push(ei[exports.exePath]);
    return module
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => T.Z.getGameByName(e.name)).filter(Chunk823379.lm).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null != (t = et.find(t => t.pid === e)) ? t : null
  }
  getGameForName(e) {
    var t;
    return null != (t = et.find(t => {
      var n;
      return (null == (n = t.name) ? true : n.toLowerCase()) === e.toLowerCase()
    })) ? t : null
  }
  getGameOrTransformedSubgameForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? eO(t) : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t && null != t.id ? r[t.id] : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : B({}, el[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != eu && eu === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ed && ed === e
  }
  getCandidateGames() {
    return ee.filter(e => e.hidden || null == e.id).filter(e => true === eo.gameOverrides[eA(e)])
  }
  isGamesSeenLoaded() {
    return 0 === K.length
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = eB();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eA(e);
        n = n.filter(e => eA(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return eo.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return er.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(eo.gameOverrides)
  }
  getOverrideForGame(e) {
    return eo.gameOverrides[eA(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = eR(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = eR(e);
    return t.enabledLegacy || t.enabledOOP ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null != (n = null == (t = er.find(t => (0, g.Z)(e, t.windowHandle))) ? true : t.name) ? n : null
  }
  get canShowAdminWarning() {
    return X && !this.isSystemServiceInitialized("input-service")
  }
  isDetectionEnabled(e) {
    return eD(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    ep.add(null != (t = (0, p.F)(e)) ? t : e)
  }
  getSystemServiceStatus(e) {
    var t;
    return null != (t = Q[e]) ? t : {
      state: "unknown"
    }
  }
  isSystemServiceInitialized(e) {
    var t;
    return (null == (t = Q[e]) ? true : t.state) === "running"
  }
}
G(e8, "displayName", "RunningGameStore");
let e6 = new e8(Chunk570140.Z, {
    RUNNING_GAMES_CHANGE: eF,
    CANDIDATE_GAMES_CHANGE: eV,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eH,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eY,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eK,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eW,
    RUNNING_GAME_ADD_OVERRIDE: ez,
    RUNNING_GAME_TOGGLE_OVERLAY: e$,
    RUNNING_GAME_TOGGLE_DETECTION: e0,
    RUNNING_GAME_EDIT_NAME: e1,
    RUNNING_GAME_DELETE_ENTRY: e3,
    GAMES_DATABASE_UPDATE: es,
    GAME_LAUNCH_SUCCESS: e2,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eq,
    GAME_DETECTION_DEBUGGING_START: eX,
    GAME_DETECTION_DEBUGGING_STOP: eQ,
    GAME_DETECTION_DEBUGGING_TICK: eJ,
    SYSTEM_SERVICE_INITIALIZE: e5
  }),
  e7 = e6