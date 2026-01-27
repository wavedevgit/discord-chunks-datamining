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
  } = e, E = null != n, {
    canManageGuildEvent: f
  } = (0, o.nr)(null != g ? g : d), [A, y] = (0, r.yK)([u.Ay], () => [u.Ay.isActive(t), u.Ay.getGuildScheduledEvent(t)]), p = (0, c.A)(n, null == y ? true : y.id), b = null != y && f(y);
  return E && (null == p ? true : p.is_canceled) && b && (!A || E) ? (0, l.jsx)(i.Drp, {
    id: s.intl.string(s.t.b8606G),
    label: s.intl.string(s.t.b8606G),
    action: () => {
      null != n && null != p && (0, a.A)(p, d.id, t, n)
    }
  }) : null
}