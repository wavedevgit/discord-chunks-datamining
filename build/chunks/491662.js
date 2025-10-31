/** Chunk was on 88742 **/
/** chunk id: 491662, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  o: () => r
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function r(t, n) {
  let e = (0, a.e7)([o.Z], () => o.Z.getNewestTokenForApplication(t)),
    r = (0, a.e7)([o.Z], () => null != t ? o.Z.getFetchStateForApplication(t) : o.M.NOT_FETCHED),
    l = r === o.M.FETCHED,
    {
      disableFetch: c = false
    } = null != n ? n : {};
  return i.useEffect(() => {
    c || r !== o.M.NOT_FETCHED || null != t && s.Z.fetchByApplicationId(t)
  }, [c, r, t]), {
    token: e,
    fetched: l
  }
}