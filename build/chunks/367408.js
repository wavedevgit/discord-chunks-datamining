/** Chunk was on 41837 **/
/** chunk id: 367408, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  M: () => c
}), require("./642613.js"), require("./482853.js");
var Chunk70956 = require("./70956.js"),
  Chunk359119 = require("./359119.js"),
  Chunk716578 = require("./716578.js"),
  Chunk444957 = require("./444957.js"),
  Chunk403485 = require("./403485.js"),
  Chunk276618 = require("./276618.js");
let p = +Chunk70956.Z.Millis.HOUR,
  _ = 12 * Chunk70956.Z.Millis.HOUR;

function c(t) {
  var e;
  let i = (0, r.h)(t),
    n = (0, l.h)(t),
    c = (0, a.o)(t);
  if (null == i || c || (0, o.tX)(n)) return;
  let u = n.some(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    m = n.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? false : 1);
  if (m.length < 1 || ! function(t) {
      let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == t) returntrue;
      let i = new Date(t).getTime() + (e ? p : _);
      return new Date().getTime() >= i
    }(m[0].dismiss_timestamp, u)) return;
  let d = n.filter(t => null == t.dismiss_timestamp);
  return null != (e = d.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? e : d.findLast(t => t.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}