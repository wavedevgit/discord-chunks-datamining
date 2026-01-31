/** Chunk was on 64935 **/
/** chunk id: 72432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let O = new Set(["356943187589201930"]);
async function x(e, t) {
  var n, x, E, j, C, I, S, T, N, P;
  let w = m.default.getCurrentUser(),
    R = p.A.getVoiceChannelId(),
    D = c.A.getChannel(R),
    L = null == D ? true : D.getGuildId(),
    M = null == (S = u.A.getGuild(L)) ? true : S.premiumTier;
  if (null == w || null == D || null == R) return [false, "no user or channel"];
  let k = null;
  if (null == (k = "number" == typeof e ? l.Ay.getGameForPID(e) : e)) return [false, "no source"];
  if (!d.A.getUseSystemScreensharePicker() && !await a.A.hasPermission(v.iL.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: U,
    resolution: G,
    fps: B,
    soundshareEnabled: F
  } = o.A.getState(), H = null != (n = null == t ? true : t.preset) ? n : U, {
    allowAutoQuality: V
  } = (0, g.eO)({
    location: "startStreamWithSource"
  });
  H !== A.jQ.PRESET_AUTO || V || (H = A.jQ.PRESET_VIDEO);
  let z = H === A.jQ.PRESET_AUTO ? A.jQ.PRESET_VIDEO : H,
    [W, K] = null != (x = (0, h.A)(z, w, M)) ? x : [],
    Y = null != (E = null != W ? W : null == t ? true : t.resolution) ? E : G,
    q = null != (j = null != K ? K : null == t ? true : t.fps) ? j : B,
    J = null != (C = null == t ? true : t.previewDisabled) ? C : s.uh.getSetting(),
    Q = null != (I = null == t ? true : t.soundshareEnabled) ? I : F;
  return (0, _.A)(z, Y, q, w, M, D) || (H = A.jQ.PRESET_VIDEO, Y = A.on.RESOLUTION_720, q = A.kn.FPS_30), (0, i.Xd)({
    preset: H,
    resolution: Y,
    frameRate: q,
    soundshareEnabled: Q
  }), (0, i.XI)(L, R, (N = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, function(e) {
    var t;
    let n;
    if (e.hasOwnProperty("pid")) return {
      pid: e.pid
    };
    let i = (0, y.A)(true, e, l.Ay.getRunningGames()),
      a = !(0, f.isWindows)() || null == i || null != (n = i.id) && O.has(n) || (null == e ? true : e.id.startsWith(r.fS.CAMERA)),
      s = null != i ? i.pid : null;
    return a || null == s ? (null == s && (null == (t = e.id) ? true : t.startsWith("prepicked:")) && (s = b.Ay.getLastPickedContentPID()), {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon,
      sourcePid: s
    }) : {
      pid: s
    }
  }(k)), P = P = {
    audioSourceId: (null == (T = k.id) ? true : T.startsWith(r.fS.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: Q,
    previewDisabled: J,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(P)).forEach(function(e) {
    Object.defineProperty(N, e, Object.getOwnPropertyDescriptor(P, e))
  }), N)), [true, true]
}