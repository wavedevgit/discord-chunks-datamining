/** Chunk was on 97492 **/
/** chunk id: 170428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk473503 = require("./473503.js"),
  Chunk706752 = require("./706752.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

function m(e) {
  var t, n;
  let {
    channel: m
  } = e, A = l.useContext(f.AnalyticsContext), y = (0, c.aL)(), O = b.intl.string(g.default["Beo/7v"]), {
    firstMessage: j
  } = (0, a.OA)(m), v = null == j || null == (t = j.messageSnapshots) ? true : t[0], x = null == v || null == (n = v.moderatorReport) ? true : n.reported_user_id;
  return m.isModeratorReportChannel() && null != x ? (0, r.jsx)(o.Ay.Icon, {
    onClick: () => {
      (0, d.iN)(m.id), (0, u.A)(), (0, s.z)(m.guild_id, x, m.id, {
        modViewPanel: h.g.INFO,
        sourceLocation: null != location ? location : A.location
      }), y.dispatch(p.jej.POPOUT_CLOSE)
    },
    tooltip: O,
    icon: i.quN,
    "aria-label": O
  }) : null
}