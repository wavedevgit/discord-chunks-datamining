/** Chunk was on 93952 **/
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
      start: o - u.Oz,
      end: o
    };
  if (a.isBetween(c.start, c.end)) {
    if (null != t) {
      let e = l()(t),
        n = e.isBetween(c.start, c.end),
        i = e.isBetween(l()(o).subtract(u.nN, "days"), o);
      return n || i && !r ? true : u.w0.EVENT_STARTING_SOON
    }
    return u.w0.EVENT_STARTING_SOON
  }
  let d = i.default.extractTimestamp(e.id),
    s = Math.min((null != n ? n : d) + u.aj, o);
  if (a.isBetween(d, s) && null == t && !r) return u.w0.NEW_EVENT
}