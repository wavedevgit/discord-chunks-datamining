/** Chunk was on web.js **/
/** chunk id: 660189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk797316 = require("./797316.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {};

function m() {
  _ = {}
}

function h(e) {
  let {
    threads: t
  } = e;
  for (let e in t) b(e, t[e].first_message)
}

function g(e) {
  let {
    threads: t,
    firstMessages: n
  } = e;
  if (null == n) returnfalse;
  for (let e of t) _[e.id] = {
    loaded: true,
    firstMessage: null
  };
  for (let e of n) b(e.channel_id, e)
}

function E(e) {
  if (e.isPushNotification || e.message.id !== c.default.castChannelIdAsMessageId(e.message.channel_id)) returnfalse;
  b(e.message.channel_id, e.message)
}

function b(e, t) {
  let n = null == t ? null : (0, o.e5)(t);
  _[e] = {
    loaded: true,
    firstMessage: n
  }
}

function y(e) {
  if (e.message.id !== e.message.channel_id) returnfalse;
  let t = _[c.default.castMessageIdAsChannelId(e.message.id)];
  if (null == t || null == t.firstMessage) returnfalse;
  _[c.default.castMessageIdAsChannelId(e.message.id)] = p(d({}, t), {
    firstMessage: (0, o.wi)(t.firstMessage, e.message)
  })
}

function O(e) {
  if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) returnfalse;
  _[e.channelId] = {
    loaded: true,
    firstMessage: null
  }
}

function v(e) {
  if (null != _[e.channel.id] || !s.Z.isSubscribedToThreads(e.channel.guild_id)) returnfalse;
  _[e.channel.id] = {
    loaded: true,
    firstMessage: null
  }
}

function S(e) {
  let {
    type: t,
    channelId: n,
    messageId: r,
    userId: i,
    emoji: a,
    optimistic: o,
    reactionType: s
  } = e, c = _[n];
  if (null == c || null == c.firstMessage || r !== c.firstMessage.id) returnfalse;
  let u = l.default.getCurrentUser(),
    f = null != u && u.id === i;
  if (o && !f) returnfalse;
  _[n] = d({}, c), "MESSAGE_REACTION_ADD" === t ? _[n].firstMessage = c.firstMessage.addReaction(a, f, e.colors, s) : _[n].firstMessage = c.firstMessage.removeReaction(a, f, s)
}

function I(e) {
  let {
    channelId: t,
    messageId: n,
    reactions: r
  } = e, i = _[t];
  if (null == i || null == i.firstMessage || n !== i.firstMessage.id) returnfalse;
  let a = l.default.getCurrentUser(),
    o = i.firstMessage.addReactionBatch(r, null == a ? true : a.id);
  _[t] = p(d({}, i), {
    firstMessage: o
  })
}

function T(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = _[t];
  if (null == r || null == r.firstMessage || n !== r.firstMessage.id) returnfalse;
  _[t] = p(d({}, r), {
    firstMessage: r.firstMessage.set("reactions", [])
  })
}

function C(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r
  } = e, i = _[t];
  if (null == i || null == i.firstMessage || n !== i.firstMessage.id) returnfalse;
  _[t] = p(d({}, i), {
    firstMessage: i.firstMessage.removeReactionsForEmoji(r)
  })
}

function A(e) {
  let {
    channelId: t,
    messages: n
  } = e, r = n[n.length - 1];
  null != r && r.id === c.default.castChannelIdAsMessageId(t) && (_[t] = {
    loaded: true,
    firstMessage: (0, o.e5)(r)
  })
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, l.default)
  }
  isLoading(e) {
    var t;
    return (null == (t = _[e]) ? true : t.loaded) !== true
  }
  getMessage(e) {
    return e in _ || (_[e] = {
      loaded: false,
      firstMessage: null
    }), _[e]
  }
}
u(N, "displayName", "ForumPostMessagesStore");
let P = new N(Chunk570140.Z, {
  CONNECTION_OPEN: m,
  MESSAGE_CREATE: E,
  MESSAGE_UPDATE: y,
  MESSAGE_DELETE: O,
  THREAD_CREATE: v,
  MESSAGE_REACTION_ADD: S,
  MESSAGE_REACTION_REMOVE: S,
  MESSAGE_REACTION_REMOVE_ALL: T,
  MESSAGE_REACTION_REMOVE_EMOJI: C,
  MESSAGE_REACTION_ADD_MANY: I,
  LOAD_FORUM_POSTS: h,
  LOAD_THREADS_SUCCESS: g,
  LOAD_ARCHIVED_THREADS_SUCCESS: g,
  LOAD_MESSAGES_SUCCESS: A
})