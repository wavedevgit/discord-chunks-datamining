/** Chunk was on 93886 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function a(e, t) {
  let [n, a] = i.useState(false), l = i.useCallback(async () => {
    a(true), await (0, r.c)(e, true), a(false), null == t || t()
  }, [e, t]), s = (0, o.Z)(e);
  return {
    isAdopting: n,
    onAdoptTag: l,
    onEditProfile: i.useCallback(() => {
      null == t || t(), s()
    }, [s, t])
  }
}