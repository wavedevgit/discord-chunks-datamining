/** Chunk was on 45620 **/
/** chunk id: 937510, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk952639 = require("./952639.js"),
  a = require.n(Chunk952639),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js"),
  Chunk724994 = require("./724994.js");
let c = e => {
  let t = (0, i.e7)([o.Z], () => o.Z.purchases);
  return (0, n.useMemo)(() => {
    let t = [
      [],
      [],
      [],
      []
    ];
    for (let r of e.values()) {
      let {
        isPurchased: e,
        isPartiallyOwnedBundle: n,
        isPartiallyOwnedVariantsGroup: l
      } = (0, s.U)(o.Z, r);
      t[n ? 2 : l ? 1 : 3 * !!e].push(r)
    }
    return a()(t)
  }, [t, e])
}