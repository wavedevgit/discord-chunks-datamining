/** Chunk was on 97492 **/
/** chunk id: 278941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => d
}), require("./638769.js"), require("./775443.js");
var Chunk927813 = require("./927813.js"),
  Chunk349435 = require("./349435.js"),
  Chunk557279 = require("./557279.js"),
  Chunk338510 = require("./338510.js"),
  Chunk168447 = require("./168447.js"),
  Chunk151119 = require("./151119.js");
let c = +Chunk927813.A.Millis.HOUR,
  u = 12 * Chunk927813.A.Millis.HOUR;

function d(e) {
  var t;
  let n = (0, s.u)(e),
    r = (0, a.Y)(e),
    d = (0, o.S)(e);
  if (null == n || d || (0, i.S)(r)) return;
  let p = r.some(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
    h = r.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? false : 1);
  if (h.length < 1 || ! function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      if (null == e) returntrue;
      let n = new Date(e).getTime() + (t ? c : u);
      return new Date().getTime() >= n
    }(h[0].dismiss_timestamp, p)) return;
  let f = r.filter(e => null == e.dismiss_timestamp);
  return null != (t = f.findLast(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast(e => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
}