/** Chunk was on 5665 **/
/** chunk id: 211640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk946273 = require("./946273.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    message: t,
    user: n,
    guild: m,
    channel: g
  } = e, b = (0, i.e7)([d.Z], () => null != n && null != m && (0, s.CX)(n, m, [d.Z])), {
    messageReference: y
  } = t, _ = (0, i.e7)([u.Z], () => null != y ? u.Z.getMessage(y.channel_id, y.message_id) : null), C = (0, i.e7)([c.Z], () => null != _ ? c.Z.getChannel(_.channel_id) : null), x = (0, i.e7)([c.Z], () => {
    var e, t;
    return null != (t = null == (e = c.Z.getChannel(g.id)) ? true : e.isArchivedThread()) && t
  });
  if (!b) return null;
  let v = null == _ ? f.intl.string(h.default["0IZbwM"]) : f.intl.string(h.default.Uj6oDw),
    O = null == _,
    j = "delete-message-".concat(t.id);
  return (0, r.jsx)(p.Z, {
    text: v,
    icon: a.XHJ,
    onClick: () => {
      null != C && null != _ && o.Z.confirmDelete(C, _, false, {
        isFlagResolved: x,
        moderatorReportChannelId: g.id
      })
    },
    disabled: O,
    color: l.zx.Colors.RED
  }, j)
}