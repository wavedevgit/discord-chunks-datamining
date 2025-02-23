/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  U5: () => y,
  ZP: () => S,
  pp: () => b
}), n(47120);
var r = n(442837),
  i = n(147913),
  o = n(460181),
  a = n(592125),
  s = n(131951),
  l = n(944486),
  c = n(979651),
  u = n(565799),
  d = n(431328),
  f = n(501655),
  p = n(427679),
  _ = n(754277);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = e => e / 400,
  g = !1,
  E = (0, o.tu)("stage_waiting", "stage_waiting", m(s.Z.getOutputVolume()));

function v() {
  let e = l.Z.getVoiceChannelId();
  if (null == e) {
    E.stop(), g = !1;
    return
  }
  let t = a.Z.getChannel(e);
  if (!(null == t ? void 0 : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
    E.stop(), g = !1;
    return
  }
  if (_.Z.shouldPlay()) {
    E.volume = m(s.Z.getOutputVolume()), E.loop(), g = !0;
    return
  }
  if (p.Z.isLive(e)) {
    E.stop(), g = !1;
    return
  }
  if (_.Z.isMuted()) {
    E.pause(), g = !1;
    return
  }
  let n = null != Object.values(c.Z.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  n || g ? n && (E.pause(), g = !1) : (E.volume = m(s.Z.getOutputVolume()), E.loop(), g = !0)
}

function b(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.getVoiceChannelId() === e),
    n = null != (0, d.w8)(e, f.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    i = (0, r.e7)([p.Z], () => p.Z.getStageInstanceByChannel(e));
  return t && null == i && !n
}

function y(e) {
  let t = l.Z.getVoiceChannelId() === e,
    n = null != u.Z.getMutableParticipants(e, f.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    r = p.Z.getStageInstanceByChannel(e);
  return t && null == r && !n
}
class O extends i.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = a.Z.getChannel(t);
      (null == e ? void 0 : e.isGuildStageVoice()) ? v(): (E.stop(), g = !1)
    } else E.stop(), g = !1
  }
  handleLogout() {
    E.stop(), g = !1
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? v() : (E.pause(), g = !1)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (E.pause(), g = !1) : v()
  }
  handleVoiceStateUpdates() {
    v()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    E.volume = m(t)
  }
  handleToggleSelfDeaf() {
    v()
  }
  constructor(...e) {
    super(...e), h(this, "actions", {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      LOGOUT: this.handleLogout,
      STAGE_MUSIC_MUTE: this.handleMute,
      STAGE_MUSIC_PLAY: this.handlePlay,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
    })
  }
}
let S = new O