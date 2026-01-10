/** Chunk was on 93886 **/
/** chunk id: 446094, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function d(e, t) {
  let [a, d] = c.useState(false), r = c.useCallback(async () => {
    null != e && (d(true), await (0, n.c)(e, true), d(false)), null == t || t()
  }, [e, t]), i = (0, o.Z)(e);
  return {
    isAdopting: a,
    onAdoptTag: r,
    onEditProfile: c.useCallback(() => {
      null == t || t(), i()
    }, [i, t])
  }
}