/** Chunk was on 5665 **/
/** chunk id: 407908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, _ = i.useContext(p.AnalyticsContext), y = (0, a.Aq)(), C = m.intl.string(g.default["Beo/7u"]), {
    firstMessage: x
  } = (0, s.cl)(b), v = null == x || null == (t = x.messageSnapshots) ? true : t[0], O = null == v || null == (n = v.moderatorReport) ? true : n.reported_user_id;
  return b.isModeratorReportChannel() && null != O ? (0, r.jsx)(u.ZP.Icon, {
    onClick: () => {
      (0, d.Kh)(b.id), (0, o.i)(), (0, c.r)(b.guild_id, O, b.id, {
        modViewPanel: f.k.INFO,
        sourceLocation: null != location ? location : _.location
      }), y.dispatch(h.CkL.POPOUT_CLOSE)
    },
    tooltip: C,
    icon: l.HI3,
    "aria-label": C
  }) : null
}