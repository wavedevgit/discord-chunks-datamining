/** Chunk was on web.js **/
/** chunk id: 493075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => d
}), require("./388685.js"), require("./953529.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk588486 = require("./588486.js"),
  Chunk499533 = require("./499533.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk987338 = require("./987338.js");

function u(e) {
  return e === c.NZ.CONTROL ? a.k3.CONTROL : e === c.NZ.NOT_ELIGIBLE ? a.k3.UNSPECIFIED : a.k3.TREATMENT
}

function d() {
  let e = (0, Chunk442837.cj)([Chunk353926.Z], () => Chunk353926.Z.getRegisteredExperiments()),
    t = (0, Chunk442837.cj)([Chunk353926.Z], () => Chunk353926.Z.getAllExperimentOverrideDescriptors());
  return {
    experiments: (0, Chunk647438.useMemo)(() => {
      let t = {};
      for (let [n, r] of Object.entries(module)) exports[require] = {
        system: Chunk492435.I.LEGACY,
        kind: Chunk647438.type === Chunk987338.xY.USER ? "user" : "guild",
        name: require,
        title: Chunk647438.title,
        variants: Chunk647438.buckets.map((e, t) => ({
          id: e.valueOf(),
          label: "object" == typeof r.description ? r.description[t] : o.Z.getExperimentBucketName(e),
          shortLabel: o.Z.getExperimentBucketName(e),
          type: u(e)
        }))
      };
      return exports
    }, [module]),
    overridesInfo: (0, Chunk647438.useMemo)(() => {
      let e = {};
      for (let [n, r] of Object.entries(exports)) module[require] = {
        experimentId: require,
        variantId: Chunk647438.bucket.valueOf(),
        originalDescriptor: Chunk647438
      };
      return module
    }, [exports])
  }
}