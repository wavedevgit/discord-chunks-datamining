/** Chunk was on 56826 **/
/** chunk id: 980671, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk359119 = require("./359119.js"),
  Chunk237292 = require("./237292.js"),
  Chunk13279 = require("./13279.js");
let o = e => {
  let n = (0, a.y0)({
      location: "context-menu-item"
    }),
    t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
    o = (0, s.z)(e.id, "context-menu-item");
  return (null == t ? true : t.isStaff()) === true && n && e.isDM() ? {
    isTier1: (null == o ? true : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
    isTier2: (null == o ? true : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  } : null
}