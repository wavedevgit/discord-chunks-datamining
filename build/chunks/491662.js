/** Chunk was on 88742 **/
/** chunk id: 491662, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  o: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function l(t, n) {
  let e = (0, a.e7)([o.default], () => o.default.getNewestTokenForApplication(t)),
    l = (0, a.e7)([o.default], () => null != t ? o.default.getFetchStateForApplication(t) : o.FetchState.NOT_FETCHED),
    r = l === o.FetchState.FETCHED,
    {
      disableFetch: c = false
    } = null != n ? n : {};
  return i.useEffect(() => {
    c || l !== o.FetchState.NOT_FETCHED || null != t && s.Z.fetchByApplicationId(t)
  }, [c, l, t]), {
    token: e,
    fetched: r
  }
}