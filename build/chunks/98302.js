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

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}
let E = +Chunk70956.Z.Millis.MINUTE;
class b extends Chunk147913.Z {
  _initialize() {
    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(Chunk606304.Z, () => this._handleSpeakingStoreChanged()).set(Chunk19780.Z, () => this._handleRTCConnectionStoreChanged()), this._reset())
  }
  _reset() {
    this._currentUserSpeaking = false, this._anyoneElseSpeaking = false, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
  }
  _trackStartSpeaking() {
    if (this._currentUserSpeaking) {
      let e = Chunk19780.Z.getChannelId(),
        t = Chunk19780.Z.getGuildId();
      (0, Chunk367907.yw)(Chunk981631.rMx.START_SPEAKING, g({
        mode: Chunk131951.Z.getMode(),
        priority: Chunk606304.Z.isCurrentUserPrioritySpeaking(),
        channel: module,
        server: exports,
        channel_id: module,
        guild_id: exports,
        rtc_connection_id: Chunk19780.Z.getRTCConnectionId(),
        media_session_id: Chunk19780.Z.getMediaSessionId(),
        voice_state_count: Chunk938475.ZP.countVoiceStatesForChannel(this._voiceChannelId)
      }, this.getGameMetadata(), Chunk19780.Z.getPacketStats()))
    }
  }
  _trackStartListening() {
    if (Chunk131951.Z.isDeaf() || !this._anyoneElseSpeaking) return;
    let e = Chunk19780.Z.getChannelId(),
      t = Chunk19780.Z.getGuildId();
    (0, Chunk367907.yw)(Chunk981631.rMx.START_LISTENING, g({
      mute: Chunk131951.Z.isMute(),
      anyone_priority: Chunk606304.Z.isAnyonePrioritySpeaking(),
      channel: module,
      server: exports,
      channel_id: module,
      guild_id: exports,
      rtc_connection_id: Chunk19780.Z.getRTCConnectionId(),
      media_session_id: Chunk19780.Z.getMediaSessionId(),
      voice_state_count: Chunk938475.ZP.countVoiceStatesForChannel(this._voiceChannelId)
    }, this.getGameMetadata()))
  }
  _terminate() {
    this._reset(), Chunk606304.Z.removeChangeListener(this._handleSpeakingStoreChanged), Chunk19780.Z.removeChangeListener(this._handleRTCConnectionStoreChanged)
  }
  getGameMetadata() {
    let e = Chunk885110.Z.findActivity(e => e.type === h.IIU.PLAYING),
      t = Chunk594190.ZP.getCurrentGameForAnalytics();
    return {
      game_platform: (0, Chunk603113.Z)(module),
      game_name: null != module ? module.name : null,
      game_exe_name: null != exports ? exports.exeName : null,
      game_id: null != module ? module.application_id : null,
      game_distributor: null != exports ? exports.distributor : null,
      game_distributor_game_id: null != exports ? exports.sku : null,
      game_metadata: null != exports ? (0, Chunk509003.sD)(exports) : null
    }
  }
  constructor(...e) {
    super(...e), m(this, "_currentUserSpeaking", false), m(this, "_anyoneElseSpeaking", false), m(this, "_voiceChannelId", true), m(this, "_reportInterval", true), m(this, "_handleRTCConnectionStoreChanged", () => {
      let e = c.Z.getChannelId();
      if (this._voiceChannelId !== e) {
        if (this._voiceChannelId = e, null == e) return void this._reset();
        null == this._reportInterval && (this._reportInterval = new r.Xp, this._reportInterval.start(E, () => {
          this._trackStartSpeaking(), this._trackStartListening()
        }))
      }
    }), m(this, "_handleSpeakingStoreChanged", () => {
      let e = d.Z.isCurrentUserSpeaking();
      this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
      let t = d.Z.isAnyoneElseSpeaking();
      this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
    })
  }
}
let y = new b