/** Chunk was on web.js **/
/** chunk id: 944486, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  C: () => H,
  Z: () => es
}), require("./388685.js");
var u, Chunk392711 = require("./392711.js"),
  f = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk823379 = require("./823379.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = "SelectedChannelStore",
  L = 3e5,
  M = 6e4,
  k = {},
  j = {},
  U = {},
  G = new Set;

function B(e) {
  return String(e)
}

function Z() {
  __OVERLAY__ || Chunk433517.K.set(x, {
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    lastChannelFollowingDestination: o,
    lastConnectedTime: l,
    selectedChannelIds: k,
    mostRecentSelectedTextChannelIds: U,
    knownThreadIds: f()(k).values().concat(f().values(U)).filter(Chunk823379.lm).uniq().filter(e => {
      let t = O.Z.getBasicChannel(e);
      return G.has(e) || null != t && E.Ec.has(t.type)
    }).value()
  })
}

function F(e) {
  if (null != e) {
    let t = v.ZP.getDefaultChannel(e);
    if (null != t) return t.id
  }
}

function V(e, t) {
  if (null == e || null == t || U[e] === t) returnfalse;
  let n = O.Z.getChannel(t),
    r = null != n && (0, E.zi)(n.type),
    i = (null == n ? true : n.getGuildId()) === e;
  return !!r && !!i && (U[e] = t, true)
}

function H(e) {
  let t = O.Z.getMutableBasicGuildChannelsForGuild(e),
    n = f().find(t, e => e.type === C.d4z.GUILD_VOICE);
  return null == n ? true : n.id
}

function Y() {
  let e = false,
    t = Chunk430824.Z.getGuildsArray();
  return f().each(k, (t, n) => {
    null != t && (O.Z.hasChannel(t) || t === a || G.has(t) || (0, N.ME)(t)) || (delete k[n], delete j[n], e = true)
  }), f().each(U, (t, n) => {
    null != t && (O.Z.hasChannel(t) || G.has(t)) || (delete U[n], e = true)
  }), exports.forEach(e => {
    let t = k[e.id];
    null == U[e.id] && V(e.id, t)
  }), null != l && Date.now() - l >= L && (s = null, e = true), module
}

function W(e) {
  if (r = e.sessionId, null != s) {
    let e = O.Z.getChannel(s);
    null != e && S.Z.can(_.$e(C.Plq.VIEW_CHANNEL, C.Plq.CONNECT), e) || (s = null)
  }
  Y() && Z()
}

function K(e) {
  r = e.sessionId, s = e.selectedVoiceChannelId, k = {}, j = {}, a = e.selectedChannelId, k[e.selectedGuildId] = e.selectedChannelId, V(e.selectedGuildId, a), Y()
}

function z() {
  r = null
}

function q(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (true === t) returnfalse;
  null == n && (n = F(t)), null != a && n !== a && (i = a), a = n, V(t, n), k[B(t)] !== n && (j[B(t)] = k[B(t)], k[B(t)] = a), Z()
}

function X(e) {
  let {
    channelId: t
  } = e;
  if (null == t) {
    let e = O.Z.getChannel(s),
      t = null == e ? true : e.guild_id;
    null != t && t !== A.Z.getGuildId() && k[t] === s && (k[t] = F(t))
  }
  s = t, Z()
}

function Q(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (G.delete(e), null == t) {
    let n = A.Z.getGuildId();
    k[B(n)] === e && (t = n)
  }
  let i = null != I.Z.getGuild(t) ? t : null,
    a = false;
  s === e && (s = null, a = true), k[B(i)] === e && (k[B(i)] = r && null != n ? n : F(B(i)), A.Z.getGuildId() === i && (0, g.dL)(C.Z5c.CHANNEL(t, k[B(i)])), a = true), null != i && U[i] === e && (delete U[i], a = true), a && Z()
}

function J(e) {
  let {
    type: t,
    channel: n
  } = e;
  Q(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t)
}

function $(e) {
  let {
    channels: t
  } = e;
  for (let e of t)
    if (e.isScheduledForDeletion()) {
      let t = E.Ec.has(e.type);
      Q(e.id, e.guild_id, e.parent_id, t)
    }
}

function ee(e) {
  let {
    guild: t
  } = e;
  if (null == k[t.id]) {
    let e = F(t.id);
    k[t.id] = e, V(t.id, e), Z()
  }
}

function et(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  if (s === k[t] && (s = null), n) returnfalse;
  delete U[t], delete k[t], Z()
}

function en(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    var n, i, a;
    if (t.sessionId === r) {
      clearInterval(c);
      let e = null == (n = O.Z.getChannel(s)) ? true : n.getGuildId();
      t.guildId !== e && null == t.channelId || (s = t.channelId), l = Date.now(), null != s && (c = setInterval(() => {
        l = Date.now(), Z()
      }, M)), Z()
    } else {
      if (t.userId !== y.default.getId()) return e;
      clearInterval(c), c = true, l = 0;
      let n = null == (i = O.Z.getChannel(s)) ? true : i.getGuildId(),
        r = null == (a = O.Z.getChannel(t.channelId)) ? true : a.getGuildId();
      (null != n && r === n || s === t.channelId) && (s = null), Z()
    }
    returntrue
  }, false)
}

function er(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  (null == o || t !== o.channelId) && (o = {
    channelId: t,
    guildId: n
  }, Z())
}

function ei() {
  k = {}, a = null, i = true, U = {}, o = {}, s = null, Chunk433517.K.remove(x)
}

function ea(e) {
  let {
    channel: t
  } = e;
  switch (t.type) {
    case C.d4z.GUILD_ANNOUNCEMENT:
    case C.d4z.GUILD_TEXT:
      let n = t.guild_id;
      if (null != n && null == U[n] && (U[n] = t.id), null != n && null == k[n]) return k[n] = F(n), true
  }
  returnfalse
}
class eo extends(u = Chunk442837.ZP.Store) {
  initialize() {
    if (!__OVERLAY__) {
      var e, t;
      let n = null != (e = Chunk433517.K.get(x)) ? module : {
        selectedChannelId: a,
        selectedVoiceChannelId: s,
        lastChannelFollowingDestination: o,
        lastConnectedTime: l,
        selectedChannelIds: k,
        mostRecentSelectedTextChannelIds: U
      };
      null != require.knownThreadIds && (G = new Set(require.knownThreadIds)), s = require.selectedVoiceChannelId, o = require.lastChannelFollowingDestination, l = require.lastConnectedTime, U = null != (t = require.mostRecentSelectedTextChannelIds) ? exports : {}, null != require.selectedChannelIds && (k = D(P({}, require.selectedChannelIds), {
        null: null
      }))
    }
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk984933.ZP, Chunk430824.Z, Chunk131951.Z, Chunk496675.Z, Chunk914010.Z)
  }
  getChannelId(e) {
    var t, n;
    let r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      i = B(e === C.ME ? null : null != (t = null != e ? e : A.Z.getGuildId()) ? t : null);
    return r ? null != (n = k[i]) ? n : F(i) : k[i]
  }
  getVoiceChannelId() {
    return Chunk131951.Z.isSupported() ? s : null
  }
  getMostRecentSelectedTextChannelId(e) {
    var t;
    return null == e ? null : null != (t = U[e]) ? t : null
  }
  getCurrentlySelectedChannelId(e) {
    return null != e ? k[e] : a
  }
  getLastSelectedChannelId(e) {
    return null != e ? j[e] : i
  }
  getLastSelectedChannels(e) {
    return j[e]
  }
  getLastChannelFollowingDestination() {
    return o
  }
}
R(eo, "displayName", "SelectedChannelStore");
let es = new eo(Chunk570140.Z, {
  CONNECTION_OPEN: W,
  OVERLAY_INITIALIZE: K,
  CONNECTION_CLOSED: z,
  CHANNEL_SELECT: q,
  CHANNEL_CREATE: ea,
  CHANNEL_DELETE: J,
  CHANNEL_UPDATES: $,
  THREAD_DELETE: J,
  GUILD_CREATE: ee,
  GUILD_DELETE: et,
  VOICE_CHANNEL_SELECT: X,
  VOICE_STATE_UPDATES: en,
  CHANNEL_FOLLOWER_CREATED: er,
  LOGOUT: ei
})