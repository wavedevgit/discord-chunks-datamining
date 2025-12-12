/** Chunk was on web.js **/
/** chunk id: 178100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk55935 = require("./55935.js");
let s = o().duration(30, "days");

function l(e, t) {
  return r.useMemo(() => (0, a.vc)(t ? null != e.outboundRedemptionEndDate ? o()(e.outboundRedemptionEndDate) : o()(e.endDate).add(s) : o()(e.endDate), "LL"), [e, t])
}