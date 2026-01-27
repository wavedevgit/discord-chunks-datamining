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
  if ("object" !== y(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== y(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function E(e) {
  var t = g(e, "string");
  return "symbol" === y(t) ? t : String(t)
}

function y(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let b = new Chunk118356.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && require("./283346.js");
let O = [Chunk445397.ni.User, Chunk445397.ni.Installation],
  v = {
    user: {},
    guild: {},
    installation: {}
  },
  A = {},
  I = {},
  S = {},
  T = {},
  C = {},
  N = new Set,
  w = new Set,
  R = "apexTrackedExposures",
  P = 2,
  D = 6048e5,
  L = {},
  x = 3,
  M = {};

function j(e) {
  let t = M[e];
  return null == t && (t = a().v3(e), M[e] = t), t
}
class k extends(r = Chunk311907.Ay.PersistedStore) {
  loadStoredState(e, t) {
    for (let n in null != e && e.version === x ? (I = e.clientOverrides, v = e.evaluatedExperiments) : null != e && 2 === e.version && (I = e.clientOverrides, v = _(f({}, e.evaluatedExperiments), {
        installation: {}
      })), T = {}, t) {
      let e = j(n),
        r = t[n];
      T[n] = {
        hashedName: e,
        variantId: r,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }
    L = this.loadTrackedExposures()
  }
  getState() {
    return {
      version: x,
      evaluatedExperiments: v,
      clientOverrides: I
    }
  }
  setExperimentAssignments(e) {
    if (null == e) returnfalse;
    for (let t of (this.clearSessionOverrides(), O)) {
      let n = c.ag[t],
        r = e.assignments[t];
      if (null == r || null == n) continue;
      let i = v[n];
      for (let e in r) {
        w.add(e);
        let {
          evaluation_id: t,
          assignments: n
        } = r[e], a = {
          evaluationId: null != t ? t : true,
          assignments: {}
        };
        for (let [t, r, o, s, l] of(i[e] = a, n)) null != o || (o = 0), a.assignments[t] = {
          hashedName: t,
          variantId: r,
          trackedVariantId: l,
          isOverride: (o & c.fd.IsOverride) != 0,
          revision: s,
          exposureTrackingEnabled: (o & c.fd.ExposureTrackingEnabled) != 0
        }
      }
    }
    returntrue
  }
  createOverride(e, t) {
    I = _(f({}, I), {
      [e]: {
        hashedName: j(e),
        variantId: t,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }), this.trackExposureSuppression(e, "client_override")
  }
  deleteOverride(e) {
    let {
      [e]: t
    } = I;
    I = h(I, [E(e)])
  }
  createSessionOverride(e, t) {
    S = _(f({}, S), {
      [e]: {
        hashedName: j(e),
        variantId: t,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    })
  }
  deleteSessionOverride(e) {
    let {
      [e]: t
    } = S;
    S = h(S, [E(e)])
  }
  setExperimentsMetadata(e) {
    C = f({}, C, Object.fromEntries(e.map(e => [e.name, e])))
  }
  getExperimentsMetadata() {
    return C
  }
  getClientOverrides() {
    return I
  }
  getSessionOverrides() {
    return S
  }
  getExperimentClientOverride(e) {
    return I[e]
  }
  getExperimentSessionOverride(e) {
    return S[e]
  }
  handleLogout(e) {
    e || (this.clearUserServerAssignments(), this.clearSessionOverrides()), l.w.remove(R), this.clearAllTrackedExposures()
  }
  registerExperiment(e) {
    A[e.name] = e, null != T[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
  }
  getRegisteredExperiments() {
    return A
  }
  getAssignment(e, t, n) {
    let r = this.getOverride(n);
    return null != r ? r : this.getServerAssignment(e, t, n)
  }
  getServerAssignment(e, t, n) {
    let r = j(n),
      i = v[e][t];
    if (null != i) return i.assignments[r]
  }
  getEvaluation(e, t) {
    var n;
    return null == (n = v[e][t]) ? true : n.evaluationId
  }
  getEvaluationAndAssignment(e, t, n) {
    let r = this.getOverride(n);
    if (null != r) return [true, r];
    let i = v[e][t];
    return null == i ? [true, true] : [i.evaluationId, i.assignments[j(n)]]
  }
  trackExperimentExposure(e, t, n, r, i, a, o) {
    let s = j("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
    this.shouldTrackExposure(s) && ("user" === r ? this.track(u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation_id: e,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }) : "installation" === r && this.track(u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
      evaluation_id: e,
      installation_id: o,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }), L[s] = Date.now(), this.saveTrackedExposures(L))
  }
  trackCommonTriggerPointExposures(e) {
    for (let t of ["user", "installation"])
      for (let {
          evaluationId: n,
          unitId: r
        }
        of this.evaluationsWithUnitIds(t)) {
        let i = j("".concat(n, "|").concat(e));
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
        }), L[i] = Date.now(), this.saveTrackedExposures(L))
      }
  }
  trackExposureSuppression(e, t) {
    let n = A[e];
    if (null != n) {
      if ("user" === n.kind) this.track(u.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
        experiment: e,
        unit_type: n.kind,
        suppression_source: t
      }, {
        flush: true
      });
      else if ("installation" === n.kind) {
        let r = Object.keys(v.installation)[0];
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
    return Object.values(v[e]).map(e => e.evaluationId).filter(e => null != e)
  }
  evaluationsWithUnitIds(e) {
    return Object.entries(v[e]).filter(e => {
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
    let t = L[e];
    return null == t || Date.now() - t > D
  }
  loadTrackedExposures() {
    let e = l.w.get(R);
    if (null == e || e.version !== P) return {};
    let t = e.exposures,
      n = Date.now(),
      r = false;
    for (let e in t) n - t[e] > D && (delete t[e], r = true);
    return r && this.saveTrackedExposures(t), t
  }
  saveTrackedExposures(e) {
    try {
      l.w.set(R, {
        version: P,
        exposures: e
      })
    } catch (e) {
      b.error("Error saving tracked exposures", e), this.track(u.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
        module: this.surface,
        call: "ApexExperimentStore.saveTrackedExposures"
      }, {
        flush: true
      })
    }
  }
  clearForTests() {
    this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), N.clear(), w.clear()
  }
  clearAllServerAssignments() {
    v = {
      user: {},
      guild: {},
      installation: {}
    }
  }
  clearUserServerAssignments() {
    v = {
      user: {},
      guild: {},
      installation: v.installation
    }
  }
  clearAllOverrides() {
    I = {}, S = {}, T = {}
  }
  clearSessionOverrides() {
    S = {}
  }
  clearAllTrackedExposures() {
    L = {}
  }
  getHash(e) {
    return j(e)
  }
  handleFetchStart(e) {
    N.add(e)
  }
  handleFetchSuccess(e, t) {
    N.delete(e), w.add(e), this.setExperimentAssignments(t)
  }
  handleFetchFailure(e) {
    N.delete(e), w.add(e)
  }
  isFetching(e) {
    return N.has(e)
  }
  hasLoaded(e) {
    return w.has(e)
  }
  getOverride(e) {
    var t, n;
    return null != (t = null != (n = S[e]) ? n : I[e]) ? t : T[e]
  }
  constructor(...e) {
    super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
  }
}
d(k, "displayName", "ApexExperimentStore"), d(k, "persistKey", "ApexExperimentStore")