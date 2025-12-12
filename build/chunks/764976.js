/** Chunk was on web.js **/
/** chunk id: 764976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk65154 = require("./65154.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c {
  updateVoiceStates(e, t) {
    t === this.channelId ? (this.totalParticipants.add(e), this.maxVoiceStateCount = Math.max(a.ZP.countVoiceStatesForChannel(t), this.maxVoiceStateCount)) : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = s.Dg.NONE), e === this.userId && null != t && this.setChannelId(t))
  }
  getStats() {
    return {
      max_voice_state_count: this.maxVoiceStateCount,
      total_voice_state_count: this.totalParticipants.size,
      max_listener_count: this.maxListenerCount,
      total_listener_count: this.totalListeners.size,
      max_speaker_count: this.maxSpeakerCount,
      total_speaker_count: Object.keys(this.totalSpeakers).length
    }
  }
  getUserVoiceSettingsStats(e) {
    let t = i.Z.getSettings(e),
      n = new Set(Object.keys(t.localMutes)),
      o = new Set(Object.keys(t.localVolumes));
    return o.delete(this.userId), n.delete(this.userId), {
      num_local_voice_user_mutes: (0, r.intersection)(Array.from(n), Array.from(this.totalParticipants)).length,
      num_local_voice_volumes: (0, r.intersection)(Array.from(o), Array.from(this.totalParticipants)).length
    }
  }
  setSpeaking(e, t) {
    if (t !== s.Dg.NONE) {
      let n = o.Z.getVoiceStateForChannel(this.channelId, e);
      if (null != n && !n.selfMute && !n.mute) {
        this.totalSpeakers[e] = t;
        let n = Object.values(this.totalSpeakers).filter(e => e !== s.Dg.NONE).length;
        this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n)
      }
    } else e in this.totalSpeakers && (this.totalSpeakers[e] = s.Dg.NONE);
    if (this.userId === e) {
      if (t === this.speaking) return;
      if (t !== s.Dg.NONE) {
        let e = Object.values(o.Z.getVoiceStatesForChannel(this.channelId)).filter(e => !e.selfDeaf && !e.deaf);
        e.forEach(e => this.totalListeners.add(e.userId)), this.maxListenerCount = Math.max(e.length, this.maxListenerCount)
      }
      this.speaking = t
    }
  }
  setChannelId(e) {
    if (e === this.channelId) return;
    this.channelId = e, this.totalParticipants = new Set([this.userId]);
    let t = Object.keys(o.Z.getVoiceStatesForChannel(this.channelId));
    t.forEach(e => this.totalParticipants.add(e)), this.maxVoiceStateCount = t.length, this.speaking = s.Dg.NONE, this.maxListenerCount = 0, this.totalListeners = new Set, this.maxSpeakerCount = 0, this.totalSpeakers = {}
  }
  constructor(e, t) {
    l(this, "userId", true), l(this, "channelId", true), l(this, "maxVoiceStateCount", 1), l(this, "totalParticipants", new Set), l(this, "speaking", s.Dg.NONE), l(this, "maxListenerCount", 0), l(this, "totalListeners", new Set), l(this, "maxSpeakerCount", 0), l(this, "totalSpeakers", {}), this.userId = e, this.setChannelId(t)
  }
}