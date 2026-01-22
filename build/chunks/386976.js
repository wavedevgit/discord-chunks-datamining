/** Chunk was on web.js **/
/** chunk id: 386976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  op: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk949355 = require("./949355.js"),
  Chunk102609 = require("./102609.js"),
  Chunk620233 = require("./620233.js"),
  Chunk217222 = require("./217222.js"),
  Chunk375441 = require("./375441.js");

function u(e, t) {
  let n = {};
  for (let [t, r] of Object.entries(e)) n[t] = {
    system: s.l5.APEX,
    kind: r.unitType === c.ni.User ? "user" : "guild",
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
    system: s.l5.APEX,
    kind: r.kind,
    name: r.name,
    title: r.name,
    variants: Object.entries(r.variations).map(e => {
      let [t, n] = e;
      return {
        id: Number(t),
        label: "Variant ".concat(t),
        shortLabel: "Variant ".concat(t),
        type: a.FZ.UNSPECIFIED
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
    (0, o.sD)(a.Um.APP)
  }, []);
  let e = (0, i.bG)([l.A], () => l.A.getExperimentsMetadata()),
    t = (0, i.bG)([l.A], () => l.A.getRegisteredExperiments()),
    n = (0, r.useMemo)(() => u(e, t), [e, t]),
    s = (0, i.bG)([l.A], () => l.A.getClientOverrides());
  return {
    experiments: n,
    overridesInfo: (0, r.useMemo)(() => d(s), [s])
  }
}