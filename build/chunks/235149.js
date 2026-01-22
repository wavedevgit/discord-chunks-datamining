/** Chunk was on 15224 **/
/** chunk id: 235149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk317525 = require("./317525.js"),
  Chunk384684 = require("./384684.js");

function o(e) {
  let t = (0, i.bG)([l.A], () => l.A.getSortedRoles(e)),
    n = (0, i.bG)([a.A], () => a.A.getSubscriptionRoles(e));
  return r.useMemo(() => t.filter(e => n.has(e.id)), [t, n])
}