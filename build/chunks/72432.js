/** Chunk was on web.js **/
/** chunk id: 72432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk141931 = require("./141931.js"),
  Chunk401843 = require("./401843.js"),
  Chunk15285 = require("./15285.js"),
  Chunk674966 = require("./674966.js"),
  Chunk253932 = require("./253932.js"),
  Chunk929921 = require("./929921.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk723702 = require("./723702.js"),
  Chunk258585 = require("./258585.js"),
  Chunk874124 = require("./874124.js"),
  Chunk476697 = require("./476697.js"),
  Chunk571044 = require("./571044.js"),
  Chunk310689 = require("./310689.js"),
  Chunk753070 = require("./753070.js"),
  Chunk765682 = require("./765682.js");

function v(e, t, n) {
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
      v(e, t, n[t])
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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  return e.hasOwnProperty("pid")
}

function C(e) {
  var t;
  if (T(e)) return {
    pid: e.pid
  };
  let n = (0, y.A)(true, e, a.Ay.getRunningGames()),
    i = !(0, _.isWindows)() || null == n || (null == e ? true : e.id.startsWith(r.fS.CAMERA)),
    s = null != n ? n.pid : null;
  return i || null == s ? (null == s && (null == (t = e.id) ? true : t.startsWith("prepicked:")) && (s = E.Ay.getLastPickedContentPID()), {
    sourceId: e.id,
    sourceName: e.name,
    sourceIcon: e.icon,
    sourcePid: s
  }) : {
    pid: s
  }
}
async function N(e, t) {
  var n, _, E, y, v, I, T, N;
  let R = p.default.getCurrentUser(),
    w = f.A.getVoiceChannelId(),
    P = c.A.getChannel(w),
    D = null == P ? true : P.getGuildId(),
    x = null == (T = u.A.getGuild(D)) ? true : T.premiumTier;
  if (null == R || null == P || null == w) return [false, "no user or channel"];
  let L = null;
  if (null == (L = "number" == typeof e ? a.Ay.getGameForPID(e) : e)) return [false, "no source"];
  if (!d.A.getUseSystemScreensharePicker() && !await s.A.hasPermission(O.iL.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: j,
    resolution: M,
    fps: k,
    soundshareEnabled: U
  } = l.A.getState(), G = null != (n = null == t ? true : t.preset) ? n : j, {
    allowAutoQuality: V
  } = (0, h.eO)({
    location: "startStreamWithSource"
  });
  G !== b.jQ.PRESET_AUTO || V || (G = b.jQ.PRESET_VIDEO);
  let F = G === b.jQ.PRESET_AUTO ? b.jQ.PRESET_VIDEO : G,
    [B, H] = null != (_ = (0, g.A)(F, R, x)) ? _ : [],
    Y = null != (E = null != B ? B : null == t ? true : t.resolution) ? E : M,
    W = null != (y = null != H ? H : null == t ? true : t.fps) ? y : k,
    K = null != (v = null == t ? true : t.previewDisabled) ? v : o.uh.getSetting(),
    z = null != (I = null == t ? true : t.soundshareEnabled) ? I : U;
  return (0, m.A)(F, Y, W, R, x, P) || (G = b.jQ.PRESET_VIDEO, Y = b.on.RESOLUTION_720, W = b.kn.FPS_30), (0, i.Xd)({
    preset: G,
    resolution: Y,
    frameRate: W,
    soundshareEnabled: z
  }), (0, i.XI)(D, w, S(A({}, C(L)), {
    audioSourceId: (null == (N = L.id) ? true : N.startsWith(r.fS.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: z,
    previewDisabled: K,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  })), [true, true]
}