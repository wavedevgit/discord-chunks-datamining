/** Chunk was on web.js **/
/** chunk id: 667344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => u
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk588486 = require("./588486.js"),
  Chunk492435 = require("./492435.js"),
  Chunk872780 = require("./872780.js"),
  Chunk633289 = require("./633289.js"),
  Chunk508825 = require("./508825.js");

function u() {
  (0, Chunk73800.useEffect)(() => {
    (0, Chunk872780.e)(Chunk588486.dR.APP)
  }, []);
  let e = (0, Chunk442837.e7)([Chunk633289.Z], () => Chunk633289.Z.getExperimentsMetadata()),
    t = (0, Chunk442837.e7)([Chunk633289.Z], () => Chunk633289.Z.getRegisteredExperiments()),
    n = (0, Chunk73800.useMemo)(() => {
      let n = {};
      for (let [t, r] of Object.entries(module)) require[exports] = {
        system: Chunk492435.I.APEX,
        kind: Chunk73800.unitType === Chunk508825.Cm.User ? "user" : "guild",
        name: Chunk73800.name,
        title: Chunk73800.title,
        variants: Chunk73800.variants.map(e => ({
          id: e.id,
          label: "Variant ".concat(e.id, ": ").concat(e.label),
          shortLabel: "Variant ".concat(e.id),
          type: e.type
        }))
      };
      for (let [e, r] of Object.entries(exports)) null == require[module] && (require[module] = {
        system: Chunk492435.I.APEX,
        kind: Chunk73800.kind,
        name: Chunk73800.name,
        title: Chunk73800.name,
        variants: Object.entries(Chunk73800.variations).map(e => {
          let [t, n] = e;
          return {
            id: Number(t),
            label: "Variant ".concat(t),
            shortLabel: "Variant ".concat(t),
            type: o.k3.UNSPECIFIED
          }
        })
      });
      return require
    }, [module, exports]),
    u = (0, Chunk442837.e7)([Chunk633289.Z], () => Chunk633289.Z.getClientOverrides());
  return {
    experiments: require,
    overridesInfo: (0, Chunk73800.useMemo)(() => {
      let e = {};
      for (let [t, n] of Object.entries(u)) module[exports] = {
        experimentId: exports,
        variantId: require.variantId,
        originalDescriptor: require
      };
      return module
    }, [u])
  }
}