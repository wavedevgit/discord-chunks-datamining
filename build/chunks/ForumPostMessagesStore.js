/** Chunk was on web.js **/
/** chunk id: 969043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js"),
  Chunk82057 = require("./82057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js");

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

function h() {
  _ = {}
}

function m(e) {
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
  let n = null == t ? null : (0, s.rh)(t);
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
    firstMessage: (0, s.IU)(t.firstMessage, e.message)
  })
}

function O(e) {
  if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) returnfalse;
  _[e.channelId] = {
    loaded: true,
    firstMessage: null
  }
}

function A(e) {
  if (null != _[e.channel.id] || !o.A.isSubscribedToThreads(e.channel.guild_id)) returnfalse;
  _[e.channel.id] = {
    loaded: true,
    firstMessage: null
  }
}

function v(e) {
  let {
    type: t,
    channelId: n,
    messageId: r,
    userId: i,
    emoji: a,
    optimistic: s,
    reactionType: o
  } = e, c = _[n];
  if (null == c || null == c.firstMessage || r !== c.firstMessage.id) returnfalse;
  let u = l.default.getCurrentUser(),
    f = null != u && u.id === i;
  if (s && !f) returnfalse;
  _[n] = d({}, c), "MESSAGE_REACTION_ADD" === t ? _[n].firstMessage = c.firstMessage.addReaction(a, f, e.colors, o) : _[n].firstMessage = c.firstMessage.removeReaction(a, f, o)
}

function S(e) {
  let {
    channelId: t,
    messageId: n,
    reactions: r
  } = e, i = _[t];
  if (null == i || null == i.firstMessage || n !== i.firstMessage.id) returnfalse;
  let a = l.default.getCurrentUser(),
    s = i.firstMessage.addReactionBatch(r, null == a ? true : a.id);
  _[t] = p(d({}, i), {
    firstMessage: s
  })
}

function I(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = _[t];
  if (null == r || null == r.firstMessage || n !== r.firstMessage.id) returnfalse;
  _[t] = p(d({}, r), {
    firstMessage: r.firstMessage.set("reactions", [])
  })
}

function T(e) {
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

function C(e) {
  let {
    channelId: t,
    messages: n
  } = e, r = n[n.length - 1];
  null != r && r.id === c.default.castChannelIdAsMessageId(t) && (_[t] = {
    loaded: true,
    firstMessage: (0, s.rh)(r)
  })
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, l.default)
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
let R = new N(Chunk73153.h, {
  CONNECTION_OPEN: h,
  MESSAGE_CREATE: E,
  MESSAGE_UPDATE: y,
  MESSAGE_DELETE: O,
  THREAD_CREATE: A,
  MESSAGE_REACTION_ADD: v,
  MESSAGE_REACTION_REMOVE: v,
  MESSAGE_REACTION_REMOVE_ALL: I,
  MESSAGE_REACTION_REMOVE_EMOJI: T,
  MESSAGE_REACTION_ADD_MANY: S,
  LOAD_FORUM_POSTS: m,
  LOAD_THREADS_SUCCESS: g,
  LOAD_ARCHIVED_THREADS_SUCCESS: g,
  LOAD_MESSAGES_SUCCESS: C
})