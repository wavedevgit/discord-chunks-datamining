/** Chunk was on web.js **/
/** chunk id: 299021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./467055.js");
var r, Chunk108131 = require("./108131.js"),
  a = require.n(Chunk108131),
  Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk433517 = require("./433517.js"),
  Chunk341691 = require("./341691.js"),
  Chunk231338 = require("./231338.js");

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
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let y = new Chunk579092.Yd("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && require("./251171.js");
let O = [Chunk341691.Cm.User, Chunk341691.Cm.Installation],
  v = {
    user: {},
    guild: {},
    installation: {}
  },
  S = {},
  I = {},
  T = {},
  C = {},
  A = {},
  N = new Set,
  P = new Set,
  w = "apexTrackedExposures",
  R = 2,
  D = 6048e5,
  x = {},
  L = 3,
  j = {};

function M(e) {
  let t = j[e];
  return null == t && (t = a().v3(e), j[e] = t), t
}
class k extends(r = Chunk442837.ZP.PersistedStore) {
  loadStoredState(e, t) {
    for (let n in null != e && e.version === L ? (I = e.clientOverrides, v = e.evaluatedExperiments) : null != e && 2 === e.version && (I = e.clientOverrides, v = _(f({}, e.evaluatedExperiments), {
        installation: {}
      })), C = {}, t) {
      let e = M(n),
        r = t[n];
      C[n] = {
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
      evaluatedExperiments: v,
      clientOverrides: I
    }
  }
  setExperimentAssignments(e) {
    if (null == e) returnfalse;
    for (let t of (this.clearSessionOverrides(), O)) {
      let n = c.Oz[t],
        r = e.assignments[t];
      if (null == r || null == n) continue;
      let i = v[n];
      for (let e in r) {
        P.add(e);
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
          isOverride: (o & c.V8.IsOverride) != 0,
          revision: s,
          exposureTrackingEnabled: (o & c.V8.ExposureTrackingEnabled) != 0
        }
      }
    }
    returntrue
  }
  createOverride(e, t) {
    I = _(f({}, I), {
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
    } = I;
    I = h(I, [e].map(E))
  }
  createSessionOverride(e, t) {
    T = _(f({}, T), {
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
    } = T;
    T = h(T, [e].map(E))
  }
  setExperimentsMetadata(e) {
    A = f({}, A, Object.fromEntries(e.map(e => [e.name, e])))
  }
  getExperimentsMetadata() {
    return A
  }
  getClientOverrides() {
    return I
  }
  getSessionOverrides() {
    return T
  }
  getExperimentClientOverride(e) {
    return I[e]
  }
  getExperimentSessionOverride(e) {
    return T[e]
  }
  handleLogout(e) {
    e || (this.clearUserServerAssignments(), this.clearSessionOverrides()), l.K.remove(w), this.clearAllTrackedExposures()
  }
  registerExperiment(e) {
    S[e.name] = e, null != C[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
  }
  getRegisteredExperiments() {
    return S
  }
  getAssignment(e, t, n) {
    let r = this.getOverride(n);
    return null != r ? r : this.getServerAssignment(e, t, n)
  }
  getServerAssignment(e, t, n) {
    let r = M(n),
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
    return null == i ? [true, true] : [i.evaluationId, i.assignments[M(n)]]
  }
  trackExperimentExposure(e, t, n, r, i, a, o) {
    let s = M("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
    this.shouldTrackExposure(s) && ("user" === r ? this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation_id: e,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }) : "installation" === r && this.track(u.j_.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
      evaluation_id: e,
      installation_id: o,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }), x[s] = Date.now(), this.saveTrackedExposures(x))
  }
  trackCommonTriggerPointExposures(e) {
    for (let t of ["user", "installation"])
      for (let {
          evaluationId: n,
          unitId: r
        }
        of this.evaluationsWithUnitIds(t)) {
        let i = M("".concat(n, "|").concat(e));
        this.shouldTrackExposure(i) && ("user" === t ? this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
          evaluation_id: n,
          exposure_location: e,
          unit_type: t
        }, {
          flush: true
        }) : this.track(u.j_.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
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
    let n = S[e];
    if (null != n) {
      if ("user" === n.kind) this.track(u.j_.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
        experiment: e,
        unit_type: n.kind,
        suppression_source: t
      }, {
        flush: true
      });
      else if ("installation" === n.kind) {
        let r = Object.keys(v.installation)[0];
        null != r && this.track(u.j_.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, {
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
    let t = x[e];
    return null == t || Date.now() - t > D
  }
  loadTrackedExposures() {
    let e = l.K.get(w);
    if (null == e || e.version !== R) return {};
    let t = e.exposures,
      n = Date.now(),
      r = false;
    for (let e in t) n - t[e] > D && (delete t[e], r = true);
    return r && this.saveTrackedExposures(t), t
  }
  saveTrackedExposures(e) {
    try {
      l.K.set(w, {
        version: R,
        exposures: e
      })
    } catch (e) {
      y.error("Error saving tracked exposures", e), this.track(u.j_.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
        module: this.surface,
        call: "ApexExperimentStore.saveTrackedExposures"
      }, {
        flush: true
      })
    }
  }
  clearForTests() {
    this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), N.clear(), P.clear()
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
    I = {}, T = {}, C = {}
  }
  clearSessionOverrides() {
    T = {}
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
    N.delete(e), P.add(e), this.setExperimentAssignments(t)
  }
  handleFetchFailure(e) {
    N.delete(e), P.add(e)
  }
  isFetching(e) {
    return N.has(e)
  }
  hasLoaded(e) {
    return P.has(e)
  }
  getOverride(e) {
    var t, n;
    return null != (n = null != (t = T[e]) ? t : I[e]) ? n : C[e]
  }
  constructor(...e) {
    super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
  }
}
d(k, "displayName", "ApexExperimentStore"), d(k, "persistKey", "ApexExperimentStore")