/** Chunk was on 43940 **/
/** chunk id: 664030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk661191 = require("./661191.js"),
  Chunk496092 = require("./496092.js"),
  Chunk974930 = require("./974930.js");

function a(e, t, n, a) {
  let s = (0, i.CI)(t, e),
    d = (0, i.zD)(s.startDate, n.startDate) ? null : n.startDate,
    u = (0, i.zD)(s.endDate, n.endDate) ? null : n.endDate;
  if (null != a)
    if ((0, i.sv)(n, s)) return r.A.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
    else return r.A.updateGuildEventException({
      scheduled_start_time: null == d ? true : d.toISOString(),
      scheduled_end_time: null == u ? true : u.toISOString(),
      is_canceled: a.is_canceled
    }, e.guild_id, e.id, t);
  {
    let n = l.default.extractTimestamp(t);
    return r.A.createGuildEventException({
      original_scheduled_start_time: new Date(n).toISOString(),
      scheduled_start_time: null == d ? true : d.toISOString(),
      scheduled_end_time: null == u ? true : u.toISOString(),
      is_canceled: false
    }, e.guild_id, e.id)
  }
}