/** Chunk was on web.js **/
/** chunk id: 658041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function s(e, t, n, r) {
  let s = i()(),
    l = new Date(e.scheduled_start_time).getTime(),
    c = {
      start: l - a.VF,
      end: l
    };
  if (s.isBetween(c.start, c.end)) {
    if (null != t) {
      let e = i()(t),
        n = e.isBetween(c.start, c.end),
        o = e.isBetween(i()(l).subtract(a.zV, "days"), l);
      return n || o && !r ? true : a.X_.EVENT_STARTING_SOON
    }
    return a.X_.EVENT_STARTING_SOON
  }
  let u = o.default.extractTimestamp(e.id),
    d = Math.min((null != n ? n : u) + a.Fc, l);
  if (s.isBetween(u, d) && null == t && !r) return a.X_.NEW_EVENT
}