/** Chunk was on 82124 **/
/** chunk id: 211640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk819514 = require("./819514.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    message: t,
    user: n,
    guild: g,
    channel: m
  } = e, b = (0, i.e7)([d.Z], () => null != n && null != g && (0, o.CX)(n, g, [d.Z])), {
    messageReference: y
  } = t, v = (0, i.e7)([u.Z], () => null != y ? u.Z.getMessage(y.channel_id, y.message_id) : null), O = (0, i.e7)([c.Z], () => null != v ? c.Z.getChannel(v.channel_id) : null), j = (0, i.e7)([c.Z], () => {
    var e, t;
    return null != (t = null == (e = c.Z.getChannel(m.id)) ? true : e.isArchivedThread()) && t
  });
  if (!b) return null;
  let x = null == v ? h.intl.string(f.default["0IZbwC"]) : h.intl.string(f.default.Uj6oD4),
    C = null == v,
    E = "delete-message-".concat(t.id);
  return (0, r.jsx)(p.Z, {
    text: x,
    icon: a.XHJ,
    onClick: () => {
      null != O && null != v && s.Z.confirmDelete(O, v, false, {
        isFlagResolved: j,
        moderatorReportChannelId: m.id
      })
    },
    disabled: C,
    color: l.zx.Colors.RED
  }, E)
}