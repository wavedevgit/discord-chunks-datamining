/** Chunk was on web.js **/
/** chunk id: 144140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk131704 = require("./131704.js"),
  Chunk23750 = require("./23750.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk709054 = require("./709054.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = new Set,
  v = {},
  S = {};

function I(e) {
  v = a().omitBy(v, t => {
    let n = t.guildId === e;
    return n && delete S[t.parentId], n
  })
}

function T(e) {
  v = a().omitBy(v, t => t.parentId === e), delete S[e]
}

function C(e, t) {
  c.AW.has(e.type) && A(P(e), t)
}

function A(e, t) {
  var n;
  let r = (null != (n = S[e.parentId]) ? n : 0) + 1;
  S[e.parentId] = r, t(e)
}

function N(e) {
  var t, n;
  null == (t = e.threads) || t.forEach(D), null == (n = e.threadMessages) || n.forEach(R)
}

function P(e) {
  if (!(e.id in v)) {
    var t;
    v[e.id] = {
      guildId: e.guild_id,
      parentId: e.parent_id,
      count: null != (t = e.messageCount) ? t : 0,
      mostRecentRawMessage: null,
      mostRecentMessage: null
    }
  }
  return v[e.id]
}

function R(e) {
  if (e.type === h.uaV.THREAD_STARTER_MESSAGE) return;
  let t = f.Z.getChannel(e.channel_id);
  null != t && C(t, t => {
    t.mostRecentRawMessage = e, t.mostRecentMessage = null
  })
}

function D(e) {
  C(e, t => {
    var n;
    null != e.messageCount && (t.count = e.messageCount);
    let r = null != (n = t.mostRecentRawMessage) ? n : t.mostRecentMessage;
    null != e.lastMessageId && (null == r ? true : r.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
  })
}

function w(e) {
  if (null != e && !(e.id in v)) {
    let t = f.Z.getChannel(e.id);
    if (null != t) return D(t), true
  }
  returnfalse
}

function x(e) {
  S = {}, O.clear(), e.guilds.forEach(N)
}

function L(e) {
  let {
    threadMessages: t
  } = e;
  for (let e in v = E({}, t)) {
    let n = t[e].mostRecentMessage;
    null != n && (t[e].mostRecentMessage = new u.ZP(y(E({}, n), {
      author: new d.Z(n.author)
    })))
  }
}

function j(e) {
  let {
    guild: t
  } = e;
  N(t)
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
  D(t)
}

function U(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(D), null == n || n.forEach(e => {
    let t = f.Z.getChannel(e.channel_id);
    null != t && e.type !== h.uaV.THREAD_STARTER_MESSAGE && C(t, t => {
      t.mostRecentRawMessage = e, t.mostRecentMessage = null
    })
  })
}

function G(e) {
  let {
    threads: t
  } = e;
  t.forEach(w)
}

function Z(e) {
  let {
    data: t
  } = e;
  t.forEach(e => {
    let {
      messages: t,
      threads: n
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        w(e.thread)
      })
    }), n.forEach(w)
  })
}

function B(e) {
  let {
    channel: t
  } = e;
  T(t.id)
}

function F(e) {
  let {
    channel: t
  } = e;
  delete v[t.id]
}

function V(e) {
  let {
    message: t,
    optimistic: n,
    isPushNotification: r,
    sendMessageOptions: i
  } = e;
  if (n || r || null != i) returnfalse;
  let a = f.Z.getChannel(t.channel_id);
  if (null == a || !c.Ec.has(a.type) || !H(a, t)) returnfalse;
  C(a, e => {
    e.count = Math.min(e.count + 1, m.M3), e.mostRecentRawMessage = t, e.mostRecentMessage = null
  })
}

function H(e, t) {
  return !(t.type === h.uaV.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === _.default.castChannelIdAsMessageId(e.id))
}

function Y(e) {
  var t;
  let {
    message: n
  } = e, r = v[n.channel_id], i = null != (t = null == r ? true : r.mostRecentRawMessage) ? t : null == r ? true : r.mostRecentMessage;
  if (null == r || null == i || i.id !== n.id) returnfalse;
  A(r, e => {
    null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.gx)(e.mostRecentRawMessage, n))
  })
}

function W(e) {
  let {
    id: t,
    channelId: n
  } = e, r = v[n];
  if (null == r) returnfalse;
  let i = _.default.castChannelIdAsMessageId(n) !== t,
    a = !O.has(t);
  A(r, e => {
    var n;
    let r = null != (n = e.mostRecentRawMessage) ? n : e.mostRecentMessage;
    null != r && r.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = i && a ? Math.max(e.count - 1, 0) : e.count, O.add(t)
  })
}

function K(e) {
  let {
    ids: t,
    channelId: n
  } = e, r = v[n];
  if (null == r) returnfalse;
  let i = t.filter(e => {
    let t = _.default.castChannelIdAsMessageId(n) !== e,
      r = !O.has(e);
    return t && r
  }).length;
  i > 0 && A(r, e => {
    var n;
    let r = null != (n = e.mostRecentRawMessage) ? n : e.mostRecentMessage;
    null != r && t.includes(r.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= i, t.forEach(e => O.add(e))
  })
}

function z(e) {
  let t = false;
  for (let n of e.messages) t = w(n.thread) || t;
  if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
  let n = f.Z.getChannel(e.channelId);
  if (null == n || !c.Ec.has(n.type)) return t;
  C(n, t => {
    if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
    else {
      var n;
      let r = null != (n = e.messages[0]) ? n : null;
      t.count = e.messages.length >= m.M3 ? m.M3 : t.count, (null == r ? true : r.type) !== h.uaV.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = r, t.mostRecentMessage = null)
    }
  })
}

function q() {
  for (let e in v) {
    let t = v[module];
    if (null != exports && null != exports.mostRecentMessage) {
      let n = Chunk375954.Z.getMessage(module, exports.mostRecentMessage.id);
      if (null == require) continue;
      exports.mostRecentMessage = require
    }
  }
}
class Q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk375954.Z)
  }
  getCount(e) {
    var t, n;
    return null != (n = null == (t = v[e]) ? true : t.count) ? n : null
  }
  getMostRecentMessage(e) {
    var t, n;
    let r = v[e];
    return null == r ? null : (null == r.mostRecentMessage && null != r.mostRecentRawMessage && (r.mostRecentMessage = null != (t = p.Z.getMessage(e, r.mostRecentRawMessage.id)) ? t : (0, l.e5)(r.mostRecentRawMessage), r.mostRecentRawMessage = null), null != (n = r.mostRecentMessage) ? n : null)
  }
  getChannelThreadsVersion(e) {
    return S[e]
  }
  getInitialOverlayState() {
    return v
  }
}
g(Q, "displayName", "ThreadMessageStore");
let X = new Q(Chunk570140.Z, {
  CONNECTION_OPEN: x,
  OVERLAY_INITIALIZE: L,
  GUILD_CREATE: j,
  GUILD_DELETE: M,
  THREAD_CREATE: k,
  THREAD_UPDATE: k,
  THREAD_LIST_SYNC: U,
  LOAD_THREADS_SUCCESS: G,
  LOAD_ARCHIVED_THREADS_SUCCESS: G,
  RELATIONSHIP_ADD: q,
  RELATIONSHIP_UPDATE: q,
  RELATIONSHIP_REMOVE: q,
  SEARCH_MESSAGES_SUCCESS: Z,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Z,
  THREAD_DELETE: F,
  CHANNEL_DELETE: B,
  MESSAGE_CREATE: V,
  MESSAGE_UPDATE: Y,
  MESSAGE_DELETE: W,
  MESSAGE_DELETE_BULK: K,
  LOAD_MESSAGES_SUCCESS: z
})