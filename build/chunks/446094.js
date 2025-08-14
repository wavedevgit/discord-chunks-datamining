/** Chunk was on 77512 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk300284 = require("./300284.js"),
  Chunk321114 = require("./321114.js"),
  Chunk526761 = require("./526761.js");

function s(e, t) {
  let [n, s] = r.useState(false), c = r.useCallback(async () => {
    s(true), await (0, l.c)(e, true), s(false), null == t || t()
  }, [e, t]), a = (0, i.Z)({
    scrollPosition: o.Y_.GUILD_TAG
  });
  return {
    isAdopting: n,
    onAdoptTag: c,
    onEditProfile: r.useCallback(() => {
      null == t || t(), a()
    }, [a, t])
  }
}