/** Chunk was on 31294 **/
/** chunk id: 514661, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function r(e, t) {
  let [a, r] = _.useState(false), l = _.useCallback(async () => {
    null != e && (r(true), await (0, o.m)(e, true), r(false)), null == t || t()
  }, [e, t]), i = (0, n.A)(e);
  return {
    isAdopting: a,
    onAdoptTag: l,
    onEditProfile: _.useCallback(() => {
      null == t || t(), i()
    }, [i, t])
  }
}