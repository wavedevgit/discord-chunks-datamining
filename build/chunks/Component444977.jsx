/** Chunk was on 33055 **/
/** chunk id: 444977, original params: n,t,a (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk110782 = require("./110782.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js");

function u(n, t) {
  let a = (0, d.bG)([l.A], () => l.A.getLaunchOptions(n.id, n.branchId)),
    u = (0, d.bG)([r.A], () => r.A.getActiveLaunchOptionId(n.id, n.branchId));
  return a.length < 2 ? null : a.map(a => (0, i.jsx)(e.Drp, {
    id: a.id,
    label: a.name,
    action: i => {
      a.id !== u && c.Wp(n.id, n.branchId, a.id), null == t || t(i)
    }
  }, a.id))
}