/** Chunk was on 63141 **/
/** chunk id: 998033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e, t, n, b) {
  var _;
  let {
    icon: v,
    title: O,
    body: E
  } = (0, o.Xi)(e, t, n), {
    trackView: S,
    trackClick: Z
  } = (0, f.R)(m.n0.TextChat, {
    notif_type: m.n0.TextChat,
    notif_user_id: null == (_ = t.author) ? true : _.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: v,
    title: O,
    body: E,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: y.intl.string(y.t["+MJm3w"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      b && (0, a.GN)(c.Ay, c.yk), S()
    },
    onNotificationClick: () => {
      if (l.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
        let n = (0, p.getPID)();
        d.default.isInstanceLocked() ? (Z("unlock"), r.Z.setInputLocked(false, n)) : (Z("jump"), (0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus())
      } else(0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), Z("jump"), d.default.isInstanceLocked() && r.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}