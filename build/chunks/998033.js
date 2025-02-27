/** Chunk was on 76977 **/
n.d(t, {
  Z: () => _
});
var i = n(200651);
n(192379);
var r = n(13245),
  o = n(371651),
  s = n(703656),
  l = n(460181),
  a = n(974180),
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
    body: S
  } = (0, d.Xi)(e, t, n), {
    trackView: x,
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
    body: S,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: y.NW.string(y.t["+MJm39"])
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      _ && (0, l.GN)(a.Ay, a.yk), x()
    },
    onNotificationClick: () => {
      if (o.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
        let n = (0, p.getPID)();
        c.default.isInstanceLocked() ? (E("unlock"), r.Z.setInputLocked(!1, n)) : (E("jump"), (0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus())
      } else(0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), E("jump"), c.default.isInstanceLocked() && r.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      E("dismiss")
    }
  }
}