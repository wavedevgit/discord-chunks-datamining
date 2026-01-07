/** Chunk was on web.js **/
/** chunk id: 98302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk603113 = require("./603113.js"),
  Chunk594190 = require("./594190.js"),
  Chunk509003 = require("./509003.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk885110 = require("./885110.js"),
  Chunk606304 = require("./606304.js"),
  Chunk938475 = require("./938475.js"),
  Chunk70956 = require("./70956.js"),
  Chunk367907 = require("./367907.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let E = +Chunk70956.Z.Millis.MINUTE;
class b extends Chunk147913.Z {
  _initialize() {
    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(d.Z, () => this._handleSpeakingStoreChanged()).set(c.Z, () => this._handleRTCConnectionStoreChanged()), this._reset())
  }
  _reset() {
    this._currentUserSpeaking = false, this._anyoneElseSpeaking = false, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
  }
  _trackStartSpeaking() {
    if (this._currentUserSpeaking) {
      let e = c.Z.getChannelId(),
        t = c.Z.getGuildId();
      (0, _.yw)(m.rMx.START_SPEAKING, g({
        mode: l.Z.getMode(),
        priority: d.Z.isCurrentUserPrioritySpeaking(),
        channel: e,
        server: t,
        channel_id: e,
        guild_id: t,
        rtc_connection_id: c.Z.getRTCConnectionId(),
        media_session_id: c.Z.getMediaSessionId(),
        voice_state_count: f.ZP.countVoiceStatesForChannel(this._voiceChannelId)
      }, this.getGameMetadata(), c.Z.getPacketStats()))
    }
  }
  _trackStartListening() {
    if (l.Z.isDeaf() || !this._anyoneElseSpeaking) return;
    let e = c.Z.getChannelId(),
      t = c.Z.getGuildId();
    (0, _.yw)(m.rMx.START_LISTENING, g({
      mute: l.Z.isMute(),
      anyone_priority: d.Z.isAnyonePrioritySpeaking(),
      channel: e,
      server: t,
      channel_id: e,
      guild_id: t,
      rtc_connection_id: c.Z.getRTCConnectionId(),
      media_session_id: c.Z.getMediaSessionId(),
      voice_state_count: f.ZP.countVoiceStatesForChannel(this._voiceChannelId)
    }, this.getGameMetadata()))
  }
  _terminate() {
    this._reset(), d.Z.removeChangeListener(this._handleSpeakingStoreChanged), c.Z.removeChangeListener(this._handleRTCConnectionStoreChanged)
  }
  getGameMetadata() {
    let e = u.Z.findActivity(e => e.type === m.IIU.PLAYING),
      t = o.ZP.getCurrentGameForAnalytics();
    return {
      game_platform: (0, a.Z)(e),
      game_name: null != e ? e.name : null,
      game_exe_name: null != t ? t.exeName : null,
      game_id: null != e ? e.application_id : null,
      game_distributor: null != t ? t.distributor : null,
      game_distributor_game_id: null != t ? t.sku : null,
      game_metadata: null != t ? (0, s.sD)(t) : null
    }
  }
  constructor(...e) {
    super(...e), h(this, "_currentUserSpeaking", false), h(this, "_anyoneElseSpeaking", false), h(this, "_voiceChannelId", true), h(this, "_reportInterval", true), h(this, "_handleRTCConnectionStoreChanged", () => {
      let e = c.Z.getChannelId();
      if (this._voiceChannelId !== e) {
        if (this._voiceChannelId = e, null == e) return void this._reset();
        null == this._reportInterval && (this._reportInterval = new r.Xp, this._reportInterval.start(E, () => {
          this._trackStartSpeaking(), this._trackStartListening()
        }))
      }
    }), h(this, "_handleSpeakingStoreChanged", () => {
      let e = d.Z.isCurrentUserSpeaking();
      this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
      let t = d.Z.isAnyoneElseSpeaking();
      this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
    })
  }
}
let y = new b