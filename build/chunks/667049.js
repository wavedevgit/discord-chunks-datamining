/** Chunk was on 42944 **/
/** chunk id: 667049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk622543 = require("./622543.js"),
  Chunk61881 = require("./61881.js");

function s(e) {
  let t = (0, a.bG)([l.default], () => {
      let t = l.default.getId();
      return null != e && t === e
    }, [e]),
    n = (0, a.bG)([r.A], () => r.A.getPendingWidgets()),
    s = (0, a.yK)([i.A], () => {
      var t;
      if (null == e) return [];
      let n = i.A.getUserProfile(e);
      return null != (t = null == n ? true : n.widgets) ? t : []
    }, [e]);
  return t && null !== n ? n : s
}