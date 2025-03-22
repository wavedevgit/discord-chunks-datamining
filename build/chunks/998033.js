/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => _
});
var i = n(200651);
n(192379);
var r = n(13245),
  s = n(864060),
  o = n(371651),
  a = n(703656),
  l = n(460181),
  c = n(974180),
  d = n(237997),
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
    icon: b,
    title: O,
    body: x
  } = (0, s.Xi)(e, t, n), {
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
    icon: b,
    title: O,
    body: x,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: y.NW.string(y.t["+MJm39"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      _ && (0, l.GN)(c.Ay, c.yk), S()
    },
    onNotificationClick: () => {
      if (o.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
        let n = (0, p.getPID)();
        d.default.isInstanceLocked() ? (E("unlock"), r.Z.setInputLocked(!1, n)) : (E("jump"), (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus())
      } else(0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), E("jump"), d.default.isInstanceLocked() && r.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      E("dismiss")
    }
  }
}