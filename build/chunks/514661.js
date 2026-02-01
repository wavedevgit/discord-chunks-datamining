/** Chunk was on 90228 **/
/** chunk id: 514661, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function i(e, t) {
  let [n, i] = a.useState(false), s = a.useCallback(async () => {
    null != e && (i(true), await (0, l.m)(e, true), i(false)), null == t || t()
  }, [e, t]), o = (0, r.A)(e);
  return {
    isAdopting: n,
    onAdoptTag: s,
    onEditProfile: a.useCallback(() => {
      null == t || t(), o()
    }, [o, t])
  }
}