/** Chunk was on web.js **/
/** chunk id: 49463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eb,
  N: () => em
}), require("./896048.js"), require("./938796.js"), require("./65821.js"), require("./228524.js"), require("./747238.js"), require("./812715.js"), require("./457529.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk181370 = require("./181370.js"),
  o = require.n(Chunk181370),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380610 = require("./380610.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk536802 = require("./536802.js"),
  Chunk954571 = require("./954571.js"),
  Chunk98801 = require("./98801.js"),
  Chunk688151 = require("./688151.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = "scientist:triggered",
  v = "exerimentOverrides",
  A = "userExperimentOverrides",
  I = "guildExperimentOverrides",
  S = 1,
  T = new Chunk626584.A("ExperimentStore"),
  C = false,
  N = {},
  w = new Map,
  R = {},
  P = {
    rawUserExperiments: [],
    rawGuildExperiments: []
  },
  D = {},
  L = {},
  x = {},
  M = {},
  j = {},
  k = null,
  U = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, Chunk380610.kK)(),
  G = {};

function F(e) {
  let t = G[e];
  if (true !== t) return t;
  {
    let t = o().v3(e);
    return G[e] = t, t
  }
}
let V = Chunk688151.NM.map(e => F(e)),
  B = 6048e5;

function H(e, t) {
  return e || V.includes(t)
}

function Y(e) {
  var t;
  return ((null != (t = e.flags) ? t : 0) & m.nhx.STAFF) === m.nhx.STAFF || null != e.personal_connection_id
}

function W(e, t, n, r) {
  let i = "".concat(t.type, "|").concat(e),
    a = t.triggerDebuggingEnabled && true !== n && n.length > 0;
  if (t.type === h.Vh.USER) return a && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  if (t.type === h.Vh.GUILD) return i += "|".concat(t.guildId), a && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  throw Error()
}

function K(e) {
  if (e.type === h.Vh.USER) return F("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === h.Vh.GUILD) return F("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let z = Date.now(),
  q = false;

function Z(e, t) {
  let n = N[e];
  return !(null == n || (q ? n.time < z : Date.now() - n.time > B)) && n.hash === t
}

function Q(e, t) {
  return w.get(e) === t
}

function X(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: r,
    location_stack: i,
    context: a,
    fingerprint: o,
    excluded: s,
    exposureType: l
  } = e, c = false;
  switch (n.assignmentSource) {
    case "override":
      returnfalse;
    case "ready_payload":
      n.sessionId !== d.default.getSessionId() && (c = true);
      break;
    case "logged_out_api":
      n.fingerprint !== d.default.getFingerprint() && (c = true);
      break;
    default:
      c = true
  }
  if (n.override) returnfalse;
  let u = l === h.vf.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    f = W(t, n, r, u),
    _ = K(n);
  if (c && Q(f, _) || Z(f, _)) returnfalse;
  if (n.type === h.Vh.USER) {
    let e = {
      name: t,
      revision: n.revision,
      population: n.population,
      bucket: n.bucket,
      location: r,
      location_stack: i,
      hash_result: n.hashResult,
      excluded: s,
      exposure_type: l,
      assignment_source: n.assignmentSource,
      assignment_session_id: n.sessionId,
      assignment_loaded_from_cache: n.loadedFromCache,
      holdout_name: n.holdoutName,
      holdout_revision: n.holdoutRevision,
      holdout_bucket: n.holdoutBucket
    };
    null != a && (e.context_guild_id = a.guildId);
    let f = u ? m.HAw.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_USER_TRIGGERED;
    if (c) {
      let t = b(E({}, e), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: P.source
      });
      p.default.track(m.HAw.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
        flush: false,
        fingerprint: o
      })
    } else p.default.track(f, e, {
      flush: true,
      fingerprint: o
    })
  } else if (n.type === h.Vh.GUILD) {
    let e = u ? m.HAw.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.HAw.EXPERIMENT_GUILD_TRIGGERED,
      a = {
        name: t,
        revision: n.revision,
        bucket: n.bucket,
        guild_id: n.guildId,
        location: r,
        location_stack: i,
        hash_result: n.hashResult,
        excluded: s,
        exposure_type: l,
        assignment_source: n.assignmentSource,
        assignment_session_id: n.sessionId,
        assignment_loaded_from_cache: n.loadedFromCache,
        holdout_name: n.holdoutName,
        holdout_revision: n.holdoutRevision,
        holdout_bucket: n.holdoutBucket
      };
    if (c) {
      let e = b(E({}, a), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: P.source
      });
      p.default.track(m.HAw.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
        flush: false,
        fingerprint: o
      })
    } else p.default.track(e, a, {
      flush: true,
      fingerprint: o
    })
  }
  c ? w.set(f, _) : (N[W(t, n, r, u)] = {
    time: Date.now(),
    hash: K(n)
  }, eh(N))
}

function J(e) {
  let [t, n] = e;
  return null != _.k[t] ? _.k[t](n) : null
}

function $(e) {
  let t = {};
  if (null == e) return t;
  for (let {
      b: n,
      k: r
    }
    of e)
    for (let e of r) t[e] = n;
  return t
}

function ee(e) {
  let [t, n] = e;
  return {
    buckets: t.map(e => {
      let [t, n] = e;
      return {
        bucket: t,
        positions: n.map(e => {
          let {
            s: t,
            e: n
          } = e;
          return {
            start: t,
            end: n
          }
        })
      }
    }),
    filters: n.map(J),
    rawFilterData: n
  }
}

function et(e) {
  var t;
  !U && "CONNECTION_OPEN" === e.type && Y(e.user) && (U = true), "EXPERIMENTS_FETCH_SUCCESS" === e.type && C && "ready_payload" === P.source && p.default.track(m.HAw.EXPERIMENT_FETCH_IGNORED, {
    fingerprint: e.fingerprint,
    current_snapshot_source: P.source,
    current_snapshot_session_id: P.sessionId,
    current_snapshot_fingerprint: P.fingerprint
  }), D = {}, L = {}, x = {};
  let n = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
    {
      experiments: r,
      guildExperiments: i
    } = e,
    a = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
    o = "sessionId" in e ? e.sessionId : null != (t = d.default.getSessionId()) ? t : "",
    s = d.default.getFingerprint();
  n && en({
    rawUserExperiments: r,
    rawGuildExperiments: null != i ? i : [],
    source: a,
    sessionId: o,
    fingerprint: s
  }, false), C = true
}

function en(e) {
  let {
    rawUserExperiments: t,
    rawGuildExperiments: n,
    source: r,
    sessionId: i,
    fingerprint: a
  } = e, o = arguments.length > 1 && true !== arguments[1] && arguments[1];
  P = {
    rawUserExperiments: t,
    rawGuildExperiments: null != n ? n : [],
    source: r,
    sessionId: i,
    fingerprint: a
  }, t.forEach(e => {
    let [t, n, s, l, c, u, d, f, p, _, h] = e;
    D[t] = {
      type: "user",
      revision: n,
      population: c,
      bucket: s,
      override: 0 === l,
      hashResult: null != u ? u : false,
      aaMode: 1 === d,
      triggerDebuggingEnabled: H(1 === f, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: o,
      fingerprint: a,
      holdoutName: p,
      holdoutRevision: _,
      holdoutBucket: h
    }
  }), null != n && n.forEach(e => {
    let [t, n, s, l, c, u, d, f, p, _] = e;
    L[t] = {
      hashKey: n,
      revision: s,
      populations: l.map(ee),
      overrides: $(c),
      overridesFormatted: (null != u ? u : []).map(e => e.map(ee)),
      holdoutName: null != d ? d : null,
      holdoutControlBucket: null != f ? f : null,
      aaMode: 1 === p,
      triggerDebuggingEnabled: H(1 === _, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: o,
      fingerprint: a
    }
  })
}

function er(e, t, n) {
  let r = null;
  for (let {
      buckets: a,
      filters: o
    }
    of t) {
    var i = true;
    if (null != o) {
      for (let t of o)
        if (null != t && !t(e)) {
          i = false;
          break
        }
    }
    if (!i) continue;
    let t = a.find(e => {
      let {
        positions: t
      } = e;
      return t.some(e => {
        let {
          start: t,
          end: r
        } = e;
        return n >= t && n < r
      })
    });
    if ((r = null != t ? t.bucket : h.RE.CONTROL) === h.RE.NOT_ELIGIBLE) break;
    return r
  }
  return null
}
let ei = 1e4;

function ea(e, t) {
  var n, r;
  let i = F(t),
    a = L["".concat(i)];
  if (null == a) return null;
  let {
    revision: o,
    aaMode: s
  } = a, l = a.overrides[e], c = a.triggerDebuggingEnabled;
  if (null != l) return l === h.RE.NOT_ELIGIBLE ? null : {
    type: h.Vh.GUILD,
    guildId: e,
    revision: o,
    bucket: l,
    override: true,
    hashResult: false,
    triggerDebuggingEnabled: c
  };
  let u = F("".concat(null != (n = a.hashKey) ? n : t, ":").concat(e)) % ei,
    d = null;
  for (let t of null != (r = a.overridesFormatted) ? r : [])
    if (null !== (d = er(e, t, u))) return {
      type: h.Vh.GUILD,
      guildId: e,
      revision: a.revision,
      bucket: d,
      override: true,
      hashResult: u,
      triggerDebuggingEnabled: c,
      assignmentSource: a.assignmentSource,
      sessionId: a.sessionId,
      loadedFromCache: a.loadedFromCache
    };
  if (null == (d = er(e, a.populations, u))) return null;
  let f = null;
  return null != a.holdoutName && null != a.holdoutControlBucket && a.holdoutName !== t && (null == (f = ea(e, a.holdoutName)) ? true : f.bucket) != null && (true !== f.override && X({
    experimentId: a.holdoutName,
    descriptor: f
  }), (null == f ? true : f.bucket) === a.holdoutControlBucket) ? null : {
    type: h.Vh.GUILD,
    guildId: e,
    revision: a.revision,
    bucket: d,
    hashResult: u,
    aaMode: s,
    triggerDebuggingEnabled: c,
    assignmentSource: a.assignmentSource,
    sessionId: a.sessionId,
    loadedFromCache: a.loadedFromCache,
    holdoutName: null != f ? a.holdoutName : null,
    holdoutRevision: null == f ? true : f.revision,
    holdoutBucket: null == f ? true : f.bucket
  }
}

function eo(e) {
  let t = {};
  for (let r in e) {
    var n;
    let i = e[r];
    for (let e of (t[r] = E({}, i), t[r].populations)) e.filters = e.rawFilterData.map(J);
    for (let e of null != (n = t[r].overridesFormatted) ? n : [])
      for (let t of e) t.filters = t.rawFilterData.map(J)
  }
  return t
}

function es(e) {
  let {
    serializedExperimentStore: t,
    user: n
  } = e;
  if (!U && Y(n) && (U = true), C = t.hasLoadedExperiments, N = t.trackedExposureExperiments, D = t.loadedUserExperiments, M = t.userExperimentOverrides, j = t.guildExperimentOverrides, P = b(E({}, P), {
      source: t.assignmentSource,
      sessionId: t.assignmentSessionId,
      fingerprint: t.assignmentFingerprint
    }), L = eo(t.loadedGuildExperiments), x = {}, __OVERLAY__) {
    var r;
    k = null != (r = t.cookieOverrides) ? r : null, ef()
  }
}

function el() {
  C = true
}

function ec(e) {
  let {
    isSwitchingAccount: t
  } = e;
  s.w.remove(O), t || (s.w.remove(v), s.w.remove(A), s.w.remove(I), M = {}, j = {}), D = {}, P = b(E({}, P), {
    rawUserExperiments: []
  }), N = {}, C = false
}

function eu() {
  C = false, N = {}, L = {}, s.w.remove(O)
}

function ed() {
  let e = s.w.get(O);
  if (null == e || e.v !== S) return {};
  let t = e.e,
    n = Date.now(),
    r = false;
  for (let e in t) n - t[e].time > B && (delete t[e], r = true);
  return r && eh(t), t
}

function ef() {
  let e = false,
    t = __OVERLAY__ ? k : (0, c.DI)();
  for (let n in t) M[n] = {
    type: h.Vh.USER,
    revision: 1,
    population: 0,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: t[n]
  }, j[n] = {
    type: h.Vh.GUILD,
    revision: 1,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: t[n]
  }, e = true;
  return e
}

function ep() {
  var e, t, n;
  let r = [null != (e = s.w.get(v)) ? e : {}, null != (t = s.w.get(A)) ? t : {}, null != (n = s.w.get(I)) ? n : {}];
  M = {}, j = {};
  let a = !i().isEmpty(r[0]);
  for (let e of r)
    for (let t in e) {
      let n = e[t];
      null == n || n.type !== h.Vh.USER && n.type !== h.Vh.GUILD || null == n.bucket || true !== n.override || n.fromCookie ? (delete e[t], a = true) : n.type === h.Vh.USER ? M[t] = n : j[t] = n
    }(a = ef() || a) && e_()
}

function e_() {
  try {
    s.w.set(A, M)
  } catch (e) {
    T.error("Error saving user experiment overrides, unsaved data will be lost", e), p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    s.w.set(I, j)
  } catch (e) {
    T.error("Error saving guild experiment overrides, unsaved data will be lost", e), p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function eh(e) {
  try {
    s.w.set(O, {
      v: S,
      e: e
    })
  } catch (e) {
    T.error("Error saving tracked exposure experiments, unsaved data will be lost", e), p.default.track(m.HAw.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function em(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: r,
    description: i,
    buckets: a,
    commonTriggerPoint: o
  } = e;
  R[t] = {
    type: n,
    title: r,
    description: i,
    buckets: a,
    commonTriggerPoint: o
  }
}

function eg(e) {
  var t;
  let {
    experimentId: n,
    experimentBucket: r,
    experimentType: i,
    skipCleanup: a
  } = e, o = null != i ? i : null == (t = R[n]) ? true : t.type;
  if (null == o) returnfalse;
  if (null == r ? (M = E({}, M), delete M[n], j = E({}, j), delete j[n]) : "user" === o ? M = b(E({}, M), {
      [n]: {
        type: o,
        revision: 1,
        population: 0,
        bucket: r,
        override: true
      }
    }) : j = b(E({}, j), {
      [n]: {
        type: o,
        revision: 1,
        bucket: r,
        override: true
      }
    }), !a)
    for (let e of [M, j])
      for (let t in e) null == R[t] && delete M[t];
  e_()
}

function eE(e) {
  let {
    guild: t
  } = e;
  for (let e in x) {
    let [n] = e.split(":");
    t.id === n && delete x[e]
  }
}
class ey extends Chunk536802.A {
  initialize() {
    N = ed(), ep(), this.waitFor(d.default), this.loadCache()
  }
  loadCache() {
    let e = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
    null != e && ("loadedUserExperiments" in e ? (D = e.loadedUserExperiments, L = eo(e.loadedGuildExperiments), Object.values(D).forEach(e => e.loadedFromCache = true), Object.values(L).forEach(e => e.loadedFromCache = true)) : en(e, true))
  }
  takeSnapshot() {
    return {
      version: ey.LATEST_SNAPSHOT_VERSION,
      data: E({}, P)
    }
  }
  get hasLoadedExperiments() {
    return C
  }
  hasRegisteredExperiment(e) {
    return null != R[e]
  }
  getUserExperimentDescriptor(e) {
    if (U) {
      let t = M[e];
      if (null != t) return t
    }
    let t = F(e);
    return D["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : m.dJq,
      r = j[e];
    if (U && null != r) return r;
    let i = "".concat(n, ":").concat(e);
    if (i in x) return x[i];
    let a = ea(n, e);
    return x[i] = a, a
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : h.RE.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : h.RE.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return D
  }
  getGuildExperiments() {
    return L
  }
  getLoadedUserExperiment(e) {
    return D[F(e)]
  }
  getLoadedGuildExperiment(e) {
    return L[F(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(N).filter(e => {
      let [t] = e;
      return t.startsWith(n)
    }).map(e => {
      let [t, {
        time: r
      }] = e;
      return [t.replace(n, ""), r]
    })
  }
  getRegisteredExperiments() {
    return R
  }
  getAllExperimentOverrideDescriptors() {
    return U ? E({}, M, j) : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return U ? null != (t = M[e]) ? t : j[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(R).forEach(e => {
        t[F("".concat(e))] = e
      }), D) {
      let r = t[n];
      null != r && (e[r] = D[n].bucket)
    }
    for (let t in x) {
      let n = x[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in L)
      for (let n of (e[t] = JSON.parse(JSON.stringify(L[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: C,
      trackedExposureExperiments: N,
      loadedUserExperiments: D,
      loadedGuildExperiments: e,
      userExperimentOverrides: M,
      guildExperimentOverrides: j,
      cookieOverrides: (0, c.DI)(),
      assignmentSource: P.source,
      assignmentSessionId: P.sessionId,
      assignmentFingerprint: P.fingerprint
    }
  }
  hasExperimentTrackedExposure(e, t, n, r) {
    return Z(W(e, t, n, r), K(t))
  }
  constructor() {
    super({
      LOGOUT: ec,
      LOGIN_SUCCESS: eu,
      CONNECTION_OPEN: et,
      EXPERIMENTS_FETCH_SUCCESS: et,
      OVERLAY_INITIALIZE: es,
      EXPERIMENTS_FETCH_FAILURE: el,
      EXPERIMENT_OVERRIDE_BUCKET: eg,
      GUILD_CREATE: eE,
      GUILD_UPDATE: eE
    }, l.A.Early), g(this, "trackExposure", X)
  }
}
g(ey, "displayName", "ExperimentStore"), g(ey, "LATEST_SNAPSHOT_VERSION", 1);
let eb = new ey