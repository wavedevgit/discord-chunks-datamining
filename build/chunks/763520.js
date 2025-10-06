/** Chunk was on 63373 **/
/** chunk id: 763520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => m,
  o: () => g
}), require("./388685.js");
var l, Chunk379649 = require("./379649.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk866960 = require("./866960.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var m = ((l = {}).SELF_VIDEO = "self_video", l.SELF_STREAM = "self_stream", l.REMOTE_VIDEO = "remote_video", l.REMOTE_STREAM = "remote_stream", l.CHANGE_VIDEO_BACKGROUND = "change_video_background", l.REPLAY_VIDEO_STREAM = "replay_video_stream", l);
let v = new Map;
class g {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, Chunk379649.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let l = function(e) {
        var t;
        let n = (null != (t = v.get(e)) ? t : 0) + 1;
        return v.set(e, n), n
      }(n),
      r = (0, i.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, r < 0) return void this.logger.warn("spinner duration is negative: ".concat(r, " ms\n        [").concat(e, ", count for stream: ").concat(l, "]"));
    this.logger.info("spinner visible for ".concat(r, " ms\n      [").concat(e, ", count for stream: ").concat(l, "]"));
    let f = c.Z.getGuildId(),
      m = u.Z.getUserVoiceChannelId(f, s.default.getId()),
      g = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(a.Z.getChannel(m));
    d.default.track(p.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: r,
      rtc_connection_id: c.Z.getRTCConnectionId(),
      media_session_id: c.Z.getMediaSessionId(),
      event_count_for_stream: l,
      guild_id: f,
      channel_id: m,
      channel_type: g,
      spinning_user_id: t,
      connection_type: o.Z.getType(),
      effective_connection_speed: o.Z.getEffectiveConnectionSpeed(),
      service_provider: o.Z.getServiceProvider()
    })
  }
  constructor(e) {
    f(this, "logger", true), f(this, "spinnerVisibleStart", null), this.logger = new r.Z(e)
  }
}