/** Chunk was on 9007 **/
/** chunk id: 46887, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk485386 = require("./485386.js"),
  Chunk687476 = require("./687476.js");

function s(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.getSortedRoles(e)),
    i = (0, r.e7)([a.Z], () => a.Z.getSubscriptionRoles(e));
  return n.useMemo(() => t.filter(e => i.has(e.id)), [t, i])
}