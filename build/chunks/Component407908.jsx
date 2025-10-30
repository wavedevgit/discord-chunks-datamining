/** Chunk was on 63962 **/
/** chunk id: 407908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk109590 = require("./109590.js"),
  Chunk189432 = require("./189432.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68468 = require("./68468.js");

function b(e) {
  var t, n;
  let {
    channel: b
  } = e, _ = i.useContext(p.AnalyticsContext), y = (0, c.Aq)(), x = g.intl.string(m.default["Beo/7v"]), {
    firstMessage: O
  } = (0, a.cl)(b), j = null == O || null == (t = O.messageSnapshots) ? true : t[0], v = null == j || null == (n = j.moderatorReport) ? true : n.reported_user_id;
  return b.isModeratorReportChannel() && null != v ? (0, r.jsx)(o.ZP.Icon, {
    onClick: () => {
      (0, u.Kh)(b.id), (0, d.i)(), (0, s.r)(b.guild_id, v, b.id, {
        modViewPanel: f.k.INFO,
        sourceLocation: null != location ? location : _.location
      }), y.dispatch(h.CkL.POPOUT_CLOSE)
    },
    tooltip: x,
    icon: l.HI3,
    "aria-label": x
  }) : null
}