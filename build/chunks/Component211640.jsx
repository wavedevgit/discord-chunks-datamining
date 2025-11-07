/** Chunk was on 13140 **/
/** chunk id: 211640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk819514 = require("./819514.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk43617 = require("./43617.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    message: t,
    user: n,
    guild: m,
    channel: g
  } = e, b = (0, i.e7)([d.Z], () => null != n && null != m && (0, o.CX)(n, m, [d.Z])), {
    messageReference: _
  } = t, y = (0, i.e7)([u.Z], () => null != _ ? u.Z.getMessage(_.channel_id, _.message_id) : null), C = (0, i.e7)([c.Z], () => null != y ? c.Z.getChannel(y.channel_id) : null), v = (0, i.e7)([c.Z], () => {
    var e, t;
    return null != (t = null == (e = c.Z.getChannel(g.id)) ? true : e.isArchivedThread()) && t
  });
  if (!b) return null;
  let O = null == y ? h.intl.string(f.default["0IZbwC"]) : h.intl.string(f.default.Uj6oD4),
    x = null == y,
    E = "delete-message-".concat(t.id);
  return (0, r.jsx)(p.Z, {
    text: O,
    icon: a.XHJ,
    onClick: () => {
      null != C && null != y && s.Z.confirmDelete(C, y, false, {
        isFlagResolved: v,
        moderatorReportChannelId: g.id
      })
    },
    disabled: x,
    color: l.zx.Colors.RED
  }, E)
}