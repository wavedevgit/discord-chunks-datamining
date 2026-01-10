/** Chunk was on 56826 **/
/** chunk id: 100932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk359119 = require("./359119.js"),
  Chunk237292 = require("./237292.js"),
  Chunk13279 = require("./13279.js");
let s = e => {
  let t = (0, a.y0)({
      location: "context-menu-item"
    }),
    n = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
    s = (0, o.z)(e.id, "context-menu-item");
  return (null == n ? true : n.isStaff()) === true && t && e.isDM() ? {
    isTier1: (null == s ? true : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
    isTier2: (null == s ? true : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  } : null
}