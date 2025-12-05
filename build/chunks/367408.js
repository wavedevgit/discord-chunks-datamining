/** Chunk was on 89522 **/
/** chunk id: 367408, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => u
}), require("./642613.js"), require("./482853.js");
var Chunk70956 = require("./70956.js"),
  Chunk359119 = require("./359119.js"),
  Chunk716578 = require("./716578.js"),
  Chunk513646 = require("./513646.js"),
  Chunk403485 = require("./403485.js"),
  Chunk276618 = require("./276618.js");
let c = +Chunk70956.Z.Millis.HOUR,
  d = 12 * Chunk70956.Z.Millis.HOUR;

function u(e) {
  var t;
  let n = (0, a.h)(e),
    r = (0, s.h)(e),
    u = (0, o.o)(e);
  if (null == n || u || (0, l.tX)(r)) return;
  let p = r.some(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    h = r.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? false : 1);
  if (h.length < 1 || ! function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == e) returntrue;
      let n = new Date(e).getTime() + (t ? c : d);
      return new Date().getTime() >= n
    }(h[0].dismiss_timestamp, p)) return;
  let f = r.filter(e => null == e.dismiss_timestamp);
  return null != (t = f.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}