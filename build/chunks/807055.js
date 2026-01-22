/** Chunk was on web.js **/
/** chunk id: 807055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk405269 = require("./405269.js");
let o = a().duration(30, "days");

function l(e, t) {
  return r.useMemo(() => (0, s.i$)(t ? null != e.outboundRedemptionEndDate ? a()(e.outboundRedemptionEndDate) : a()(e.endDate).add(o) : a()(e.endDate), "LL"), [e, t])
}