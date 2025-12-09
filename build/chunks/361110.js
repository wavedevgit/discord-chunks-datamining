/** Chunk was on 75393 **/
/** chunk id: 361110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js");
let i = e => {
  let [t, n] = (0, a.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, a.useCallback)(t => {
      (null == e ? true : e.type) === r.Z.VARIANTS_GROUP && n(t)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, a.useCallback)(() => {
      (null == e ? true : e.type) === r.Z.VARIANTS_GROUP && n(null)
    }, [null == e ? true : e.type])
  }
}