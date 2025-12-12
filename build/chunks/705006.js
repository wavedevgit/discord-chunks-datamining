/** Chunk was on web.js **/
/** chunk id: 705006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk127438 = require("./127438.js"),
  Chunk186102 = require("./186102.js"),
  Chunk873741 = require("./873741.js"),
  Chunk866960 = require("./866960.js"),
  Chunk626135 = require("./626135.js"),
  Chunk616022 = require("./616022.js"),
  Chunk704161 = require("./704161.js"),
  Chunk981631 = require("./981631.js");

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
let m = .1;

function h(e, t) {
  let n = e => null == e ? "null" : null == e.questId ? "no_serve" : "quest",
    r = n(e),
    i = n(t);
  return "quest" !== r || "quest" !== i ? "".concat(r, "_to_").concat(i) : (null == e ? true : e.questId) === (null == t ? true : t.questId) ? "same_quest" : "different_quest"
}

function g(e, t, n) {
  var l, c, d, p, h;
  if (Math.random() > m) return;
  let g = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    E = (0, o.d)();
  s.default.track(u.rMx.QUEST_DECISION_ROUNDTRIP, _(f(_(f({}, (0, i.Z)()), {
    endpoint: e.endpoint,
    was_successful: e.wasSuccessful,
    api_latency_ms: g,
    mobile_network_type: a.Z.getType()
  }), null != E && {
    mobile_signal_strength_level: E
  }), {
    caller_source: e.callerSource,
    ad_request_id: e.adRequestId,
    fetched_at: n,
    previous_ad_request_id: null != (p = null == (c = e.previousAdDecision) || null == (l = c.adDecisionData) ? true : l.decision_id) ? p : null,
    previous_fetched_at: null != (h = null == (d = e.previousAdDecision) ? true : d.fetchedAt) ? h : null,
    transition_case: t,
    is_foregrounded: (0, r.H)()
  }))
}
class E {
  recordQuestRequestAttempt(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
      {
        enableNewRequestBehavior: i
      } = c.Z.getConfig({
        location: "recordQuestRequestAttempt"
      }),
      o = i && null != r && null != (n = l.Z.questAdDecisionByPlacement.get(r)) ? n : null,
      a = {
        initialSendTimestamp: Date.now(),
        endpoint: e,
        apiResponseTimestamp: null,
        wasSuccessful: false,
        callerSource: t,
        adRequestId: null,
        previousAdDecision: o,
        placement: r
      };
    this.pendingRequests.set(e, a), setTimeout(() => {
      let t = this.pendingRequests.get(e);
      null != t && (g(t, "timeout", null), this.pendingRequests.delete(e))
    }, 3e4)
  }
  recordQuestRequestApiResponse(e, t) {
    let {
      wasSuccessful: n,
      adRequestId: r = null,
      currentQuestId: i = null,
      currentFetchedAt: o = null
    } = t, a = this.pendingRequests.get(e);
    if (null != a) {
      let t, s, {
        enableNewRequestBehavior: l
      } = c.Z.getConfig({
        location: "recordQuestRequestApiResponse"
      });
      if (l) {
        let e = null !== o ? {
          questId: i,
          fetchedAt: o,
          ttlMillis: 0,
          adDecisionData: null != r ? {
            decision_id: r
          } : true
        } : null;
        t = h(a.previousAdDecision, e), s = o
      } else t = "legacy", s = null;
      g(_(f({}, a), {
        apiResponseTimestamp: Date.now(),
        wasSuccessful: n,
        adRequestId: r
      }), t, s), this.pendingRequests.delete(e)
    }
  }
  constructor() {
    d(this, "pendingRequests", new Map)
  }
}
let b = new E