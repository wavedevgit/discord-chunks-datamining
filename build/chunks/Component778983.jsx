/** Chunk was on 1113 **/
/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    message: t,
    user: n,
    guild: f,
    channel: m
  } = e, b = (0, l.bG)([d.A], () => null != n && null != f && (0, a.Kd)(n, f, [d.A])), {
    messageReference: A
  } = t, y = (0, l.bG)([u.A], () => null != A ? u.A.getMessage(A.channel_id, A.message_id) : null), O = (0, l.bG)([c.A], () => null != y ? c.A.getChannel(y.channel_id) : null), _ = (0, l.bG)([c.A], () => {
    var e, t;
    return null != (e = null == (t = c.A.getChannel(m.id)) ? true : t.isArchivedThread()) && e
  });
  if (!b) return null;
  let x = null == y ? g.intl.string(p.default["0IZbwC"]) : g.intl.string(p.default.Uj6oD4),
    j = null == y,
    v = "delete-message-".concat(t.id);
  return (0, r.jsx)(h.A, {
    text: x,
    icon: s.ucK,
    onClick: () => {
      null != O && null != y && o.A.confirmDelete(O, y, false, {
        isFlagResolved: _,
        moderatorReportChannelId: m.id
      })
    },
    disabled: j,
    color: i.$n.Colors.RED
  }, v)
}