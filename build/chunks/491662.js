/** Chunk was on 93886 **/
/** chunk id: 491662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function a(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.getNewestTokenForApplication(e)),
    a = (0, i.e7)([o.Z], () => null != e ? o.Z.getFetchStateForApplication(e) : o.M.NOT_FETCHED),
    s = a === o.M.FETCHED,
    {
      disableFetch: c = false
    } = null != t ? t : {};
  return r.useEffect(() => {
    c || a !== o.M.NOT_FETCHED || null != e && l.Z.fetchByApplicationId(e)
  }, [c, a, e]), {
    token: n,
    fetched: s
  }
}