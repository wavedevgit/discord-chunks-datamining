/** Chunk was on web.js **/
/** chunk id: 32523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hI: () => p
}), require("./896048.js"), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk949355 = require("./949355.js"),
  Chunk220478 = require("./220478.js"),
  Chunk102609 = require("./102609.js"),
  Chunk49463 = require("./49463.js"),
  Chunk688151 = require("./688151.js");

function u(e) {
  return e === c.RE.CONTROL ? a.FZ.CONTROL : e === c.RE.NOT_ELIGIBLE ? a.FZ.UNSPECIFIED : a.FZ.TREATMENT
}

function d(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    system: o.l5.LEGACY,
    kind: r.type === c.Vh.USER ? "user" : "guild",
    name: n,
    title: r.title,
    variants: r.buckets.map((e, t) => ({
      id: e.valueOf(),
      label: "object" == typeof r.description ? r.description[t] : s.A.getExperimentBucketName(e),
      shortLabel: s.A.getExperimentBucketName(e),
      type: u(e)
    }))
  };
  return t
}

function f(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    experimentId: n,
    variantId: r.bucket.valueOf(),
    originalDescriptor: r
  };
  return t
}

function p() {
  let e = (0, i.cf)([l.A], () => l.A.getRegisteredExperiments()),
    t = (0, i.cf)([l.A], () => l.A.getAllExperimentOverrideDescriptors());
  return {
    experiments: (0, r.useMemo)(() => d(e), [e]),
    overridesInfo: (0, r.useMemo)(() => f(t), [t])
  }
}