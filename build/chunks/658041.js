/** Chunk was on 91187 **/
/** chunk id: 658041, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => d,
  s: () => l
});
var Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js"),
  Chunk157925 = require("./157925.js");

function d(t, e, n, i) {
  let a = s()(),
    d = new Date(t.scheduled_start_time).getTime(),
    l = {
      start: d - r.VF,
      end: d
    };
  if (a.isBetween(l.start, l.end)) {
    if (null != e) {
      let t = s()(e),
        n = t.isBetween(l.start, l.end),
        u = t.isBetween(s()(d).subtract(r.zV, "days"), d);
      return n || u && !i ? true : r.X_.EVENT_STARTING_SOON
    }
    return r.X_.EVENT_STARTING_SOON
  }
  let _ = u.default.extractTimestamp(t.id),
    c = Math.min((null != n ? n : _) + r.Fc, d);
  if (a.isBetween(_, c) && null == e && !i) return r.X_.NEW_EVENT
}

function l(t) {
  return (null == t ? true : t.entity_type) != null && a.Wq.has(t.entity_type)
}