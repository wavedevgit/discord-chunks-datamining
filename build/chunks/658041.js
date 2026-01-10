/** Chunk was on 81985 **/
/** chunk id: 658041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => o
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function o(e, t, n, r) {
  let o = i()(),
    s = new Date(e.scheduled_start_time).getTime(),
    c = {
      start: s - a.VF,
      end: s
    };
  if (o.isBetween(c.start, c.end)) {
    if (null != t) {
      let e = i()(t),
        n = e.isBetween(c.start, c.end),
        l = e.isBetween(i()(s).subtract(a.zV, "days"), s);
      return n || l && !r ? true : a.X_.EVENT_STARTING_SOON
    }
    return a.X_.EVENT_STARTING_SOON
  }
  let u = l.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : u) + a.Fc, s);
  if (o.isBetween(u, d) && null == t && !r) return a.X_.NEW_EVENT
}