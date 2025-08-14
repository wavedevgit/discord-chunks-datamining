/** Chunk was on 54273 **/
/** chunk id: 407908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk549879 = require("./549879.jsx"),
  Chunk109590 = require("./109590.js"),
  Chunk189432 = require("./189432.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js");

function b(e) {
  var t, n;
  let {
    channel: b
  } = e, y = i.useContext(h.AnalyticsContext), x = (0, a.Aq)(), j = g.intl.string(m.default["Beo/7u"]), {
    firstMessage: _
  } = (0, o.cl)(b), O = null == _ || null == (t = _.messageSnapshots) ? true : t[0], v = null == O || null == (n = O.moderatorReport) ? true : n.reported_user_id;
  return b.isModeratorReportChannel() && null != v ? (0, r.jsx)(u.ZP.Icon, {
    onClick: () => {
      (0, d.Kh)(b.id), (0, s.i)(), (0, c.r)(b.guild_id, v, b.id, {
        modViewPanel: f.k.INFO,
        sourceLocation: null != location ? location : y.location
      }), x.dispatch(p.CkL.POPOUT_CLOSE)
    },
    tooltip: j,
    icon: l.HI3,
    "aria-label": j
  }) : null
}