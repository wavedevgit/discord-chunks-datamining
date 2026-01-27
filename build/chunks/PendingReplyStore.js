/** Chunk was on web.js **/
/** chunk id: 853145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk661191 = require("./661191.js");

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
  h = {};

function m(e) {
  let {
    channel: t,
    message: n,
    shouldMention: r = true,
    showMentionToggle: i = true,
    source: a
  } = e;
  p[t.id] = {
    channel: t,
    message: n,
    shouldMention: r,
    showMentionToggle: i
  }, h[t.id] = a
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

function y(e) {
  let {
    channelId: t
  } = e;
  delete p[t], delete _[t]
}

function b(e) {
  var t, n, r;
  let {
    id: i,
    channelId: a
  } = e;
  if ((null == (n = p[a]) || null == (t = n.message) ? true : t.id) === i) delete p[a], delete h[a];
  else {
    if ((null == (r = _[a]) ? true : r.messageId) !== i) returnfalse;
    delete _[a], delete h[a]
  }
}

function O(e) {
  if (null == e) returnfalse;
  let t = _[e];
  if (null == t) returnfalse;
  let n = s.A.getMessage(e, t.messageId),
    r = o.A.getChannel(t.channelId);
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

function A(e) {
  let {
    channelId: t
  } = e;
  O(t)
}

function I() {
  l.default.keys(_).forEach(e => {
    null == o.A.getChannel(e) && delete _[e]
  })
}

function S() {
  p = {}, _ = {}, h = {}
}
class T extends(r = Chunk311907.Ay.PersistedStore) {
  getState() {
    let e = {};
    for (let [t, n] of l.default.entries(p)) e[t] = {
      channelId: t,
      messageId: n.message.id,
      shouldMention: n.shouldMention,
      showMentionToggle: n.showMentionToggle
    };
    return u({}, _, e)
  }
  initialize(e) {
    this.waitFor(s.A, o.A), _ = null != e ? e : {}
  }
  getPendingReply(e) {
    return p[e]
  }
  getPendingReplyActionSource(e) {
    return h[e]
  }
}
c(T, "displayName", "PendingReplyStore"), c(T, "persistKey", "PendingReplyStore"), c(T, "migrations", [e => null != e ? e : {}]);
let C = new T(Chunk73153.h, {
  CREATE_PENDING_REPLY: m,
  CREATE_SHALLOW_PENDING_REPLY: g,
  SET_PENDING_REPLY_SHOULD_MENTION: E,
  DELETE_PENDING_REPLY: y,
  CONNECTION_OPEN: I,
  LOGOUT: S,
  MESSAGE_DELETE: b,
  CHANNEL_SELECT: v,
  LOAD_MESSAGES_SUCCESS: A
})