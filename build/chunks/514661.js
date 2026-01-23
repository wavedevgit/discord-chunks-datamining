/** Chunk was on 31294 **/
/** chunk id: 514661, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function o(e, t) {
  let [a, o] = r.useState(false), l = r.useCallback(async () => {
    null != e && (o(true), await (0, n.m)(e, true), o(false)), null == t || t()
  }, [e, t]), i = (0, _.A)(e);
  return {
    isAdopting: a,
    onAdoptTag: l,
    onEditProfile: r.useCallback(() => {
      null == t || t(), i()
    }, [i, t])
  }
}