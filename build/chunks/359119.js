/** Chunk was on web.js **/
/** chunk id: 359119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => N,
  ny: () => f,
  pj: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = 5 * require("./70956.js").Z.Millis.SECOND;
var d = function(e) {
    return e[e.STRANGER_DANGER = 1] = "STRANGER_DANGER", e[e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", e[e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", e[e.LIKELY_ATO = 4] = "LIKELY_ATO", e
  }({}),
  f = function(e) {
    return e[e.UPVOTE = 0] = "UPVOTE", e[e.DOWNVOTE = 1] = "DOWNVOTE", e
  }({});
let p = [],
  _ = {},
  m = new Set;

function h(e) {
  return 2 === e.type || 3 === e.type
}

function g(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (_[e.id] = t, t.some(e => h(e) && null != e.dismiss_timestamp && !C(e.dismiss_timestamp)) ? m.add(e.id) : m.delete(e.id)), null == t && (null != _[e.id] && delete _[e.id], m.delete(e.id))
}

function E(e) {
  g(e.channel)
}

function b(e) {
  e.channels.forEach(e => {
    g(e)
  })
}

function y(e) {
  let {
    channel: t
  } = e;
  null != _[t.id] && delete _[t.id], m.delete(t.id)
}

function O(e) {
  let {
    channelId: t,
    warningId: n,
    feedbackType: r
  } = e, i = _[t];
  null != i && (_[t] = i.map(e => e.id === n ? c(s({}, e), {
    feedback_type: r
  }) : e))
}

function v(e) {
  let {
    channelId: t
  } = e, n = _[t];
  m.delete(t), null != n && (_[t] = n.map(e => c(s({}, e), {
    dismiss_timestamp: true
  })))
}

function S(e) {
  let {
    channelId: t,
    warningIds: n
  } = e, r = _[t];
  if (null == r) return;
  let i = new Date().toISOString();
  _[t] = r.map(e => n.includes(e.id) ? c(s({}, e), {
    dismiss_timestamp: i
  }) : e)
}

function I(e) {
  let {
    channelId: t
  } = e;
  m.add(t)
}

function T() {
  _ = {}, Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    g(e)
  })
}

function C(e) {
  return new Date(e).getTime() > Date.now() - u
}
class A extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null == (n = _[e]) ? true : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null != (t = _[e]) ? t : p
  }
  hasShownInitialTooltipForChannel(e) {
    return m.has(e)
  }
}
let N = new A(Chunk570140.Z, {
  CHANNEL_CREATE: E,
  CHANNEL_DELETE: y,
  CHANNEL_UPDATES: b,
  CONNECTION_OPEN: T,
  CONNECTION_OPEN_SUPPLEMENTAL: T,
  CHANNEL_SAFETY_WARNING_FEEDBACK: O,
  CLEAR_CHANNEL_SAFETY_WARNINGS: v,
  DISMISS_CHANNEL_SAFETY_WARNINGS: S,
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: I
})