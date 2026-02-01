/** Chunk was on 93169 **/
/** chunk id: 937624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk349435 = require("./349435.js"),
  Chunk617641 = require("./617641.js"),
  Chunk452082 = require("./452082.js");
let o = e => {
  let t = (0, a.Lc)({
      location: "context-menu-item"
    }),
    n = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
    o = (0, s.j)(e.id, "context-menu-item");
  return (null == n ? true : n.isStaff()) === true && t && e.isDM() ? {
    isTier1: (null == o ? true : o.type) === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
    isTier2: (null == o ? true : o.type) === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
  } : null
}