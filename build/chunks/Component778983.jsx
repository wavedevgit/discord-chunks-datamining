/** Chunk was on 61344 **/
/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk351001 = require("./351001.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk102817 = require("./102817.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    message: t,
    user: n,
    guild: m,
    channel: g
  } = e, A = (0, r.bG)([d.A], () => null != n && null != m && (0, s.Kd)(n, m, [d.A])), {
    messageReference: b
  } = t, _ = (0, r.bG)([u.A], () => null != b ? u.A.getMessage(b.channel_id, b.message_id) : null), y = (0, r.bG)([c.A], () => null != _ ? c.A.getChannel(_.channel_id) : null), v = (0, r.bG)([c.A], () => {
    var e, t;
    return null != (e = null == (t = c.A.getChannel(g.id)) ? true : t.isArchivedThread()) && e
  });
  if (!A) return null;
  let E = null == _ ? f.intl.string(p.default["0IZbwC"]) : f.intl.string(p.default.Uj6oD4),
    O = null == _,
    C = "delete-message-".concat(t.id);
  return (0, l.jsx)(h.A, {
    text: E,
    icon: a.ucK,
    onClick: () => {
      null != y && null != _ && o.A.confirmDelete(y, _, false, {
        isFlagResolved: v,
        moderatorReportChannelId: g.id
      })
    },
    disabled: O,
    color: i.$n.Colors.RED
  }, C)
}