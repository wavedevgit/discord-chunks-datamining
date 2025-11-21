/** Chunk was on web.js **/
/** chunk id: 299021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
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
let O = [Chunk341691.Cm.User],
  v = {
    user: {},
    guild: {}
  },
  I = {},
  T = {},
  S = {},
  A = {},
  C = new Set,
  N = new Set,
  R = "apexTrackedExposures",
  P = 2,
  D = 6048e5,
  w = {},
  L = 2,
  x = {};

function M(e) {
  let t = x[e];
  return null == t && (t = a().v3(e), x[e] = t), t
}
class j extends(r = Chunk442837.ZP.PersistedStore) {
  loadStoredState(e, t) {
    for (let n in null != e && e.version === L && (T = e.clientOverrides, v = e.evaluatedExperiments), S = {}, t) {
      let e = M(n),
        r = t[n];
      S[n] = {
        hashedName: e,
        variantId: r,
        isOverride: true,
        exposureTrackingEnabled: false
      }
    }
    w = this.loadTrackedExposures()
  }
  getState() {
    return {
      version: L,
      evaluatedExperiments: v,
      clientOverrides: T
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
    T = p(f({}, T), {
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
    return T
  }
  getExperimentClientOverride(e) {
    return T[e]
  }
  handleLogout(e) {
    e || this.clearAllServerAssignments(), l.K.remove(R), this.clearAllTrackedExposures()
  }
  registerExperiment(e) {
    I[e.name] = e, null != S[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
  }
  getRegisteredExperiments() {
    return I
  }
  getAssignment(e, t, n) {
    var r;
    let i = null != (r = T[n]) ? r : S[n];
    return null != i ? i : this.getServerAssignment(e, t, n)
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
    var r;
    let i = null != (r = T[n]) ? r : S[n];
    if (null != i) return [true, i];
    let a = v[e][t];
    return null == a ? [true, true] : [a.evaluationId, a.assignments[M(n)]]
  }
  trackExperimentExposure(e, t, n, r, i, a) {
    let o = M("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
    this.shouldTrackExposure(o) && "user" === r && (this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation_id: e,
      experiment: t,
      exposure_location: n,
      unit_type: r,
      tracked_variation_id: a
    }, {
      flush: true
    }), w[o] = Date.now(), this.saveTrackedExposures(w))
  }
  trackCommonTriggerPointExposures(e) {
    for (let t of this.evaluationIds("user")) {
      let n = M("".concat(t, "|").concat(e));
      this.shouldTrackExposure(n) && (this.track(u.j_.EXPERIMENT_USER_EVALUATION_EXPOSED, {
        evaluation_id: t,
        exposure_location: e,
        unit_type: "user"
      }, {
        flush: true
      }), w[n] = Date.now(), this.saveTrackedExposures(w))
    }
  }
  trackExposureSuppression(e, t) {
    let n = I[e];
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
    let t = w[e];
    return null == t || Date.now() - t > D
  }
  loadTrackedExposures() {
    let e = Chunk433517.K.get(R);
    if (null == module || module.version !== P) return {};
    let t = module.exposures,
      n = Date.now(),
      r = false;
    for (let e in exports) require - exports[module] > D && (delete exports[module], r = true);
    return r && this.saveTrackedExposures(exports), exports
  }
  saveTrackedExposures(e) {
    try {
      l.K.set(R, {
        version: P,
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
    this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), C.clear(), N.clear()
  }
  clearAllServerAssignments() {
    v = {
      user: {},
      guild: {}
    }
  }
  clearAllOverrides() {
    T = {}, S = {}
  }
  clearAllTrackedExposures() {
    w = {}
  }
  getHash(e) {
    return M(e)
  }
  handleFetchStart(e) {
    C.add(e)
  }
  handleFetchSuccess(e, t) {
    C.delete(e), N.add(e), this.setExperimentAssignments(t)
  }
  handleFetchFailure(e) {
    C.delete(e), N.add(e)
  }
  isFetching(e) {
    return C.has(e)
  }
  hasLoaded(e) {
    return N.has(e)
  }
  constructor(...e) {
    super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
  }
}
d(j, "displayName", "ApexExperimentStore"), d(j, "persistKey", "ApexExperimentStore")