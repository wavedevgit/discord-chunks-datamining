/** Chunk was on 470 **/
/** chunk id: 830394, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk495279 = require("./495279.js"),
  Chunk894017 = require("./894017.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: d,
    channel: g
  } = t, f = null != n, {
    canManageGuildEvent: b
  } = (0, o.XJ)(null != g ? g : d), [p, v] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]), E = (0, a.Z)(n, null == v ? true : v.id), y = null != v && b(v);
  return f && (null == E ? true : E.is_canceled) && y && (!p || f) ? (0, l.jsx)(i.sNh, {
    id: s.intl.string(s.t.b8606G),
    label: s.intl.string(s.t.b8606G),
    action: () => {
      null != n && null != E && (0, c.Z)(E, d.id, e, n)
    }
  }) : null
}