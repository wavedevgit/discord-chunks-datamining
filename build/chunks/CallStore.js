/** Chunk was on web.js **/
/** chunk id: 523746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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

function b() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Chunk944486.Z.getChannelId(),
    n = Chunk592125.Z.getChannel(exports);
  if (null != require && null == require.getGuildId() && null != exports && (null == g[exports] || module)) {
    var r;
    return g[exports] = null != (r = g[exports]) ? r : {
      channelId: exports,
      ringing: []
    }, Chunk570140.Z.dispatch({
      type: "CALL_CONNECT",
      channelId: exports
    }), true
  }
  returnfalse
}

function y() {
  return b(true)
}

function O(e) {
  let {
    callStoreInternalState: t
  } = e;
  g = p({}, t.calls), E = p({}, t.enqueuedRings)
}

function v() {
  g = {}, E = {}
}

function I() {
  return b(true)
}

function T(e) {
  let {
    channelId: t
  } = e;
  return b(false, t)
}

function S(e) {
  let {
    channel: t
  } = e;
  if (null != E[t.id] && delete E[t.id], null == g[t.id]) returnfalse;
  delete g[t.id]
}

function A(e) {
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
    delete E[t], 1 !== e.indexOf("all") && (e = null), s.tn.post({
      url: f.ANM.CALL_RING(t),
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
  } = e, a = g[t], o = null != a && (a.regionUpdated || a.region !== r);
  g[t] = m(p({}, g[t]), {
    messageId: n,
    region: r,
    ringing: i,
    regionUpdated: o
  })
}

function R(e) {
  let {
    channelId: t,
    unavailable: n
  } = e, r = g[t];
  true === n && null != r ? g[t] = m(p({}, r), {
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

function P(e) {
  let {
    channelId: t
  } = e;
  null == t && (E = {})
}
class D extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk944486.Z, Chunk914010.Z)
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
_(D, "displayName", "CallStore");
let w = new D(Chunk570140.Z, {
  CONNECTION_OPEN: y,
  CONNECTION_CLOSED: v,
  OVERLAY_INITIALIZE: O,
  CONNECTION_RESUMED: I,
  CHANNEL_SELECT: T,
  CHANNEL_DELETE: S,
  CALL_CREATE: A,
  CALL_UPDATE: N,
  CALL_DELETE: R,
  CALL_ENQUEUE_RING: C,
  VOICE_CHANNEL_SELECT: P
})