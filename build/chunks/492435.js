/** Chunk was on web.js **/
/** chunk id: 492435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u,
  W9: () => s,
  Xz: () => l,
  gK: () => c,
  rX: () => d
}), require("./953529.js");
var Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk987338 = require("./987338.js");
let a = false;

function s(e, t, n) {
  if (a) {
    var s, l;
    let a = null == n ? true : n.location,
      c = (null == n ? true : n.exposureType) === o.a0.AUTO_FALLBACK,
      u = i.Z.hasExperimentTrackedExposure(e, t, a, c);
    r.Z.dispatch({
      type: "TRACK_TRIGGER",
      experimentId: e,
      descriptor: t,
      previouslyTracked: u,
      exposureType: null != (s = null == n ? true : n.exposureType) ? s : "unknown",
      excluded: null != (l = null == n ? true : n.excluded) && l,
      location: null != a ? a : "unknown"
    })
  }
  i.Z.trackExposure({
    experimentId: e,
    descriptor: t,
    location: null == n ? true : n.location,
    location_stack: null == n ? true : n.analyticsLocations,
    fingerprint: null == n ? true : n.fingerprint,
    excluded: null == n ? true : n.excluded,
    exposureType: null == n ? true : n.exposureType
  })
}

function l(e) {
  let {
    id: t,
    title: n,
    description: r,
    buckets: a,
    commonTriggerPoint: s
  } = e;
  return (0, i.V)({
    experimentId: t,
    experimentType: o.xY.USER,
    title: n,
    description: r,
    buckets: a,
    commonTriggerPoint: s
  }), {
    id: t
  }
}

function c(e) {
  let {
    id: t,
    title: n,
    description: r,
    buckets: a,
    commonTriggerPoint: s
  } = e;
  return (0, i.V)({
    experimentId: t,
    experimentType: o.xY.GUILD,
    title: n,
    description: r,
    buckets: a,
    commonTriggerPoint: s
  }), {
    id: t
  }
}
var u = function(e) {
  return e.LEGACY = "legacy", e.APEX = "apex", e
}({});

function d(e, t, n) {
  "legacy" === e ? r.Z.dispatch({
    type: "EXPERIMENT_OVERRIDE_BUCKET",
    experimentId: t,
    experimentBucket: null != n ? n : null
  }) : "apex" === e && (null == n ? r.Z.dispatch({
    type: "APEX_EXPERIMENT_OVERRIDE_DELETE",
    experimentName: t
  }) : r.Z.dispatch({
    type: "APEX_EXPERIMENT_OVERRIDE_CREATE",
    experimentName: t,
    variantId: n
  }))
}