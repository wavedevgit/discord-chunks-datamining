/** Chunk was on 76850 **/
/** chunk id: 278941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  e: () => p
}), require("./638769.js"), require("./775443.js");
var Chunk927813 = require("./927813.js"),
  Chunk349435 = require("./349435.js"),
  Chunk557279 = require("./557279.js"),
  Chunk338510 = require("./338510.js"),
  Chunk168447 = require("./168447.js"),
  Chunk151119 = require("./151119.js");
let c = +Chunk927813.A.Millis.HOUR,
  u = 12 * Chunk927813.A.Millis.HOUR;

function p(e) {
  var t;
  let r = (0, s.u)(e),
    n = (0, l.Y)(e),
    p = (0, a.S)(e);
  if (null == r || p || (0, o.S)(n)) return;
  let _ = n.some(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1),
    b = n.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? false : 1);
  if (b.length < 1 || ! function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == e) returntrue;
      let r = new Date(e).getTime() + (t ? c : u);
      return new Date().getTime() >= r
    }(b[0].dismiss_timestamp, _)) return;
  let f = n.filter(e => null == e.dismiss_timestamp);
  return null != (t = f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}