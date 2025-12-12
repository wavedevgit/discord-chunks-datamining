/** Chunk was on web.js **/
/** chunk id: 682474, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {};

function h(e) {
  var t;
  let n = s.Z.getChannel(null == e ? true : e.channel_id);
  if (null == n || !n.isForumPost()) returnfalse;
  let r = m[n.id];
  return u.default.compare(null == e ? true : e.id, null == r || null == (t = r.message) ? true : t.id) > false
}

function g(e, t) {
  let n = null == t ? null : (0, a.e5)(t);
  return m[e] = {
    loaded: true,
    message: n
  }, true
}

function E(e, t) {
  let n = y(e),
    r = O(e);
  return null != n && null != r && (m[e] = _(f({}, n), {
    message: (0, a.wi)(r, t)
  }), true)
}

function b(e, t) {
  let n = O(e);
  return (null == n ? true : n.id) === t && (delete m[e], true)
}

function y(e) {
  return m[e]
}

function O(e) {
  var t;
  return null == (t = y(e)) ? true : t.message
}

function v() {
  m = {}
}

function S(e) {
  let {
    threads: t
  } = e;
  for (let e in t) g(e, t[e].most_recent_message)
}

function I(e) {
  if (e.isPushNotification || !h(e.message)) returnfalse;
  e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id) ? g(e.message.channel_id, null) : g(e.message.channel_id, e.message)
}

function T(e) {
  if (!h(e.message) || e.message.channel_id === e.message.id) returnfalse;
  E(e.message.channel_id, e.message)
}

function C(e) {
  return b(e.channelId, e.id)
}

function A(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(e => g(e.id, null)), null == n || n.filter(c.lm).forEach(e => {
    g(e.channel_id, e)
  })
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk594174.default)
  }
  getMessageState(e) {
    return e in m || (m[e] = {
      loaded: false,
      message: null
    }), m[e]
  }
}
d(N, "displayName", "ForumPostRecentMessageStore"), new N(Chunk570140.Z, {
  CONNECTION_OPEN: v,
  MESSAGE_CREATE: I,
  MESSAGE_UPDATE: T,
  MESSAGE_DELETE: C,
  LOAD_FORUM_POSTS: S,
  LOAD_ARCHIVED_THREADS_SUCCESS: A,
  LOAD_THREADS_SUCCESS: A
})