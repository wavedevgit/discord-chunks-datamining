/** Chunk was on web.js **/
/** chunk id: 220478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./747238.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk102609 = require("./102609.js"),
  Chunk49463 = require("./49463.js"),
  Chunk688151 = require("./688151.js");

function l(e) {
  for (let t of e) {
    let e = s.A.getUserExperimentDescriptor(t);
    if (null != e) return [t, e]
  }
  return null
}

function c(e) {
  let t = l(e);
  if (null != t) {
    let [e, n] = t;
    return (0, a.LQ)(e, n), n
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
    return s.A.getUserExperimentBucket(e) === t
  },
  experimentDescriptorEquals: function(e, t) {
    if (null == e && null == t || e === t) returntrue;
    if (null == e && null != t || null != e && null == t) returnfalse;
    if (null != e && null != t) {
      if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) returnfalse;
      if (e.type === o.Vh.USER && t.type === o.Vh.USER) return i().isEqual(e.context, t.context)
    }
    returntrue
  },
  trackExposureToFirstEligibleUserExperiment: c,
  getExperimentBucketName: function(e) {
    let t;
    return e === o.RE.CONTROL ? "Control" : e === o.RE.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e)
  },
  getRecentExperimentBuckets: function(e, t) {
    return Object.entries(e).reduce((e, n) => {
      let [r, i] = n;
      return u(r, t) && i > o.RE.CONTROL && (e[r] = i), e
    }, {})
  }
}