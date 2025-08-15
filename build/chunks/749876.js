/** Chunk was on 30202 **/
/** chunk id: 749876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk870822 = require("./870822.js"),
  Chunk881998 = require("./881998.js");

function o(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.getFetchState()),
    n = (0, r.e7)([l.Z], () => e ? l.Z.getNewestTokensForNonChildrenApplications() : l.Z.getNewestTokens()),
    o = i.useMemo(() => null == n ? [] : n.filter(e => (0, a.Z)(e.application)).map(e => e.application), [n]);
  return i.useEffect(() => {
    s.Z.fetch()
  }, []), {
    showLoadingIndicator: t === l.M.FETCHING && null == n,
    slayerSdkApplications: o
  }
}