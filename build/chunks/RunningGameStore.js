/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => eU,
  ZP: () => tr,
  b6: () => ex,
  ik: () => ej,
  ow: () => eI,
  rH: () => eR
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
  Chunk569675 = require("./569675.js"),
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

function Z(e) {
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

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
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
  Q = true,
  X = {
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
  en = [],
  er = null,
  ei = null,
  ea = [],
  eo = {},
  es = {},
  el = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableOverlayV3: {},
    enableDetection: {}
  },
  ec = function() {},
  eu = {},
  ed = 0,
  ef = null,
  ep = null,
  e_ = {},
  em = {},
  eh = new Set,
  eg = new Set,
  eE = null,
  eb = null,
  ey = new Map,
  eO = new Map;

function ev(e, t, n) {
  let r = e[t];
  true !== r && (delete e[t], e[n] = r)
}

function eS(e) {
  let t = {
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  };
  return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = true), e.block && (t.block = true), null != e.distributor && (t.distributor = e.distributor), null != e.gameName && (t.gameName = e.gameName), eT(t, e), t
}

function eI(e) {
  return e
}

function eT(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function eC(e) {
  var t, n, r, i;
  let a = eO.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != a) return a;
  let o = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = ey.get(o.toLowerCase());
  if (null != s) return s;
  for (let [t, n] of ey) {
    let r = e.exePath.toLowerCase(),
      i = t.toLowerCase();
    if (r.endsWith(i)) {
      let e = r.length - i.length;
      if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n
    }
  }
  return null
}

function eA(e) {
  let t = eC(e);
  return (null == t ? true : t.streamerTool) === true
}

function eN() {
  if (et.length > 0) {
    let e = er;
    er = et[0], null != module && er.pid === module.pid ? er.start = module.start : er.start = Date.now()
  } else er = null;
  let e = [];
  for (let t of et) exports.pid in e_ || (e_[exports.pid] = exports, module.push(exports));
  let t = [];
  for (let e of Object.values(e_)) et.some(t => t.pid === e.pid) || (exports.push(module), delete e_[module.pid]);
  (module.length > 0 || exports.length > 0) && (V.info("Running Games Changed", {
    runningGames: et,
    added: module,
    removed: exports,
    previousGames: e_
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: et,
    added: module,
    removed: exports
  }))
}

function eP() {
  ei = en.length > 0 ? en[0] : null;
  let e = [];
  for (let t of en) exports.pid in em || (em[exports.pid] = exports, module.push(exports));
  let t = [];
  for (let e of Object.values(em)) en.some(t => t.pid === e.pid) || (exports.push(module), delete em[module.pid]);
  (module.length > 0 || exports.length > 0) && (V.info("Running Non-Games Changed", {
    runningNonGames: en,
    added: module,
    removed: exports,
    previousNonGames: em
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_NON_GAMES_CHANGE",
    nonGames: en,
    added: module,
    removed: exports
  }))
}

