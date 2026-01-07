/** Chunk was on web.js **/
/** chunk id: 485287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U5: () => O,
  ZP: () => S,
  pp: () => y
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk147913 = require("./147913.js"),
  Chunk460181 = require("./460181.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk754277 = require("./754277.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = e => e / 400,
  g = false,
  E = (0, Chunk460181.tu)("stage_waiting", "stage_waiting", h(Chunk131951.Z.getOutputVolume()));

function b() {
  let e = l.Z.getVoiceChannelId();
  if (null == e) {
    E.stop(), g = false;
    return
  }
  let t = o.Z.getChannel(e);
  if (!(null == t ? true : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
    E.stop(), g = false;
    return
  }
  if (_.Z.shouldPlay()) {
    E.volume = h(s.Z.getOutputVolume()), E.loop(), g = true;
    return
  }
  if (p.Z.isLive(e)) {
    E.stop(), g = false;
    return
  }
  if (_.Z.isMuted()) {
    E.pause(), g = false;
    return
  }
  let n = null != Object.values(c.Z.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  n || g ? n && (E.pause(), g = false) : (E.volume = h(s.Z.getOutputVolume()), E.loop(), g = true)
}

function y(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.getVoiceChannelId() === e),
    n = null != (0, d.w8)(e, f.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    i = (0, r.e7)([p.Z], () => p.Z.getStageInstanceByChannel(e));
  return t && null == i && !n
}

function O(e) {
  let t = l.Z.getVoiceChannelId() === e,
    n = null != u.Z.getMutableParticipants(e, f.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    r = p.Z.getStageInstanceByChannel(e);
  return t && null == r && !n
}
class v extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = o.Z.getChannel(t);
      (null == e ? true : e.isGuildStageVoice()) ? b(): (E.stop(), g = false)
    } else E.stop(), g = false
  }
  handleLogout() {
    E.stop(), g = false
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? b() : (E.pause(), g = false)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (E.pause(), g = false) : b()
  }
  handleVoiceStateUpdates() {
    b()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    E.volume = h(t)
  }
  handleToggleSelfDeaf() {
    b()
  }
  constructor(...e) {
    super(...e), m(this, "actions", {
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
let S = new v