/** Chunk was on 93886 **/
/** chunk id: 446094, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function f(e, a) {
  let [t, f] = n.useState(false), r = n.useCallback(async () => {
    null != e && (f(true), await (0, d.c)(e, true), f(false)), null == a || a()
  }, [e, a]), c = (0, o.Z)(e);
  return {
    isAdopting: t,
    onAdoptTag: r,
    onEditProfile: n.useCallback(() => {
      null == a || a(), c()
    }, [c, a])
  }
}