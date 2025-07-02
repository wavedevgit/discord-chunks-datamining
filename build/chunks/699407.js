/** Chunk was on web.js **/
"use strict";
let r, i, a;
n.d(t, {
  X: () => Y,
  l: () => q
}), n(358797), n(290780), n(388685), n(539854);
var o, s = n(772848);
n(17089);
var l = n(756647),
  c = n(442837),
  u = n(544891),
  d = n(761609),
  f = n(231338);

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = "x-science-test",
  E = 1500,
  b = 1e4,
  y = 36e5,
  O = 6e4,
  v = 36e5,
  I = y,
  T = O,
  S = v,
  A = E,
  N = 0,
  C = 0,
  R = 0,
  P = 0,
  w = 0,
  D = null,
  L = 0,
  x = Number.MAX_SAFE_INTEGER,
  k = 0,
  M = 0,
  j = null,
  U = !1,
  G = null,
  B = null;

function V() {
  C = 0, R = 0, P = 0, L = 0, x = Number.MAX_SAFE_INTEGER, k = 0, M = 0, D = Date.now(), w = N
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  return e + t
}
let Z = null != (o = window.requestIdleCallback) ? o : e => setImmediate(() => e()),
  H = new d.R,
  Y = {
    handleConnectionOpen: () => {},
    handleConnectionClosed: () => {},
    handleFingerprint: () => {},
    handleTrack: () => {}
  },
  W = [],
  K = null,
  z = () => Promise.resolve({
    sessionId: void 0
  }),
  q = e => {
    var t;
    let {
      dispatcher: n,
      actionHandler: o,
      getFingerprint: d,
      getSessionId: h = z,
      TRACKING_URL: y,
      drainTimeoutOverride: O,
      waitFor: v,
      scheduleWhenIdle: q = Z,
      getLaunchSignature: X = () => null
    } = e;

    function Q(e) {
      var t;
      if (null != a) return a;
      let n = null != (t = e.fingerprint) ? t : d();
      return null != n ? (0, l.s)(n) : null
    }

    function J() {
      return 0 !== W.length && (null != a ? null != i : null != d())
    }

    function $(e) {
      let {
        shouldFlushOnNextTick: t = !1
      } = e;
      null == K && J() && (K = t ? setTimeout(ee, 0) : q(ee, {
        timeout: A
      }))
    }

    function ee() {
      if (K = null, !J()) return Promise.resolve();
      let e = W.slice();
      W = [], L = F(L);
      let t = e.length;
      x = Math.min(x, t), k = Math.max(k, t), M = F(M, t);
      let n = et(e);
      return n.then(() => {
        e.forEach(e => {
          var t;
          null == (t = e.resolve) || t.call(e)
        }), R = F(R)
      }, t => {
        W.unshift(...e), P = F(P);
        let {
          message: n
        } = t.body || t;
        console.warn("[AnalyticsTrackingStore] Track:", n)
      }), n
    }

    function et(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
        n = Date.now(),
        r = e.map(e => m(p({}, e), {
          properties: m(p({}, e.properties), {
            client_send_timestamp: n
          })
        })),
        a = {};
      return U || (B = (0, s.Z)(), a[g] = B, U = !0), u.tn.post({
        url: t,
        headers: a,
        body: {
          token: i,
          events: r
        },
        retries: 3,
        rejectWithError: !1
      }).then(e => {
        if (a[g]) {
          var t, n;
          G = null != (n = null == e || null == (t = e.headers) ? void 0 : t[g]) ? n : null
        }
        return e
      })
    }

    function en() {
      let e = {
        type: f.cN.CLIENT_TELEMETRY,
        properties: {
          client_track_timestamp: Date.now(),
          client_heartbeat_session_id: r,
          rpc_success_count: R,
          rpc_failure_count: P,
          first_seen_event_sequence_number: w,
          last_seen_event_sequence_number: N,
          telemetry_period_start_timestamp: D,
          telemetry_period_end_timestamp: Date.now(),
          event_queue_rejection_count: C,
          event_queue_batch_count: L,
          event_queue_batch_min_size: x === Number.MAX_SAFE_INTEGER ? 0 : x,
          event_queue_batch_max_size: k,
          event_queue_batch_avg_size: L > 0 ? M / L : 0,
          science_request_id: B,
          science_response: G,
          launch_signature: X()
        }
      };
      return V(), et([e], f.tx.CLIENT_TELEMETRY)
    }

    function er() {
      if (null == j) return !1;
      switch (j.type) {
        case "timeout":
          clearTimeout(j.id);
          break;
        case "interval":
          clearInterval(j.id);
          break;
        default:
          j.type
      }
      return j = null, !0
    }

    function ei() {
      if (null != j) return;
      let e = () => {
        let t = .1 * I;
        j = {
          type: "timeout",
          id: setTimeout(() => {
            en(), e()
          }, Math.max(I + (Math.floor(Math.random() * t * 2) - t), T))
        }
      };
      j = {
        type: "timeout",
        id: setTimeout(() => {
          en(), e()
        }, Math.floor(Math.random() * (S - T) + T))
      }
    }

    function ea() {
      if (!er()) return
    }
    A = null != O ? O : E, Y.handleConnectionOpen = function(e) {
      let {
        analyticsToken: t,
        user: n
      } = e;
      return null != t && (i = t), null != n.id && (a = n.id), ei(), $({
        shouldFlushOnNextTick: !1
      }), !1
    }, Y.handleConnectionClosed = function() {
      return ee(), ea(), i = null, a = null, !1
    }, Y.handleFingerprint = function() {
      return ee(), !1
    }, Y.handleTrack = function(e) {
      let {
        event: t,
        properties: n,
        flush: r,
        fingerprint: i,
        resolve: a
      } = e;
      return h().then(e => {
        let {
          sessionId: o
        } = e, s = {
          type: t,
          fingerprint: i,
          properties: p({
            client_track_timestamp: Date.now(),
            client_heartbeat_session_id: o,
            event_sequence_number: ++N
          }, n),
          resolve: a
        }, l = Q(s);
        if (null != l && (s.properties.client_uuid = H.generate(l)), W.push(s), W.length > b) {
          let e = W.length - b;
          C = F(C, e), W = W.slice(-b)
        }
        r ? $({
          shouldFlushOnNextTick: !0
        }) : $({
          shouldFlushOnNextTick: !1
        })
      }), !1
    };
    class eo extends(t = c.ZP.Store) {
      initialize() {
        null != v && this.waitFor(...v)
      }
      constructor(...e) {
        super(...e), _(this, "submitEventsImmediately", et)
      }
    }
    return _(eo, "displayName", "AnalyticsTrackingStore"), new eo(n, o)
  }