/** Chunk was on web.js **/
/** chunk id: 269647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk383451 = require("./383451.js"),
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
let m = true,
  h = true,
  g = true;

function E(e) {
  return null == e || !!e.suppress || null != e.requestToSpeakTimestamp
}

function b() {
  let e, t = Chunk19780.Z.getChannelId(),
    n = false;
  if (null == exports) e = true;
  else {
    let r = Chunk592125.Z.getChannel(exports),
      i = Chunk979651.Z.getVoiceState(null == r ? true : r.getGuildId(), Chunk314897.default.getId());
    n = Chunk131951.Z.getMode() === Chunk981631.pM4.VOICE_ACTIVITY;
    let a = (0, Chunk383451.f)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching && Chunk131951.Z.getModeOptions().pttLatchingEnabled;
    e = !(require || Chunk570140) || null == r || r.isPrivate() || r.isGuildStageVoice() || Chunk496675.Z.can(Chunk981631.Plq.USE_VAD, r) || E(Chunk442837)
  }
  let r = module || !require,
    i = module || require;
  if (m === module && h === Chunk442837) returnfalse;
  g = r, m = r, h = Chunk442837, Chunk570140.Z.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: m,
    hasLatchPermission: h
  })
}

function y(e) {
  let {
    voiceStates: t
  } = e;
  return t.some(e => {
    let {
      userId: t
    } = e;
    return t === s.default.getId() && b()
  })
}

function O() {
  g = true
}

function v() {
  g = m
}
class S extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk131951.Z, Chunk496675.Z, Chunk19780.Z, Chunk979651.Z)
  }
  shouldShowWarning() {
    return !g
  }
  canUseVoiceActivity() {
    return m
  }
  canUseLatching() {
    return h
  }
}
_(S, "displayName", "PermissionVADStore");
let I = new S(Chunk570140.Z, {
  RTC_CONNECTION_STATE: b,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: b,
  AUDIO_SET_MODE: b,
  CHANNEL_UPDATES: b,
  THREAD_UPDATE: b,
  GUILD_ROLE_UPDATE: b,
  GUILD_MEMBER_UPDATE: b,
  IMPERSONATE_UPDATE: b,
  IMPERSONATE_STOP: b,
  VOICE_STATE_UPDATES: y,
  AUDIO_TOGGLE_SELF_MUTE: v,
  PERMISSION_CLEAR_VAD_WARNING: O
})