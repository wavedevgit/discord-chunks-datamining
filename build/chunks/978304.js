/** Chunk was on web.js **/
/** chunk id: 978304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk875444 = require("./875444.js"),
  Chunk546183 = require("./546183.js");

function l(e, t) {
  let n = (0, i.bG)([o.default], () => o.default.getFetchState()),
    l = (0, i.bG)([o.default], () => e ? o.default.getNewestTokensForNonChildrenApplications() : o.default.getNewestTokens()),
    c = r.useMemo(() => null == l ? [] : l.filter(e => (0, s.A)(e.application)).map(e => e.application), [l]);
  return r.useEffect(() => {
    t || a.A.fetch()
  }, [t]), {
    showLoadingIndicator: n !== o.FetchState.FETCHED && (null == l || 0 === l.length),
    slayerSdkApplications: c
  }
}