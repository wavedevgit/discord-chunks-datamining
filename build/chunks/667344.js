/** Chunk was on web.js **/
/** chunk id: 667344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qb: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk588486 = require("./588486.js"),
  Chunk492435 = require("./492435.js"),
  Chunk872780 = require("./872780.js"),
  Chunk633289 = require("./633289.js"),
  Chunk508825 = require("./508825.js");

function u(e, t) {
  let n = {};
  for (let [t, r] of Object.entries(e)) n[t] = {
    system: o.I.APEX,
    kind: r.unitType === c.Cm.User ? "user" : "guild",
    name: r.name,
    title: r.title,
    variants: r.variants.map(e => ({
      id: e.id,
      label: "Variant ".concat(e.id, ": ").concat(e.label),
      shortLabel: "Variant ".concat(e.id),
      type: e.type
    }))
  };
  for (let [e, r] of Object.entries(t)) null == n[e] && (n[e] = {
    system: o.I.APEX,
    kind: r.kind,
    name: r.name,
    title: r.name,
    variants: Object.entries(r.variations).map(e => {
      let [t, n] = e;
      return {
        id: Number(t),
        label: "Variant ".concat(t),
        shortLabel: "Variant ".concat(t),
        type: a.qK.UNSPECIFIED
      }
    })
  });
  return n
}

function d(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    experimentId: n,
    variantId: r.variantId,
    originalDescriptor: r
  };
  return t
}

function f() {
  (0, r.useEffect)(() => {
    (0, s.e$)(a.dR.APP)
  }, []);
  let e = (0, i.e7)([l.Z], () => l.Z.getExperimentsMetadata()),
    t = (0, i.e7)([l.Z], () => l.Z.getRegisteredExperiments()),
    n = (0, r.useMemo)(() => u(e, t), [e, t]),
    o = (0, i.e7)([l.Z], () => l.Z.getClientOverrides());
  return {
    experiments: n,
    overridesInfo: (0, r.useMemo)(() => d(o), [o])
  }
}