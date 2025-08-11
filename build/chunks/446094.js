/** Chunk was on 72762 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk300284 = require("./300284.js"),
  Chunk321114 = require("./321114.js"),
  Chunk526761 = require("./526761.js");

function o(e, t) {
  let [n, o] = r.useState(false), a = r.useCallback(async () => {
    o(true), await (0, l.c)(e, true), o(false), null == t || t()
  }, [e, t]), c = (0, i.Z)({
    scrollPosition: s.Y_.GUILD_TAG
  });
  return {
    isAdopting: n,
    onAdoptTag: a,
    onEditProfile: r.useCallback(() => {
      null == t || t(), c()
    }, [c, t])
  }
}