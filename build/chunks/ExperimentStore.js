/** Chunk was on web.js **/
/** chunk id: 353926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => em,
  Z: () => ey
}), require("./388685.js"), require("./997841.js"), require("./415506.js"), require("./953529.js"), require("./35282.js"), require("./704826.js"), require("./49124.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk108131 = require("./108131.js"),
  o = require.n(Chunk108131),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk865427 = require("./865427.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk750041 = require("./750041.js"),
  Chunk626135 = require("./626135.js"),
  Chunk360359 = require("./360359.js"),
  Chunk987338 = require("./987338.js"),
  Chunk981631 = require("./981631.js");

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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = "scientist:triggered",
  v = "exerimentOverrides",
  I = "userExperimentOverrides",
  T = "guildExperimentOverrides",
  S = 1,
  A = new Chunk710845.Z("ExperimentStore"),
  C = false,
  N = {},
  R = new Map,
  P = {},
  D = {
    rawUserExperiments: [],
    rawGuildExperiments: []
  },
  w = {},
  x = {},
  L = {},
  M = {},
  k = {},
  j = null,
  U = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, Chunk865427.fD)(),
  G = {};

function B(e) {
  let t = G[e];
  if (true !== t) return t;
  {
    let t = o().v3(e);
    return G[e] = t, t
  }
}
let Z = Chunk987338.qO.map(e => B(e)),
  F = 6048e5;

function V(e, t) {
  return e || Z.includes(t)
}

function H(e) {
  var t;
  return ((null != (t = e.flags) ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF || null != e.personal_connection_id
}

function Y(e, t, n, r) {
  let i = "".concat(t.type, "|").concat(e),
    a = t.triggerDebuggingEnabled && true !== n && n.length > 0;
  if (t.type === h.xY.USER) return a && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  if (t.type === h.xY.GUILD) return i += "|".concat(t.guildId), a && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  throw Error()
}

function W(e) {
  if (e.type === h.xY.USER) return B("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === h.xY.GUILD) return B("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let K = Date.now(),
  z = false;

function q(e, t) {
  let n = N[e];
  return !(null == n || (z ? n.time < K : Date.now() - n.time > F)) && n.hash === t
}

function X(e, t) {
  return R.get(e) === t
}

function Q(e) {
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
  let u = l === h.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    f = Y(t, n, r, u),
    p = W(n);
  if (c && X(f, p) || q(f, p)) returnfalse;
  if (n.type === h.xY.USER) {
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
    let f = u ? m.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_USER_TRIGGERED;
    if (c) {
      let t = y(E({}, e), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: D.source
      });
      _.default.track(m.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
        flush: false,
        fingerprint: o
      })
    } else _.default.track(f, e, {
      flush: true,
      fingerprint: o
    })
  } else if (n.type === h.xY.GUILD) {
    let e = u ? m.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_GUILD_TRIGGERED,
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
      let e = y(E({}, a), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: D.source
      });
      _.default.track(m.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
        flush: false,
        fingerprint: o
      })
    } else _.default.track(e, a, {
      flush: true,
      fingerprint: o
    })
  }
  c ? R.set(f, p) : (N[Y(t, n, r, u)] = {
    time: Date.now(),
    hash: W(n)
  }, eh(N))
}

function J(e) {
  let [t, n] = e;
  return null != p.Z[t] ? p.Z[t](n) : null
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
  !U && "CONNECTION_OPEN" === e.type && H(e.user) && (U = true), "EXPERIMENTS_FETCH_SUCCESS" === e.type && C && "ready_payload" === D.source && _.default.track(m.rMx.EXPERIMENT_FETCH_IGNORED, {
    fingerprint: e.fingerprint,
    current_snapshot_source: D.source,
    current_snapshot_session_id: D.sessionId,
    current_snapshot_fingerprint: D.fingerprint
  }), w = {}, x = {}, L = {};
  let r = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
    {
      experiments: i,
      guildExperiments: a
    } = e,
    o = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
    s = "sessionId" in e ? e.sessionId : null != (t = d.default.getSessionId()) ? t : "",
    l = d.default.getFingerprint();
  r && en({
    rawUserExperiments: i,
    rawGuildExperiments: null != a ? a : [],
    source: o,
    sessionId: s,
    fingerprint: l
  }, false), n(598984).Vx.trackExposure(), C = true
}

function en(e) {
  let {
    rawUserExperiments: t,
    rawGuildExperiments: n,
    source: r,
    sessionId: i,
    fingerprint: a
  } = e, o = arguments.length > 1 && true !== arguments[1] && arguments[1];
  D = {
    rawUserExperiments: t,
    rawGuildExperiments: null != n ? n : [],
    source: r,
    sessionId: i,
    fingerprint: a
  }, t.forEach(e => {
    let [t, n, s, l, c, u, d, f, _, p, h] = e;
    w[t] = {
      type: "user",
      revision: n,
      population: c,
      bucket: s,
      override: 0 === l,
      hashResult: null != u ? u : false,
      aaMode: 1 === d,
      triggerDebuggingEnabled: V(1 === f, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: o,
      fingerprint: a,
      holdoutName: _,
      holdoutRevision: p,
      holdoutBucket: h
    }
  }), null != n && n.forEach(e => {
    let [t, n, s, l, c, u, d, f, _, p] = e;
    x[t] = {
      hashKey: n,
      revision: s,
      populations: l.map(ee),
      overrides: $(c),
      overridesFormatted: (null != u ? u : []).map(e => e.map(ee)),
      holdoutName: null != d ? d : null,
      holdoutControlBucket: null != f ? f : null,
      aaMode: 1 === _,
      triggerDebuggingEnabled: V(1 === p, t),
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
    if ((r = null != t ? t.bucket : h.NZ.CONTROL) === h.NZ.NOT_ELIGIBLE) break;
    return r
  }
  return null
}
let ei = 1e4;

function ea(e, t) {
  var n, r;
  let i = B(t),
    a = x["".concat(i)];
  if (null == a) return null;
  let {
    revision: o,
    aaMode: s
  } = a, l = a.overrides[e], c = a.triggerDebuggingEnabled;
  if (null != l) return l === h.NZ.NOT_ELIGIBLE ? null : {
    type: h.xY.GUILD,
    guildId: e,
    revision: o,
    bucket: l,
    override: true,
    hashResult: false,
    triggerDebuggingEnabled: c
  };
  let u = B("".concat(null != (n = a.hashKey) ? n : t, ":").concat(e)) % ei,
    d = null;
  for (let t of null != (r = a.overridesFormatted) ? r : [])
    if (null !== (d = er(e, t, u))) return {
      type: h.xY.GUILD,
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
  return null != a.holdoutName && null != a.holdoutControlBucket && a.holdoutName !== t && (null == (f = ea(e, a.holdoutName)) ? true : f.bucket) != null && (true !== f.override && Q({
    experimentId: a.holdoutName,
    descriptor: f
  }), (null == f ? true : f.bucket) === a.holdoutControlBucket) ? null : {
    type: h.xY.GUILD,
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
  if (!U && H(n) && (U = true), C = t.hasLoadedExperiments, N = t.trackedExposureExperiments, w = t.loadedUserExperiments, M = t.userExperimentOverrides, k = t.guildExperimentOverrides, D = y(E({}, D), {
      source: t.assignmentSource,
      sessionId: t.assignmentSessionId,
      fingerprint: t.assignmentFingerprint
    }), x = eo(t.loadedGuildExperiments), L = {}, __OVERLAY__) {
    var r;
    j = null != (r = t.cookieOverrides) ? r : null, ef()
  }
}

function el() {
  C = true
}

function ec(e) {
  let {
    isSwitchingAccount: t
  } = e;
  s.K.remove(O), t || (s.K.remove(v), s.K.remove(I), s.K.remove(T), M = {}, k = {}), w = {}, D = y(E({}, D), {
    rawUserExperiments: []
  }), N = {}, C = false
}

function eu() {
  C = false, N = {}, x = {}, Chunk433517.K.remove(O)
}

function ed() {
  let e = Chunk433517.K.get(O);
  if (null == module || module.v !== S) return {};
  let t = module.e,
    n = Date.now(),
    r = false;
  for (let e in exports) require - exports[module].time > F && (delete exports[module], r = true);
  return Chunk392711 && eh(exports), exports
}

function ef() {
  let e = false,
    t = __OVERLAY__ ? j : (0, Chunk865427._S)();
  for (let n in exports) M[require] = {
    type: Chunk987338.xY.USER,
    revision: 1,
    population: 0,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: exports[require]
  }, k[require] = {
    type: Chunk987338.xY.GUILD,
    revision: 1,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: exports[require]
  }, e = true;
  return module
}

function e_() {
  var e, t, n;
  let r = [null != (e = Chunk433517.K.get(v)) ? module : {}, null != (t = Chunk433517.K.get(I)) ? exports : {}, null != (n = Chunk433517.K.get(T)) ? require : {}];
  M = {}, k = {};
  let a = !i().isEmpty(Chunk392711[0]);
  for (let e of Chunk392711)
    for (let t in module) {
      let n = module[exports];
      null == require || require.type !== Chunk987338.xY.USER && require.type !== Chunk987338.xY.GUILD || null == require.bucket || true !== require.override || require.fromCookie ? (delete module[exports], a = true) : require.type === Chunk987338.xY.USER ? M[exports] = require : k[exports] = require
    }(a = ef() || Chunk108131) && ep()
}

function ep() {
  try {
    Chunk433517.K.set(I, M)
  } catch (e) {
    A.error("Error saving user experiment overrides, unsaved data will be lost", module), Chunk626135.default.track(Chunk981631.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    Chunk433517.K.set(T, k)
  } catch (e) {
    A.error("Error saving guild experiment overrides, unsaved data will be lost", module), Chunk626135.default.track(Chunk981631.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function eh(e) {
  try {
    s.K.set(O, {
      v: S,
      e: e
    })
  } catch (e) {
    A.error("Error saving tracked exposure experiments, unsaved data will be lost", e), _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
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
  P[t] = {
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
  } = e, o = null != i ? i : null == (t = P[n]) ? true : t.type;
  if (null == o) returnfalse;
  if (null == r ? (M = E({}, M), delete M[n], k = E({}, k), delete k[n]) : "user" === o ? M = y(E({}, M), {
      [n]: {
        type: o,
        revision: 1,
        population: 0,
        bucket: r,
        override: true
      }
    }) : k = y(E({}, k), {
      [n]: {
        type: o,
        revision: 1,
        bucket: r,
        override: true
      }
    }), !a)
    for (let e of [M, k])
      for (let t in e) null == P[t] && delete M[t];
  ep()
}

function eE(e) {
  let {
    guild: t
  } = e;
  for (let e in L) {
    let [n] = e.split(":");
    t.id === n && delete L[e]
  }
}
class eb extends Chunk750041.Z {
  initialize() {
    N = ed(), e_(), this.waitFor(Chunk314897.default), this.loadCache()
  }
  loadCache() {
    let e = this.readSnapshot(eb.LATEST_SNAPSHOT_VERSION);
    null != module && ("loadedUserExperiments" in module ? (w = module.loadedUserExperiments, x = eo(module.loadedGuildExperiments), Object.values(w).forEach(e => e.loadedFromCache = true), Object.values(x).forEach(e => e.loadedFromCache = true)) : en(module, true))
  }
  takeSnapshot() {
    return {
      version: eb.LATEST_SNAPSHOT_VERSION,
      data: E({}, D)
    }
  }
  get hasLoadedExperiments() {
    return C
  }
  hasRegisteredExperiment(e) {
    return null != P[e]
  }
  getUserExperimentDescriptor(e) {
    if (U) {
      let t = M[e];
      if (null != t) return t
    }
    let t = B(e);
    return w["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : m.lds,
      r = k[e];
    if (U && null != r) return r;
    let i = "".concat(n, ":").concat(e);
    if (i in L) return L[i];
    let a = ea(n, e);
    return L[i] = a, a
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : h.NZ.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : h.NZ.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return w
  }
  getGuildExperiments() {
    return x
  }
  getLoadedUserExperiment(e) {
    return w[B(e)]
  }
  getLoadedGuildExperiment(e) {
    return x[B(e)]
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
    return P
  }
  getAllExperimentOverrideDescriptors() {
    return U ? E({}, M, k) : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return U ? null != (t = M[e]) ? t : k[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(P).forEach(e => {
        t[B("".concat(e))] = e
      }), w) {
      let r = exports[require];
      null != Chunk392711 && (module[Chunk392711] = w[require].bucket)
    }
    for (let t in L) {
      let n = L[exports];
      null != require && (module[exports] = require.bucket)
    }
    return module
  }
  getSerializedState() {
    let e = {};
    for (let t in x)
      for (let n of (module[exports] = JSON.parse(JSON.stringify(x[exports])), module[exports].populations)) require.filters = [];
    return {
      hasLoadedExperiments: C,
      trackedExposureExperiments: N,
      loadedUserExperiments: w,
      loadedGuildExperiments: module,
      userExperimentOverrides: M,
      guildExperimentOverrides: k,
      cookieOverrides: (0, Chunk865427._S)(),
      assignmentSource: D.source,
      assignmentSessionId: D.sessionId,
      assignmentFingerprint: D.fingerprint
    }
  }
  hasExperimentTrackedExposure(e, t, n, r) {
    return q(Y(e, t, n, r), W(t))
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
    }, Chunk570140.c.Early), g(this, "trackExposure", Q)
  }
}
g(eb, "displayName", "ExperimentStore"), g(eb, "LATEST_SNAPSHOT_VERSION", 1);
let ey = new eb