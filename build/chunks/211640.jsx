/** Chunk was on web.js **/
/** chunk id: 211640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk257559 = require("./257559.js"),
  Chunk946273 = require("./946273.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.js"),
  Chunk130883 = require("./130883.js"),
  Chunk388032 = require("./388032.js");

function h(e) {
  let {
    message: t,
    user: n,
    guild: h,
    channel: m
  } = e, g = (0, i.e7)([d.Z], () => null != n && null != h && (0, l.CX)(n, h, [d.Z])), {
    messageReference: E
  } = t, b = (0, i.e7)([u.Z], () => null != E ? u.Z.getMessage(E.channel_id, E.message_id) : null), y = (0, i.e7)([c.Z], () => null != b ? c.Z.getChannel(b.channel_id) : null), O = (0, i.e7)([c.Z], () => {
    var e, t;
    return null != (t = null == (e = c.Z.getChannel(m.id)) ? true : e.isArchivedThread()) && t
  });
  if (!g) return null;
  let v = () => {
      null != y && null != b && s.Z.confirmDelete(y, b, false, {
        isFlagResolved: O,
        moderatorReportChannelId: m.id
      })
    },
    I = null == b ? p.intl.string(_.default["0IZbwM"]) : p.intl.string(_.default.Uj6oDw),
    T = null == b,
    S = "delete-message-".concat(t.id);
  return <f.Z text={I} icon={a.XHJ} onClick={v} disabled={T} color={o.zx.Colors.RED} />
}