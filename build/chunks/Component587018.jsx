/** Chunk was on 7869 **/
/** chunk id: 587018, original params: t,e,n (module,exports,require) **/
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

function d(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: d,
    channel: g
  } = t, E = null != n, {
    canManageGuildEvent: f
  } = (0, u.nr)(null != g ? g : d), [A, y] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]), p = (0, c.A)(n, null == y ? true : y.id), b = null != y && f(y);
  return E && (null == p ? true : p.is_canceled) && b && (!A || E) ? (0, l.jsx)(i.Drp, {
    id: s.intl.string(s.t.b8606G),
    label: s.intl.string(s.t.b8606G),
    action: () => {
      null != n && null != p && (0, a.A)(p, d.id, e, n)
    }
  }) : null
}