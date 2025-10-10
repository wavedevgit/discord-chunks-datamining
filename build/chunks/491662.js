/** Chunk was on 93886 **/
/** chunk id: 491662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function o(e, t) {
  let n = (0, r.e7)([a.Z], () => a.Z.getNewestTokenForApplication(e)),
    o = (0, r.e7)([a.Z], () => null != e ? a.Z.getFetchStateForApplication(e) : a.M.NOT_FETCHED),
    s = o === a.M.FETCHED,
    {
      disableFetch: u = false
    } = null != t ? t : {};
  return i.useEffect(() => {
    u || o !== a.M.NOT_FETCHED || null != e && l.Z.fetchByApplicationId(e)
  }, [u, o, e]), {
    token: n,
    fetched: s
  }
}