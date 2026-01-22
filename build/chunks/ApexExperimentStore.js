/** Chunk was on web.js **/
/** chunk id: 789459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./446912.js");
var r, Chunk181370 = require("./181370.js"),
  a = require.n(Chunk181370),
  Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk506774 = require("./506774.js"),
  Chunk445397 = require("./445397.js"),
  Chunk818348 = require("./818348.js");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e, t) {
  if ("object" !== b(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== b(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function E(e) {
  var t = g(e, "string");
  return "symbol" === b(t) ? t : String(t)
}

function b(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let y = new Chunk118356.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && require("./283346.js");
let O = [Chunk445397.ni.User, Chunk445397.ni.Installation],
  A = {
    user: {},
    guild: {},
    installation: {}
  },
  v = {},
  S = {},
  I = {},
  T = {},
  C = {},
  N = new Set,
  R = new Set,
  w = "apexTrackedExposures",
  P = 2,
  D = 6048e5,
  x = {},
  L = 3,
  j = {};

function M(e) {
  let t = j[e];
  return null == t && (t = a().v3(e), j[e] = t), t
}
class k extends(r = Chunk311907.Ay.PersistedStore) {
  loadStoredState(e, t) {
    for (let n in null != e && e.version === L ? (S = e.clientOverrides, A = e.evaluatedExperiments) : null != e && 2 === e.version && (S = e.clientOverrides, A = _(f({}, e.evaluatedExperiments), {
        installation: {}
      })), T = {}, t) {
      let e = M(n),
        r = t[n];
      T[n] = {
        hashedName: e,
        variantId: r,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }
    x = this.loadTrackedExposures()
  }
  getState() {
    return {
      version: L,
      evaluatedExperiments: A,
      clientOverrides: S
    }
  }
  setExperimentAssignments(e) {
    if (null == e) returnfalse;
    for (let t of (this.clearSessionOverrides(), O)) {
      let n = c.ag[t],
        r = e.assignments[t];
      if (null == r || null == n) continue;
      let i = A[n];
      for (let e in r) {
        R.add(e);
        let {
          evaluation_id: t,
          assignments: n
        } = r[e], a = {
          evaluationId: null != t ? t : true,
          assignments: {}
        };
        for (let [t, r, s, o, l] of(i[e] = a, n)) null != s || (s = 0), a.assignments[t] = {
          hashedName: t,
          variantId: r,
          trackedVariantId: l,
          isOverride: (s & c.fd.IsOverride) != 0,
          revision: o,
          exposureTrackingEnabled: (s & c.fd.ExposureTrackingEnabled) != 0
        }
      }
    }
    returntrue
  }
  createOverride(e, t) {
    S = _(f({}, S), {
      [e]: {
        hashedName: M(e),
        variantId: t,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }), this.trackExposureSuppression(e, "client_override")
  }
  deleteOverride(e) {
    let {
      [e]: t
    } = S;
    S = h(S, [E(e)])
  }
  createSessionOverride(e, t) {
    I = _(f({}, I), {
      [e]: {
        hashedName: M(e),
        variantId: t,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    })
  }
  deleteSessionOverride(e) {
    let {
      [e]: t
    } = I;
    I = h(I, [E(e)])
  }
  setExperimentsMetadata(e) {
    C = f({}, C, Object.fromEntries(e.map(e => [e.name, e])))
  }
  getExperimentsMetadata() {
    return C
  }
  getClientOverrides() {
    return S
  }
  getSessionOverrides() {
    return I
  }
  getExperimentClientOverride(e) {
    return S[e]
  }
  getExperimentSessionOverride(e) {
    return I[e]
  }
  handleLogout(e) {
    e || (this.clearUserServerAssignments(), this.clearSessionOverrides()), l.w.remove(w), this.clearAllTrackedExposures()
  }
  registerExperiment(e) {
    v[e.name] = e, null != T[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
  }
  getRegisteredExperiments() {
    return v
  }
  getAssignment(e, t, n) {
    let r = this.getOverride(n);
    return null != r ? r : this.getServerAssignment(e, t, n)
  }
  getServerAssignment(e, t, n) {
    let r = M(n),
      i = A[e][t];
    if (null != i) return i.assignments[r]
  }
  getEvaluation(e, t) {
    var n;
    return null == (n = A[e][t]) ? true : n.evaluationId
  }
  getEvaluationAndAssignment(e, t, n) {
    let r = this.getOverride(n);
    if (null != r) return [true, r];
    let i = A[e][t];
    return null == i ? [true, true] : [i.evaluationId, i.assignments[M(n)]]
  }
  trackExperimentExposure(e, t, n, r, i, a, s) {
    let o = M("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
    this.shouldTrackExposure(o) && ("user" === r ? this.track(u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation_id: e,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }) : "installation" === r && this.track(u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
      evaluation_id: e,
      installation_id: s,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }), x[o] = Date.now(), this.saveTrackedExposures(x))
  }
  trackCommonTriggerPointExposures(e) {
    for (let t of ["user", "installation"])
      for (let {
          evaluationId: n,
          unitId: r
        }
        of this.evaluationsWithUnitIds(t)) {
        let i = M("".concat(n, "|").concat(e));
        this.shouldTrackExposure(i) && ("user" === t ? this.track(u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED, {
          evaluation_id: n,
          exposure_location: e,
          unit_type: t
        }, {
          flush: true
        }) : this.track(u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
          evaluation_id: n,
          exposure_location: e,
          unit_type: t,
          installation_id: r
        }, {
          flush: true
        }), x[i] = Date.now(), this.saveTrackedExposures(x))
      }
  }
  trackExposureSuppression(e, t) {
    let n = v[e];
    if (null != n) {
      if ("user" === n.kind) this.track(u.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
        experiment: e,
        unit_type: n.kind,
        suppression_source: t
      }, {
        flush: true
      });
      else if ("installation" === n.kind) {
        let r = Object.keys(A.installation)[0];
        null != r && this.track(u.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, {
          experiment: e,
          unit_type: n.kind,
          suppression_source: t,
          installation_id: r
        }, {
          flush: true
        })
      }
    }
  }
  evaluationIds(e) {
    return Object.values(A[e]).map(e => e.evaluationId).filter(e => null != e)
  }
  evaluationsWithUnitIds(e) {
    return Object.entries(A[e]).filter(e => {
      let [t, n] = e;
      return null != n.evaluationId
    }).map(e => {
      let [t, n] = e;
      return {
        evaluationId: n.evaluationId,
        unitId: t
      }
    })
  }
  shouldTrackExposure(e) {
    let t = x[e];
    return null == t || Date.now() - t > D
  }
  loadTrackedExposures() {
    let e = l.w.get(w);
    if (null == e || e.version !== P) return {};
    let t = e.exposures,
      n = Date.now(),
      r = false;
    for (let e in t) n - t[e] > D && (delete t[e], r = true);
    return r && this.saveTrackedExposures(t), t
  }
  saveTrackedExposures(e) {
    try {
      l.w.set(w, {
        version: P,
        exposures: e
      })
    } catch (e) {
      y.error("Error saving tracked exposures", e), this.track(u.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
        module: this.surface,
        call: "ApexExperimentStore.saveTrackedExposures"
      }, {
        flush: true
      })
    }
  }
  clearForTests() {
    this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), N.clear(), R.clear()
  }
  clearAllServerAssignments() {
    A = {
      user: {},
      guild: {},
      installation: {}
    }
  }
  clearUserServerAssignments() {
    A = {
      user: {},
      guild: {},
      installation: A.installation
    }
  }
  clearAllOverrides() {
    S = {}, I = {}, T = {}
  }
  clearSessionOverrides() {
    I = {}
  }
  clearAllTrackedExposures() {
    x = {}
  }
  getHash(e) {
    return M(e)
  }
  handleFetchStart(e) {
    N.add(e)
  }
  handleFetchSuccess(e, t) {
    N.delete(e), R.add(e), this.setExperimentAssignments(t)
  }
  handleFetchFailure(e) {
    N.delete(e), R.add(e)
  }
  isFetching(e) {
    return N.has(e)
  }
  hasLoaded(e) {
    return R.has(e)
  }
  getOverride(e) {
    var t, n;
    return null != (t = null != (n = I[e]) ? n : S[e]) ? t : T[e]
  }
  constructor(...e) {
    super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
  }
}
d(k, "displayName", "ApexExperimentStore"), d(k, "persistKey", "ApexExperimentStore")