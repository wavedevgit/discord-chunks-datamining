/** Chunk was on 88742 **/
/** chunk id: 491662, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  o: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function o(t, n) {
  let e = (0, a.e7)([l.Z], () => l.Z.getNewestTokenForApplication(t)),
    o = (0, a.e7)([l.Z], () => null != t ? l.Z.getFetchStateForApplication(t) : l.M.NOT_FETCHED),
    r = o === l.M.FETCHED,
    {
      disableFetch: c = false
    } = null != n ? n : {};
  return i.useEffect(() => {
    c || o !== l.M.NOT_FETCHED || null != t && s.Z.fetchByApplicationId(t)
  }, [c, o, t]), {
    token: e,
    fetched: r
  }
}