/** Chunk was on 69813 **/
/** chunk id: 763520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => g,
  o: () => m
}), require("./388685.js");
var r, Chunk379649 = require("./379649.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk866960 = require("./866960.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = ((r = {}).SELF_VIDEO = "self_video", r.SELF_STREAM = "self_stream", r.REMOTE_VIDEO = "remote_video", r.REMOTE_STREAM = "remote_stream", r.CHANGE_VIDEO_BACKGROUND = "change_video_background", r.REPLAY_VIDEO_STREAM = "replay_video_stream", r);
let b = new Map;
class m {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, l.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let r = function(e) {
        var t;
        let n = (null != (t = b.get(e)) ? t : 0) + 1;
        return b.set(e, n), n
      }(n),
      i = (0, l.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, i < 0) return void this.logger.warn("spinner duration is negative: ".concat(i, " ms\n        [").concat(e, ", count for stream: ").concat(r, "]"));
    this.logger.info("spinner visible for ".concat(i, " ms\n      [").concat(e, ", count for stream: ").concat(r, "]"));
    let p = s.Z.getGuildId(),
      g = u.Z.getUserVoiceChannelId(p, a.default.getId()),
      m = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.Z.getChannel(g));
    d.default.track(f.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: i,
      rtc_connection_id: s.Z.getRTCConnectionId(),
      media_session_id: s.Z.getMediaSessionId(),
      event_count_for_stream: r,
      guild_id: p,
      channel_id: g,
      channel_type: m,
      spinning_user_id: t,
      connection_type: c.Z.getType(),
      effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
      service_provider: c.Z.getServiceProvider()
    })
  }
  constructor(e) {
    p(this, "logger", true), p(this, "spinnerVisibleStart", null), this.logger = new i.Z(e)
  }
}