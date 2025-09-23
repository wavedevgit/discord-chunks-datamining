/** Chunk was on 79521 **/
/** chunk id: 658041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => a
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function a(e, t, n, l) {
  let a = i()(),
    o = new Date(e.scheduled_start_time).getTime(),
    s = {
      start: o - u.VF,
      end: o
    };
  if (a.isBetween(s.start, s.end)) {
    if (null != t) {
      let e = i()(t),
        n = e.isBetween(s.start, s.end),
        r = e.isBetween(i()(o).subtract(u.zV, "days"), o);
      return n || r && !l ? true : u.X_.EVENT_STARTING_SOON
    }
    return u.X_.EVENT_STARTING_SOON
  }
  let c = r.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : c) + u.Fc, o);
  if (a.isBetween(c, d) && null == t && !l) return u.X_.NEW_EVENT
}