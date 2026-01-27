/** Chunk was on web.js **/
/** chunk id: 309010, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c;
require.d(exports, {
  A: () => es,
  c: () => Y
}), require("./896048.js");
var u, Chunk735438 = require("./735438.js"),
  f = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk976860 = require("./976860.js"),
  Chunk95701 = require("./95701.js"),
  Chunk403362 = require("./403362.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = "SelectedChannelStore",
  x = 3e5,
  M = 6e4,
  j = {},
  k = {},
  U = {},
  G = new Set;

function F(e) {
  return String(e)
}

function V() {
  __OVERLAY__ || h.w.set(L, {
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    lastChannelFollowingDestination: o,
    lastConnectedTime: l,
    selectedChannelIds: j,
    mostRecentSelectedTextChannelIds: U,
    knownThreadIds: f()(j).values().concat(f().values(U)).filter(y.Vq).uniq().filter(e => {
      let t = O.A.getBasicChannel(e);
      return G.has(e) || null != t && E.Le.has(t.type)
    }).value()
  })
}

function B(e) {
  if (null != e) {
    let t = v.Ay.getDefaultChannel(e);
    if (null != t) return t.id
  }
}

function H(e, t) {
  if (null == e || null == t || U[e] === t) returnfalse;
  let n = O.A.getChannel(t),
    r = null != n && (0, E.ke)(n.type),
    i = (null == n ? true : n.getGuildId()) === e;
  return !!r && !!i && (U[e] = t, true)
}

function Y(e) {
  let t = O.A.getMutableBasicGuildChannelsForGuild(e),
    n = f().find(t, e => e.type === C.rbe.GUILD_VOICE);
  return null == n ? true : n.id
}

function W() {
  let e = false,
    t = A.A.getGuildsArray();
  return f().each(j, (t, n) => {
    null != t && (O.A.hasChannel(t) || t === a || G.has(t) || (0, N.mP)(t)) || (delete j[n], delete k[n], e = true)
  }), f().each(U, (t, n) => {
    null != t && (O.A.hasChannel(t) || G.has(t)) || (delete U[n], e = true)
  }), t.forEach(e => {
    let t = j[e.id];
    null == U[e.id] && H(e.id, t)
  }), null != l && Date.now() - l >= x && (s = null, e = true), e
}

function K(e) {
  if (r = e.sessionId, null != s) {
    let e = O.A.getChannel(s);
    null != e && S.A.can(p.kg(C.xBc.VIEW_CHANNEL, C.xBc.CONNECT), e) || (s = null)
  }
  W() && V()
}

function z(e) {
  r = e.sessionId, s = e.selectedVoiceChannelId, j = {}, k = {}, a = e.selectedChannelId, j[e.selectedGuildId] = e.selectedChannelId, H(e.selectedGuildId, a), W()
}

function q() {
  r = null
}

function Z(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (true === t) returnfalse;
  null == n && (n = B(t)), null != a && n !== a && (i = a), a = n, H(t, n), j[F(t)] !== n && (k[F(t)] = j[F(t)], j[F(t)] = a), V()
}

function Q(e) {
  let {
    channelId: t
  } = e;
  if (null == t) {
    let e = O.A.getChannel(s),
      t = null == e ? true : e.guild_id;
    null != t && t !== T.A.getGuildId() && j[t] === s && (j[t] = B(t))
  }
  s = t, V()
}

function X(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (G.delete(e), null == t) {
    let n = T.A.getGuildId();
    j[F(n)] === e && (t = n)
  }
  let i = null != A.A.getGuild(t) ? t : null,
    a = false;
  s === e && (s = null, a = true), j[F(i)] === e && (j[F(i)] = r && null != n ? n : B(F(i)), T.A.getGuildId() === i && (0, g.bG)(C.BVt.CHANNEL(t, j[F(i)])), a = true), null != i && U[i] === e && (delete U[i], a = true), a && V()
}

function J(e) {
  let {
    type: t,
    channel: n
  } = e;
  X(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t)
}

function $(e) {
  let {
    channels: t
  } = e;
  for (let e of t)
    if (e.isScheduledForDeletion()) {
      let t = E.Le.has(e.type);
      X(e.id, e.guild_id, e.parent_id, t)
    }
}

function ee(e) {
  let {
    guild: t
  } = e;
  if (null == j[t.id]) {
    let e = B(t.id);
    j[t.id] = e, H(t.id, e), V()
  }
}

function et(e) {
  let {
    guild: {
      id: t,
      unavailable: n
    }
  } = e;
  if (s === j[t] && (s = null), n) returnfalse;
  delete U[t], delete j[t], V()
}

function en(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    var n, i, a;
    if (t.sessionId === r) {
      clearInterval(c);
      let e = null == (n = O.A.getChannel(s)) ? true : n.getGuildId();
      t.guildId !== e && null == t.channelId || (s = t.channelId), l = Date.now(), null != s && (c = setInterval(() => {
        l = Date.now(), V()
      }, M)), V()
    } else {
      if (t.userId !== b.default.getId()) return e;
      clearInterval(c), c = true, l = 0;
      let n = null == (i = O.A.getChannel(s)) ? true : i.getGuildId(),
        r = null == (a = O.A.getChannel(t.channelId)) ? true : a.getGuildId();
      (null != n && r === n || s === t.channelId) && (s = null), V()
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
  }, V())
}

function ei() {
  j = {}, a = null, i = true, U = {}, o = {}, s = null, h.w.remove(L)
}

function ea(e) {
  let {
    channel: t
  } = e;
  switch (t.type) {
    case C.rbe.GUILD_ANNOUNCEMENT:
    case C.rbe.GUILD_TEXT:
      let n = t.guild_id;
      if (null != n && null == U[n] && (U[n] = t.id), null != n && null == j[n]) return j[n] = B(n), true
  }
  returnfalse
}
class eo extends(u = Chunk311907.Ay.Store) {
  initialize() {
    if (!__OVERLAY__) {
      var e, t;
      let n = null != (e = h.w.get(L)) ? e : {
        selectedChannelId: a,
        selectedVoiceChannelId: s,
        lastChannelFollowingDestination: o,
        lastConnectedTime: l,
        selectedChannelIds: j,
        mostRecentSelectedTextChannelIds: U
      };
      null != n.knownThreadIds && (G = new Set(n.knownThreadIds)), s = n.selectedVoiceChannelId, o = n.lastChannelFollowingDestination, l = n.lastConnectedTime, U = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}, null != n.selectedChannelIds && (j = D(R({}, n.selectedChannelIds), {
        null: null
      }))
    }
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(b.default, O.A, v.Ay, A.A, I.A, S.A, T.A)
  }
  getChannelId(e) {
    var t, n;
    let r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      i = F(e === C.ME ? null : null != (t = null != e ? e : T.A.getGuildId()) ? t : null);
    return r ? null != (n = j[i]) ? n : B(i) : j[i]
  }
  getVoiceChannelId() {
    return I.A.isSupported() ? s : null
  }
  getMostRecentSelectedTextChannelId(e) {
    var t;
    return null == e ? null : null != (t = U[e]) ? t : null
  }
  getCurrentlySelectedChannelId(e) {
    return null != e ? j[e] : a
  }
  getLastSelectedChannelId(e) {
    return null != e ? k[e] : i
  }
  getLastSelectedChannels(e) {
    return k[e]
  }
  getLastChannelFollowingDestination() {
    return o
  }
}
w(eo, "displayName", "SelectedChannelStore");
let es = new eo(Chunk73153.h, {
  CONNECTION_OPEN: K,
  OVERLAY_INITIALIZE: z,
  CONNECTION_CLOSED: q,
  CHANNEL_SELECT: Z,
  CHANNEL_CREATE: ea,
  CHANNEL_DELETE: J,
  CHANNEL_UPDATES: $,
  THREAD_DELETE: J,
  GUILD_CREATE: ee,
  GUILD_DELETE: et,
  VOICE_CHANNEL_SELECT: Q,
  VOICE_STATE_UPDATES: en,
  CHANNEL_FOLLOWER_CREATED: er,
  LOGOUT: ei
})