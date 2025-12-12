/** Chunk was on 93886 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function l(e, t) {
  let [n, l] = r.useState(false), o = r.useCallback(async () => {
    l(true), await (0, i.c)(e, true), l(false), null == t || t()
  }, [e, t]), c = (0, a.Z)(e);
  return {
    isAdopting: n,
    onAdoptTag: o,
    onEditProfile: r.useCallback(() => {
      null == t || t(), c()
    }, [c, t])
  }
}