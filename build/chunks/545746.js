/** Chunk was on 21738 **/
/** chunk id: 545746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk961250 = require("./961250.js"),
  Chunk26508 = require("./26508.js");

function o() {
  let {
    ignoreCacheTTL: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, s.Qs)("useMaybeFetchProgramRewards"), n = (0, i.bG)([l.default], () => (0, s.mY)(l.default.getCurrentUser())), o = t && n;
  r.useEffect(() => {
    o && (e ? (0, a.tT)() : (0, a.Ay)())
  }, [o, e])
}