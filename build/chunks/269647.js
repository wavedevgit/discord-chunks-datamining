/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => O
});
var r, i = n(442837),
  o = n(570140),
  a = n(314897),
  s = n(592125),
  l = n(131951),
  c = n(496675),
  u = n(19780),
  d = n(979651),
  f = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = !0,
  h = !0;

function m(e) {
  return null == e || !!e.suppress || null != e.requestToSpeakTimestamp
}

function g() {
  let e;
  let t = u.Z.getChannelId();
  if (null == t) e = !0;
  else {
    let n = s.Z.getChannel(t),
      r = d.Z.getVoiceState(null == n ? void 0 : n.getGuildId(), a.default.getId());
    e = l.Z.getMode() !== f.pM4.VOICE_ACTIVITY || null == n || n.isPrivate() || n.isGuildStageVoice() || c.Z.can(f.Plq.USE_VAD, n) || m(r)
  }
  if (_ === e) return !1;
  h = e, _ = e, o.Z.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: _
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
    return t === a.default.getId() && g()
  })
}

function v() {
  h = !0
}

function b() {
  h = _
}
class y extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, l.Z, u.Z, d.Z)
  }
  shouldShowWarning() {
    return !h
  }
  canUseVoiceActivity() {
    return _
  }
}
p(y, "displayName", "PermissionVADStore");
let O = new y(o.Z, {
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
  AUDIO_TOGGLE_SELF_MUTE: b,
  PERMISSION_CLEAR_VAD_WARNING: v
})