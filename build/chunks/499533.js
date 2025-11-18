/** Chunk was on web.js **/
/** chunk id: 499533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./35282.js");
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

function u(e, t) {
  try {
    let [n, r] = e.split("-");
    if (null == r) returnfalse;
    let i = r.slice(0, 2);
    return new Date("".concat(n, "-").concat(i, "-01")) > t
  } catch (e) {
    returnfalse
  }
}
let d = {
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
  },
  getRecentExperimentBuckets: function(e, t) {
    return Object.entries(e).reduce((e, n) => {
      let [r, i] = n;
      return u(r, t) && i > s.NZ.CONTROL && (e[r] = i), e
    }, {})
  }
}