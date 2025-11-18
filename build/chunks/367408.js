/** Chunk was on 64789 **/
/** chunk id: 367408, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  M: () => u
}), require("./642613.js"), require("./482853.js");
var Chunk70956 = require("./70956.js"),
  Chunk359119 = require("./359119.js"),
  Chunk716578 = require("./716578.js"),
  Chunk513646 = require("./513646.js"),
  Chunk403485 = require("./403485.js"),
  Chunk276618 = require("./276618.js");
let _ = +Chunk70956.Z.Millis.HOUR,
  p = 12 * Chunk70956.Z.Millis.HOUR;

function u(t) {
  var e;
  let i = (0, r.h)(t),
    n = (0, l.h)(t),
    u = (0, a.o)(t);
  if (null == i || u || (0, o.tX)(n)) return;
  let c = n.some(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    m = n.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? false : 1);
  if (m.length < 1 || ! function(t) {
      let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == t) returntrue;
      let i = new Date(t).getTime() + (e ? _ : p);
      return new Date().getTime() >= i
    }(m[0].dismiss_timestamp, c)) return;
  let d = n.filter(t => null == t.dismiss_timestamp);
  return null != (e = d.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? e : d.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}