/** Chunk was on 20501 **/
/** chunk id: 178100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk55935 = require("./55935.js");
let l = s().duration(30, "days");

function o(e, t) {
  return i.useMemo(() => (0, a.vc)(t ? null != e.outboundRedemptionEndDate ? s()(e.outboundRedemptionEndDate) : s()(e.endDate).add(l) : s()(e.endDate), "LL"), [e, t])
}