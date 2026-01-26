/** Chunk was on 76486 **/
/** chunk id: 278941, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  e: () => m
}), require("./638769.js"), require("./775443.js");
var Chunk927813 = require("./927813.js"),
  Chunk349435 = require("./349435.js"),
  Chunk557279 = require("./557279.js"),
  Chunk338510 = require("./338510.js"),
  Chunk168447 = require("./168447.js"),
  Chunk151119 = require("./151119.js");
let a = +Chunk927813.A.Millis.HOUR,
  p = 12 * Chunk927813.A.Millis.HOUR;

function m(t) {
  var e;
  let i = (0, n.u)(t),
    s = (0, r.Y)(t),
    m = (0, o.S)(t);
  if (null == i || m || (0, l.S)(s)) return;
  let u = s.some(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_1),
    d = s.filter(t => null != t.dismiss_timestamp).sort((t, e) => e.dismiss_timestamp < t.dismiss_timestamp ? false : 1);
  if (d.length < 1 || ! function(t) {
      let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == t) returntrue;
      let i = new Date(t).getTime() + (e ? a : p);
      return new Date().getTime() >= i
    }(d[0].dismiss_timestamp, u)) return;
  let c = s.filter(t => null == t.dismiss_timestamp);
  return null != (e = c.findLast(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? e : c.findLast(t => t.type === _._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}