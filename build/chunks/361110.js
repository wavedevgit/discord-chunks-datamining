/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  f: () => l
}), r(47120);
var n = r(192379),
  i = r(979554);
let l = e => {
  let [t, r] = (0, n.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, n.useCallback)(t => {
      (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && r(t)
    }, [null == e ? void 0 : e.type]),
    handleLeaving: (0, n.useCallback)(() => {
      (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && r(null)
    }, [null == e ? void 0 : e.type])
  }
}