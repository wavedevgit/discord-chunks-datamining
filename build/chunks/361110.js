/** Chunk was on 78825 **/
/** chunk id: 361110, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  f: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js");
let i = e => {
  let [n, t] = (0, r.useState)(null);
  return {
    previewingVariantIndex: n,
    handleEntering: (0, r.useCallback)(n => {
      (null == e ? true : e.type) === l.Z.VARIANTS_GROUP && t(n)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, r.useCallback)(() => {
      (null == e ? true : e.type) === l.Z.VARIANTS_GROUP && t(null)
    }, [null == e ? true : e.type])
  }
}