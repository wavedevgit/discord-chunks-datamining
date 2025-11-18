/** Chunk was on 71264 **/
/** chunk id: 897669, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk854698 = require("./854698.js"),
  Chunk390966 = require("./390966.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258652 = require("./258652.js");

function p(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, p = (0, o.ZP)(t, n), h = (0, a.Z)(n, t.id);
  if (null == t) return null;
  let f = (null == t ? true : t.scheduled_start_time) != null ? (0, s.lh)(h, p.startTime, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.ZP.Divider, {
      className: d.divider
    }), (0, i.jsx)(c.z, {
      startTime: p.startTime.toISOString(),
      status: null != f ? f : t.status,
      liveText: u.intl.string(u.t.kM6e4G),
      className: d.eventSchedule,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? true : t.id,
      recurrenceId: n
    }), (0, i.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: d.eventName,
      children: t.name
    })]
  })
}