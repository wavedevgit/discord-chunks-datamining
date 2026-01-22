/** Chunk was on web.js **/
/** chunk id: 246943, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js");

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
let h = {};

function m(e) {
  var t;
  let n = o.A.getChannel(null == e ? true : e.channel_id);
  if (null == n || !n.isForumPost()) returnfalse;
  let r = h[n.id];
  return u.default.compare(null == e ? true : e.id, null == r || null == (t = r.message) ? true : t.id) > false
}

function g(e, t) {
  let n = null == t ? null : (0, s.rh)(t);
  return h[e] = {
    loaded: true,
    message: n
  }, true
}

function E(e, t) {
  let n = y(e),
    r = O(e);
  return null != n && null != r && (h[e] = _(f({}, n), {
    message: (0, s.IU)(r, t)
  }), true)
}

function b(e, t) {
  let n = O(e);
  return (null == n ? true : n.id) === t && (delete h[e], true)
}

function y(e) {
  return h[e]
}

function O(e) {
  var t;
  return null == (t = y(e)) ? true : t.message
}

function A() {
  h = {}
}

function v(e) {
  let {
    threads: t
  } = e;
  for (let e in t) g(e, t[e].most_recent_message)
}

function S(e) {
  if (e.isPushNotification || !m(e.message)) returnfalse;
  e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id) ? g(e.message.channel_id, null) : g(e.message.channel_id, e.message)
}

function I(e) {
  if (!m(e.message) || e.message.channel_id === e.message.id) returnfalse;
  E(e.message.channel_id, e.message)
}

function T(e) {
  return b(e.channelId, e.id)
}

function C(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(e => g(e.id, null)), null == n || n.filter(c.Vq).forEach(e => {
    g(e.channel_id, e)
  })
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, l.default)
  }
  getMessageState(e) {
    return e in h || (h[e] = {
      loaded: false,
      message: null
    }), h[e]
  }
}
d(N, "displayName", "ForumPostRecentMessageStore"), new N(Chunk73153.h, {
  CONNECTION_OPEN: A,
  MESSAGE_CREATE: S,
  MESSAGE_UPDATE: I,
  MESSAGE_DELETE: T,
  LOAD_FORUM_POSTS: v,
  LOAD_ARCHIVED_THREADS_SUCCESS: C,
  LOAD_THREADS_SUCCESS: C
})