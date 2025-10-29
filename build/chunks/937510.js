/** Chunk was on 45620 **/
/** chunk id: 937510, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk952639 = require("./952639.js"),
  i = require.n(Chunk952639),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js"),
  Chunk724994 = require("./724994.js");
let c = e => {
  let t = (0, s.e7)([a.Z], () => a.Z.purchases);
  return (0, r.useMemo)(() => {
    let t = [
      [],
      [],
      [],
      []
    ];
    for (let n of e.values()) {
      let {
        isPurchased: e,
        isPartiallyOwnedBundle: r,
        isPartiallyOwnedVariantsGroup: l
      } = (0, o.U)(a.Z, n);
      t[r ? 2 : l ? 1 : 3 * !!e].push(n)
    }
    return i()(t)
  }, [t, e])
}