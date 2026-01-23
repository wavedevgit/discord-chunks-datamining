/** Chunk was on web.js **/
/** chunk id: 977997, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => B
}), require("./896048.js");
var a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk288737 = require("./288737.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 0,
  h = 0,
  m = {},
  g = new Set,
  E = new Map,
  y = {},
  b = {},
  O = {},
  v = {};

function A(e, t) {
  return "".concat(e, ":").concat(t)
}

function I(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function S(e) {
  var t;
  let n = null != (t = m[d.ME]) ? t : {};
  o().each(n, (t, n) => {
    t.channelId === e && w(d.ME, n, () => null)
  })
}

function T(e) {
  var t;
  return null != (t = E.get(e)) ? t : new Set
}

function C(e, t) {
  let n = T(e);
  n.has(t) || ((n = new Set(n)).add(t), E.set(e, n))
}

function N(e, t) {
  let n = T(e);
  n.has(t) && ((n = new Set(n)).delete(t), 0 === n.size ? E.delete(e) : E.set(e, n))
}

function w(e, t, n) {
  let r = I(m, null != e ? e : d.ME),
    i = r[t],
    a = n(i);
  return i === a ? [false, a, i] : (null != i && (delete r[t], null != i.channelId && (delete I(y, i.channelId)[t], delete I(b, i.channelId)[t]), null != i.sessionId && delete I(O, t)[i.sessionId], N(null != e ? e : d.ME, t)), null != a && (r[t] = a, null != a.channelId && (I(y, a.channelId)[t] = a, a.selfVideo && (I(b, a.channelId)[t] = a, C(null != e ? e : d.ME, t))), null != a.sessionId && (I(O, t)[a.sessionId] = a)), [true, a, i])
}

function R(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let [n, r, a] = x(t.guildId, t);
    return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (_ += 1), h++, true) : e
  }, false)
}

function P(e) {
  let t = false;
  for (let n of e.voiceStates) {
    let [r] = x(e.guildId, n);
    t = t || r
  }
  for (let n of e.removedVoiceStateUsers) w(e.guildId, n, () => null), t = true;
  return t && h++, t
}

function D(e) {
  let {
    userId: t,
    channelId: n,
    platform: r
  } = e;
  v[A(t, n)] = r
}

function x(e, t) {
  return w(e, t.userId, e => {
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
      return null != e ? e.merge(n) : new u.A(n)
    }
  })
}

function L(e) {
  let {
    guildId: t,
    channelId: n
  } = e, [i] = w(t, r, e => null == e ? true : e.set("channelId", n));
  return i
}

function j(e) {
  let {
    user: t,
    sessionId: n
  } = e, a = null != r && r !== t.id;
  return a && (m = {}, y = {}, O = {}, b = {}, E.clear()), r = t.id, i = n, a
}

function M() {
  m = {}, y = {}, O = {}, b = {}, E.clear()
}

function k(e) {
  let {
    voiceStates: t,
    user: n,
    sessionId: a
  } = e;
  for (let [e, n] of(m = {}, y = {}, O = {}, b = {}, Object.entries(t)))
    for (let [t, r] of Object.entries(n)) w(e, t, () => new u.A(r));
  r = n.id, i = a
}

function U(e) {
  let {
    guild: t
  } = e;
  o().forEach(m[t.id], e => {
    w(t.id, e.userId, () => null)
  }), delete m[t.id]
}

function G(e) {
  let {
    channel: t
  } = e;
  S(t.id)
}

function V(e) {
  let {
    channelId: t
  } = e;
  S(t)
}
class F extends(a = Chunk311907.Ay.Store) {
  getAllVoiceStates() {
    return m
  }
  getVoiceStateVersion() {
    return h
  }
  getVoiceStates(e) {
    return I(m, null != e ? e : d.ME)
  }
  getVoiceStatesForChannel(e) {
    return I(y, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return I(b, e)
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
    return null == (t = I(y, e)) ? true : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(I(O, e))[0]
  }
  getDiscoverableVoiceStateForUser(e) {
    return Object.values(I(O, e)).find(e => false !== e.discoverable)
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null == (n = I(O, e)) ? true : n[t] : null
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
    return null != i && (null == (e = O[r]) ? true : e[i]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r;
    if (null == e) returnfalse;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== r || null != i && n.sessionId === i)
  }
  hasVideo(e) {
    return Object.values(I(b, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, a;
    let s = null != i && (null == (a = O[r]) || null == (n = a[i]) ? true : n.channelId);
    return t === r && e === s ? f.J7.DESKTOP : v[A(t, e)]
  }
  get userHasBeenMovedVersion() {
    return _
  }
}
p(F, "displayName", "VoiceStateStore");
let B = new F(Chunk73153.h, {
  CONNECTION_OPEN: j,
  CONNECTION_OPEN_SUPPLEMENTAL: M,
  OVERLAY_INITIALIZE: k,
  VOICE_CHANNEL_SELECT: L,
  VOICE_STATE_UPDATES: R,
  GUILD_DELETE: U,
  GUILD_CREATE: U,
  CHANNEL_DELETE: G,
  CALL_DELETE: V,
  PASSIVE_UPDATE_V2: P,
  RTC_CONNECTION_PLATFORM: D
})