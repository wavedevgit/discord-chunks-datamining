/** Chunk was on 1272 **/
/** chunk id: 131468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk317770.Z {
  _initialize() {
    __OVERLAY__ || (Chunk570140.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), Chunk570140.Z.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), Chunk570140.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  _terminate() {
    __OVERLAY__ || (Chunk570140.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), Chunk570140.Z.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), Chunk570140.Z.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  constructor(...e) {
    super(...e), s(this, "_playSound", function(e) {
      arguments.length > 1 && true !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    }), s(this, "_stopAndClearSounds", () => {}), s(this, "_handleToggleSelfDeafened", () => {
      a.Z.isDeaf() && this._stopAndClearSounds()
    }), s(this, "_handleSoundboardSoundReceived", e => {
      let {
        soundId: t,
        soundVolume: n,
        userId: r,
        channelId: i
      } = e;
      if (null != t && r !== l.default.getId()) return this._playSound(t, n, r, i)
    }), s(this, "_handleSoundboardSoundPlayLocally", e => {
      let {
        sound: t,
        channelId: n
      } = e, r = l.default.getId();
      return this._playSound(t.soundId, t.volume, r, n)
    }), s(this, "_handleVoiceChannelSelect", () => {
      this._stopAndClearSounds()
    })
  }
}