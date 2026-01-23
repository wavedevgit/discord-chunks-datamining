/** Chunk was on web.js **/
/** chunk id: 470710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {},
  E = {};

function y() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.A.getChannelId(),
    n = c.A.getChannel(t);
  if (null != n && null == n.getGuildId() && null != t && (null == g[t] || e)) {
    var r;
    return g[t] = null != (r = g[t]) ? r : {
      channelId: t,
      ringing: []
    }, l.h.dispatch({
      type: "CALL_CONNECT",
      channelId: t
    }), true
  }
  returnfalse
}

function b() {
  return y(true)
}

function O(e) {
  let {
    callStoreInternalState: t
  } = e;
  g = _({}, t.calls), E = _({}, t.enqueuedRings)
}

function v() {
  g = {}, E = {}
}

function A() {
  return y(true)
}

function I(e) {
  let {
    channelId: t
  } = e;
  return y(false, t)
}

function S(e) {
  let {
    channel: t
  } = e;
  if (null != E[t.id] && delete E[t.id], null == g[t.id]) returnfalse;
  delete g[t.id]
}

function T(e) {
  let {
    channelId: t,
    messageId: n,
    region: r,
    ringing: i
  } = e;
  if (g[t] = {
      channelId: t,
      messageId: n,
      region: r,
      ringing: i,
      unavailable: false,
      regionUpdated: false
    }, null != E[t]) {
    let e = E[t];
    delete E[t], 1 !== e.indexOf("all") && (e = null), o.Bo.post({
      url: f.Rsh.CALL_RING(t),
      body: {
        recipients: e
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}

function C(e) {
  var t;
  let {
    channelId: n,
    recipients: r
  } = e;
  E[n] = a().union(null != (t = E[n]) ? t : [], null != r ? r : ["all"])
}

function N(e) {
  let {
    channelId: t,
    messageId: n,
    region: r,
    ringing: i
  } = e, a = g[t], s = null != a && (a.regionUpdated || a.region !== r);
  g[t] = m(_({}, g[t]), {
    messageId: n,
    region: r,
    ringing: i,
    regionUpdated: s
  })
}

function R(e) {
  let {
    channelId: t,
    unavailable: n
  } = e, r = g[t];
  true === n && null != r ? g[t] = m(_({}, r), {
    unavailable: n
  }) : g[t] = {
    channelId: t,
    ringing: [],
    messageId: null,
    region: null,
    regionUpdated: false,
    unavailable: n
  }, null != E[t] && delete E[t]
}

function w(e) {
  let {
    channelId: t
  } = e;
  null == t && (E = {})
}
class P extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, u.A, d.A)
  }
  getCall(e) {
    return g[e]
  }
  getCalls() {
    return Object.values(g)
  }
  getMessageId(e) {
    let t = this.getCall(e);
    return null != t ? t.messageId : null
  }
  isCallActive(e, t) {
    let n = g[e];
    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
  }
  isCallUnavailable(e) {
    let t = g[e];
    return null != t && t.unavailable
  }
  getInternalState() {
    return {
      calls: g,
      enqueuedRings: E
    }
  }
}
p(P, "displayName", "CallStore");
let D = new P(Chunk73153.h, {
  CONNECTION_OPEN: b,
  CONNECTION_CLOSED: v,
  OVERLAY_INITIALIZE: O,
  CONNECTION_RESUMED: A,
  CHANNEL_SELECT: I,
  CHANNEL_DELETE: S,
  CALL_CREATE: T,
  CALL_UPDATE: N,
  CALL_DELETE: R,
  CALL_ENQUEUE_RING: C,
  VOICE_CHANNEL_SELECT: w
})