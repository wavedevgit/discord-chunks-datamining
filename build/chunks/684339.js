/** Chunk was on 31748 **/
/** chunk id: 684339, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => _,
  u: () => g
}), require("./896048.js");
var r, Chunk499979 = require("./499979.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk544180 = require("./544180.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = ((r = {}).SELF_VIDEO = "self_video", r.SELF_STREAM = "self_stream", r.REMOTE_VIDEO = "remote_video", r.REMOTE_STREAM = "remote_stream", r.CHANGE_VIDEO_BACKGROUND = "change_video_background", r.REPLAY_VIDEO_STREAM = "replay_video_stream", r);
let m = new Map;
class _ {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, l.tB)())
  }
  trackSpinnerDuration(e, t, n) {
    var r;
    let i;
    if (null == this.spinnerVisibleStart) return;
    let p = (i = (null != (r = m.get(n)) ? r : 0) + 1, m.set(n, i), i),
      g = (0, l.tB)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, g < 0) return void this.logger.warn("spinner duration is negative: ".concat(g, " ms\n        [").concat(e, ", count for stream: ").concat(p, "]"));
    this.logger.info("spinner visible for ".concat(g, " ms\n      [").concat(e, ", count for stream: ").concat(p, "]"));
    let _ = c.A.getGuildId(),
      h = u.A.getUserVoiceChannelId(_, a.default.getId()),
      y = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.A.getChannel(h));
    d.default.track(f.HAw.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: g,
      rtc_connection_id: c.A.getRTCConnectionId(),
      media_session_id: c.A.getMediaSessionId(),
      event_count_for_stream: p,
      guild_id: _,
      channel_id: h,
      channel_type: y,
      spinning_user_id: t,
      connection_type: s.A.getType(),
      effective_connection_speed: s.A.getEffectiveConnectionSpeed(),
      service_provider: s.A.getServiceProvider()
    })
  }
  constructor(e) {
    p(this, "logger", true), p(this, "spinnerVisibleStart", null), this.logger = new i.A(e)
  }
}