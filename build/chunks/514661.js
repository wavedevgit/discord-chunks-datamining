/** Chunk was on 31294 **/
/** chunk id: 514661, original params: e,a,d (module,exports,require) **/
require.d(exports, {
  A: () => t
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function t(e, a) {
  let [d, t] = b.useState(false), r = b.useCallback(async () => {
    null != e && (t(true), await (0, c.m)(e, true), t(false)), null == a || a()
  }, [e, a]), n = (0, f.A)(e);
  return {
    isAdopting: d,
    onAdoptTag: r,
    onEditProfile: b.useCallback(() => {
      null == a || a(), n()
    }, [n, a])
  }
}