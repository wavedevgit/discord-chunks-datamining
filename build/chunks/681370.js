/** Chunk was on web.js **/
/** chunk id: 681370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk789999 = require("./789999.js"),
  Chunk69114 = require("./69114.js"),
  Chunk322683 = require("./322683.js"),
  Chunk544180 = require("./544180.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

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
let p = .1;

function _(e) {
  if (Math.random() > p) return;
  let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    n = (0, a.O)();
  s.default.track(l.HAw.EARNED_DECISION_ROUNDTRIP, f(u(f(u({}, (0, i.A)()), {
    endpoint: e.endpoint,
    was_successful: e.wasSuccessful,
    api_latency_ms: t,
    mobile_network_type: o.A.getType()
  }), null != n && {
    mobile_signal_strength_level: n
  }), {
    caller_source: e.callerSource,
    request_id: e.requestId,
    fetched_at: e.fetchedAt,
    is_foregrounded: (0, r.R)()
  }))
}
class h {
  recordEarnedRequestAttempt(e, t) {
    let n = {
      initialSendTimestamp: Date.now(),
      endpoint: "/quests/earned-decision",
      apiResponseTimestamp: null,
      wasSuccessful: false,
      callerSource: t,
      requestId: null,
      fetchedAt: null
    };
    this.pendingRequests.set(e, n), setTimeout(() => {
      let t = this.pendingRequests.get(e);
      null != t && (_(t), this.pendingRequests.delete(e))
    }, 3e4)
  }
  recordEarnedRequestApiResponse(e, t) {
    let {
      wasSuccessful: n,
      requestId: r = null,
      fetchedAt: i = null
    } = t, a = this.pendingRequests.get(e);
    null != a && (_(f(u({}, a), {
      apiResponseTimestamp: Date.now(),
      wasSuccessful: n,
      requestId: r,
      fetchedAt: i
    })), this.pendingRequests.delete(e))
  }
  constructor() {
    c(this, "pendingRequests", new Map)
  }
}
let m = new h