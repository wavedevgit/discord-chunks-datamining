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
  let e, t = d.Z.getChannelId(),
    n = false;
  if (null == t) e = true;
  else {
    let r = l.Z.getChannel(t),
      i = f.Z.getVoiceState(null == r ? true : r.getGuildId(), s.default.getId());
    n = c.Z.getMode() === p.pM4.VOICE_ACTIVITY;
    let a = (0, o.f)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching && c.Z.getModeOptions().pttLatchingEnabled;
    e = !(n || a) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.Z.can(p.Plq.USE_VAD, r) || E(i)
  }
  let r = e || !n,
    i = e || n;
  if (m === e && h === i) returnfalse;
  g = r, m = r, h = i, a.Z.dispatch({
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
    this.waitFor(s.default, l.Z, c.Z, u.Z, d.Z, f.Z)
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