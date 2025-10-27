/** Chunk was on web.js **/
/** chunk id: 269647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = true,
  h = true;

function m(e) {
  return null == e || !!e.suppress || null != e.requestToSpeakTimestamp
}

function g() {
  let e, t = Chunk19780.Z.getChannelId();
  if (null == exports) e = true;
  else {
    let n = Chunk592125.Z.getChannel(exports),
      r = Chunk979651.Z.getVoiceState(null == require ? true : require.getGuildId(), Chunk314897.default.getId());
    e = Chunk131951.Z.getMode() !== Chunk981631.pM4.VOICE_ACTIVITY || null == require || require.isPrivate() || require.isGuildStageVoice() || Chunk496675.Z.can(Chunk981631.Plq.USE_VAD, require) || m(r)
  }
  if (p === module) returnfalse;
  h = module, p = module, Chunk570140.Z.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: p
  })
}

function E(e) {
  let {
    voiceStates: t
  } = e;
  return t.some(e => {
    let {
      userId: t
    } = e;
    return t === o.default.getId() && g()
  })
}

function b() {
  h = true
}

function y() {
  h = p
}
class O extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk131951.Z, Chunk496675.Z, Chunk19780.Z, Chunk979651.Z)
  }
  shouldShowWarning() {
    return !h
  }
  canUseVoiceActivity() {
    return p
  }
}
_(O, "displayName", "PermissionVADStore");
let v = new O(Chunk570140.Z, {
  RTC_CONNECTION_STATE: g,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: g,
  AUDIO_SET_MODE: g,
  CHANNEL_UPDATES: g,
  THREAD_UPDATE: g,
  GUILD_ROLE_UPDATE: g,
  GUILD_MEMBER_UPDATE: g,
  IMPERSONATE_UPDATE: g,
  IMPERSONATE_STOP: g,
  VOICE_STATE_UPDATES: E,
  AUDIO_TOGGLE_SELF_MUTE: y,
  PERMISSION_CLEAR_VAD_WARNING: b
})