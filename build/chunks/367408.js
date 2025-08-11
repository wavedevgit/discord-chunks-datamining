/** Chunk was on 49152 **/
/** chunk id: 367408, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => d
}), require("./642613.js"), require("./482853.js");
var Chunk70956 = require("./70956.js"),
  Chunk359119 = require("./359119.js"),
  Chunk116347 = require("./116347.js"),
  Chunk513646 = require("./513646.js"),
  Chunk403485 = require("./403485.js"),
  Chunk276618 = require("./276618.js");
let c = +Chunk70956.Z.Millis.HOUR,
  u = 12 * Chunk70956.Z.Millis.HOUR;

function d(e) {
  var t;
  let n = (0, a.h)(e),
    r = (0, s.h)(e),
    d = (0, o.o)(e);
  if (null == n || d || (0, l.tX)(r)) return;
  let h = r.some(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    p = r.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? false : 1);
  if (p.length < 1 || ! function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == e) returntrue;
      let n = new Date(e).getTime() + (t ? c : u);
      return new Date().getTime() >= n
    }(p[0].dismiss_timestamp, h)) return;
  let f = r.filter(e => null == e.dismiss_timestamp);
  return null != (t = f.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}