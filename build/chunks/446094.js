/** Chunk was on 93886 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function o(e, t) {
  let [n, o] = r.useState(false), a = r.useCallback(async () => {
    o(true), await (0, i.c)(e, true), o(false), null == t || t()
  }, [e, t]), s = (0, l.Z)(e);
  return {
    isAdopting: n,
    onAdoptTag: a,
    onEditProfile: r.useCallback(() => {
      null == t || t(), s()
    }, [s, t])
  }
}