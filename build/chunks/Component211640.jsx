/** Chunk was on 42300 **/
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
  Chunk304726 = require("./304726.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    message: t,
    user: n,
    guild: m,
    channel: g
  } = e, b = (0, r.e7)([d.Z], () => null != n && null != m && (0, s.CX)(n, m, [d.Z])), {
    messageReference: C
  } = t, y = (0, r.e7)([u.Z], () => null != C ? u.Z.getMessage(C.channel_id, C.message_id) : null), _ = (0, r.e7)([c.Z], () => null != y ? c.Z.getChannel(y.channel_id) : null), v = (0, r.e7)([c.Z], () => {
    var e, t;
    return null != (t = null == (e = c.Z.getChannel(g.id)) ? true : e.isArchivedThread()) && t
  });
  if (!b) return null;
  let x = null == y ? f.intl.string(h.default["0IZbwM"]) : f.intl.string(h.default.Uj6oDw),
    O = null == y,
    j = "delete-message-".concat(t.id);
  return (0, i.jsx)(p.Z, {
    text: x,
    icon: a.XHJ,
    onClick: () => {
      null != _ && null != y && o.Z.confirmDelete(_, y, false, {
        isFlagResolved: v,
        moderatorReportChannelId: g.id
      })
    },
    disabled: O,
    color: l.zx.Colors.RED
  }, j)
}