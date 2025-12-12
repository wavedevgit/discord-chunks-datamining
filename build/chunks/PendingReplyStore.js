/** Chunk was on web.js **/
/** chunk id: 807092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk709054 = require("./709054.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {},
  _ = {},
  m = {};

function h(e) {
  let {
    channel: t,
    message: n,
    shouldMention: r = true,
    showMentionToggle: i = true,
    source: o
  } = e;
  p[t.id] = {
    channel: t,
    message: n,
    shouldMention: r,
    showMentionToggle: i
  }, m[t.id] = o
}

function g(e) {
  let {
    channel: t,
    messageId: n,
    shouldMention: r = true,
    showMentionToggle: i = true
  } = e;
  _[t.id] = {
    channelId: t.id,
    messageId: n,
    shouldMention: r,
    showMentionToggle: i
  }
}

function E(e) {
  let {
    channelId: t,
    shouldMention: n
  } = e;
  t in p && (p[t] = f(u({}, p[t]), {
    shouldMention: n
  })), t in _ && (_[t] = f(u({}, _[t]), {
    shouldMention: n
  }))
}

function b(e) {
  let {
    channelId: t
  } = e;
  delete p[t], delete _[t]
}

function y(e) {
  var t, n, r;
  let {
    id: i,
    channelId: o
  } = e;
  if ((null == (n = p[o]) || null == (t = n.message) ? true : t.id) === i) delete p[o], delete m[o];
  else {
    if ((null == (r = _[o]) ? true : r.messageId) !== i) returnfalse;
    delete _[o], delete m[o]
  }
}

function O(e) {
  if (null == e) returnfalse;
  let t = _[e];
  if (null == t) returnfalse;
  let n = s.Z.getMessage(e, t.messageId),
    r = a.Z.getChannel(t.channelId);
  if (null == n || null == r) returnfalse;
  p[e] = {
    channel: r,
    message: n,
    shouldMention: t.shouldMention,
    showMentionToggle: t.showMentionToggle
  }, delete _[e]
}

function v(e) {
  let {
    channelId: t
  } = e;
  O(t)
}

function S(e) {
  let {
    channelId: t
  } = e;
  O(t)
}

function I() {
  Chunk709054.default.keys(_).forEach(e => {
    null == a.Z.getChannel(e) && delete _[e]
  })
}

function T() {
  p = {}, _ = {}, m = {}
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  getState() {
    let e = {};
    for (let [t, n] of Chunk709054.default.entries(p)) module[exports] = {
      channelId: exports,
      messageId: require.message.id,
      shouldMention: require.shouldMention,
      showMentionToggle: require.showMentionToggle
    };
    return u({}, _, module)
  }
  initialize(e) {
    this.waitFor(s.Z, a.Z), _ = null != e ? e : {}
  }
  getPendingReply(e) {
    return p[e]
  }
  getPendingReplyActionSource(e) {
    return m[e]
  }
}
c(C, "displayName", "PendingReplyStore"), c(C, "persistKey", "PendingReplyStore"), c(C, "migrations", [e => null != e ? e : {}]);
let A = new C(Chunk570140.Z, {
  CREATE_PENDING_REPLY: h,
  CREATE_SHALLOW_PENDING_REPLY: g,
  SET_PENDING_REPLY_SHOULD_MENTION: E,
  DELETE_PENDING_REPLY: b,
  CONNECTION_OPEN: I,
  LOGOUT: T,
  MESSAGE_DELETE: y,
  CHANNEL_SELECT: v,
  LOAD_MESSAGES_SUCCESS: S
})