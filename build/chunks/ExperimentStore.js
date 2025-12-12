/** Chunk was on web.js **/
/** chunk id: 353926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => eh,
  Z: () => ey
}), require("./388685.js"), require("./997841.js"), require("./415506.js"), require("./953529.js"), require("./35282.js"), require("./704826.js"), require("./49124.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk108131 = require("./108131.js"),
  a = require.n(Chunk108131),
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
  S = "userExperimentOverrides",
  I = "guildExperimentOverrides",
  T = 1,
  C = new Chunk710845.Z("ExperimentStore"),
  A = false,
  N = {},
  P = new Map,
  R = {},
  w = {
    rawUserExperiments: [],
    rawGuildExperiments: []
  },
  D = {},
  x = {},
  L = {},
  j = {},
  M = {},
  k = null,
  U = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, Chunk865427.fD)(),
  G = {};

function Z(e) {
  let t = G[e];
  if (true !== t) return t;
  {
    let t = a().v3(e);
    return G[e] = t, t
  }
}
let F = Chunk987338.qO.map(e => Z(e)),
  B = 6048e5;

function V(e, t) {
  return e || F.includes(t)
}

function H(e) {
  var t;
  return ((null != (t = e.flags) ? t : 0) & h.xW$.STAFF) === h.xW$.STAFF || null != e.personal_connection_id
}

function Y(e, t, n, r) {
  let i = "".concat(t.type, "|").concat(e),
    o = t.triggerDebuggingEnabled && true !== n && n.length > 0;
  if (t.type === m.xY.USER) return o && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  if (t.type === m.xY.GUILD) return i += "|".concat(t.guildId), o && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  throw Error()
}

function W(e) {
  if (e.type === m.xY.USER) return Z("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === m.xY.GUILD) return Z("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let K = Date.now(),
  z = false;

function q(e, t) {
  let n = N[e];
  return !(null == n || (z ? n.time < K : Date.now() - n.time > B)) && n.hash === t
}

function Q(e, t) {
  return P.get(e) === t
}

function X(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: r,
    location_stack: i,
    context: o,
    fingerprint: a,
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
  let u = l === m.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    f = Y(t, n, r, u),
    _ = W(n);
  if (c && Q(f, _) || q(f, _)) returnfalse;
  if (n.type === m.xY.USER) {
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
    null != o && (e.context_guild_id = o.guildId);
    let f = u ? h.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_USER_TRIGGERED;
    if (c) {
      let t = y(E({}, e), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: w.source
      });
      p.default.track(h.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
        flush: false,
        fingerprint: a
      })
    } else p.default.track(f, e, {
      flush: true,
      fingerprint: a
    })
  } else if (n.type === m.xY.GUILD) {
    let e = u ? h.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_GUILD_TRIGGERED,
      o = {
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
      let e = y(E({}, o), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: w.source
      });
      p.default.track(h.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
        flush: false,
        fingerprint: a
      })
    } else p.default.track(e, o, {
      flush: true,
      fingerprint: a
    })
  }
  c ? P.set(f, _) : (N[Y(t, n, r, u)] = {
    time: Date.now(),
    hash: W(n)
  }, em(N))
}

function J(e) {
  let [t, n] = e;
  return null != _.Z[t] ? _.Z[t](n) : null
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
  !U && "CONNECTION_OPEN" === e.type && H(e.user) && (U = true), "EXPERIMENTS_FETCH_SUCCESS" === e.type && A && "ready_payload" === w.source && p.default.track(h.rMx.EXPERIMENT_FETCH_IGNORED, {
    fingerprint: e.fingerprint,
    current_snapshot_source: w.source,
    current_snapshot_session_id: w.sessionId,
    current_snapshot_fingerprint: w.fingerprint
  }), D = {}, x = {}, L = {};
  let r = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
    {
      experiments: i,
      guildExperiments: o
    } = e,
    a = "CONNECTION_OPEN" === e.type ? "ready_payload" : "logged_out_api",
    s = "sessionId" in e ? e.sessionId : null != (t = d.default.getSessionId()) ? t : "",
    l = d.default.getFingerprint();
  r && en({
    rawUserExperiments: i,
    rawGuildExperiments: null != o ? o : [],
    source: a,
    sessionId: s,
    fingerprint: l
  }, false), n(598984).Vx.trackExposure(), A = true
}

function en(e) {
  let {
    rawUserExperiments: t,
    rawGuildExperiments: n,
    source: r,
    sessionId: i,
    fingerprint: o
  } = e, a = arguments.length > 1 && true !== arguments[1] && arguments[1];
  w = {
    rawUserExperiments: t,
    rawGuildExperiments: null != n ? n : [],
    source: r,
    sessionId: i,
    fingerprint: o
  }, t.forEach(e => {
    let [t, n, s, l, c, u, d, f, p, _, m] = e;
    D[t] = {
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
      loadedFromCache: a,
      fingerprint: o,
      holdoutName: p,
      holdoutRevision: _,
      holdoutBucket: m
    }
  }), null != n && n.forEach(e => {
    let [t, n, s, l, c, u, d, f, p, _] = e;
    x[t] = {
      hashKey: n,
      revision: s,
      populations: l.map(ee),
      overrides: $(c),
      overridesFormatted: (null != u ? u : []).map(e => e.map(ee)),
      holdoutName: null != d ? d : null,
      holdoutControlBucket: null != f ? f : null,
      aaMode: 1 === p,
      triggerDebuggingEnabled: V(1 === _, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: a,
      fingerprint: o
    }
  })
}

function er(e, t, n) {
  let r = null;
  for (let {
      buckets: o,
      filters: a
    }
    of t) {
    var i = true;
    if (null != a) {
      for (let t of a)
        if (null != t && !t(e)) {
          i = false;
          break
        }
    }
    if (!i) continue;
    let t = o.find(e => {
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
    if ((r = null != t ? t.bucket : m.NZ.CONTROL) === m.NZ.NOT_ELIGIBLE) break;
    return r
  }
  return null
}
let ei = 1e4;

function eo(e, t) {
  var n, r;
  let i = Z(t),
    o = x["".concat(i)];
  if (null == o) return null;
  let {
    revision: a,
    aaMode: s
  } = o, l = o.overrides[e], c = o.triggerDebuggingEnabled;
  if (null != l) return l === m.NZ.NOT_ELIGIBLE ? null : {
    type: m.xY.GUILD,
    guildId: e,
    revision: a,
    bucket: l,
    override: true,
    hashResult: false,
    triggerDebuggingEnabled: c
  };
  let u = Z("".concat(null != (n = o.hashKey) ? n : t, ":").concat(e)) % ei,
    d = null;
  for (let t of null != (r = o.overridesFormatted) ? r : [])
    if (null !== (d = er(e, t, u))) return {
      type: m.xY.GUILD,
      guildId: e,
      revision: o.revision,
      bucket: d,
      override: true,
      hashResult: u,
      triggerDebuggingEnabled: c,
      assignmentSource: o.assignmentSource,
      sessionId: o.sessionId,
      loadedFromCache: o.loadedFromCache
    };
  if (null == (d = er(e, o.populations, u))) return null;
  let f = null;
  return null != o.holdoutName && null != o.holdoutControlBucket && o.holdoutName !== t && (null == (f = eo(e, o.holdoutName)) ? true : f.bucket) != null && (true !== f.override && X({
    experimentId: o.holdoutName,
    descriptor: f
  }), (null == f ? true : f.bucket) === o.holdoutControlBucket) ? null : {
    type: m.xY.GUILD,
    guildId: e,
    revision: o.revision,
    bucket: d,
    hashResult: u,
    aaMode: s,
    triggerDebuggingEnabled: c,
    assignmentSource: o.assignmentSource,
    sessionId: o.sessionId,
    loadedFromCache: o.loadedFromCache,
    holdoutName: null != f ? o.holdoutName : null,
    holdoutRevision: null == f ? true : f.revision,
    holdoutBucket: null == f ? true : f.bucket
  }
}

function ea(e) {
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
  if (!U && H(n) && (U = true), A = t.hasLoadedExperiments, N = t.trackedExposureExperiments, D = t.loadedUserExperiments, j = t.userExperimentOverrides, M = t.guildExperimentOverrides, w = y(E({}, w), {
      source: t.assignmentSource,
      sessionId: t.assignmentSessionId,
      fingerprint: t.assignmentFingerprint
    }), x = ea(t.loadedGuildExperiments), L = {}, __OVERLAY__) {
    var r;
    k = null != (r = t.cookieOverrides) ? r : null, ef()
  }
}

function el() {
  A = true
}

function ec(e) {
  let {
    isSwitchingAccount: t
  } = e;
  s.K.remove(O), t || (s.K.remove(v), s.K.remove(S), s.K.remove(I), j = {}, M = {}), D = {}, w = y(E({}, w), {
    rawUserExperiments: []
  }), N = {}, A = false
}

function eu() {
  A = false, N = {}, x = {}, Chunk433517.K.remove(O)
}

function ed() {
  let e = Chunk433517.K.get(O);
  if (null == module || module.v !== T) return {};
  let t = module.e,
    n = Date.now(),
    r = false;
  for (let e in exports) require - exports[module].time > B && (delete exports[module], r = true);
  return Chunk392711 && em(exports), exports
}

function ef() {
  let e = false,
    t = __OVERLAY__ ? k : (0, Chunk865427._S)();
  for (let n in exports) j[require] = {
    type: Chunk987338.xY.USER,
    revision: 1,
    population: 0,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: exports[require]
  }, M[require] = {
    type: Chunk987338.xY.GUILD,
    revision: 1,
    override: true,
    fromCookie: true,
    assignmentSource: "override",
    bucket: exports[require]
  }, e = true;
  return module
}

function ep() {
  var e, t, n;
  let r = [null != (e = Chunk433517.K.get(v)) ? module : {}, null != (t = Chunk433517.K.get(S)) ? exports : {}, null != (n = Chunk433517.K.get(I)) ? require : {}];
  j = {}, M = {};
  let o = !i().isEmpty(Chunk392711[0]);
  for (let e of Chunk392711)
    for (let t in module) {
      let n = module[exports];
      null == require || require.type !== Chunk987338.xY.USER && require.type !== Chunk987338.xY.GUILD || null == require.bucket || true !== require.override || require.fromCookie ? (delete module[exports], o = true) : require.type === Chunk987338.xY.USER ? j[exports] = require : M[exports] = require
    }(o = ef() || Chunk108131) && e_()
}

function e_() {
  try {
    Chunk433517.K.set(S, j)
  } catch (e) {
    C.error("Error saving user experiment overrides, unsaved data will be lost", module), Chunk626135.default.track(Chunk981631.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    Chunk433517.K.set(I, M)
  } catch (e) {
    C.error("Error saving guild experiment overrides, unsaved data will be lost", module), Chunk626135.default.track(Chunk981631.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function em(e) {
  try {
    s.K.set(O, {
      v: T,
      e: e
    })
  } catch (e) {
    C.error("Error saving tracked exposure experiments, unsaved data will be lost", e), p.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function eh(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: r,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  } = e;
  R[t] = {
    type: n,
    title: r,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  }
}

function eg(e) {
  var t;
  let {
    experimentId: n,
    experimentBucket: r,
    experimentType: i,
    skipCleanup: o
  } = e, a = null != i ? i : null == (t = R[n]) ? true : t.type;
  if (null == a) returnfalse;
  if (null == r ? (j = E({}, j), delete j[n], M = E({}, M), delete M[n]) : "user" === a ? j = y(E({}, j), {
      [n]: {
        type: a,
        revision: 1,
        population: 0,
        bucket: r,
        override: true
      }
    }) : M = y(E({}, M), {
      [n]: {
        type: a,
        revision: 1,
        bucket: r,
        override: true
      }
    }), !o)
    for (let e of [j, M])
      for (let t in e) null == R[t] && delete j[t];
  e_()
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
    N = ed(), ep(), this.waitFor(Chunk314897.default), this.loadCache()
  }
  loadCache() {
    let e = this.readSnapshot(eb.LATEST_SNAPSHOT_VERSION);
    null != module && ("loadedUserExperiments" in module ? (D = module.loadedUserExperiments, x = ea(module.loadedGuildExperiments), Object.values(D).forEach(e => e.loadedFromCache = true), Object.values(x).forEach(e => e.loadedFromCache = true)) : en(module, true))
  }
  takeSnapshot() {
    return {
      version: eb.LATEST_SNAPSHOT_VERSION,
      data: E({}, w)
    }
  }
  get hasLoadedExperiments() {
    return A
  }
  hasRegisteredExperiment(e) {
    return null != R[e]
  }
  getUserExperimentDescriptor(e) {
    if (U) {
      let t = j[e];
      if (null != t) return t
    }
    let t = Z(e);
    return D["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : h.lds,
      r = M[e];
    if (U && null != r) return r;
    let i = "".concat(n, ":").concat(e);
    if (i in L) return L[i];
    let o = eo(n, e);
    return L[i] = o, o
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : m.NZ.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : m.NZ.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return D
  }
  getGuildExperiments() {
    return x
  }
  getLoadedUserExperiment(e) {
    return D[Z(e)]
  }
  getLoadedGuildExperiment(e) {
    return x[Z(e)]
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
    return U ? E({}, j, M) : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return U ? null != (t = j[e]) ? t : M[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(R).forEach(e => {
        t[Z("".concat(e))] = e
      }), D) {
      let r = exports[require];
      null != Chunk392711 && (module[Chunk392711] = D[require].bucket)
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
      hasLoadedExperiments: A,
      trackedExposureExperiments: N,
      loadedUserExperiments: D,
      loadedGuildExperiments: module,
      userExperimentOverrides: j,
      guildExperimentOverrides: M,
      cookieOverrides: (0, Chunk865427._S)(),
      assignmentSource: w.source,
      assignmentSessionId: w.sessionId,
      assignmentFingerprint: w.fingerprint
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
    }, Chunk570140.c.Early), g(this, "trackExposure", X)
  }
}
g(eb, "displayName", "ExperimentStore"), g(eb, "LATEST_SNAPSHOT_VERSION", 1);
let ey = new eb