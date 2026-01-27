/** Chunk was on web.js **/
/** chunk id: 349435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => N,
  _j: () => d,
  fy: () => f
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
let u = 5 * require("./927813.js").A.Millis.SECOND;
var d = function(e) {
    return e[e.STRANGER_DANGER = 1] = "STRANGER_DANGER", e[e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", e[e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", e[e.LIKELY_ATO = 4] = "LIKELY_ATO", e
  }({}),
  f = function(e) {
    return e[e.UPVOTE = 0] = "UPVOTE", e[e.DOWNVOTE = 1] = "DOWNVOTE", e
  }({});
let p = [],
  _ = {},
  h = new Set;

function m(e) {
  return 2 === e.type || 3 === e.type
}

function g(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (_[e.id] = t, t.some(e => m(e) && null != e.dismiss_timestamp && !T(e.dismiss_timestamp)) ? h.add(e.id) : h.delete(e.id)), null == t && (null != _[e.id] && delete _[e.id], h.delete(e.id))
}

function E(e) {
  g(e.channel)
}

function y(e) {
  e.channels.forEach(e => {
    g(e)
  })
}

function b(e) {
  let {
    channel: t
  } = e;
  null != _[t.id] && delete _[t.id], h.delete(t.id)
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
  h.delete(t), null != n && (_[t] = n.map(e => c(s({}, e), {
    dismiss_timestamp: true
  })))
}

function A(e) {
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
  h.add(t)
}

function S() {
  _ = {}, Object.values(a.A.getMutablePrivateChannels()).forEach(e => {
    g(e)
  })
}

function T(e) {
  return new Date(e).getTime() > Date.now() - u
}
class C extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(a.A)
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
    return h.has(e)
  }
}
let N = new C(Chunk73153.h, {
  CHANNEL_CREATE: E,
  CHANNEL_DELETE: b,
  CHANNEL_UPDATES: y,
  CONNECTION_OPEN: S,
  CONNECTION_OPEN_SUPPLEMENTAL: S,
  CHANNEL_SAFETY_WARNING_FEEDBACK: O,
  CLEAR_CHANNEL_SAFETY_WARNINGS: v,
  DISMISS_CHANNEL_SAFETY_WARNINGS: A,
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: I
})