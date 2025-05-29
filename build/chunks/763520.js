/** Chunk was on 47218 **/
n.d(t, {
  m: () => m,
  o: () => v
}), n(388685);
var l, i = n(259443),
  r = n(379649),
  a = n(314897),
  o = n(592125),
  s = n(866960),
  c = n(19780),
  u = n(979651),
  d = n(626135),
  p = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var m = ((l = {}).SELF_VIDEO = "self_video", l.SELF_STREAM = "self_stream", l.REMOTE_VIDEO = "remote_video", l.REMOTE_STREAM = "remote_stream", l.CHANGE_VIDEO_BACKGROUND = "change_video_background", l.REPLAY_VIDEO_STREAM = "replay_video_stream", l);
let h = new Map;
class v {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let l = function(e) {
        var t;
        let n = (null != (t = h.get(e)) ? t : 0) + 1;
        return h.set(e, n), n
      }(n),
      i = (0, r.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, i < 0) return void this.logger.warn("spinner duration is negative: ".concat(i, " ms\n        [").concat(e, ", count for stream: ").concat(l, "]"));
    this.logger.info("spinner visible for ".concat(i, " ms\n      [").concat(e, ", count for stream: ").concat(l, "]"));
    let f = c.Z.getGuildId(),
      m = u.Z.getUserVoiceChannelId(f, a.default.getId()),
      v = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.Z.getChannel(m));
    d.default.track(p.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: i,
      rtc_connection_id: c.Z.getRTCConnectionId(),
      media_session_id: c.Z.getMediaSessionId(),
      event_count_for_stream: l,
      guild_id: f,
      channel_id: m,
      channel_type: v,
      spinning_user_id: t,
      connection_type: s.Z.getType(),
      effective_connection_speed: s.Z.getEffectiveConnectionSpeed(),
      service_provider: s.Z.getServiceProvider()
    })
  }
  constructor(e) {
    f(this, "logger", void 0), f(this, "spinnerVisibleStart", null), this.logger = new i.Yd(e)
  }
}