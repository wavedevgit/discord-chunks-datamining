/** Chunk was on web.js **/
/** chunk id: 897669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk854698 = require("./854698.js"),
  Chunk390966 = require("./390966.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801576 = require("./801576.js");

function f(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, f = (0, s.ZP)(t, n), _ = (0, a.Z)(n, t.id);
  if (null == t) return null;
  let p = (null == t ? true : t.scheduled_start_time) != null ? (0, l.lh)(_, f.startTime, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.ZP.Divider, {
      className: d.divider
    }), (0, r.jsx)(c.z, {
      startTime: f.startTime.toISOString(),
      status: null != p ? p : t.status,
      liveText: u.intl.string(u.t.kM6e4O),
      className: d.eventSchedule,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? true : t.id,
      recurrenceId: n
    }), (0, r.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: d.eventName,
      children: t.name
    })]
  })
}