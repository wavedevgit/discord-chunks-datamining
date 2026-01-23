/** Chunk was on 97492 **/
/** chunk id: 961314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk974930 = require("./974930.js"),
  Chunk103355 = require("./103355.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234944 = require("./234944.js");

function p(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, p = (0, a.Ay)(t, n), h = (0, s.A)(n, t.id);
  if (null == t) return null;
  let f = (null == t ? true : t.scheduled_start_time) != null ? (0, o.j)(h, p.startTime, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Ay.Divider, {
      className: d.yF
    }), (0, r.jsx)(c.L, {
      startTime: p.startTime.toISOString(),
      status: null != f ? f : t.status,
      liveText: u.intl.string(u.t.kM6e4G),
      className: d.aF,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? true : t.id,
      recurrenceId: n
    }), (0, r.jsx)(l.Text, {
      color: "text-default",
      variant: "text-md/normal",
      className: d.eq,
      children: t.name
    })]
  })
}