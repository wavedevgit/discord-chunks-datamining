/** Chunk was on web.js **/
/** chunk id: 699407, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  X: () => H,
  l: () => z
}), require("./358797.js"), require("./290780.js"), require("./388685.js"), require("./539854.js");
var a, Chunk772848 = require("./772848.js");
require("./17089.js");
var Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk761609 = require("./761609.js"),
  Chunk231338 = require("./231338.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = "x-science-test",
  g = 1500,
  E = 1e4,
  b = 36e5,
  y = 6e4,
  O = 36e5,
  v = b,
  I = y,
  T = O,
  S = g,
  A = 0,
  C = 0,
  N = 0,
  R = 0,
  P = 0,
  D = null,
  w = 0,
  x = Number.MAX_SAFE_INTEGER,
  L = 0,
  M = 0,
  k = null,
  j = false,
  U = null,
  G = null;

function B() {
  C = 0, N = 0, R = 0, w = 0, x = Number.MAX_SAFE_INTEGER, L = 0, M = 0, D = Date.now(), P = A
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  return e + t
}
let F = null != (a = window.requestIdleCallback) ? a : e => setImmediate(() => e()),
  V = new Chunk761609.R,
  H = {
    handleConnectionOpen: () => {},
    handleConnectionClosed: () => {},
    handleFingerprint: () => {},
    handleTrack: () => {}
  },
  Y = [],
  W = null,
  K = () => Promise.resolve({
    sessionId: true
  }),
  z = e => {
    var t;
    let {
      dispatcher: n,
      actionHandler: a,
      getFingerprint: u,
      getSessionId: p = K,
      TRACKING_URL: b,
      drainTimeoutOverride: y,
      waitFor: O,
      scheduleWhenIdle: z = F,
      getLaunchSignature: q = () => null
    } = e;

    function X(e) {
      var t;
      if (null != i) return i;
      let n = null != (t = e.fingerprint) ? t : u();
      return null != n ? (0, s.s)(n) : null
    }

    function Q() {
      return 0 !== Y.length && (null != i ? null != r : null != u())
    }

    function J(e) {
      let {
        shouldFlushOnNextTick: t = false
      } = e;
      null == W && Q() && (W = t ? setTimeout($, 0) : z($, {
        timeout: S
      }))
    }

    function $() {
      if (W = null, !Q()) return Promise.resolve();
      let e = Y.slice();
      Y = [], w = Z(w);
      let t = e.length;
      x = Math.min(x, t), L = Math.max(L, t), M = Z(M, t);
      let n = ee(e);
      return n.then(() => {
        e.forEach(e => {
          var t;
          null == (t = e.resolve) || t.call(e)
        }), N = Z(N)
      }, t => {
        Y.unshift(...e), R = Z(R);
        let {
          message: n
        } = t.body || t;
        console.warn("[AnalyticsTrackingStore] Track:", n)
      }), n
    }

    function ee(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : b,
        n = Date.now(),
        i = e.map(e => h(_({}, e), {
          properties: h(_({}, e.properties), {
            client_send_timestamp: n
          })
        })),
        a = {};
      return j || (G = (0, o.Z)(), a[m] = G, j = true), c.tn.post({
        url: t,
        headers: a,
        body: {
          token: r,
          events: i
        },
        retries: 3,
        rejectWithError: false
      }).then(e => {
        if (a[m]) {
          var t, n;
          U = null != (n = null == e || null == (t = e.headers) ? true : t[m]) ? n : null
        }
        return e
      })
    }

    function et() {
      let e = {
        type: d.cN.CLIENT_TELEMETRY,
        properties: {
          client_track_timestamp: Date.now(),
          rpc_success_count: N,
          rpc_failure_count: R,
          first_seen_event_sequence_number: P,
          last_seen_event_sequence_number: A,
          telemetry_period_start_timestamp: D,
          telemetry_period_end_timestamp: Date.now(),
          event_queue_rejection_count: C,
          event_queue_batch_count: w,
          event_queue_batch_min_size: x === Number.MAX_SAFE_INTEGER ? 0 : x,
          event_queue_batch_max_size: L,
          event_queue_batch_avg_size: w > 0 ? M / w : 0,
          science_request_id: G,
          science_response: U,
          launch_signature: q()
        }
      };
      return B(), ee([e], d.tx.CLIENT_TELEMETRY)
    }

    function en() {
      if (null == k) returnfalse;
      switch (k.type) {
        case "timeout":
          clearTimeout(k.id);
          break;
        case "interval":
          clearInterval(k.id);
          break;
        default:
          k.type
      }
      return k = null, true
    }

    function er() {
      if (null != k) return;
      let e = () => {
        let t = .1 * v;
        k = {
          type: "timeout",
          id: setTimeout(() => {
            et(), e()
          }, Math.max(v + (Math.floor(Math.random() * t * 2) - t), I))
        }
      };
      k = {
        type: "timeout",
        id: setTimeout(() => {
          et(), e()
        }, Math.floor(Math.random() * (T - I) + I))
      }
    }

    function ei() {
      if (!en()) return
    }
    S = null != y ? y : g, H.handleConnectionOpen = function(e) {
      let {
        analyticsToken: t,
        user: n
      } = e;
      return null != t && (r = t), null != n.id && (i = n.id), er(), J({
        shouldFlushOnNextTick: false
      }), false
    }, H.handleConnectionClosed = function() {
      return $(), ei(), r = null, i = null, false
    }, H.handleFingerprint = function() {
      return $(), false
    }, H.handleTrack = function(e) {
      let {
        event: t,
        properties: n,
        flush: r,
        fingerprint: i,
        resolve: a
      } = e;
      return p().then(e => {
        let {
          sessionId: o
        } = e, s = {
          type: t,
          fingerprint: i,
          properties: _({
            client_track_timestamp: Date.now(),
            client_heartbeat_session_id: o,
            event_sequence_number: ++A
          }, n),
          resolve: a
        }, l = X(s);
        if (null != l && (s.properties.client_uuid = V.generate(l)), Y.push(s), Y.length > E) {
          let e = Y.length - E;
          C = Z(C, e), Y = Y.slice(-E)
        }
        r ? J({
          shouldFlushOnNextTick: true
        }) : J({
          shouldFlushOnNextTick: false
        })
      }), false
    };
    class ea extends(t = l.ZP.Store) {
      initialize() {
        null != O && this.waitFor(...O)
      }
      constructor(...e) {
        super(...e), f(this, "submitEventsImmediately", ee)
      }
    }
    return f(ea, "displayName", "AnalyticsTrackingStore"), new ea(n, a)
  }