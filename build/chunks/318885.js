/** Chunk was on web.js **/
/** chunk id: 318885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => m,
  t: () => h
});
var Chunk594190 = require("./594190.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk388627 = require("./388627.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk449224 = require("./449224.js"),
  Chunk626135 = require("./626135.js"),
  Chunk367907 = require("./367907.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h() {
  let e, t, n, i, a, o = Chunk131951.Z.getGoLiveSource();
  if (null != Chunk388627 && (e = Chunk388627.quality.resolution, t = Chunk388627.quality.frameRate, null != Chunk388627.desktopSource)) {
    var l, c;
    n = Chunk388627.desktopSource.soundshareSession;
    let e = null != Chunk388627.desktopSource.sourcePid ? Chunk594190.ZP.getGameForPID(Chunk388627.desktopSource.sourcePid) : null;
    i = null != (l = null == module ? true : module.name) ? Chunk19780 : null, a = null != (c = null == module ? true : module.id) ? Chunk449224 : null
  }
  return {
    video_input_resolution: module,
    video_input_frame_rate: exports,
    soundshare_session: require,
    share_game_name: Chunk837268,
    share_game_id: Chunk371651
  }
}

function m(e, t) {
  var n, s, _;
  let h = arguments.length > 2 && true !== arguments[2] && arguments[2],
    m = __OVERLAY__ ? c.Z.getGame() : (0, o.pL)(),
    g = r.ZP.getRunningGames().find(e => e.name === (null == m ? true : m.name)),
    E = (null == g ? true : g.pid) != null ? a.default.getTrackedGameByPid(null == g ? true : g.pid) : null,
    b = null != (n = null == E ? true : E.source) ? n : null,
    y = null != (_ = null != (s = null == E ? true : E.overlayMethod) ? s : a.default.getRenderMethod(null == g ? true : g.pid)) ? _ : null;
  switch (t = p({}, {
      overlay_game_source: b,
      overlay_game_name: null != m ? m.name : "Unknown Game",
      overlay_app_id: null != m ? m.id : null,
      overlay_render_method: null != y ? i.gl[y] : null,
      media_session_id: l.Z.getMediaSessionId(),
      overlay_game_elevated: null == g ? true : g.elevated,
      input_service_initialized: r.ZP.isInputServiceInitialized()
    }, t), e) {
    case f.rMx.VOICE_CHANNEL_SELECTED:
    case f.rMx.SETTINGS_PANE_VIEWED:
    case f.rMx.GUILD_VIEWED:
    case f.rMx.CHANNEL_OPENED:
      return (0, d.yw)(e, t, h);
    default:
      return u.default.track(e, t, {
        flush: h
      })
  }
}