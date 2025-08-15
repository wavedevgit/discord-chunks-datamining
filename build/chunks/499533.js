/** Chunk was on web.js **/
/** chunk id: 499533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk987338 = require("./987338.js");

function l(e) {
  for (let t of e) {
    let e = o.Z.getUserExperimentDescriptor(t);
    if (null != e) return [t, e]
  }
  return null
}

function c(e) {
  let t = l(e);
  if (null != t) {
    let [e, n] = t;
    return (0, a.W9)(e, n), n
  }
}
let u = {
  getFirstEligibleUserExperiment: l,
  isInExperimentBucket: function(e, t) {
    return o.Z.getUserExperimentBucket(e) === t
  },
  experimentDescriptorEquals: function(e, t) {
    if (null == e && null == t || e === t) returntrue;
    if (null == e && null != t || null != e && null == t) returnfalse;
    if (null != e && null != t) {
      if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) returnfalse;
      if (e.type === s.xY.USER && t.type === s.xY.USER) return i().isEqual(e.context, t.context)
    }
    returntrue
  },
  trackExposureToFirstEligibleUserExperiment: c,
  getExperimentBucketName: function(e) {
    let t;
    return e === s.NZ.CONTROL ? "Control" : e === s.NZ.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e)
  }
}