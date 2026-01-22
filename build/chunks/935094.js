/** Chunk was on 98763 **/
/** chunk id: 935094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js");
let a = e => {
  let [t, n] = (0, r.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, r.useCallback)(t => {
      (null == e ? true : e.type) !== l.R.VARIANTS_GROUP || n(t)
    }, [null == e ? true : e.type]),
    handleLeaving: (0, r.useCallback)(() => {
      (null == e ? true : e.type) !== l.R.VARIANTS_GROUP || n(null)
    }, [null == e ? true : e.type])
  }
}