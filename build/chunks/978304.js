/** Chunk was on 2827 **/
/** chunk id: 978304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk875444 = require("./875444.js"),
  Chunk546183 = require("./546183.js");

function o(e, t) {
  let n = (0, i.bG)([a.default], () => a.default.getFetchState()),
    o = (0, i.bG)([a.default], () => e ? a.default.getNewestTokensForNonChildrenApplications() : a.default.getNewestTokens()),
    c = r.useMemo(() => null == o ? [] : o.filter(e => (0, s.A)(e.application)).map(e => e.application), [o]);
  return r.useEffect(() => {
    t || l.A.fetch()
  }, [t]), {
    showLoadingIndicator: n !== a.FetchState.FETCHED && (null == o || 0 === o.length),
    slayerSdkApplications: c
  }
}