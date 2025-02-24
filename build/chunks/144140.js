/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => Q
}), n(47120);
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140),
  l = n(786761),
  c = n(131704),
  u = n(23750),
  d = n(598077),
  f = n(592125),
  p = n(375954),
  _ = n(709054),
  h = n(124368),
  m = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = new Set,
  O = {},
  S = {};

function I(e) {
  O = o().omitBy(O, t => {
    let n = t.guildId === e;
    return n && delete S[t.parentId], n
  })
}

function T(e) {
  O = o().omitBy(O, t => t.parentId === e), delete S[e]
}

function N(e, t) {
  c.AW.has(e.type) && A(R(e), t)
}

function A(e, t) {
  var n;
  let r = (null !== (n = S[e.parentId]) && void 0 !== n ? n : 0) + 1;
  S[e.parentId] = r, t(e)
}

function C(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(P)
}

function R(e) {
  if (!(e.id in O)) {
    var t;
    O[e.id] = {
      guildId: e.guild_id,
      parentId: e.parent_id,
      count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
      mostRecentRawMessage: null,
      mostRecentMessage: null
    }
  }
  return O[e.id]
}

function P(e) {
  N(e, t => {
    var n;
    null != e.messageCount && (t.count = e.messageCount);
    let r = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
    null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
  })
}

function w(e) {
  if (null != e && !(e.id in O)) {
    let t = f.Z.getChannel(e.id);
    if (null != t) return P(t), !0
  }
  return !1
}

function D(e) {
  S = {}, y.clear(), e.guilds.forEach(C)
}

function x(e) {
  let {
    threadMessages: t
  } = e;
  for (let e in O = E({}, t)) {
    let n = t[e].mostRecentMessage;
    null != n && (t[e].mostRecentMessage = new u.ZP(b(E({}, n), {
      author: new d.Z(n.author)
    })))
  }
}

function L(e) {
  let {
    guild: t
  } = e;
  C(t)
}

function M(e) {
  let {
    guild: t
  } = e;
  I(t.id)
}

function k(e) {
  let {
    channel: t
  } = e;
  P(t)
}

function j(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(P), null == n || n.forEach(e => {
    let t = f.Z.getChannel(e.channel_id);
    null != t && e.type !== m.uaV.THREAD_STARTER_MESSAGE && N(t, t => {
      t.mostRecentRawMessage = e, t.mostRecentMessage = null
    })
  })
}

function U(e) {
  let {
    threads: t
  } = e;
  t.forEach(w)
}

function G(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t)
    for (let t of e) w(t.thread);
  n.forEach(w)
}

function B(e) {
  let {
    channel: t
  } = e;
  T(t.id)
}

function Z(e) {
  let {
    channel: t
  } = e;
  delete O[t.id]
}

function F(e) {
  let {
    message: t,
    optimistic: n,
    isPushNotification: r,
    sendMessageOptions: i
  } = e;
  if (n || r || null != i) return !1;
  let o = f.Z.getChannel(t.channel_id);
  if (null == o || !c.Ec.has(o.type) || !V(o, t)) return !1;
  N(o, e => {
    e.count = Math.min(e.count + 1, h.M3), e.mostRecentRawMessage = t, e.mostRecentMessage = null
  })
}

function V(e, t) {
  return !(t.type === m.uaV.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === _.default.castChannelIdAsMessageId(e.id))
}

function H(e) {
  var t;
  let {
    message: n
  } = e, r = O[n.channel_id], i = null !== (t = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== t ? t : null == r ? void 0 : r.mostRecentMessage;
  if (null == r || null == i || i.id !== n.id) return !1;
  A(r, e => {
    null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.gx)(e.mostRecentRawMessage, n))
  })
}

function W(e) {
  let {
    id: t,
    channelId: n
  } = e, r = O[n];
  if (null == r) return !1;
  let i = _.default.castChannelIdAsMessageId(n) !== t,
    o = !y.has(t);
  A(r, e => {
    var n;
    let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
    null != r && r.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = i && o ? Math.max(e.count - 1, 0) : e.count, y.add(t)
  })
}

function Y(e) {
  let {
    ids: t,
    channelId: n
  } = e, r = O[n];
  if (null == r) return !1;
  let i = t.filter(e => {
    let t = _.default.castChannelIdAsMessageId(n) !== e,
      r = !y.has(e);
    return t && r
  }).length;
  i > 0 && A(r, e => {
    var n;
    let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
    null != r && t.includes(r.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= i, t.forEach(e => y.add(e))
  })
}

function K(e) {
  let t = !1;
  for (let n of e.messages) t = w(n.thread) || t;
  if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
  let n = f.Z.getChannel(e.channelId);
  if (null == n || !c.Ec.has(n.type)) return t;
  N(n, t => {
    if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
    else {
      var n;
      let r = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
      t.count = e.messages.length >= h.M3 ? h.M3 : t.count, (null == r ? void 0 : r.type) !== m.uaV.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = r, t.mostRecentMessage = null)
    }
  })
}

function z() {
  for (let e in O) {
    let t = O[e];
    if (null != t && null != t.mostRecentMessage) {
      let n = p.Z.getMessage(e, t.mostRecentMessage.id);
      if (null == n) continue;
      t.mostRecentMessage = n
    }
  }
}
class q extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, p.Z)
  }
  getCount(e) {
    var t, n;
    return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
  }
  getMostRecentMessage(e) {
    var t, n;
    let r = O[e];
    return null == r ? null : (null == r.mostRecentMessage && null != r.mostRecentRawMessage && (r.mostRecentMessage = null !== (t = p.Z.getMessage(e, r.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, l.e5)(r.mostRecentRawMessage), r.mostRecentRawMessage = null), null !== (n = r.mostRecentMessage) && void 0 !== n ? n : null)
  }
  getChannelThreadsVersion(e) {
    return S[e]
  }
  getInitialOverlayState() {
    return O
  }
}
g(q, "displayName", "ThreadMessageStore");
let Q = new q(s.Z, {
  CONNECTION_OPEN: D,
  OVERLAY_INITIALIZE: x,
  GUILD_CREATE: L,
  GUILD_DELETE: M,
  THREAD_CREATE: k,
  THREAD_UPDATE: k,
  THREAD_LIST_SYNC: j,
  LOAD_THREADS_SUCCESS: U,
  LOAD_ARCHIVED_THREADS_SUCCESS: U,
  RELATIONSHIP_ADD: z,
  RELATIONSHIP_UPDATE: z,
  RELATIONSHIP_REMOVE: z,
  SEARCH_FINISH: G,
  MOD_VIEW_SEARCH_FINISH: G,
  THREAD_DELETE: Z,
  CHANNEL_DELETE: B,
  MESSAGE_CREATE: F,
  MESSAGE_UPDATE: H,
  MESSAGE_DELETE: W,
  MESSAGE_DELETE_BULK: Y,
  LOAD_MESSAGES_SUCCESS: K
})