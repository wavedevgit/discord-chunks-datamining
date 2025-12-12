/** Chunk was on web.js **/
/** chunk id: 299021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./467055.js");
var r, Chunk108131 = require("./108131.js"),
  o = require.n(Chunk108131),
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

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
let O = [Chunk341691.Cm.User],
  v = {
    user: {},
    guild: {}
  },
  S = {},
  I = {},
  T = {},
  C = {},
  A = new Set,
  N = new Set,
  P = "apexTrackedExposures",
  R = 2,
  w = 6048e5,
  D = {},
  x = 2,
  L = {};

function j(e) {
  let t = L[e];
  return null == t && (t = o().v3(e), L[e] = t), t
}
class M extends(r = Chunk442837.ZP.PersistedStore) {
  loadStoredState(e, t) {
    for (let n in null != e && e.version === x && (I = e.clientOverrides, v = e.evaluatedExperiments), T = {}, t) {
      let e = j(n),
        r = t[n];
      T[n] = {
        hashedName: e,
        variantId: r,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }
    D = this.loadTrackedExposures()
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
    for (let t of O) {
      let n = c.Oz[t],
        r = e.assignments[t];
      if (null == r || null == n) continue;
      let i = v[n];
      for (let e in r) {
        N.add(e);
        let {
          evaluation_id: t,
          assignments: n
        } = r[e], o = {
          evaluationId: null != t ? t : true,
          assignments: {}
        };
        for (let [t, r, a, s, l] of(i[e] = o, n)) null != a || (a = 0), o.assignments[t] = {
          hashedName: t,
          variantId: r,
          trackedVariantId: l,
          isOverride: (a & c.V8.IsOverride) != 0,
          revision: s,
          exposureTrackingEnabled: (a & c.V8.ExposureTrackingEnabled) != 0
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
    I = m(I, [e].map(E))
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
  getExperimentClientOverride(e) {
    return I[e]
  }
  handleLogout(e) {
    e || this.clearAllServerAssignments(), l.K.remove(P), this.clearAllTrackedExposures()
  }
  registerExperiment(e) {
    S[e.name] = e, null != T[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
  }
  getRegisteredExperiments() {
    return S
  }
  getAssignment(e, t, n) {
    var r;
    let i = null != (r = I[n]) ? r : T[n];
    return null != i ? i : this.getServerAssignment(e, t, n)
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
    var r;
    let i = null != (r = I[n]) ? r : T[n];
    if (null != i) return [true, i];
    let o = v[e][t];
    return null == o ? [true, true] : [o.evaluationId, o.assignments[j(n)]]
  }
  trackExperimentExposure(e, t, n, r, i, o) {
    let a = j("".concat(t, "|").concat(i, "|").concat(o, "|").concat(n));
    this.shouldTrackExposure(a) && "user" === r && (this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation_id: e,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: o
    }, {
      flush: true
    }), D[a] = Date.now(), this.saveTrackedExposures(D))
  }
  trackCommonTriggerPointExposures(e) {
    for (let t of this.evaluationIds("user")) {
      let n = j("".concat(t, "|").concat(e));
      this.shouldTrackExposure(n) && (this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
        evaluation_id: t,
        exposure_location: e,
        unit_type: "user"
      }, {
        flush: true
      }), D[n] = Date.now(), this.saveTrackedExposures(D))
    }
  }
  trackExposureSuppression(e, t) {
    let n = S[e];
    null != n && "user" === n.kind && this.track(u.j_.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
      experiment: e,
      unit_type: "user",
      suppression_source: t
    }, {
      flush: true
    })
  }
  evaluationIds(e) {
    return Object.values(v[e]).map(e => e.evaluationId).filter(e => null != e)
  }
  shouldTrackExposure(e) {
    let t = D[e];
    return null == t || Date.now() - t > w
  }
  loadTrackedExposures() {
    let e = Chunk433517.K.get(P);
    if (null == module || module.version !== R) return {};
    let t = module.exposures,
      n = Date.now(),
      r = false;
    for (let e in exports) require - exports[module] > w && (delete exports[module], r = true);
    return r && this.saveTrackedExposures(exports), exports
  }
  saveTrackedExposures(e) {
    try {
      l.K.set(P, {
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
    this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), A.clear(), N.clear()
  }
  clearAllServerAssignments() {
    v = {
      user: {},
      guild: {}
    }
  }
  clearAllOverrides() {
    I = {}, T = {}
  }
  clearAllTrackedExposures() {
    D = {}
  }
  getHash(e) {
    return j(e)
  }
  handleFetchStart(e) {
    A.add(e)
  }
  handleFetchSuccess(e, t) {
    A.delete(e), N.add(e), this.setExperimentAssignments(t)
  }
  handleFetchFailure(e) {
    A.delete(e), N.add(e)
  }
  isFetching(e) {
    return A.has(e)
  }
  hasLoaded(e) {
    return N.has(e)
  }
  constructor(...e) {
    super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
  }
}
d(M, "displayName", "ApexExperimentStore"), d(M, "persistKey", "ApexExperimentStore")