/** Chunk was on web.js **/
/** chunk id: 749876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk870822 = require("./870822.js"),
  Chunk881998 = require("./881998.js");

function l(e, t) {
  let n = (0, i.e7)([s.default], () => s.default.getFetchState()),
    l = (0, i.e7)([s.default], () => e ? s.default.getNewestTokensForNonChildrenApplications() : s.default.getNewestTokens()),
    c = r.useMemo(() => null == l ? [] : l.filter(e => (0, o.Z)(e.application)).map(e => e.application), [l]);
  return r.useEffect(() => {
    t || a.Z.fetch()
  }, [t]), {
    showLoadingIndicator: n !== s.FetchState.FETCHED && (null == l || 0 === l.length),
    slayerSdkApplications: c
  }
}