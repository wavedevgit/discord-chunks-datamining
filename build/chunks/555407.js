/** Chunk was on 81899 **/
/** chunk id: 555407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk919796 = require("./919796.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js"),
  Chunk974930 = require("./974930.js");

function b(e, t, n) {
  let a = (0, i.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(e)),
    b = (0, r.A)(n),
    [_, m] = l.useState(null != n && null != a ? (0, f.er)(4, (0, f.X7)(n), new Date(a.scheduled_start_time)) : []);
  l.useEffect(() => {
    if (null == b || null == n || null == a || c().isEqual(b, n)) return;
    let e = (0, f.X7)(n);
    m((0, f.er)(_.length, e, new Date(a.scheduled_start_time)))
  }, [n, _.length, a, b]), l.useEffect(() => {
    if (null == t) return;
    let n = _.map(e => d.default.fromTimestamp(Math.floor(e.getTime() / s.A.Millis.SECOND) * s.A.Millis.SECOND));
    o.A.getGuildEventUserCounts(t, e, n)
  }, [e, t, _]);
  let h = l.useMemo(() => {
    if (null == n || 0 === _.length || (null == a ? true : a.scheduled_start_time) == null) returnfalse;
    let e = new Date;
    e.setFullYear(e.getFullYear() + f.Ze);
    let t = _[_.length - 1],
      l = (0, f.X7)(n).after(t);
    return null != l && l <= e
  }, [n, _, null == a ? true : a.scheduled_start_time]);
  return {
    recurrenceStartTimes: _,
    canViewMoreRecurrences: h,
    updateRecurrenceStartTimes: () => {
      if (null == n || null == a) return;
      let e = (0, f.X7)(n),
        t = _[_.length - 1];
      m([..._, ...(0, f.er)(4, e, t, true)])
    }
  }
}