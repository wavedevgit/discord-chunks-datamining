/** Chunk was on 31294 **/
/** chunk id: 514661, original params: e,a,d (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function f(e, a) {
  let [d, f] = c.useState(false), n = c.useCallback(async () => {
    null != e && (f(true), await (0, b.m)(e, true), f(false)), null == a || a()
  }, [e, a]), r = (0, t.A)(e);
  return {
    isAdopting: d,
    onAdoptTag: n,
    onEditProfile: c.useCallback(() => {
      null == a || a(), r()
    }, [r, a])
  }
}