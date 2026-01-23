/** Chunk was on 42944 **/
/** chunk id: 667049, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk622543 = require("./622543.js"),
  Chunk61881 = require("./61881.js");

function s(e) {
  let a = (0, t.bG)([l.default], () => {
      let a = l.default.getId();
      return null != e && a === e
    }, [e]),
    n = (0, t.bG)([r.A], () => r.A.getPendingWidgets()),
    s = (0, t.yK)([i.A], () => {
      var a;
      if (null == e) return [];
      let n = i.A.getUserProfile(e);
      return null != (a = null == n ? true : n.widgets) ? a : []
    }, [e]);
  return a && null !== n ? n : s
}