/** Chunk was on web.js **/
"use strict";
let r, i;
n.d(t, {
  Z: () => F
}), n(47120);
var o, a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(570140),
  u = n(189786),
  d = n(981631),
  f = n(354459);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = 0,
  h = 0,
  g = {},
  m = new Set,
  E = new Map,
  v = {},
  b = {},
  y = {},
  O = {};

function S(e, t) {
  return "".concat(e, ":").concat(t)
}

function I(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function T(e) {
  var t;
  let n = null !== (t = g[d.ME]) && void 0 !== t ? t : {},
    r = {};
  s().each(n, (t, n) => {
    t.channelId !== e && (r[n] = t)
  }), g[d.ME] = r
}

function N(e) {
  var t;
  return null !== (t = E.get(e)) && void 0 !== t ? t : new Set
}

function A(e, t) {
  let n = N(e);
  !n.has(t) && ((n = new Set(n)).add(t), E.set(e, n))
}

function C(e, t) {
  let n = N(e);
  n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n))
}

function R(e, t, n) {
  let r = I(g, null != e ? e : d.ME),
    i = r[t],
    o = n(i);
  return i === o ? [!1, o, i] : (null != i && (delete r[t], null != i.channelId && (delete I(v, i.channelId)[t], delete I(b, i.channelId)[t]), null != i.sessionId && delete I(y, t)[i.sessionId], C(null != e ? e : d.ME, t)), null != o && (r[t] = o, null != o.channelId && (I(v, o.channelId)[t] = o, o.selfVideo && (I(b, o.channelId)[t] = o, A(null != e ? e : d.ME, t))), null != o.sessionId && (I(y, t)[o.sessionId] = o)), [!0, o, i])
}

function P(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let [n, r, o] = L(t.guildId, t);
    return n ? (t.sessionId === i && null != r && null != o && o.channelId !== r.channelId && (p += 1), h++, !0) : e
  }, !1)
}

function D(e) {
  let t = !1;
  for (let n of e.voiceStates) {
    let [r] = L(e.guildId, n);
    t = t || r
  }
  for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), t = !0;
  return t && h++, t
}

function w(e) {
  let {
    userId: t,
    channelId: n,
    platform: r
  } = e;
  O[S(t, n)] = r
}

function L(e, t) {
  return R(e, t.userId, e => {
    if (null == t.channelId) return null;
    {
      let n = {
        channelId: t.channelId,
        deaf: t.deaf,
        mute: t.mute,
        requestToSpeakTimestamp: t.requestToSpeakTimestamp,
        selfDeaf: t.selfDeaf,
        selfMute: t.selfMute,
        selfStream: t.selfStream,
        selfVideo: t.selfVideo,
        sessionId: t.sessionId,
        suppress: t.suppress,
        userId: t.userId,
        discoverable: t.discoverable
      };
      return null != e ? e.merge(n) : new u.Z(n)
    }
  })
}

function x(e) {
  let {
    guildId: t,
    channelId: n
  } = e, [i] = R(t, r, e => null == e ? void 0 : e.set("channelId", n));
  return i
}

function M(e) {
  let {
    user: t,
    sessionId: n
  } = e, o = null != r && r !== t.id;
  return o && (g = {}, v = {}, y = {}, b = {}, E.clear()), r = t.id, i = n, o
}

function k() {
  g = {}, v = {}, y = {}, b = {}, E.clear()
}

function j(e) {
  let {
    voiceStates: t,
    user: n,
    sessionId: o
  } = e;
  for (let [e, n] of(g = {}, v = {}, y = {}, b = {}, Object.entries(t)))
    for (let [t, r] of Object.entries(n)) R(e, t, () => new u.Z(r));
  r = n.id, i = o
}

function U(e) {
  let {
    guild: t
  } = e;
  s().forEach(g[t.id], e => {
    R(t.id, e.userId, () => null)
  }), delete g[t.id]
}

function G(e) {
  let {
    channel: t
  } = e;
  T(t.id)
}

function B(e) {
  let {
    channelId: t
  } = e;
  T(t)
}
class V extends(o = l.ZP.Store) {
  getAllVoiceStates() {
    return g
  }
  getVoiceStateVersion() {
    return h
  }
  getVoiceStates(e) {
    return I(g, null != e ? e : d.ME)
  }
  getVoiceStatesForChannel(e) {
    return I(v, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return I(b, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getDiscoverableVoiceState(e, t) {
    let n = this.getVoiceState(e, t);
    return null == n || !1 === n.discoverable ? null : n
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    return null === (t = I(v, e)) || void 0 === t ? void 0 : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(I(y, e))[0]
  }
  getDiscoverableVoiceStateForUser(e) {
    return Object.values(I(y, e)).find(e => !1 !== e.discoverable)
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null === (n = I(y, e)) || void 0 === n ? void 0 : n[t] : null
  }
  getUserVoiceChannelId(e, t) {
    var n;
    return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
  }
  getCurrentClientVoiceChannelId(e) {
    let t = this.getVoiceState(e, r);
    return null != t && null != i && t.sessionId === i ? t.channelId : null
  }
  getUsersWithVideo(e) {
    var t;
    return null !== (t = E.get(e)) && void 0 !== t ? t : m
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != i && (null === (e = y[r]) || void 0 === e ? void 0 : e[i]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    if (null == e) return !1;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== r || null != i && n.sessionId === i)
  }
  hasVideo(e) {
    return Object.values(I(b, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, o;
    let a = null != i && (null === (o = y[r]) || void 0 === o ? void 0 : null === (n = o[i]) || void 0 === n ? void 0 : n.channelId);
    return t === r && e === a ? f.wR.DESKTOP : O[S(t, e)]
  }
  get userHasBeenMovedVersion() {
    return p
  }
}
_(V, "displayName", "VoiceStateStore");
let F = new V(c.Z, {
  CONNECTION_OPEN: M,
  CONNECTION_OPEN_SUPPLEMENTAL: k,
  OVERLAY_INITIALIZE: j,
  VOICE_CHANNEL_SELECT: x,
  VOICE_STATE_UPDATES: P,
  GUILD_DELETE: U,
  GUILD_CREATE: U,
  CHANNEL_DELETE: G,
  CALL_DELETE: B,
  PASSIVE_UPDATE_V2: D,
  RTC_CONNECTION_PLATFORM: w
})