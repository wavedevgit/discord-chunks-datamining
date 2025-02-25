/** Chunk was on 50751 **/
n.d(t, {
  Z: () => E
});
var i = n(200651);
n(192379);
var r = n(13245),
  o = n(937889),
  l = n(703656),
  s = n(460181),
  a = n(974180),
  u = n(150097),
  c = n(358085),
  d = n(998502),
  p = n(145597),
  h = n(610394),
  f = n(516542),
  m = n(380736),
  g = n(620954),
  O = n(987650),
  v = n(981631),
  y = n(388032);

function E(e, t, n, E) {
  var b;
  let {
    icon: x,
    title: j,
    body: S
  } = (0, u.Xi)(e, t, n), {
    trackView: I,
    trackClick: C
  } = (0, g.R)(O.n0.TextChat, {
    notif_type: O.n0.TextChat,
    notif_user_id: null === (b = t.author) || void 0 === b ? void 0 : b.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: x,
    title: j,
    body: t.content.length > 0 ? (0, o.ZP)(t, {
      noStyleAndInteraction: !0,
      formatInline: !0,
      hideSimpleEmbedContent: !1
    }).content : S,
    hint: e => e ? null : (0, m.QR)((0, g.P)(), y.t.ykjOAA, y.NW.string(y.t.jZkzVF)),
    maxBodyLines: 2,
    renderFooter: (t, n) => t ? (0, i.jsx)(f.Z, {
      id: n,
      channel: e,
      onSend: () => C("send")
    }) : null,
    onNotificationShow: () => {
      E && (0, s.GN)(a.Ay, a.yk), I()
    },
    onNotificationClick: () => {
      let n = (0, p.QF)();
      h.ZP.isInputLocked(n) ? (C("unlock"), r.Z.setInputLocked(!1, n)) : (C("jump"), (0, l.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), c.isPlatformEmbedded && d.ZP.focus())
    },
    onDismissClick: () => {
      C("dismiss")
    }
  }
}