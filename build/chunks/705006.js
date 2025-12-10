/** Chunk was on web.js **/
/** chunk id: 705006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk186102 = require("./186102.js"),
  Chunk873741 = require("./873741.js"),
  Chunk866960 = require("./866960.js"),
  Chunk626135 = require("./626135.js"),
  Chunk616022 = require("./616022.js"),
  Chunk704161 = require("./704161.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = .1;

function m(e, t) {
  let n = e => null == e ? "null" : null == e.questId ? "no_serve" : "quest",
    r = n(e),
    i = n(t);
  return "quest" !== r || "quest" !== i ? "".concat(r, "_to_").concat(i) : (null == e ? true : e.questId) === (null == t ? true : t.questId) ? "same_quest" : "different_quest"
}

function h(e, t, n) {
  var s, l, u, f, m;
  if (Math.random() > _) return;
  let h = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    g = (0, i.d)();
  o.default.track(c.rMx.QUEST_DECISION_ROUNDTRIP, p(d(p(d({}, (0, r.Z)()), {
    endpoint: e.endpoint,
    was_successful: e.wasSuccessful,
    api_latency_ms: h,
    mobile_network_type: a.Z.getType()
  }), null != g && {
    mobile_signal_strength_level: g
  }), {
    caller_source: e.callerSource,
    ad_request_id: e.adRequestId,
    fetched_at: n,
    previous_ad_request_id: null != (f = null == (l = e.previousAdDecision) || null == (s = l.adDecisionData) ? true : s.decision_id) ? f : null,
    previous_fetched_at: null != (m = null == (u = e.previousAdDecision) ? true : u.fetchedAt) ? m : null,
    transition_case: t
  }))
}
class g {
  recordQuestRequestAttempt(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
      {
        enableNewRequestBehavior: i
      } = l.Z.getConfig({
        location: "recordQuestRequestAttempt"
      }),
      a = i && null != r && null != (n = s.Z.questAdDecisionByPlacement.get(r)) ? n : null,
      o = {
        initialSendTimestamp: Date.now(),
        endpoint: e,
        apiResponseTimestamp: null,
        wasSuccessful: false,
        callerSource: t,
        adRequestId: null,
        previousAdDecision: a,
        placement: r
      };
    this.pendingRequests.set(e, o), setTimeout(() => {
      let t = this.pendingRequests.get(e);
      null != t && (h(t, "timeout", null), this.pendingRequests.delete(e))
    }, 3e4)
  }
  recordQuestRequestApiResponse(e, t) {
    let {
      wasSuccessful: n,
      adRequestId: r = null,
      currentQuestId: i = null,
      currentFetchedAt: a = null
    } = t, o = this.pendingRequests.get(e);
    if (null != o) {
      let t, s, {
        enableNewRequestBehavior: c
      } = l.Z.getConfig({
        location: "recordQuestRequestApiResponse"
      });
      if (c) {
        let e = null !== a ? {
          questId: i,
          fetchedAt: a,
          ttlMillis: 0,
          adDecisionData: null != r ? {
            decision_id: r
          } : true
        } : null;
        t = m(o.previousAdDecision, e), s = a
      } else t = "legacy", s = null;
      h(p(d({}, o), {
        apiResponseTimestamp: Date.now(),
        wasSuccessful: n,
        adRequestId: r
      }), t, s), this.pendingRequests.delete(e)
    }
  }
  constructor() {
    u(this, "pendingRequests", new Map)
  }
}
let E = new g