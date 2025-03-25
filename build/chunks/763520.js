/** Chunk was on 48909 **/
n.d(t, {
  m: () => h,
  o: () => m
}), n(47120);
var r, i = n(259443),
  o = n(379649),
  l = n(314897),
  a = n(592125),
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
var h = ((r = {}).SELF_VIDEO = "self_video", r.SELF_STREAM = "self_stream", r.REMOTE_VIDEO = "remote_video", r.REMOTE_STREAM = "remote_stream", r.CHANGE_VIDEO_BACKGROUND = "change_video_background", r.VIDEO_PLAYER = "video_player", r.REPLAY_VIDEO_STREAM = "replay_video_stream", r);
let _ = new Map;
class m {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, o.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let r = function(e) {
        var t;
        let n = (null !== (t = _.get(e)) && void 0 !== t ? t : 0) + 1;
        return _.set(e, n), n
      }(n),
      i = (0, o.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, i < 0) {
      this.logger.warn("spinner duration is negative: ".concat(i, " ms\n        [").concat(e, ", count for stream: ").concat(r, "]"));
      return
    }
    this.logger.info("spinner visible for ".concat(i, " ms\n      [").concat(e, ", count for stream: ").concat(r, "]"));
    let f = c.ZP.getGuildId(),
      h = u.Z.getUserVoiceChannelId(f, l.default.getId()),
      m = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(a.Z.getChannel(h));
    d.default.track(p.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: i,
      rtc_connection_id: c.ZP.getRTCConnectionId(),
      media_session_id: c.ZP.getMediaSessionId(),
      event_count_for_stream: r,
      guild_id: f,
      channel_id: h,
      channel_type: m,
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