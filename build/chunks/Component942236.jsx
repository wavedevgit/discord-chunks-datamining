/** Chunk was on 84018 **/
/** chunk id: 942236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
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

function A(e, t, n, A) {
  var m;
  let {
    icon: O,
    title: v,
    body: E
  } = (0, s.TB)(e, t, n), {
    trackView: x,
    trackClick: S
  } = (0, f.Y)(g.KS.TextChat, {
    notif_type: g.KS.TextChat,
    notif_user_id: null == (m = t.author) ? true : m.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: O,
    title: v,
    body: E,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: y.intl.string(y.t["+MJm3w"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      A && (0, a.Ak)(c.cH, c.pD), x()
    },
    onNotificationClick: () => {
      if (l.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
        let n = (0, p.getPID)();
        d.default.isInstanceLocked() ? (S("unlock"), r.A.setInputLocked(false, n)) : (S("jump"), (0, o.pX)(b.BVt.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.Ay.focus())
      } else(0, o.pX)(b.BVt.CHANNEL(e.guild_id, e.id)), S("jump"), d.default.isInstanceLocked() && r.A.setInstanceLocked(false)
    },
    onDismissClick: () => {
      S("dismiss")
    }
  }
}