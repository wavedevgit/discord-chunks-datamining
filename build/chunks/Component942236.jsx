/** Chunk was on 84018 **/
/** chunk id: 942236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk684013 = require("./684013.js"),
  Chunk742984 = require("./742984.js"),
  Chunk833551 = require("./833551.js"),
  Chunk976860 = require("./976860.js"),
  Chunk400492 = require("./400492.js"),
  Chunk845618 = require("./845618.js"),
  Chunk256415 = require("./256415.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk9302 = require("./9302.js"),
  Chunk684748 = require("./684748.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n, _) {
  var b;
  let {
    icon: A,
    title: O,
    body: v
  } = (0, s.TB)(e, t, n), {
    trackView: E,
    trackClick: x
  } = (0, f.Y)(y.KS.TextChat, {
    notif_type: y.KS.TextChat,
    notif_user_id: null == (b = t.author) ? true : b.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: A,
    title: O,
    body: v,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: m.intl.string(m.t["+MJm3w"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      _ && (0, a.Ak)(c.cH, c.pD), E()
    },
    onNotificationClick: () => {
      if (l.default.isOverlayOOPEnabledForPid((0, h.getPID)())) {
        let n = (0, h.getPID)();
        d.default.isInstanceLocked() ? (x("unlock"), r.A.setInputLocked(false, n)) : (x("jump"), (0, o.pX)(g.BVt.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && p.Ay.focus())
      } else(0, o.pX)(g.BVt.CHANNEL(e.guild_id, e.id)), x("jump"), d.default.isInstanceLocked() && r.A.setInstanceLocked(false)
    },
    onDismissClick: () => {
      x("dismiss")
    }
  }
}