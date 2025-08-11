/** Chunk was on 56826 **/
/** chunk id: 100932, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  x: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk359119 = require("./359119.js"),
  Chunk237292 = require("./237292.js"),
  Chunk13279 = require("./13279.js");
let d = t => {
  let n = (0, s.y0)({
      location: "context-menu-item"
    }),
    e = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
    d = (0, a.z)(t.id, "context-menu-item");
  return (null == e ? true : e.isStaff()) === true && n && t.isDM() ? {
    isTier1: (null == d ? true : d.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
    isTier2: (null == d ? true : d.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  } : null
}