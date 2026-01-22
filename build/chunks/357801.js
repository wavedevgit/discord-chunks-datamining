/** Chunk was on 97492 **/
/** chunk id: 357801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => s
});
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk661191 = require("./661191.js"),
  Chunk988794 = require("./988794.js");

function s(e, t, n, r) {
  let s = l()(),
    o = new Date(e.scheduled_start_time).getTime(),
    c = {
      start: o - a.Oz,
      end: o
    };
  if (s.isBetween(c.start, c.end)) {
    if (null != t) {
      let e = l()(t),
        n = e.isBetween(c.start, c.end),
        i = e.isBetween(l()(o).subtract(a.nN, "days"), o);
      return n || i && !r ? true : a.w0.EVENT_STARTING_SOON
    }
    return a.w0.EVENT_STARTING_SOON
  }
  let u = i.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : u) + a.aj, o);
  if (s.isBetween(u, d) && null == t && !r) return a.w0.NEW_EVENT
}