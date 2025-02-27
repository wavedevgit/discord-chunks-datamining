/** Chunk was on 49750 **/
n.d(t, {
  m: () => p,
  o: () => h
}), n(47120);
var r, i = n(259443),
  l = n(379649),
  o = n(314897),
  s = n(592125),
  a = n(866960),
  c = n(19780),
  u = n(979651),
  d = n(626135),
  _ = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var p = ((r = {}).SELF_VIDEO = "self_video", r.SELF_STREAM = "self_stream", r.REMOTE_VIDEO = "remote_video", r.REMOTE_STREAM = "remote_stream", r.CHANGE_VIDEO_BACKGROUND = "change_video_background", r.VIDEO_PLAYER = "video_player", r.REPLAY_VIDEO_STREAM = "replay_video_stream", r);
let m = new Map;
class h {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, l.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let r = function(e) {
        var t;
        let n = (null !== (t = m.get(e)) && void 0 !== t ? t : 0) + 1;
        return m.set(e, n), n
      }(n),
      i = (0, l.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, i < 0) {
      this.logger.warn("spinner duration is negative: ".concat(i, " ms\n        [").concat(e, ", count for stream: ").concat(r, "]"));
      return
    }
    this.logger.info("spinner visible for ".concat(i, " ms\n      [").concat(e, ", count for stream: ").concat(r, "]"));
    let E = c.Z.getGuildId(),
      p = u.Z.getUserVoiceChannelId(E, o.default.getId()),
      h = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(s.Z.getChannel(p));
    d.default.track(_.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: i,
      rtc_connection_id: c.Z.getRTCConnectionId(),
      media_session_id: c.Z.getMediaSessionId(),
      event_count_for_stream: r,
      guild_id: E,
      channel_id: p,
      channel_type: h,
      spinning_user_id: t,
      connection_type: a.Z.getType(),
      effective_connection_speed: a.Z.getEffectiveConnectionSpeed(),
      service_provider: a.Z.getServiceProvider()
    })
  }
  constructor(e) {
    E(this, "logger", void 0), E(this, "spinnerVisibleStart", null), this.logger = new i.Yd(e)
  }
}