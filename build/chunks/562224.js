/** Chunk was on web.js **/
/** chunk id: 562224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk143135 = require("./143135.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");

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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  return e.hasOwnProperty("pid")
}

function A(e) {
  if (S(e)) return {
    pid: e.pid
  };
  let t = (0, E.Z)(true, e, a.ZP.getRunningGames()),
    n = !(0, p.isWindows)() || null == t || (null == e ? true : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
  return null != n ? {
    pid: n
  } : {
    sourceId: e.id,
    sourceName: e.name,
    sourceIcon: e.icon
  }
}
async function C(e, t) {
  var n, p, E, O, I, S, C, N;
  let R = _.default.getCurrentUser(),
    P = f.Z.getVoiceChannelId(),
    w = c.Z.getChannel(P),
    D = null == w ? true : w.getGuildId(),
    x = null == (n = u.Z.getGuild(D)) ? true : n.premiumTier;
  if (null == R || null == w || null == P) return [false, "no user or channel"];
  let L = null;
  if (null == (L = "number" == typeof e ? a.ZP.getGameForPID(e) : e)) return [false, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(y.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: M,
    resolution: j,
    fps: k,
    soundshareEnabled: U
  } = l.Z.getState(), G = null != (E = null == t ? true : t.preset) ? E : M, {
    allowAutoQuality: B
  } = (0, h.IK)({
    location: "startStreamWithSource"
  });
  G !== b.ApplicationStreamPresets.PRESET_AUTO || B || (G = b.ApplicationStreamPresets.PRESET_VIDEO);
  let Z = G === b.ApplicationStreamPresets.PRESET_AUTO ? b.ApplicationStreamPresets.PRESET_VIDEO : G,
    [F, V] = null != (O = (0, g.Z)(Z, R, x)) ? O : [],
    H = null != (I = null != F ? F : null == t ? true : t.resolution) ? I : j,
    Y = null != (S = null != V ? V : null == t ? true : t.fps) ? S : k,
    W = null != (C = null == t ? true : t.previewDisabled) ? C : s.I0.getSetting(),
    K = null != (N = null == t ? true : t.soundshareEnabled) ? N : U;
  return (0, m.Z)(Z, H, Y, R, x, w) || (G = b.ApplicationStreamPresets.PRESET_VIDEO, H = b.ApplicationStreamResolutions.RESOLUTION_720, Y = b.ApplicationStreamFPS.FPS_30), (0, i.Rc)({
    preset: G,
    resolution: H,
    frameRate: Y,
    soundshareEnabled: K
  }), (0, i.WH)(D, P, T(v({}, A(L)), {
    audioSourceId: (null == (p = L.id) ? true : p.startsWith(r.vA.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: K,
    previewDisabled: W,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  })), [true, true]
}