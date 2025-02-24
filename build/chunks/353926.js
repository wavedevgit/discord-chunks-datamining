/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  V: () => e_,
  Z: () => eE
}), n(47120), n(789020), n(411104), n(266796), n(301563), n(757143), n(26686);
var r = n(392711),
  i = n.n(r),
  o = n(108131),
  a = n.n(o),
  s = n(433517),
  l = n(570140),
  c = n(865427),
  u = n(710845),
  d = n(314897),
  f = n(412788),
  p = n(626135),
  _ = n(360359),
  h = n(987338),
  m = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "scientist:triggered",
  O = "exerimentOverrides",
  S = "userExperimentOverrides",
  I = "guildExperimentOverrides",
  T = 1,
  N = new u.Z("ExperimentStore"),
  A = !1,
  C = {},
  R = new Map,
  P = {},
  w = {
    rawUserExperiments: [],
    rawGuildExperiments: []
  },
  D = {},
  x = {},
  L = {},
  M = {},
  k = {},
  j = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
  U = {};

function G(e) {
  let t = U[e];
  if (void 0 !== t) return t;
  {
    let t = a().v3(e);
    return U[e] = t, t
  }
}
let B = h.qO.map(e => G(e)),
  Z = 6048e5;

function F(e, t) {
  return e || B.includes(t)
}

function V(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF || null != e.personal_connection_id
}

function H(e, t, n, r) {
  let i = "".concat(t.type, "|").concat(e),
    o = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
  if (t.type === h.xY.USER) return o && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  if (t.type === h.xY.GUILD) return i += "|".concat(t.guildId), o && (i += "|".concat(n), r && (i += "|triggerDebugging")), i;
  throw Error()
}

function W(e) {
  if (e.type === h.xY.USER) return G("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === h.xY.GUILD) return G("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let Y = Date.now(),
  K = !1;

function z(e, t) {
  let n = C[e];
  return !(null == n || (K ? n.time < Y : Date.now() - n.time > Z)) && n.hash === t
}

function q(e, t) {
  return R.get(e) === t
}

function Q(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: r,
    location_stack: i,
    context: o,
    fingerprint: a,
    excluded: s,
    exposureType: l
  } = e, c = !1;
  switch (n.assignmentSource) {
    case "override":
      return !1;
    case "ready_payload":
      n.sessionId !== d.default.getSessionId() && (c = !0);
      break;
    case "logged_out_api":
      n.fingerprint !== d.default.getFingerprint() && (c = !0);
      break;
    default:
      c = !0
  }
  if (n.override) return !1;
  let u = l === h.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    f = H(t, n, r, u),
    _ = W(n);
  if (c && q(f, _) || z(f, _)) return !1;
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
      assignment_loaded_from_cache: n.loadedFromCache
    };
    null != o && (e.context_guild_id = o.guildId);
    let f = u ? m.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_USER_TRIGGERED;
    if (c) {
      let t = b(E({}, e), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: w.source
      });
      p.default.track(m.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
        flush: !1,
        fingerprint: a
      })
    } else p.default.track(f, e, {
      flush: !0,
      fingerprint: a
    })
  } else if (n.type === h.xY.GUILD) {
    let e = u ? m.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_GUILD_TRIGGERED,
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
        assignment_loaded_from_cache: n.loadedFromCache
      };
    if (c) {
      let e = b(E({}, o), {
        assignment_fingerprint: n.fingerprint,
        current_session_id: d.default.getSessionId(),
        current_fingerprint: d.default.getFingerprint(),
        current_source: w.source
      });
      p.default.track(m.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
        flush: !1,
        fingerprint: a
      })
    } else p.default.track(e, o, {
      flush: !0,
      fingerprint: a
    })
  }
  c ? R.set(f, _) : (C[H(t, n, r, u)] = {
    time: Date.now(),
    hash: W(n)
  }, ep(C))
}

