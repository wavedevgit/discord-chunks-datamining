/** Chunk was on 7869 **/
/** chunk id: 587018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk698441 = require("./698441.js"),
  Chunk684084 = require("./684084.js"),
  Chunk722260 = require("./722260.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: d,
    channel: g
  } = e, y = null != n, {
    canManageGuildEvent: f
  } = (0, u.nr)(null != g ? g : d), [b, p] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(t), o.Ay.getGuildScheduledEvent(t)]), A = (0, c.A)(n, null == p ? true : p.id), v = null != p && f(p);
  return y && (null == A ? true : A.is_canceled) && v && (!b || y) ? (0, l.jsx)(i.Drp, {
    id: s.intl.string(s.t.b8606G),
    label: s.intl.string(s.t.b8606G),
    action: () => {
      null != n && null != A && (0, a.A)(A, d.id, t, n)
    }
  }) : null
}