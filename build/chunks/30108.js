/** Chunk was on web.js **/
/** chunk id: 30108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => A,
  Zl: () => O,
  bF: () => b
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk439372 = require("./439372.js"),
  Chunk400492 = require("./400492.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk63995 = require("./63995.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk39938 = require("./39938.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = e => e / 400,
  g = false,
  E = (0, Chunk400492.Qh)("stage_waiting", "stage_waiting", m(Chunk430452.A.getOutputVolume()));

function y() {
  let e = l.A.getVoiceChannelId();
  if (null == e) {
    E.stop(), g = false;
    return
  }
  let t = s.A.getChannel(e);
  if (!(null == t ? true : t.isGuildStageVoice()) || o.A.isSelfDeaf()) {
    E.stop(), g = false;
    return
  }
  if (_.A.shouldPlay()) {
    E.volume = m(o.A.getOutputVolume()), E.loop(), g = true;
    return
  }
  if (p.A.isLive(e)) {
    E.stop(), g = false;
    return
  }
  if (_.A.isMuted()) {
    E.pause(), g = false;
    return
  }
  let n = null != Object.values(c.A.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  n || g ? n && (E.pause(), g = false) : (E.volume = m(o.A.getOutputVolume()), E.loop(), g = true)
}

function b(e) {
  let t = (0, r.bG)([l.A], () => l.A.getVoiceChannelId() === e),
    n = null != (0, d.E5)(e, f.ip.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    i = (0, r.bG)([p.A], () => p.A.getStageInstanceByChannel(e));
  return t && null == i && !n
}

function O(e) {
  let t = l.A.getVoiceChannelId() === e,
    n = null != u.A.getMutableParticipants(e, f.ip.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    r = p.A.getStageInstanceByChannel(e);
  return t && null == r && !n
}
class v extends Chunk439372.A {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = s.A.getChannel(t);
      (null == e ? true : e.isGuildStageVoice()) ? y(): (E.stop(), g = false)
    } else E.stop(), g = false
  }
  handleLogout() {
    E.stop(), g = false
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? y() : (E.pause(), g = false)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (E.pause(), g = false) : y()
  }
  handleVoiceStateUpdates() {
    y()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    E.volume = m(t)
  }
  handleToggleSelfDeaf() {
    y()
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
let A = new v