/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => w
});
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(544891),
  l = n(570140),
  c = n(592125),
  u = n(944486),
  d = n(914010),
  f = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {},
  E = {};

function v() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z.getChannelId(),
    n = c.Z.getChannel(t);
  if (null != n && null == n.getGuildId() && null != t && (null == m[t] || e)) {
    var r;
    return m[t] = null !== (r = m[t]) && void 0 !== r ? r : {
      channelId: t,
      ringing: []
    }, l.Z.dispatch({
      type: "CALL_CONNECT",
      channelId: t
    }), !0
  }
  return !1
}

function b() {
  return v(!0)
}

function y(e) {
  let {
    callStoreInternalState: t
  } = e;
  m = p({}, t.calls), E = p({}, t.enqueuedRings)
}

function O() {
  m = {}, E = {}
}

function S() {
  return v(!0)
}

function I(e) {
  let {
    channelId: t
  } = e;
  return v(!1, t)
}

function T(e) {
  let {
    channel: t
  } = e;
  if (null != E[t.id] && delete E[t.id], null == m[t.id]) return !1;
  delete m[t.id]
}

function N(e) {
  let {
    channelId: t,
    messageId: n,
    region: r,
    ringing: i
  } = e;
  if (m[t] = {
      channelId: t,
      messageId: n,
      region: r,
      ringing: i,
      unavailable: !1,
      regionUpdated: !1
    }, null != E[t]) {
    let e = E[t];
    delete E[t], 1 !== e.indexOf("all") && (e = null), s.tn.post({
      url: f.ANM.CALL_RING(t),
      body: {
        recipients: e
      },
      oldFormErrors: !0,
      rejectWithError: !0
    })
  }
}

function A(e) {
  var t;
  let {
    channelId: n,
    recipients: r
  } = e;
  E[n] = o().union(null !== (t = E[n]) && void 0 !== t ? t : [], null != r ? r : ["all"])
}

function C(e) {
  let {
    channelId: t,
    messageId: n,
    region: r,
    ringing: i
  } = e, o = m[t], a = null != o && (o.regionUpdated || o.region !== r);
  m[t] = g(p({}, m[t]), {
    messageId: n,
    region: r,
    ringing: i,
    regionUpdated: a
  })
}

function R(e) {
  let {
    channelId: t,
    unavailable: n
  } = e, r = m[t];
  !0 === n && null != r ? m[t] = g(p({}, r), {
    unavailable: n
  }) : m[t] = {
    channelId: t,
    ringing: [],
    messageId: null,
    region: null,
    regionUpdated: !1,
    unavailable: n
  }, null != E[t] && delete E[t]
}

function P(e) {
  let {
    channelId: t
  } = e;
  null == t && (E = {})
}
class D extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, u.Z)
  }
  getCall(e) {
    return m[e]
  }
  getCalls() {
    return Object.values(m)
  }
  getMessageId(e) {
    let t = this.getCall(e);
    return null != t ? t.messageId : null
  }
  isCallActive(e, t) {
    let n = m[e];
    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
  }
  isCallUnavailable(e) {
    let t = m[e];
    return null != t && t.unavailable
  }
  getInternalState() {
    return {
      calls: m,
      enqueuedRings: E
    }
  }
}
_(D, "displayName", "CallStore");
let w = new D(l.Z, {
  CONNECTION_OPEN: b,
  CONNECTION_CLOSED: O,
  OVERLAY_INITIALIZE: y,
  CONNECTION_RESUMED: S,
  CHANNEL_SELECT: I,
  CHANNEL_DELETE: T,
  CALL_CREATE: N,
  CALL_UPDATE: C,
  CALL_DELETE: R,
  CALL_ENQUEUE_RING: A,
  VOICE_CHANNEL_SELECT: P
})