function X(e) {
  let [t, n] = e;
  return null != _.Z[t] ? _.Z[t](n) : null
}

function J(e) {
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

function $(e) {
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
    filters: n.map(X),
    rawFilterData: n
  }
}

function ee(e) {
  var t;
  !j && "CONNECTION_OPEN" === e.type && V(e.user) && (j = !0), "EXPERIMENTS_FETCH_SUCCESS" === e.type && A && "ready_payload" === w.source && p.default.track(m.rMx.EXPERIMENT_FETCH_IGNORED, {
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
    s = "sessionId" in e ? e.sessionId : null !== (t = d.default.getSessionId()) && void 0 !== t ? t : "",
    l = d.default.getFingerprint();
  r && et({
    rawUserExperiments: i,
    rawGuildExperiments: null != o ? o : [],
    source: a,
    sessionId: s,
    fingerprint: l
  }, !1), n(598984).Vx.trackExposure(), A = !0
}

function et(e) {
  let {
    rawUserExperiments: t,
    rawGuildExperiments: n,
    source: r,
    sessionId: i,
    fingerprint: o
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  w = {
    rawUserExperiments: t,
    rawGuildExperiments: null != n ? n : [],
    source: r,
    sessionId: i,
    fingerprint: o
  }, t.forEach(e => {
    let [t, n, s, l, c, u, d, f] = e;
    D[t] = {
      type: "user",
      revision: n,
      population: c,
      bucket: s,
      override: 0 === l,
      hashResult: null != u ? u : -1,
      aaMode: 1 === d,
      triggerDebuggingEnabled: F(1 === f, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: a,
      fingerprint: o
    }
  }), null != n && n.forEach(e => {
    let [t, n, s, l, c, u, d, f, p, _] = e;
    x[t] = {
      hashKey: n,
      revision: s,
      populations: l.map($),
      overrides: J(c),
      overridesFormatted: (null != u ? u : []).map(e => e.map($)),
      holdoutName: null != d ? d : null,
      holdoutBucket: null != f ? f : null,
      aaMode: 1 === p,
      triggerDebuggingEnabled: F(1 === _, t),
      assignmentSource: r,
      sessionId: i,
      loadedFromCache: a,
      fingerprint: o
    }
  })
}

function en(e, t, n) {
  let r = null;
  for (let {
      buckets: o,
      filters: a
    }
    of t) {
    var i = !0;
    if (null != a) {
      for (let t of a)
        if (null != t && !t(e)) {
          i = !1;
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
    if ((r = null != t ? t.bucket : h.NZ.CONTROL) === h.NZ.NOT_ELIGIBLE) break;
    return r
  }
  return null
}
let er = 1e4;

function ei(e, t) {
  var n, r;
  let i = G(t),
    o = x["".concat(i)];
  if (null == o) return null;
  let {
    revision: a,
    aaMode: s
  } = o, l = o.overrides[e], c = o.triggerDebuggingEnabled;
  if (null != l) return l === h.NZ.NOT_ELIGIBLE ? null : {
    type: h.xY.GUILD,
    guildId: e,
    revision: a,
    bucket: l,
    override: !0,
    hashResult: -1,
    triggerDebuggingEnabled: c
  };
  let u = G("".concat(null !== (n = o.hashKey) && void 0 !== n ? n : t, ":").concat(e)) % er,
    d = null;
  for (let t of null !== (r = o.overridesFormatted) && void 0 !== r ? r : [])
    if (null !== (d = en(e, t, u))) return {
      type: h.xY.GUILD,
      guildId: e,
      revision: o.revision,
      bucket: d,
      override: !0,
      hashResult: u,
      triggerDebuggingEnabled: c,
      assignmentSource: o.assignmentSource,
      sessionId: o.sessionId,
      loadedFromCache: o.loadedFromCache
    };
  if (null == (d = en(e, o.populations, u))) return null;
  if (null != o.holdoutName && null != o.holdoutBucket && o.holdoutName !== t) {
    let t = ei(e, o.holdoutName);
    if ((null == t ? void 0 : t.bucket) != null && (!0 !== t.override && Q({
        experimentId: o.holdoutName,
        descriptor: t
      }), (null == t ? void 0 : t.bucket) === o.holdoutBucket)) return null
  }
  return {
    type: h.xY.GUILD,
    guildId: e,
    revision: o.revision,
    bucket: d,
    hashResult: u,
    aaMode: s,
    triggerDebuggingEnabled: c,
    assignmentSource: o.assignmentSource,
    sessionId: o.sessionId,
    loadedFromCache: o.loadedFromCache
  }
}

function eo(e) {
  let t = {};
  for (let r in e) {
    var n;
    let i = e[r];
    for (let e of (t[r] = E({}, i), t[r].populations)) e.filters = e.rawFilterData.map(X);
    for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : [])
      for (let t of e) t.filters = t.rawFilterData.map(X)
  }
  return t
}

function ea(e) {
  let {
    serializedExperimentStore: t,
    user: n
  } = e;
  !j && V(n) && (j = !0), A = t.hasLoadedExperiments, C = t.trackedExposureExperiments, D = t.loadedUserExperiments, M = t.userExperimentOverrides, k = t.guildExperimentOverrides, w = b(E({}, w), {
    source: t.assignmentSource,
    sessionId: t.assignmentSessionId,
    fingerprint: t.assignmentFingerprint
  }), x = eo(t.loadedGuildExperiments), L = {}
}

function es() {
  A = !0
}

function el(e) {
  let {
    isSwitchingAccount: t
  } = e;
  s.K.remove(y), t || (s.K.remove(O), s.K.remove(S), s.K.remove(I), M = {}, k = {}), D = {}, w = b(E({}, w), {
    rawUserExperiments: []
  }), C = {}, A = !1
}

function ec() {
  A = !1, C = {}, x = {}, s.K.remove(y)
}

function eu() {
  let e = s.K.get(y);
  if (null == e || e.v !== T) return {};
  let t = e.e,
    n = Date.now(),
    r = !1;
  for (let e in t) n - t[e].time > Z && (delete t[e], r = !0);
  return r && ep(t), t
}

function ed() {
  var e, t, n;
  let r = [null !== (e = s.K.get(O)) && void 0 !== e ? e : {}, null !== (t = s.K.get(S)) && void 0 !== t ? t : {}, null !== (n = s.K.get(I)) && void 0 !== n ? n : {}];
  M = {}, k = {};
  let o = !i().isEmpty(r[0]);
  for (let e of r)
    for (let t in e) {
      let n = e[t];
      null == n || n.type !== h.xY.USER && n.type !== h.xY.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], o = !0) : n.type === h.xY.USER ? M[t] = n : k[t] = n
    }
  let a = (0, c._S)();
  for (let e in a) M[e] = {
    type: h.xY.USER,
    revision: 1,
    population: 0,
    override: !0,
    fromCookie: !0,
    assignmentSource: "override",
    bucket: a[e]
  }, k[e] = {
    type: h.xY.GUILD,
    revision: 1,
    override: !0,
    fromCookie: !0,
    assignmentSource: "override",
    bucket: a[e]
  }, o = !0;
  o && ef()
}

function ef() {
  try {
    s.K.set(S, M)
  } catch (e) {
    N.error("Error saving user experiment overrides, unsaved data will be lost", e), p.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    s.K.set(I, k)
  } catch (e) {
    N.error("Error saving guild experiment overrides, unsaved data will be lost", e), p.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function ep(e) {
  try {
    s.K.set(y, {
      v: T,
      e: e
    })
  } catch (e) {
    N.error("Error saving tracked exposure experiments, unsaved data will be lost", e), p.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function e_(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: r,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  } = e;
  P[t] = {
    type: n,
    title: r,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  }
}

function eh(e) {
  var t;
  let {
    experimentId: n,
    experimentBucket: r,
    experimentType: i,
    skipCleanup: o
  } = e, a = null != i ? i : null === (t = P[n]) || void 0 === t ? void 0 : t.type;
  if (null == a) return !1;
  if (null == r ? (M = E({}, M), delete M[n], k = E({}, k), delete k[n]) : "user" === a ? M = b(E({}, M), {
      [n]: {
        type: a,
        revision: 1,
        population: 0,
        bucket: r,
        override: !0
      }
    }) : k = b(E({}, k), {
      [n]: {
        type: a,
        revision: 1,
        bucket: r,
        override: !0
      }
    }), !o)
    for (let e of [M, k])
      for (let t in e) null == P[t] && delete M[t];
  ef()
}

function em(e) {
  let {
    guild: t
  } = e;
  for (let e in L) {
    let [n] = e.split(":");
    t.id === n && delete L[e]
  }
}
class eg extends f.Z {
  initialize() {
    C = eu(), ed(), this.waitFor(d.default), this.loadCache()
  }
  loadCache() {
    let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
    null != e && ("loadedUserExperiments" in e ? (D = e.loadedUserExperiments, x = eo(e.loadedGuildExperiments), Object.values(D).forEach(e => e.loadedFromCache = !0), Object.values(x).forEach(e => e.loadedFromCache = !0)) : et(e, !0))
  }
  takeSnapshot() {
    return {
      version: eg.LATEST_SNAPSHOT_VERSION,
      data: E({}, w)
    }
  }
  get hasLoadedExperiments() {
    return A
  }
  hasRegisteredExperiment(e) {
    return null != P[e]
  }
  getUserExperimentDescriptor(e) {
    if (j) {
      let t = M[e];
      if (null != t) return t
    }
    let t = G(e);
    return D["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : m.lds,
      r = k[e];
    if (j && null != r) return r;
    let i = "".concat(n, ":").concat(e);
    if (i in L) return L[i];
    let o = ei(n, e);
    return L[i] = o, o
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
    return D
  }
  getGuildExperiments() {
    return x
  }
  getLoadedUserExperiment(e) {
    return D[G(e)]
  }
  getLoadedGuildExperiment(e) {
    return x[G(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(C).filter(e => {
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
    return j ? E({}, M, k) : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return j ? null !== (t = M[e]) && void 0 !== t ? t : k[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(P).forEach(e => {
        t[G("".concat(e))] = e
      }), D) {
      let r = t[n];
      null != r && (e[r] = D[n].bucket)
    }
    for (let t in L) {
      let n = L[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in x)
      for (let n of (e[t] = JSON.parse(JSON.stringify(x[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: A,
      trackedExposureExperiments: C,
      loadedUserExperiments: D,
      loadedGuildExperiments: e,
      userExperimentOverrides: M,
      guildExperimentOverrides: k,
      assignmentSource: w.source,
      assignmentSessionId: w.sessionId,
      assignmentFingerprint: w.fingerprint
    }
  }
  hasExperimentTrackedExposure(e, t, n, r) {
    return z(H(e, t, n, r), W(t))
  }
  constructor() {
    super({
      LOGOUT: el,
      LOGIN_SUCCESS: ec,
      CONNECTION_OPEN: ee,
      EXPERIMENTS_FETCH_SUCCESS: ee,
      OVERLAY_INITIALIZE: ea,
      EXPERIMENTS_FETCH_FAILURE: es,
      EXPERIMENT_OVERRIDE_BUCKET: eh,
      GUILD_CREATE: em,
      GUILD_UPDATE: em
    }, l.c.Early), g(this, "trackExposure", Q)
  }
}
g(eg, "displayName", "ExperimentStore"), g(eg, "LATEST_SNAPSHOT_VERSION", 1);
let eE = new eg