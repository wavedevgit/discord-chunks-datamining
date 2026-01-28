/** Chunk was on 78528 **/
/** chunk id: 170428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  var t, n;
  let {
    channel: b
  } = e, A = l.useContext(p.AnalyticsContext), y = (0, c.aL)(), _ = g.intl.string(m.default["Beo/7v"]), {
    firstMessage: O
  } = (0, s.OA)(b), j = null == O || null == (t = O.messageSnapshots) ? true : t[0], v = null == j || null == (n = j.moderatorReport) ? true : n.reported_user_id;
  return b.isModeratorReportChannel() && null != v ? (0, r.jsx)(o.Ay.Icon, {
    onClick: () => {
      (0, d.iN)(b.id), (0, u.A)(), (0, a.z)(b.guild_id, v, b.id, {
        modViewPanel: f.g.INFO,
        sourceLocation: null != location ? location : A.location
      }), y.dispatch(h.jej.POPOUT_CLOSE)
    },
    tooltip: _,
    icon: i.quN,
    "aria-label": _
  }) : null
}