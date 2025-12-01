/** Chunk was on web.js **/
/** chunk id: 318885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => E,
  t: () => g
});
var Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk388627 = require("./388627.js"),
  Chunk361291 = require("./361291.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk449224 = require("./449224.js"),
  Chunk626135 = require("./626135.js"),
  Chunk367907 = require("./367907.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g() {
  let e, t, n, r, a, o = Chunk131951.Z.getGoLiveSource(),
    s = Chunk361291.Z.getState().preset;
  if (null != Chunk371651 && (e = Chunk371651.quality.resolution, t = Chunk371651.quality.frameRate, null != Chunk371651.desktopSource)) {
    var u, d;
    n = Chunk371651.desktopSource.soundshareSession;
    let e = null != Chunk371651.desktopSource.sourcePid ? Chunk594190.ZP.getGameForPID(Chunk371651.desktopSource.sourcePid) : null;
    r = null != (u = null == module ? true : module.name) ? Chunk19780 : null, a = null != (d = null == module ? true : module.id) ? Chunk449224 : null
  }
  return {
    video_input_resolution: module,
    video_input_frame_rate: exports,
    soundshare_session: require,
    share_game_name: Chunk579806,
    share_game_id: Chunk837268,
    quality_preset: Chunk388627
  }
}
async function E(e, t) {
  var n, l, c, m, g, E;
  let b = arguments.length > 2 && true !== arguments[2] && arguments[2],
    y = __OVERLAY__ ? d.Z.getGame() : (0, s.pL)(),
    O = i.ZP.getRunningGames().find(e => e.name === (null == y ? true : y.name)),
    v = (null == O ? true : O.pid) != null ? o.default.getTrackedGameByPid(null == O ? true : O.pid) : null,
    S = null != (c = null == v ? true : v.source) ? c : null,
    I = null != (g = null != (m = null == v ? true : v.overlayMethod) ? m : o.default.getRenderMethod(null == O ? true : O.pid)) ? g : null,
    T = {
      overlay_game_source: S,
      overlay_game_name: null != y ? y.name : "Unknown Game",
      overlay_app_id: null != y ? y.id : null,
      overlay_render_method: null != I ? a.gl[I] : null,
      media_session_id: u.Z.getMediaSessionId(),
      overlay_game_elevated: null == O ? true : O.elevated,
      input_service_initialized: i.ZP.isSystemServiceInitialized("input-service"),
      hardware_display_count: null != (E = await (null === r.Z || true === r.Z || null == (l = r.Z.hardware) || null == (n = l.getDisplayCount) ? true : n.call(l))) ? E : null
    };
  switch (__OVERLAY__ && (T.overlay_render_method = a.gl[a.gl.Hook]), t = h({}, T, t), e) {
    case _.rMx.VOICE_CHANNEL_SELECTED:
    case _.rMx.SETTINGS_PANE_VIEWED:
    case _.rMx.GUILD_VIEWED:
    case _.rMx.CHANNEL_OPENED:
      return (0, p.yw)(e, t, b);
    default:
      return f.default.track(e, t, {
        flush: b
      })
  }
}