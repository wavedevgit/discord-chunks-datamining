/** Chunk was on web.js **/
/** chunk id: 815706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => g,
  z: () => E
});
var Chunk77729 = require("./77729.js"),
  Chunk15285 = require("./15285.js"),
  Chunk41984 = require("./41984.js"),
  Chunk833551 = require("./833551.js"),
  Chunk243612 = require("./243612.js"),
  Chunk929921 = require("./929921.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk157257 = require("./157257.js"),
  Chunk954571 = require("./954571.js"),
  Chunk58149 = require("./58149.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g() {
  let e, t, n, r, a, s = c.A.getGoLiveSource(),
    o = l.A.getState().preset;
  if (null != s && (e = s.quality.resolution, t = s.quality.frameRate, null != s.desktopSource)) {
    var u, d;
    n = s.desktopSource.soundshareSession;
    let e = null != s.desktopSource.sourcePid ? i.Ay.getGameForPID(s.desktopSource.sourcePid) : null;
    r = null != (u = null == e ? true : e.name) ? u : null, a = null != (d = null == e ? true : e.id) ? d : null
  }
  return {
    video_input_resolution: e,
    video_input_frame_rate: t,
    soundshare_session: n,
    share_game_name: r,
    share_game_id: a,
    quality_preset: o
  }
}
async function E(e, t) {
  var n, l, c, h, g, E;
  let b = arguments.length > 2 && true !== arguments[2] && arguments[2],
    y = __OVERLAY__ ? d.A.getGame() : (0, o.qv)(),
    O = i.Ay.getRunningGames().find(e => e.name === (null == y ? true : y.name)),
    A = (null == O ? true : O.pid) != null ? s.default.getTrackedGameByPid(null == O ? true : O.pid) : null,
    v = null != (n = null == A ? true : A.source) ? n : null,
    S = null != (l = null != (c = null == A ? true : A.overlayMethod) ? c : s.default.getRenderMethod(null == O ? true : O.pid)) ? l : null,
    I = {
      overlay_game_source: v,
      overlay_game_name: null != y ? y.name : "Unknown Game",
      overlay_app_id: null != y ? y.id : null,
      overlay_render_method: null != S ? a.Ue[S] : null,
      media_session_id: u.A.getMediaSessionId(),
      overlay_game_elevated: null == O ? true : O.elevated,
      input_service_initialized: i.Ay.isSystemServiceInitialized("input-service"),
      hardware_display_count: null != (h = await (null === r.A || true === r.A || null == (E = r.A.hardware) || null == (g = E.getDisplayCount) ? true : g.call(E))) ? h : null
    };
  switch (__OVERLAY__ && (I.overlay_render_method = a.Ue[a.Ue.Hook]), t = m({}, I, t), e) {
    case _.HAw.VOICE_CHANNEL_SELECTED:
    case _.HAw.SETTINGS_PANE_VIEWED:
    case _.HAw.GUILD_VIEWED:
    case _.HAw.CHANNEL_OPENED:
      return (0, p.zV)(e, t, b);
    default:
      return f.default.track(e, t, {
        flush: b
      })
  }
}