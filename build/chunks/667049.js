/** Chunk was on 21738 **/
/** chunk id: 667049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk622543 = require("./622543.js"),
  Chunk61881 = require("./61881.js");

function s(e) {
  let t = (0, r.bG)([i.default], () => {
      let t = i.default.getId();
      return null != e && t === e
    }, [e]),
    n = (0, r.bG)([a.A], () => a.A.getPendingWidgets()),
    s = (0, r.yK)([l.A], () => {
      var t;
      if (null == e) return [];
      let n = l.A.getUserProfile(e);
      return null != (t = null == n ? true : n.widgets) ? t : []
    }, [e]);
  return t && null !== n ? n : s
}