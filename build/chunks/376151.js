/** Chunk was on web.js **/
/** chunk id: 376151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk439372 = require("./439372.js"),
  Chunk855511 = require("./855511.js"),
  Chunk15285 = require("./15285.js"),
  Chunk847521 = require("./847521.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk461213 = require("./461213.js"),
  Chunk485296 = require("./485296.js"),
  Chunk607567 = require("./607567.js"),
  Chunk927813 = require("./927813.js"),
  Chunk58149 = require("./58149.js"),
  Chunk652215 = require("./652215.js");

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
let E = +Chunk927813.A.Millis.MINUTE;
class b extends Chunk439372.A {
  _initialize() {
    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(d.A, () => this._handleSpeakingStoreChanged()).set(c.A, () => this._handleRTCConnectionStoreChanged()), this._reset())
  }
  _reset() {
    this._currentUserSpeaking = false, this._anyoneElseSpeaking = false, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
  }
  _trackStartSpeaking() {
    if (this._currentUserSpeaking) {
      let e = c.A.getChannelId(),
        t = c.A.getGuildId();
      (0, _.zV)(h.HAw.START_SPEAKING, g({
        mode: l.A.getMode(),
        priority: d.A.isCurrentUserPrioritySpeaking(),
        channel: e,
        server: t,
        channel_id: e,
        guild_id: t,
        rtc_connection_id: c.A.getRTCConnectionId(),
        media_session_id: c.A.getMediaSessionId(),
        voice_state_count: f.Ay.countVoiceStatesForChannel(this._voiceChannelId)
      }, this.getGameMetadata(), c.A.getPacketStats()))
    }
  }
  _trackStartListening() {
    if (l.A.isDeaf() || !this._anyoneElseSpeaking) return;
    let e = c.A.getChannelId(),
      t = c.A.getGuildId();
    (0, _.zV)(h.HAw.START_LISTENING, g({
      mute: l.A.isMute(),
      anyone_priority: d.A.isAnyonePrioritySpeaking(),
      channel: e,
      server: t,
      channel_id: e,
      guild_id: t,
      rtc_connection_id: c.A.getRTCConnectionId(),
      media_session_id: c.A.getMediaSessionId(),
      voice_state_count: f.Ay.countVoiceStatesForChannel(this._voiceChannelId)
    }, this.getGameMetadata()))
  }
  _terminate() {
    this._reset(), d.A.removeChangeListener(this._handleSpeakingStoreChanged), c.A.removeChangeListener(this._handleRTCConnectionStoreChanged)
  }
  getGameMetadata() {
    let e = u.A.findActivity(e => e.type === h.$pd.PLAYING),
      t = s.Ay.getCurrentGameForAnalytics();
    return {
      game_platform: (0, a.A)(e),
      game_name: null != e ? e.name : null,
      game_exe_name: null != t ? t.exeName : null,
      game_id: null != e ? e.application_id : null,
      game_distributor: null != t ? t.distributor : null,
      game_distributor_game_id: null != t ? t.sku : null,
      game_metadata: null != t ? (0, o.MT)(t) : null
    }
  }
  constructor(...e) {
    super(...e), m(this, "_currentUserSpeaking", false), m(this, "_anyoneElseSpeaking", false), m(this, "_voiceChannelId", true), m(this, "_reportInterval", true), m(this, "_handleRTCConnectionStoreChanged", () => {
      let e = c.A.getChannelId();
      if (this._voiceChannelId !== e) {
        if (this._voiceChannelId = e, null == e) return void this._reset();
        null == this._reportInterval && (this._reportInterval = new r.IX, this._reportInterval.start(E, () => {
          this._trackStartSpeaking(), this._trackStartListening()
        }))
      }
    }), m(this, "_handleSpeakingStoreChanged", () => {
      let e = d.A.isCurrentUserSpeaking();
      this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
      let t = d.A.isAnyoneElseSpeaking();
      this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
    })
  }
}
let y = new b