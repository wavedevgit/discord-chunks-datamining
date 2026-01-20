/** Chunk was on 63141 **/
/** chunk id: 998033, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk13245 = require("./13245.js"),
  Chunk864060 = require("./864060.js"),
  Chunk371651 = require("./371651.js"),
  Chunk703656 = require("./703656.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js"),
  Chunk237997 = require("./237997.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n, y) {
  var v;
  let {
    icon: O,
    title: E,
    body: x
  } = (0, s.Xi)(e, t, n), {
    trackView: S,
    trackClick: Z
  } = (0, p.R)(m.n0.TextChat, {
    notif_type: m.n0.TextChat,
    notif_user_id: null == (v = t.author) ? true : v.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: O,
    title: E,
    body: x,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: b.intl.string(b.t["+MJm3w"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      y && (0, l.GN)(c.Ay, c.yk), S()
    },
    onNotificationClick: () => {
      if (o.default.isOverlayOOPEnabledForPid((0, f.getPID)())) {
        let n = (0, f.getPID)();
        d.default.isInstanceLocked() ? (Z("unlock"), r.Z.setInputLocked(false, n)) : (Z("jump"), (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus())
      } else(0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), Z("jump"), d.default.isInstanceLocked() && r.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}