/** Chunk was on web.js **/
/** chunk id: 102609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LQ: () => s,
  Ut: () => c,
  l5: () => u,
  t$: () => d,
  wh: () => l
}), require("./228524.js");
var Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk688151 = require("./688151.js");
let o = false;

function s(e, t, n) {
  if (o) {
    var s, l;
    let o = null == n ? true : n.location,
      c = (null == n ? true : n.exposureType) === a.vf.AUTO_FALLBACK,
      u = i.A.hasExperimentTrackedExposure(e, t, o, c);
    r.h.dispatch({
      type: "TRACK_TRIGGER",
      experimentId: e,
      descriptor: t,
      previouslyTracked: u,
      exposureType: null != (s = null == n ? true : n.exposureType) ? s : "unknown",
      excluded: null != (l = null == n ? true : n.excluded) && l,
      location: null != o ? o : "unknown"
    })
  }
  i.A.trackExposure({
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
    buckets: o,
    commonTriggerPoint: s
  } = e;
  return (0, i.N)({
    experimentId: t,
    experimentType: a.Vh.USER,
    title: n,
    description: r,
    buckets: o,
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
    buckets: o,
    commonTriggerPoint: s
  } = e;
  return (0, i.N)({
    experimentId: t,
    experimentType: a.Vh.GUILD,
    title: n,
    description: r,
    buckets: o,
    commonTriggerPoint: s
  }), {
    id: t
  }
}
var u = function(e) {
  return e.LEGACY = "legacy", e.APEX = "apex", e
}({});

function d(e, t, n) {
  "legacy" === e ? r.h.dispatch({
    type: "EXPERIMENT_OVERRIDE_BUCKET",
    experimentId: t,
    experimentBucket: null != n ? n : null
  }) : "apex" === e && (null == n ? r.h.dispatch({
    type: "APEX_EXPERIMENT_OVERRIDE_DELETE",
    experimentName: t
  }) : r.h.dispatch({
    type: "APEX_EXPERIMENT_OVERRIDE_CREATE",
    experimentName: t,
    variantId: n
  }))
}