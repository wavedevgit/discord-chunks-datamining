/** Chunk was on 44669 **/
/** chunk id: 357801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => a
});
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk661191 = require("./661191.js"),
  Chunk988794 = require("./988794.js");

function a(e, t, n, r) {
  let a = l()(),
    o = new Date(e.scheduled_start_time).getTime(),
    c = {
      start: o - s.Oz,
      end: o
    };
  if (a.isBetween(c.start, c.end)) {
    if (null != t) {
      let e = l()(t),
        n = e.isBetween(c.start, c.end),
        i = e.isBetween(l()(o).subtract(s.nN, "days"), o);
      return n || i && !r ? true : s.w0.EVENT_STARTING_SOON
    }
    return s.w0.EVENT_STARTING_SOON
  }
  let u = i.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : u) + s.aj, o);
  if (a.isBetween(u, d) && null == t && !r) return s.w0.NEW_EVENT
}