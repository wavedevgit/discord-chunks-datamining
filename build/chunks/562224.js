/** Chunk was on web.js **/
/** chunk id: 562224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk268146 = require("./268146.js"),
  Chunk872810 = require("./872810.js"),
  Chunk594190 = require("./594190.js"),
  Chunk751571 = require("./751571.js"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk580991 = require("./580991.js"),
  Chunk451467 = require("./451467.js"),
  Chunk537413 = require("./537413.js"),
  Chunk960861 = require("./960861.js"),
  Chunk143135 = require("./143135.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  return e.hasOwnProperty("pid")
}

function C(e) {
  var t;
  if (A(e)) return {
    pid: e.pid
  };
  let n = (0, b.Z)(true, e, a.ZP.getRunningGames()),
    i = !(0, p.isWindows)() || null == n || (null == e ? true : e.id.startsWith(r.vA.CAMERA)),
    o = null != n ? n.pid : null;
  return i || null == o ? (null == o && (null == (t = e.id) ? true : t.startsWith("prepicked:")) && (o = E.ZP.getLastPickedContentPID()), {
    sourceId: e.id,
    sourceName: e.name,
    sourceIcon: e.icon,
    sourcePid: o
  }) : {
    pid: o
  }
}
async function N(e, t) {
  var n, p, E, b, v, T, A, N;
  let R = _.default.getCurrentUser(),
    P = f.Z.getVoiceChannelId(),
    D = c.Z.getChannel(P),
    w = null == D ? true : D.getGuildId(),
    x = null == (n = u.Z.getGuild(w)) ? true : n.premiumTier;
  if (null == R || null == D || null == P) return [false, "no user or channel"];
  let L = null;
  if (null == (L = "number" == typeof e ? a.ZP.getGameForPID(e) : e)) return [false, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(O.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: M,
    resolution: k,
    fps: j,
    soundshareEnabled: U
  } = l.Z.getState(), G = null != (E = null == t ? true : t.preset) ? E : M, {
    allowAutoQuality: B
  } = (0, h.IK)({
    location: "startStreamWithSource"
  });
  G !== y.ApplicationStreamPresets.PRESET_AUTO || B || (G = y.ApplicationStreamPresets.PRESET_VIDEO);
  let Z = G === y.ApplicationStreamPresets.PRESET_AUTO ? y.ApplicationStreamPresets.PRESET_VIDEO : G,
    [F, V] = null != (b = (0, g.Z)(Z, R, x)) ? b : [],
    H = null != (v = null != F ? F : null == t ? true : t.resolution) ? v : k,
    Y = null != (T = null != V ? V : null == t ? true : t.fps) ? T : j,
    W = null != (A = null == t ? true : t.previewDisabled) ? A : s.I0.getSetting(),
    K = null != (N = null == t ? true : t.soundshareEnabled) ? N : U;
  return (0, m.Z)(Z, H, Y, R, x, D) || (G = y.ApplicationStreamPresets.PRESET_VIDEO, H = y.ApplicationStreamResolutions.RESOLUTION_720, Y = y.ApplicationStreamFPS.FPS_30), (0, i.Rc)({
    preset: G,
    resolution: H,
    frameRate: Y,
    soundshareEnabled: K
  }), (0, i.WH)(w, P, S(I({}, C(L)), {
    audioSourceId: (null == (p = L.id) ? true : p.startsWith(r.vA.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: K,
    previewDisabled: W,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  })), [true, true]
}