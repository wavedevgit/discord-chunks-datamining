/** Chunk was on 67923 **/
/** chunk id: 72432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let I = new Set(["356943187589201930"]);
async function b(e, t) {
  var n, b, N, C, P, S, y, D, R, v;
  let G = A.default.getCurrentUser(),
    w = m.A.getVoiceChannelId(),
    L = s.A.getChannel(w),
    k = null == L ? true : L.getGuildId(),
    J = null == (y = d.A.getGuild(k)) ? true : y.premiumTier;
  if (null == G || null == L || null == w) return [false, "no user or channel"];
  let U = null;
  if (null == (U = "number" == typeof e ? i.Ay.getGameForPID(e) : e)) return [false, "no source"];
  if (!c.A.getUseSystemScreensharePicker() && !await u.A.hasPermission(_.iL.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: M,
    resolution: j,
    fps: $,
    soundshareEnabled: B
  } = o.A.getState(), H = null != (n = null == t ? true : t.preset) ? n : M, {
    allowAutoQuality: x
  } = (0, f.eO)({
    location: "startStreamWithSource"
  });
  H !== T.jQ.PRESET_AUTO || x || (H = T.jQ.PRESET_VIDEO);
  let V = H === T.jQ.PRESET_AUTO ? T.jQ.PRESET_VIDEO : H,
    [W, F] = null != (b = (0, p.A)(V, G, J)) ? b : [],
    Q = null != (N = null != W ? W : null == t ? true : t.resolution) ? N : j,
    X = null != (C = null != F ? F : null == t ? true : t.fps) ? C : $,
    q = null != (P = null == t ? true : t.previewDisabled) ? P : a.uh.getSetting(),
    z = null != (S = null == t ? true : t.soundshareEnabled) ? S : B;
  return (0, E.A)(V, Q, X, G, J, L) || (H = T.jQ.PRESET_VIDEO, Q = T.on.RESOLUTION_720, X = T.kn.FPS_30), (0, r.Xd)({
    preset: H,
    resolution: Q,
    frameRate: X,
    soundshareEnabled: z
  }), (0, r.XI)(k, w, (R = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, function(e) {
    var t;
    let n;
    if (e.hasOwnProperty("pid")) return {
      pid: e.pid
    };
    let r = (0, O.A)(true, e, i.Ay.getRunningGames()),
      u = !(0, h.isWindows)() || null == r || null != (n = r.id) && I.has(n) || (null == e ? true : e.id.startsWith(l.fS.CAMERA)),
      a = null != r ? r.pid : null;
    return u || null == a ? (null == a && (null == (t = e.id) ? true : t.startsWith("prepicked:")) && (a = g.Ay.getLastPickedContentPID()), {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon,
      sourcePid: a
    }) : {
      pid: a
    }
  }(U)), v = v = {
    audioSourceId: (null == (D = U.id) ? true : D.startsWith(l.fS.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: z,
    previewDisabled: q,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(v)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(v)).forEach(function(e) {
    Object.defineProperty(R, e, Object.getOwnPropertyDescriptor(v, e))
  }), R)), [true, true]
}