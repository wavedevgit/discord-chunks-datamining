/** Chunk was on 91173 **/
/** chunk id: 562224, original params: e,t,n (module,exports,require) **/
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
  Chunk451467 = require("./451467.js"),
  Chunk537413 = require("./537413.js"),
  Chunk143135 = require("./143135.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");
async function C(e, t) {
  var n, C, v, O, y, x, j, I, S, T;
  let P = m.default.getCurrentUser(),
    N = p.Z.getVoiceChannelId(),
    A = c.Z.getChannel(N),
    w = null == A ? true : A.getGuildId(),
    Z = null == (n = u.Z.getGuild(w)) ? true : n.premiumTier;
  if (null == P || null == A || null == N) return [false, "no user or channel"];
  let R = null;
  if (null == (R = "number" == typeof e ? l.ZP.getGameForPID(e) : e)) return [false, "no source"];
  if (!d.Z.getUseSystemScreensharePicker() && !await a.Z.hasPermission(E.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    })) return [false, "no permission"];
  let {
    preset: D,
    resolution: L,
    fps: M,
    soundshareEnabled: k
  } = s.Z.getState(), U = null != (v = null == t ? true : t.preset) ? v : D, [F, B] = null != (O = (0, g.Z)(U, P, Z)) ? O : [], G = null != (y = null != F ? F : null == t ? true : t.resolution) ? y : L, H = null != (x = null != B ? B : null == t ? true : t.fps) ? x : M, V = null != (j = null == t ? true : t.previewDisabled) ? j : o.I0.getSetting(), z = null != (I = null == t ? true : t.soundshareEnabled) ? I : k;
  return (0, _.Z)(U, G, H, P, Z, A) || (U = b.tI.PRESET_VIDEO, G = b.LY.RESOLUTION_720, H = b.ws.FPS_30), (0, i.Rc)({
    preset: U,
    resolution: G,
    frameRate: H,
    soundshareEnabled: z
  }), (0, i.WH)(w, N, (S = function(e) {
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
    if (e.hasOwnProperty("pid")) return {
      pid: e.pid
    };
    let t = (0, h.Z)(true, e, l.ZP.getRunningGames()),
      n = !(0, f.isWindows)() || null == t || (null == e ? true : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
    return null != n ? {
      pid: n
    } : {
      sourceId: e.id,
      sourceName: e.name,
      sourceIcon: e.icon
    }
  }(R)), T = T = {
    audioSourceId: (null == (C = R.id) ? true : C.startsWith(r.vA.CAMERA)) ? null == t ? true : t.audioSourceId : true,
    sound: z,
    previewDisabled: V,
    goLiveModalDurationMs: null == t ? true : t.goLiveModalDurationMs,
    analyticsLocations: null == t ? true : t.analyticsLocations
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(T)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(T)).forEach(function(e) {
    Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(T, e))
  }), S)), [true, true]
}