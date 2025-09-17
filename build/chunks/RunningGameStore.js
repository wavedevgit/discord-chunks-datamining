/** Chunk was on web.js **/
/** chunk id: 594190, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  FZ: () => eM,
  ZP: () => tt,
  b6: () => ew,
  ik: () => ex,
  ow: () => eI,
  rH: () => eN
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
  Chunk220410 = require("./220410.js"),
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
  Q = false,
  J = new Set,
  $ = [],
  ee = [],
  et = [],
  en = null,
  er = [],
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
  el = function(e) {
    let {
      games: t,
      etag: n
    } = e
  },
  ec = {},
  eu = 0,
  ed = null,
  ef = null,
  e_ = {},
  ep = new Set,
  eh = new Set,
  em = new Set,
  eg = null,
  eE = null,
  eb = new Map,
  ey = new Map;

function eO(e, t, n) {
  let r = e[t];
  true !== r && (delete e[t], e[n] = r)
}

function ev(e) {
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

function eS(e) {
  var t, n, r, i;
  let a = ey.get(null != (r = null == (t = e.name) ? true : t.toLowerCase()) ? r : "");
  if (null != a) return a;
  let o = null != e.exeName && "" !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split("/").pop()) ? true : n.split("\\").pop()) ? i : "",
    s = eb.get(o.toLowerCase());
  if (null != s) return s;
  for (let [t, n] of eb) {
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
  let t = eS(e);
  return (null == t ? true : t.streamerTool) === true
}

function eC() {
  if (et.length > 0) {
    let e = en;
    en = et[0], null != module && en.pid === module.pid ? en.start = module.start : en.start = Date.now()
  } else en = null;
  let e = [];
  for (let t of et) exports.pid in e_ || (e_[exports.pid] = exports, module.push(exports));
  let t = [];
  for (let e of Object.values(e_)) et.some(t => t.pid === e.pid) || (exports.push(module), delete e_[module.pid]);
  V.info("Running Games Changed", {
    runningGames: et,
    added: module,
    removed: exports,
    previousGames: e_
  }), Chunk570140.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: et,
    added: module,
    removed: exports
  })
}

function eN(e) {
  if ((0, I.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}
z.forEach(e => {
  var t;
  ey.set(e.name.toLowerCase(), e), (null != (t = e.executables) ? t : []).forEach(t => {
    eb.set(t.name.toLowerCase(), e)
  })
});
let eR = new Set(["1314395942253756416"]);

function eP(e) {
  let t = null;
  if ("id" in e) {
    var n;
    t = null != (n = e.id) ? n : null
  } else {
    let n = T.Z.getGameByName(e.name);
    if (null == n) returnfalse;
    t = n.id
  }
  return null != t && (0, O.YB)("getRawOverlayGameStatus") && eR.has(t)
}

function ew(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [T.Z, S.Z],
    i = eI(e);
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
  let o = (0, O.NW)("getRawOverlayGameStatus") && (0, x.supportsOutOfProcess)() && !t,
    s = eP(null != a ? a : i),
    l = b.v.legacyEnabled,
    c = o && !s,
    u = es.enableOverlay[eN(i)],
    d = es.enableOverlayV3[eN(i)];
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
    enabledOOP: Y || c,
    enabledLegacy: Y,
    overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled
  }
}

function eD(e) {
  let t = eI(e),
    n = es.enableOverlay[eN(t)],
    r = es.enableOverlayV3[eN(t)];
  if (null != n || null != r) return null != n ? n : r;
  let i = ew(t);
  return i.enabledLegacy || i.enabledOOP
}

function ex(e) {
  let t = es.enableDetection[eN(e)];
  return null == t || t
}

function eL(e) {
  return !e.hidden && ex(e)
}

function ej() {
  Chunk433517.K.set(H, es)
}

function eM(e, t, n, r) {
  let i = F(B({}, e), {
    played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : " ",
    overlay: eD(e),
    verified: n.isGameInDatabase(e),
    detectable: ex(e)
  });
  return null != e.id && null != ec[e.id] && (i.overlayWarn = ec[e.id].warn), i
}

function ek(e) {
  return {
    name: e.name,
    exePath: e.exePath,
    cmdLine: e.cmdLine,
    lastFocused: e.lastFocused
  }
}

function eU() {
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
  }, []), module && eG(), module
}

function eG() {
  if (!__OVERLAY__ && Chunk358085.isPlatformEmbedded) {
    let e = [...$, ...o().values(es.gameOverrides)];
    Chunk998502.ZP.setGameCandidateOverrides(module)
  }
}

function eB(e, t) {
  let n = es.gameOverrides[e];
  null != n && (es.gameOverrides[t] = n, delete es.gameOverrides[e]);
  let r = es.enableOverlay[e];
  null != r && (es.enableOverlay[t] = r, delete es.enableOverlay[e]);
  let i = es.enableOverlayV3[e];
  null != i && (es.enableOverlayV3[t] = i, delete es.enableOverlayV3[e]);
  let a = es.enableDetection[e];
  null != a && (es.enableDetection[t] = a, delete es.enableDetection[e])
}

function eZ(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    if (es.gamesSeen.some(t => {
        if (t.name === e.name || null != t.id && t.id === e.id) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = es.gameOverrides[eN(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return t.distributor !== e.distributor && (t.distributor = e.distributor), t.gameName !== e.gameName && (t.gameName = e.gameName), t.id === e.id && eN(t) !== eN(e) && (eB(eN(t), eN(e)), t.exePath = e.exePath), eT(t, e), true
        }
        returnfalse
      }));
    else {
      if (e.hidden) return;
      es.gamesSeen.unshift(ev(e))
    }
  }), es.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ej(), R.Z.setRecentGames(eF().map(e => eM(e, te, T.Z, S.Z))))
}

function eF() {
  let e = o().values(es.gameOverrides);
  return es.gamesSeen.filter(e => true === es.gameOverrides[eN(e)]).concat(module)
}
if (!__OVERLAY__ && ((0, Chunk358085.isDesktop)() || Chunk987650.iP)) {
  function eV(e) {
    let t = M.Tf.getConfig({
      location: "RunningGameStore.handleGamesDatabaseUpdate"
    }).useDetectionV2;
    D.ZP.setObservedGamesCallback(e, t, e => {
      let t = [],
        n = {};
      e = e.filter(e => (e.isLauncher = e.isLauncher || em.has(e.exeName), e.isLauncher && null != e.id && (n[e.id] = e), e.windowHandle = eH(e.pid, e.windowHandle), null == eS(e) || (t.push(e), false)));
      let i = t.filter(eA).length;
      i !== eu && (eu = i, d.Z.dispatch({
        type: "RUNNING_STREAMER_TOOLS_CHANGE",
        count: eu
      })), et = e, er = t, r = n, eC()
    }), eG(), D.ZP.setGameDetectionCallback((e, n) => {
      if (e.length === n.length)
        for (let [o, s] of e.entries()) {
          var r, i, a;
          let e = n[o],
            l = T.Z.getGameByName(s.name),
            c = T.Z.getGameByName(e.name),
            u = null != (r = (null == e ? true : e.id) !== W ? null == e ? true : e.id : null == c ? true : c.id) ? r : "";
          C.default.track(k.rMx.GAME_DETECTION_COMPARISON, {
            game_platform: k.M7m.DESKTOP,
            detection_method: t ? "process_observer_v2" : "process_observer_v1",
            game_v1: s.name,
            orig_game_name_v1: s.origGameName,
            game_id_v1: null == l ? true : l.id,
            distributor_v1: s.distributor,
            verified_v1: (0, L.vp)(s.exePath, null != (i = null == l ? true : l.executables) ? i : []),
            is_launcher_v1: s.isLauncher,
            game_detection_enabled_v1: ex(s),
            executable_path_v1: (0, L.N6)(s.exePath),
            distributor_game_id_v1: s.sku,
            hidden_by_distributor_v1: s.hidden,
            game_metadata_v1: (0, I.sD)(s),
            game_v2: e.name,
            orig_game_name_v2: e.origGameName,
            game_id_v2: u,
            distributor_v2: e.distributor,
            verified_v2: (0, L.vp)(e.exePath, null != (a = null == c ? true : c.executables) ? a : []),
            is_launcher_v2: e.isLauncher,
            game_detection_enabled_v2: ex(e),
            executable_path_v2: (0, L.N6)(e.exePath),
            distributor_game_id_v2: e.sku,
            hidden_by_distributor_v2: e.hidden,
            game_metadata_v2: (0, I.sD)(e)
          })
        }
    });
    let n = j.g.getConfig({
      location: "RunningGameStore.handleGamesDatabaseUpdate"
    }).enabled;
    D.ZP.setGameDetectionErrorCallback((e, t, r, i, a) => {
      n && C.default.track(k.rMx.GAME_DETECTION_ERROR, {
        error_code: e.toString(),
        distributor: t,
        commit_hash: r,
        file_name: i,
        line_number: a
      })
    })
  }
  el = function(e) {
    let {
      games: t,
      etag: n
    } = e;
    if (0 === t.length) returnfalse;
    ei = [], r = {};
    let i = T.Z.games,
      a = (0, O.NW)("handleGamesDatabaseUpdate") && (0, x.supportsOutOfProcess)();
    for (let e of i) {
      var o, s, l, c;
      let t = eP(e),
        n = a && !t || f.r.enabledOOP,
        r = null != (o = e.overlay) ? o : f.r.enabled;
      ec[e.id] = {
        compatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : f.r.compatibilityHook,
        warn: null != (l = e.overlayWarn) ? l : f.r.warn,
        enabled: r,
        enabledOOP: n,
        allowHook: null != (c = e.hook) ? c : f.r.allowHook,
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
      }
    }
    let u = new Set;
    z.forEach(e => {
      var t;
      (null != (t = e.executables) ? t : []).forEach(e => {
        u.add(e.name.toLowerCase())
      })
    }), [...i.filter(e => {
      var t;
      return !(null != (t = e.executables) ? t : []).some(e => eb.has(e.name.toLowerCase()))
    }), ...z].forEach(e => {
      let t = null != e.executables ? e.executables : [],
        n = {};
      t.forEach(e => {
        let t = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
        null == n[t] && (n[t] = []), n[t].push(e.name), e.isLauncher && em.add(e.name)
      }), Object.keys(n).forEach(t => {
        var r;
        return ei.push({
          name: e.name,
          id: e.id,
          executables: n[t],
          cmdLine: "null" !== t ? t : null,
          thirdPartySkus: null != (r = e.thirdPartySkus) ? r : []
        })
      })
    }), ei = ei.filter(e => null != e.executables && e.executables.length > 0), true === D.ZP.getDiscordUtils().updateDetectableGames ? eV(ei) : D.ZP.updateDetectableGames(ei), eG()
  }, true !== Chunk998502.ZP.getDiscordUtils().updateDetectableGames && eV(ei)
}

function eH(e, t) {
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

function eY(e) {
  eZ(et)
}

function eW(e) {
  ee = e.games
}

function eK() {
  X = false
}

function ez(e) {
  let {
    pid: t
  } = e;
  ed = t, ef = null
}

function eq(e) {
  let {
    pid: t
  } = e;
  ef = t, ed = null
}

function eX() {
  ed = null
}

function eQ(e) {
  let t, n = e.pid,
    r = et.find(e => e.pid === n);
  if (null == r) {
    let e = ee.find(e => e.pid === n);
    if (null == e) return;
    (r = B({}, e)).hidden = false, et.push(r), t = eN(r)
  } else t = eN(r), r.hidden && (eo[t] = true), r.hidden = false;
  (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)), es.gameOverrides[t] = F(B({}, r), {
    add: true
  }), eZ(et), eG(), ej(), eC()
}

function eJ() {
  eG()
}

function e$(e) {
  eg = e.level, eE = e.intervalSeconds
}

function e0() {
  eg = null, eE = null, ep.clear()
}

function e1(e) {
  let t = e.processes.map(e => {
    var t;
    return {
      pid: e.pid,
      cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
    }
  }).filter(e => {
    if (ep.has(e.pid) || eh.has(e.cleanedExePath)) returnfalse;
    let t = q.some(t => e.cleanedExePath.includes(t));
    return t && ep.add(e.pid), t
  }).map(e => e.cleanedExePath);
  t.length > 0 && C.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
    keywords: q,
    paths: t,
    debugging_level: eg,
    interval_seconds: eE
  })
}

function e2(e) {
  let {
    game: t,
    newLegacyOverlayEnabledValue: n,
    newOverlayV3EnabledValue: r
  } = e, i = n !== es.enableOverlay[eN(t)], a = r !== es.enableOverlayV3[eN(t)];
  if (i && (es.enableOverlay[eN(t)] = n), a && null != r && (es.enableOverlayV3[eN(t)] = r), ej(), !__OVERLAY__ && null != (null != t.id ? T.Z.getDetectableGame(t.id) : null)) {
    var o, s;
    i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null)
  }
}

function e3(e) {
  let {
    game: t
  } = e, n = ex(t);
  es.enableDetection[eN(t)] = !n, ej(), C.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
    enabled: !n
  })
}

function e4(e) {
  let t = eN(e.game),
    n = es.gameOverrides[t];
  null == n && ((n = ek(e.game)).add = true), n.name = e.newName;
  let r = eN(n);
  delete es.gameOverrides[t], es.gameOverrides[r] = n, eO(es.enableOverlay, t, r), eO(es.enableDetection, t, r), eO(eo, t, r), es.gamesSeen.forEach(n => {
    eN(n) === t && (n.name = e.newName)
  });
  let i = false;
  et.forEach(n => {
    eN(n) === t && (n.name = e.newName, i = true)
  }), eG(), ej(), i && eC()
}

function e8(e) {
  let t = eN(e.game);
  delete es.gameOverrides[t], delete es.enableOverlay[t], delete es.enableDetection[t], es.gamesSeen = es.gamesSeen.filter(e => eN(e) !== t), eo[t] && (et.forEach(e => {
    t === eN(e) && (e.hidden = true)
  }), delete eo[t]), et.some(e => eN(e) === t) && eC(), eG(), ej()
}

function e5(e) {
  var t;
  if (__OVERLAY__ || !w.isPlatformEmbedded) return;
  let n = D.ZP.getDiscordUtils().notifyGameLaunched;
  if (null == n) return;
  let r = T.Z.getDetectableGame(e.applicationId);
  null != r && n(r.id, r.name, null != (t = e.pids) ? t : [])
}

function e6() {
  Chunk353926.Z.hasLoadedExperiments && K.length > 0 && (eZ(K), K = [])
}

function e7(e) {
  let {
    initialized: t,
    modules: n
  } = e;
  if (!n.includes("input-service")) returnfalse;
  Q = t
}
class e9 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e, t, n, r, i;
    let a = null != (e = Chunk433517.K.get(H)) ? module : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableOverlayV3: {},
      enableDetection: {}
    };
    es.gameOverrides = {};
    let s = false;
    if (o().values(null != (t = Chunk392711.gameOverrides) ? exports : {}).forEach(e => {
        let t = eN(e);
        (0, I.le)(e) || (es.gameOverrides[t] = e)
      }), es.enableOverlay = null != (n = Chunk392711.enableOverlay) ? require : {}, es.enableOverlayV3 = null != (r = Chunk392711.enableOverlayV3) ? r : {}, es.enableDetection = null != (i = Chunk392711.enableDetection) ? i : {}, eG(), Array.isArray(Chunk392711.gamesSeen))
      for (let e of Chunk392711.gamesSeen) "number" == typeof module.id && (module.nativeProcessObserverId = module.id, delete module.id, s = true);
    this.waitFor(Chunk77498.Z, Chunk353926.Z), K = Chunk392711.gamesSeen.filter(e => !(0, I.le)(e)), this.syncWith([Chunk353926.Z], e6), this.syncWith([Chunk283595.Z, Chunk77498.Z, Chunk417363.Z], o().throttle(eU, 1e3)), Chunk913527 && ej()
  }
  getVisibleGame() {
    return null == en || eL(en) ? en : null
  }
  getCurrentGameForAnalytics() {
    return en
  }
  getVisibleRunningGames() {
    return et.filter(eL)
  }
  getRunningGames() {
    return et
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of et) null != ea[exports.exePath] && module.push(ea[exports.exePath]);
    return module
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => T.Z.getGameByName(e.name)).filter(Chunk823379.lm).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null != (t = et.find(t => t.pid === e)) ? t : null
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
    return null == t || t.isLauncher || null == t.id ? null : B({}, ec[t.id])
  }
  shouldElevateProcessForPID(e) {
    return null != ed && ed === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != ef && ef === e
  }
  getCandidateGames() {
    return ee.filter(e => e.hidden || null == e.id).filter(e => true === es.gameOverrides[eN(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = eF();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = eN(e);
        n = n.filter(e => eN(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return es.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return er.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(es.gameOverrides)
  }
  getOverrideForGame(e) {
    return es.gameOverrides[eN(e)]
  }
  getOverlayEnabledForGame(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), false;
    let t = ew(e);
    return t.enabledLegacy || t.enabledOOP
  }
  getGameOverlayStatus(e) {
    if (e.isLauncher || e.elevated || e.sandboxed) return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = ew(e);
    return t.enabledLegacy || t.enabledOOP ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null != (n = null == (t = er.find(t => (0, g.Z)(e, t.windowHandle))) ? true : t.name) ? n : null
  }
  get canShowAdminWarning() {
    return X && !Q
  }
  isDetectionEnabled(e) {
    return ex(e)
  }
  addExecutableTrackedByAnalytics(e) {
    var t;
    eh.add(null != (t = (0, p.F)(e)) ? t : e)
  }
  isInputServiceInitialized() {
    return Q
  }
}
G(e9, "displayName", "RunningGameStore");
let te = new e9(Chunk570140.Z, {
    RUNNING_GAMES_CHANGE: eY,
    CANDIDATE_GAMES_CHANGE: eW,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eK,
    PERMISSION_REQUEST_ELEVATED_PROCESS: ez,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eX,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eq,
    RUNNING_GAME_ADD_OVERRIDE: eQ,
    RUNNING_GAME_TOGGLE_OVERLAY: e2,
    RUNNING_GAME_TOGGLE_DETECTION: e3,
    RUNNING_GAME_EDIT_NAME: e4,
    RUNNING_GAME_DELETE_ENTRY: e8,
    GAMES_DATABASE_UPDATE: el,
    GAME_LAUNCH_SUCCESS: e5,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eJ,
    GAME_DETECTION_DEBUGGING_START: e$,
    GAME_DETECTION_DEBUGGING_STOP: e0,
    GAME_DETECTION_DEBUGGING_TICK: e1,
    SYSTEM_SERVICE_INITIALIZE: e7
  }),
  tt = te