/** Chunk was on 31294 **/
/** chunk id: 514661, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function f(e, a) {
  let [t, f] = d.useState(false), r = d.useCallback(async () => {
    null != e && (f(true), await (0, c.m)(e, true), f(false)), null == a || a()
  }, [e, a]), n = (0, b.A)(e);
  return {
    isAdopting: t,
    onAdoptTag: r,
    onEditProfile: d.useCallback(() => {
      null == a || a(), n()
    }, [n, a])
  }
}