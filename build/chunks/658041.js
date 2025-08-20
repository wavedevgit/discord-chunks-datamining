/** Chunk was on 97755 **/
/** chunk id: 658041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => c
});
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function c(e, t, n, r) {
  let c = l()(),
    o = new Date(e.scheduled_start_time).getTime(),
    a = {
      start: o - u.VF,
      end: o
    };
  if (c.isBetween(a.start, a.end)) {
    if (null != t) {
      let e = l()(t),
        n = e.isBetween(a.start, a.end),
        i = e.isBetween(l()(o).subtract(u.zV, "days"), o);
      return n || i && !r ? true : u.X_.EVENT_STARTING_SOON
    }
    return u.X_.EVENT_STARTING_SOON
  }
  let s = i.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : s) + u.Fc, o);
  if (c.isBetween(s, d) && null == t && !r) return u.X_.NEW_EVENT
}