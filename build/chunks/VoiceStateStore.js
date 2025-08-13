/** Chunk was on web.js **/
/** chunk id: 979651, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk189786 = require("./189786.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 0,
  h = 0,
  m = {},
  g = new Set,
  E = new Map,
  b = {},
  y = {},
  O = {},
  v = {};

function I(e, t) {
  return "".concat(e, ":").concat(t)
}

function T(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function S(e) {
  var t;
  let n = null != (t = m[d.ME]) ? t : {},
    r = {};
  s().each(n, (t, n) => {
    t.channelId !== e && (r[n] = t)
  }), m[d.ME] = r
}

function A(e) {
  var t;
  return null != (t = E.get(e)) ? t : new Set
}

function N(e, t) {
  let n = A(e);
  n.has(t) || ((n = new Set(n)).add(t), E.set(e, n))
}

function C(e, t) {
  let n = A(e);
  n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n))
}

function R(e, t, n) {
  let r = T(m, null != e ? e : d.ME),
    i = r[t],
    o = n(i);
  return i === o ? [false, o, i] : (null != i && (delete r[t], null != i.channelId && (delete T(b, i.channelId)[t], delete T(y, i.channelId)[t]), null != i.sessionId && delete T(O, t)[i.sessionId], C(null != e ? e : d.ME, t)), null != o && (r[t] = o, null != o.channelId && (T(b, o.channelId)[t] = o, o.selfVideo && (T(y, o.channelId)[t] = o, N(null != e ? e : d.ME, t))), null != o.sessionId && (T(O, t)[o.sessionId] = o)), [true, o, i])
}

function P(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let [n, r, o] = L(t.guildId, t);
    return n ? (t.sessionId === i && null != r && null != o && o.channelId !== r.channelId && (p += 1), h++, true) : e
  }, false)
}

function w(e) {
  let t = false;
  for (let n of e.voiceStates) {
    let [r] = L(e.guildId, n);
    t = t || r
  }
  for (let n of e.removedVoiceStateUsers) R(e.guildId, n, () => null), t = true;
  return t && h++, t
}

function D(e) {
  let {
    userId: t,
    channelId: n,
    platform: r
  } = e;
  v[I(t, n)] = r
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
  } = e, [i] = R(t, r, e => null == e ? true : e.set("channelId", n));
  return i
}

function M(e) {
  let {
    user: t,
    sessionId: n
  } = e, o = null != r && r !== t.id;
  return o && (m = {}, b = {}, O = {}, y = {}, E.clear()), r = t.id, i = n, o
}

function k() {
  m = {}, b = {}, O = {}, y = {}, E.clear()
}

function j(e) {
  let {
    voiceStates: t,
    user: n,
    sessionId: o
  } = e;
  for (let [e, n] of(m = {}, b = {}, O = {}, y = {}, Object.entries(t)))
    for (let [t, r] of Object.entries(n)) R(e, t, () => new u.Z(r));
  r = n.id, i = o
}

function U(e) {
  let {
    guild: t
  } = e;
  s().forEach(m[t.id], e => {
    R(t.id, e.userId, () => null)
  }), delete m[t.id]
}

function G(e) {
  let {
    channel: t
  } = e;
  S(t.id)
}

function B(e) {
  let {
    channelId: t
  } = e;
  S(t)
}
class Z extends(o = Chunk442837.ZP.Store) {
  getAllVoiceStates() {
    return m
  }
  getVoiceStateVersion() {
    return h
  }
  getVoiceStates(e) {
    return T(m, null != e ? e : d.ME)
  }
  getVoiceStatesForChannel(e) {
    return T(b, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return T(y, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getDiscoverableVoiceState(e, t) {
    let n = this.getVoiceState(e, t);
    return null == n || false === n.discoverable ? null : n
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r;
    return null == (t = T(b, e)) ? true : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(T(O, e))[0]
  }
  getDiscoverableVoiceStateForUser(e) {
    return Object.values(T(O, e)).find(e => false !== e.discoverable)
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null == (n = T(O, e)) ? true : n[t] : null
  }
  getUserVoiceChannelId(e, t) {
    var n;
    return null == (n = this.getVoiceState(e, t)) ? true : n.channelId
  }
  getCurrentClientVoiceChannelId(e) {
    let t = this.getVoiceState(e, r);
    return null != t && null != i && t.sessionId === i ? t.channelId : null
  }
  getUsersWithVideo(e) {
    var t;
    return null != (t = E.get(e)) ? t : g
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != i && (null == (e = O[r]) ? true : module[i]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r;
    if (null == e) returnfalse;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== r || null != i && n.sessionId === i)
  }
  hasVideo(e) {
    return Object.values(T(y, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, o;
    let a = null != i && (null == (o = O[r]) || null == (n = o[i]) ? true : n.channelId);
    return t === r && e === a ? f.wR.DESKTOP : v[I(t, e)]
  }
  get userHasBeenMovedVersion() {
    return p
  }
}
_(Z, "displayName", "VoiceStateStore");
let F = new Z(Chunk570140.Z, {
  CONNECTION_OPEN: M,
  CONNECTION_OPEN_SUPPLEMENTAL: k,
  OVERLAY_INITIALIZE: j,
  VOICE_CHANNEL_SELECT: x,
  VOICE_STATE_UPDATES: P,
  GUILD_DELETE: U,
  GUILD_CREATE: U,
  CHANNEL_DELETE: G,
  CALL_DELETE: B,
  PASSIVE_UPDATE_V2: w,
  RTC_CONNECTION_PLATFORM: D
})