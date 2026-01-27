/** Chunk was on 60667 **/
/** chunk id: 807055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk405269 = require("./405269.js");
let a = l().duration(30, "days");

function o(e, t) {
  return r.useMemo(() => (0, s.i$)(t ? null != e.outboundRedemptionEndDate ? l()(e.outboundRedemptionEndDate) : l()(e.endDate).add(a) : l()(e.endDate), "LL"), [e, t])
}