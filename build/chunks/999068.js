/** Chunk was on 21738 **/
/** chunk id: 999068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js");

function c(e) {
  let t = (0, i.bG)([o.default], () => o.default.getUser(e)),
    n = (0, i.yK)([a.A], () => {
      var t, n;
      return null != (t = null == (n = a.A.getMutualGuilds(e)) ? true : n.map(e => e.guild)) ? t : []
    });
  return r.useEffect(() => {
    0 === n.length && null != t && null == a.A.getMutualGuilds(e) && l.h.wait(() => (0, s.A)(e, true, {
      withMutualGuilds: true
    }))
  }, [n, t, e]), n
}