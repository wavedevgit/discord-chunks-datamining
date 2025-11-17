/** Chunk was on 53195 **/
/** chunk id: 294299, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk978085 = require("./978085.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js");

function u(n, t) {
  let i = (0, e.e7)([r.Z], () => r.Z.getLaunchOptions(n.id, n.branchId)),
    u = (0, e.e7)([l.Z], () => l.Z.getActiveLaunchOptionId(n.id, n.branchId));
  return i.length < 2 ? null : i.map(i => (0, a.jsx)(d.sNh, {
    id: i.id,
    label: i.name,
    action: a => {
      i.id !== u && c.ul(n.id, n.branchId, i.id), null == t || t(a)
    }
  }, i.id))
}