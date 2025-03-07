/** Chunk was on 24389 **/
n.d(t, {
  f: () => o
}), n(47120);
var r = n(192379),
  i = n(979554);
let o = e => {
  let [t, n] = (0, r.useState)(null);
  return {
    previewingVariantIndex: t,
    handleEntering: (0, r.useCallback)(t => {
      (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && n(t)
    }, [null == e ? void 0 : e.type]),
    handleLeaving: (0, r.useCallback)(() => {
      (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && n(null)
    }, [null == e ? void 0 : e.type])
  }
}