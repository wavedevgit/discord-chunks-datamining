/** Chunk was on 50796 **/
/** chunk id: 71876, original params: e,t,n (module,exports,require) **/
function l(e, t, n) {
  e.assets[0].p = t;
  let l = e.layers.findIndex(e => "flag" === e.nm);
  return e.layers[l].shapes[0].it.forEach((t, r) => {
    "gr" === e.layers[l].shapes[0].it[r].ty && e.layers[l].shapes[0].it[r].it.findIndex(e => "fl" === e.ty) >= 0 && (e.layers[l].shapes[0].it[r].it[1].c.k = [...n.map(e => e / 256), 1])
  }), e
}
require.d(exports, {
  A: () => l
}), require("./896048.js")