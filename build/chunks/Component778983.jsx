/** Chunk was on 77870 **/
/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    message: t,
    user: n,
    guild: g,
    channel: m
  } = e, b = (0, l.bG)([d.A], () => null != n && null != g && (0, a.Kd)(n, g, [d.A])), {
    messageReference: A
  } = t, y = (0, l.bG)([u.A], () => null != A ? u.A.getMessage(A.channel_id, A.message_id) : null), _ = (0, l.bG)([c.A], () => null != y ? c.A.getChannel(y.channel_id) : null), O = (0, l.bG)([c.A], () => {
    var e, t;
    return null != (e = null == (t = c.A.getChannel(m.id)) ? true : t.isArchivedThread()) && e
  });
  if (!b) return null;
  let j = null == y ? f.intl.string(h.default["0IZbwC"]) : f.intl.string(h.default.Uj6oD4),
    v = null == y,
    x = "delete-message-".concat(t.id);
  return (0, r.jsx)(p.A, {
    text: j,
    icon: s.ucK,
    onClick: () => {
      null != _ && null != y && o.A.confirmDelete(_, y, false, {
        isFlagResolved: O,
        moderatorReportChannelId: m.id
      })
    },
    disabled: v,
    color: i.$n.Colors.RED
  }, x)
}