function eR(e) {
  if ((0, S.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}
z.forEach(e => {
  var t;
  eO.set(e.name.toLowerCase(), e), (null != (t = e.executables) ? t : []).forEach(t => {
    ey.set(t.name.toLowerCase(), e)
  })
});
let ew = new Set(["1314395942253756416"]);

function eD(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = I.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && ew.has(t)
}

function ex(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [I.Z, T.Z],
    i = eI(e);
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
  let o = (0, x.supportsOutOfProcess)() && !t,
    s = eD(null != a ? a : i),
    l = b.v.legacyEnabled,
    c = o && !s,
    u = el.enableOverlay[eR(i)],
    d = el.enableOverlayV3[eR(i)];
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
  let f = null == i.id ? null : eu[i.id];
  if (null != f) {
    var p, _;
    let e = null != (p = f.enabledOOP) ? p : c,
      t = null != (_ = f.enabled) ? _ : l,
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

function eL(e) {
  let t = eI(e),
    n = el.enableOverlay[eR(t)],
    r = el.enableOverlayV3[eR(t)];
  if (null != n || null != r) return null != n ? n : r;
  let i = ex(t);
  return i.enabledLegacy || i.enabledOOP
}

function ej(e) {
  let t = el.enableDetection[eR(e)];
  return null == t || t
}

function eM(e) {
  return !e.hidden && ej(e)
}

function ek() {
  Chunk433517.K.set(H, el)
}

function eU(e, t, n, r) {
  let i = B(Z({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : " ",
    overlay: eL(e),
    verified: n.isGameInDatabase(e),
    detectable: ej(e)
  });
  return null != e.id && null != eu[e.id] && (i.overlayWarn = eu[e.id].warn), i
}

function eG(e) {
  return {
    name: e.name,
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  }
}

function eZ() {
  let e = false;
  return $ = o().values(Chunk283595.Z.libraryApplications).reduce((t, n) => {
    let r = I.Z.getDetectableGame(n.id);
    if (null == r) return t;
    for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
      let a = "".concat(n.id, ":").concat(n.branchId);
      J.has(a) || (e = true, J.add(a));
      let {
        fullExecutablePath: o
      } = i, s = o.replace(/\\/g, "/").toLowerCase();
      eo[s] = r.id, t.push({
        id: r.id,
        name: r.name,
        exePath: s,
        cmdLine: "",
        lastFocused: 0,
        add: true
      })
    }
    return t
  }, []), module && eF(), module
}

function eF() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...$, ...o().values(el.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function eB(e, t) {
  let n = el.gameOverrides[e];
  null != n && (el.gameOverrides[t] = n, delete el.gameOverrides[e]);
  let r = el.enableOverlay[e];
  null != r && (el.enableOverlay[t] = r, delete el.enableOverlay[e]);
  let i = el.enableOverlayV3[e];
  null != i && (el.enableOverlayV3[t] = i, delete el.enableOverlayV3[e]);
  let a = el.enableDetection[e];
  null != a && (el.enableDetection[t] = a, delete el.enableDetection[e])
}

function eV(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (el.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = el.gameOverrides[eR(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), t.id === e.id && eR(t) !== eR(e) && (eB(eR(t), eR(e)), t.exePath = e.exePath), eT(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      el.gamesSeen.unshift(eS(e))
    }
  }), el.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ek(), P.Z.setRecentGames(eH().map(e => eU(e, tn, I.Z, T.Z))))
}

function eH() {
  let e = o().values(el.gameOverrides);
  return el.gamesSeen.filter(e => true === el.gameOverrides[eR(e)]).concat(module)
}

function eY(e, t) {
  if (true === t) {
    let t = D.ZP.getDiscordUtils();
    if (null != t && null != t.getWindowHandleFromPid) {
      let n = t.getWindowHandleFromPid(e);
      return null != n && "0" !== n ? n : null
    }
    return null
  }
  return "0" === t ? null : t
}

function eW(e) {
  eV(et)
}

function eK() {}

function ez(e) {
  ee = e.games
}

function eq() {
  Q = false
}

function eQ(e) {
  let {
    pid: t
  } = e;
  ef = t, ep = null
}

function eX(e) {
  let {
    pid: t
  } = e;
  ep = t, ef = null
}

function eJ() {
  ef = null
}

function e$(e) {
  let t, n = e.pid,
    r = et.find(e => e.pid === n);
  if (null == r) {
    let e = ee.find(e => e.pid === n);
    if (null == e) return;
    (r = Z({}, e)).hidden = false, et.push(r), t = eR(r)
  } else t = eR(r), r.hidden && (es[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), el.gameOverrides[t] = B(Z({}, r), {
    add: true
  }), eV(et), eF(), ek(), eN()
}

function e0() {
  eF()
}

function e1(e) {
  eE = e.level, eb = e.intervalSeconds
}

function e3() {
  eE = null, eb = null, eh.clear()
}

function e2(e) {
  let t = e.processes.map(e => {
    var t;
    return {
      pid: e.pid,
      cleanedExePath: null != (t = (0, _.F)(e.exePath)) ? t : e.exePath
    }
  }).filter(e => {
    if (eh.has(e.pid) || eg.has(e.cleanedExePath)) returnfalse;
    let t = q.some(t => e.cleanedExePath.includes(t));
    return t && eh.add(e.pid), t
  }).map(e => e.cleanedExePath);
  t.length > 0 && A.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: q,
    paths: t,
    debugging_level: eE,
    interval_seconds: eb
  })
}

function e4(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== el.enableOverlay[eR(t)], a = r !== el.enableOverlayV3[eR(t)];
  if (i && (el.enableOverlay[eR(t)] = n), a && null != r && (el.enableOverlayV3[eR(t)] = r), ek(), !__OVERLAY__ && null != (null != t.id ? I.Z.getDetectableGame(t.id) : null)) {
    var o, s;
    i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function e5(e) {
  let {
    game: t
  } = e, n = ej(t);
  el.enableDetection[eR(t)] = !n, ek(), A.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function e8(e) {
  let t = eR(e.game),
    n = el.gameOverrides[t];
  null == n && ((n = eG(e.game)).add = true), n.name = e.newName;
  let r = eR(n);
  delete el.gameOverrides[t], el.gameOverrides[r] = n, ev(el.enableOverlay, t, r), ev(el.enableDetection, t, r), ev(es, t, r), el.gamesSeen.forEach(n => {
    eR(n) === t && (n.name = e.newName)
  });
  let i = false;
  et.forEach(n => {
    eR(n) === t && (n.name = e.newName, i = true)
  }), eF(), ek(), i && eN()
}

function e6(e) {
  let t = eR(e.game);
  delete el.gameOverrides[t], delete el.enableOverlay[t], delete el.enableDetection[t], el.gamesSeen = el.gamesSeen.filter(e => eR(e) !== t), es[t] && (et.forEach(e => {
    t === eR(e) && (e.hidden = true)
  }), delete es[t]), et.some(e => eR(e) === t) && eN(), eF(), ek()
}

function e7(e) {
  var t;
  if (__OVERLAY__ || !w.isPlatformEmbedded) return;
  let n = D.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = I.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e9() {
  Chunk353926.Z.hasLoadedExperiments && K.length > 0 && (eV(K), K = [])
}

function te(e) {
  let {
    status: t,
    modules: n
  } = e;
  for (let e of n) X[e] = t
}!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP) && (ec = function() {
  if (!Chunk77498.Z.hasAttemptedFetch || !Chunk569675.Z.hasAttemptedFetch) returnfalse;
  let e = [],
    t = new Set;
  r = {};
  let n = Chunk77498.Z.games,
    i = Chunk569675.Z.nonGames,
    a = (0, Chunk145597.supportsOutOfProcess)();
  for (let e of require) {
    var o, s, l, c;
    let t = eD(module),
      n = Chunk392711 && !exports || Chunk593472.r.enabledOOP,
      r = null != (o = module.overlay) ? o : Chunk593472.r.enabled;
    eu[module.id] = {
      compatibilityHook: null != (s = module.overlayCompatibilityHook) ? Chunk913527 : Chunk593472.r.compatibilityHook,
      warn: null != (l = module.overlayWarn) ? l : Chunk593472.r.warn,
      enabled: r,
      enabledOOP: require,
      allowHook: null != (c = module.hook) ? Chunk442837 : Chunk593472.r.allowHook,
      supportsOutOfProcessOverlay: module.supportsOutOfProcessOverlay
    }
  }
  let u = new Set;
  z.forEach(e => {
    var t;
    (null != (t = e.executables) ? t : []).forEach(e => {
      u.add(e.name.toLowerCase())
    })
  }), [...[...require, ...i].filter(e => {
    var t;
    return !(null != (t = e.executables) ? t : []).some(e => ey.has(e.name.toLowerCase()))
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
  }), e = module.filter(e => null != e.executables && e.executables.length > 0 || null != e.thirdPartySkus && e.thirdPartySkus.length > 0), Chunk998502.ZP.setObservedGamesCallback(module, true, e => {
    let n = [],
      i = {},
      a = [];
    e = e.filter(e => null != e.id && null != M.Z.getById(e.id) ? (a.push(e), false) : (e.isLauncher = e.isLauncher || t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = eY(e.pid, e.windowHandle), null == eC(e) || (n.push(e), false)));
    let o = n.filter(eA).length;
    o !== ed && (ed = o, d.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: ed
    })), et = e, en = a, ea = n, r = i, eN(), eP()
  }), eF(), Chunk998502.ZP.setGameDetectionCallback((e, t) => {
    if (e.length === t.length)
      for (let [a, o] of e.entries()) {
        var n, r, i;
        let e = t[a],
          s = I.Z.getGameByName(o.name),
          l = I.Z.getGameByName(e.name),
          c = null != (n = (null == e ? true : e.id) !== W ? null == e ? true : e.id : null == l ? true : l.id) ? n : "";
        A.default.track(k.rMx.GAME_DETECTION_COMPARISON, {
          game_platform: k.M7m.DESKTOP,
          detection_method: "process_observer_v2",
          game_v1: o.name,
          orig_game_name_v1: o.origGameName,
          game_id_v1: null == s ? true : s.id,
          distributor_v1: o.distributor,
          verified_v1: (0, L.vp)(o.exePath, null != (r = null == s ? true : s.executables) ? r : []),
          is_launcher_v1: o.isLauncher,
          game_detection_enabled_v1: ej(o),
          executable_path_v1: (0, L.N6)(o.exePath),
          distributor_game_id_v1: o.sku,
          hidden_by_distributor_v1: o.hidden,
          game_metadata_v1: (0, S.sD)(o),
          game_v2: e.name,
          orig_game_name_v2: e.origGameName,
          game_id_v2: c,
          distributor_v2: e.distributor,
          verified_v2: (0, L.vp)(e.exePath, null != (i = null == l ? true : l.executables) ? i : []),
          is_launcher_v2: e.isLauncher,
          game_detection_enabled_v2: ej(e),
          executable_path_v2: (0, L.N6)(e.exePath),
          distributor_game_id_v2: e.sku,
          hidden_by_distributor_v2: e.hidden,
          game_metadata_v2: (0, S.sD)(e)
        })
      }
  });
  let p = Chunk624126.g.getConfig({
    location: "RunningGameStore.handleGamesDatabaseUpdate"
  }).enabled;
  Chunk998502.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
    p && A.default.track(k.rMx.GAME_DETECTION_ERROR, {
      error_code: e.toString(),
      distributor: t,
      commit_hash: n,
      file_name: r,
      line_number: i
    })
  })
});
class tt extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let a = null != (e = Chunk433517.K.get(H)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    el.gameOverrides = {};
    let s = false;
    if (o().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eR(e);
        (0, S.le)(e) || (el.gameOverrides[t] = e)
      }), el.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, el.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, el.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, eF(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk417363.Z, Chunk353926.Z, Chunk77498.Z, Chunk283595.Z, Chunk569675.Z), K = Chunk392711.gamesSeen.filter(e => !(0, S.le)(e)), this.syncWith([Chunk353926.Z], e9), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], o().throttle(eZ, 1e3)), Chunk913527 && ek()
  }
  getVisibleGame() {
    return null == er || eM(er) ? er : null
  }
  getCurrentGameForAnalytics() {
    return er
  }
  getCurrentNonGameForAnalytics() {
    return ei
  }
  getVisibleRunningGames() {
    return et.filter(eM)
  }
  getRunningGames() {
    return et
  }
  getRunningNonGames() {
    return en
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of et) null != eo[exports.exePath] && module.push(eo[exports.exePath]);
    return module
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => I.Z.getGameByName(e.name)).filter(Chunk823379.lm).map(e => e.id)
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
    return null != t ? eI(t) : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t && null != t.id ? r[t.id] : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : Z({}, eu[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != ef && ef === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ep && ep === e
  }
  getCandidateGames() {
    return ee.filter(e => e.hidden || null == e.id).filter(e => true === el.gameOverrides[eR(e)])
  }
  isGamesSeenLoaded() {
    return 0 === K.length
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = eH();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eR(e);
        n = n.filter(e => eR(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return el.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return ea.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(el.gameOverrides)
  }
  getOverrideForGame(e) {
    return el.gameOverrides[eR(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = ex(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = ex(e);
    return t.enabledLegacy || t.enabledOOP ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null != (n = null == (t = ea.find(t => (0, g.Z)(e, t.windowHandle))) ? true : t.name) ? n : null
  }
  get canShowAdminWarning() {
    return Q && !this.isSystemServiceInitialized("input-service")
  }
  isDetectionEnabled(e) {
    return ej(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    eg.add(null != (t = (0, _.F)(e)) ? t : e)
  }
  getSystemServiceStatus(e) {
    var t;
    return null != (t = X[e]) ? t : {
      state: "unknown"
    }
  }
  isSystemServiceInitialized(e) {
    var t;
    return (null == (t = X[e]) ? true : t.state) === "running"
  }
}
G(tt, "displayName", "RunningGameStore");
let tn = new tt(Chunk570140.Z, {
    RUNNING_GAMES_CHANGE: eW,
    RUNNING_NON_GAMES_CHANGE: eK,
    CANDIDATE_GAMES_CHANGE: ez,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eq,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eQ,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eJ,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eX,
    RUNNING_GAME_ADD_OVERRIDE: e$,
    RUNNING_GAME_TOGGLE_OVERLAY: e4,
    RUNNING_GAME_TOGGLE_DETECTION: e5,
    RUNNING_GAME_EDIT_NAME: e8,
    RUNNING_GAME_DELETE_ENTRY: e6,
    GAMES_DATABASE_UPDATE: ec,
    GAMES_DATABASE_FETCH_FAIL: ec,
    NON_GAMES_DATABASE_UPDATE: ec,
    NON_GAMES_DATABASE_FETCH_FAIL: ec,
    GAME_LAUNCH_SUCCESS: e7,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: e0,
    GAME_DETECTION_DEBUGGING_START: e1,
    GAME_DETECTION_DEBUGGING_STOP: e3,
    GAME_DETECTION_DEBUGGING_TICK: e2,
    SYSTEM_SERVICE_INITIALIZE: te
  }),
  tr = tn