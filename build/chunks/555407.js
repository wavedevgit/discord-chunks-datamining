/** Chunk was on 51354 **/
/** chunk id: 555407, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk919796 = require("./919796.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js"),
  Chunk974930 = require("./974930.js");

function v(t, e, n) {
  let i = (0, s.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(t)),
    v = (0, a.A)(n),
    [m, g] = l.useState(null != n && null != i ? (0, h.er)(4, (0, h.X7)(n), new Date(i.scheduled_start_time)) : []);
  l.useEffect(() => {
    if (null == v || null == n || null == i || r().isEqual(v, n)) return;
    let t = (0, h.X7)(n);
    g((0, h.er)(m.length, t, new Date(i.scheduled_start_time)))
  }, [n, m.length, i, v]), l.useEffect(() => {
    if (null == e) return;
    let n = m.map(t => c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND));
    o.A.getGuildEventUserCounts(e, t, n)
  }, [t, e, m]);
  let f = l.useMemo(() => {
    if (null == n || 0 === m.length || (null == i ? true : i.scheduled_start_time) == null) returnfalse;
    let t = new Date;
    t.setFullYear(t.getFullYear() + h.Ze);
    let e = m[m.length - 1],
      l = (0, h.X7)(n).after(e);
    return null != l && l <= t
  }, [n, m, null == i ? true : i.scheduled_start_time]);
  return {
    recurrenceStartTimes: m,
    canViewMoreRecurrences: f,
    updateRecurrenceStartTimes: () => {
      if (null == n || null == i) return;
      let t = (0, h.X7)(n),
        e = m[m.length - 1];
      g([...m, ...(0, h.er)(4, t, e, true)])
    }
  }
}