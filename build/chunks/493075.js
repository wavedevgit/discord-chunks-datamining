/** Chunk was on web.js **/
/** chunk id: 493075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  sI: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk588486 = require("./588486.js"),
  Chunk499533 = require("./499533.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk987338 = require("./987338.js");

function u(e) {
  return e === c.NZ.CONTROL ? a.qK.CONTROL : e === c.NZ.NOT_ELIGIBLE ? a.qK.UNSPECIFIED : a.qK.TREATMENT
}

function d(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    system: s.I.LEGACY,
    kind: r.type === c.xY.USER ? "user" : "guild",
    name: n,
    title: r.title,
    variants: r.buckets.map((e, t) => ({
      id: e.valueOf(),
      label: "object" == typeof r.description ? r.description[t] : o.Z.getExperimentBucketName(e),
      shortLabel: o.Z.getExperimentBucketName(e),
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

function _() {
  let e = (0, Chunk442837.cj)([Chunk353926.Z], () => Chunk353926.Z.getRegisteredExperiments()),
    t = (0, Chunk442837.cj)([Chunk353926.Z], () => Chunk353926.Z.getAllExperimentOverrideDescriptors());
  return {
    experiments: (0, Chunk647438.useMemo)(() => d(module), [module]),
    overridesInfo: (0, Chunk647438.useMemo)(() => f(exports), [exports])
  }
}