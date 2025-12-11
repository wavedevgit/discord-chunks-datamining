/** Chunk was on 98932 **/
/** chunk id: 367408, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  M: () => c
}), require("./642613.js"), require("./482853.js");
var Chunk70956 = require("./70956.js"),
  Chunk359119 = require("./359119.js"),
  Chunk716578 = require("./716578.js"),
  Chunk513646 = require("./513646.js"),
  Chunk403485 = require("./403485.js"),
  Chunk276618 = require("./276618.js");
let p = +Chunk70956.Z.Millis.HOUR,
  f = 12 * Chunk70956.Z.Millis.HOUR;

function c(t) {
  var e;
  let i = (0, a.h)(t),
    n = (0, r.h)(t),
    c = (0, l.o)(t);
  if (null == i || c || (0, o.tX)(n)) return;
  let d = n.some(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    u = n.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? false : 1);
  if (u.length < 1 || ! function(t) {
      let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == t) returntrue;
      let i = new Date(t).getTime() + (e ? p : f);
      return new Date().getTime() >= i
    }(u[0].dismiss_timestamp, d)) return;
  let b = n.filter(t => null == t.dismiss_timestamp);
  return null != (e = b.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? e : b.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}