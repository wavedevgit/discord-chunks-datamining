/** Chunk was on web.js **/
/** chunk id: 237496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk555444 = require("./555444.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = true,
  m = true,
  g = true;

function E(e) {
  return null == e || !!e.suppress || null != e.requestToSpeakTimestamp
}

function b() {
  let e, t = d.A.getChannelId(),
    n = false;
  if (null == t) e = true;
  else {
    let r = l.A.getChannel(t),
      i = f.A.getVoiceState(null == r ? true : r.getGuildId(), o.default.getId());
    n = c.A.getMode() === p.TBI.VOICE_ACTIVITY;
    let a = (0, s.H)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching && c.A.getModeOptions().pttLatchingEnabled;
    e = !(n || a) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.A.can(p.xBc.USE_VAD, r) || E(i)
  }
  let r = e || !n,
    i = e || n;
  if (h === e && m === i) returnfalse;
  g = r, h = r, m = i, a.h.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: h,
    hasLatchPermission: m
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
    return t === o.default.getId() && b()
  })
}

function O() {
  g = true
}

function A() {
  g = h
}
class v extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default, l.A, c.A, u.A, d.A, f.A)
  }
  shouldShowWarning() {
    return !g
  }
  canUseVoiceActivity() {
    return h
  }
  canUseLatching() {
    return m
  }
}
_(v, "displayName", "PermissionVADStore");
let S = new v(Chunk73153.h, {
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
  AUDIO_TOGGLE_SELF_MUTE: A,
  PERMISSION_CLEAR_VAD_WARNING: O
})