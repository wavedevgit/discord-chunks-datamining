/** Chunk was on 42743 **/
/** chunk id: 658041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => c
});
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function c(e, t, n, l) {
  let c = r()(),
    E = new Date(e.scheduled_start_time).getTime(),
    d = {
      start: E - i.VF,
      end: E
    };
  if (c.isBetween(d.start, d.end)) {
    if (null != t) {
      let e = r()(t),
        n = e.isBetween(d.start, d.end),
        u = e.isBetween(r()(E).subtract(i.zV, "days"), E);
      return n || u && !l ? true : i.X_.EVENT_STARTING_SOON
    }
    return i.X_.EVENT_STARTING_SOON
  }
  let o = u.default.extractTimestamp(e.id),
    s = Math.min((null != n ? n : o) + i.Fc, E);
  if (c.isBetween(o, s) && null == t && !l) return i.X_.NEW_EVENT
}