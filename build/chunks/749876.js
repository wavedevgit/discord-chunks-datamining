/** Chunk was on web.js **/
/** chunk id: 749876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk870822 = require("./870822.js"),
  Chunk881998 = require("./881998.js");

function l(e) {
  let t = (0, i.e7)([s.default], () => s.default.getFetchState()),
    n = (0, i.e7)([s.default], () => e ? s.default.getNewestTokensForNonChildrenApplications() : s.default.getNewestTokens()),
    l = r.useMemo(() => null == n ? [] : n.filter(e => (0, o.Z)(e.application)).map(e => e.application), [n]);
  return r.useEffect(() => {
    a.Z.fetch()
  }, []), {
    showLoadingIndicator: t === s.FetchState.FETCHING && null == n,
    slayerSdkApplications: l
  }
}