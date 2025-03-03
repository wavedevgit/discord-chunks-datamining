/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => _
});
var i = n(200651);
n(192379);
var r = n(13245),
  s = n(371651),
  o = n(703656),
  a = n(460181),
  l = n(974180),
  c = n(237997),
  d = n(150097),
  u = n(358085),
  h = n(998502),
  p = n(145597),
  f = n(312839),
  g = n(981631),
  m = n(987650),
  y = n(388032);

function _(e, t, n, _) {
  var v;
  let {
    icon: O,
    title: b,
    body: x
  } = (0, d.Xi)(e, t, n), {
    trackView: S,
    trackClick: E
  } = (0, f.R)(m.n0.TextChat, {
    notif_type: m.n0.TextChat,
    notif_user_id: null === (v = t.author) || void 0 === v ? void 0 : v.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: O,
    title: b,
    body: x,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: y.NW.string(y.t["+MJm39"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      _ && (0, a.GN)(l.Ay, l.yk), S()
    },
    onNotificationClick: () => {
      if (s.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
        let n = (0, p.getPID)();
        c.default.isInstanceLocked() ? (E("unlock"), r.Z.setInputLocked(!1, n)) : (E("jump"), (0, o.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus())
      } else(0, o.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), E("jump"), c.default.isInstanceLocked() && r.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      E("dismiss")
    }
  }
}