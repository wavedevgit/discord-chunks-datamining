/** Chunk was on 50751 **/
n.d(t, {
  Z: () => E
});
var i = n(200651);
n(192379);
var r = n(13245),
  o = n(937889),
  l = n(703656),
  a = n(460181),
  s = n(974180),
  u = n(150097),
  c = n(358085),
  d = n(998502),
  p = n(145597),
  h = n(610394),
  f = n(516542),
  m = n(380736),
  g = n(620954),
  O = n(987650),
  y = n(981631),
  v = n(388032);

function E(e, t, n, E) {
  var b;
  let {
    icon: j,
    title: x,
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
    icon: j,
    title: x,
    body: t.content.length > 0 ? (0, o.ZP)(t, {
      noStyleAndInteraction: !0,
      formatInline: !0,
      hideSimpleEmbedContent: !1
    }).content : S,
    hint: (e, t) => e && !t ? null : (0, m.QR)((0, g.P)(), v.t.ykjOAA, v.NW.string(v.t.jZkzVF)),
    maxBodyLines: 2,
    renderFooter: (t, n, r) => t && !r ? (0, i.jsx)(f.Z, {
      id: n,
      channel: e,
      onSend: () => C("send")
    }) : null,
    onNotificationShow: () => {
      E && (0, a.GN)(s.Ay, s.yk), I()
    },
    onNotificationClick: () => {
      let n = (0, p.getPID)();
      h.ZP.isInputLocked(n) ? (C("unlock"), r.Z.setInputLocked(!1, n)) : (C("jump"), (0, l.uL)(y.Z5c.CHANNEL(e.guild_id, e.id, t.id)), c.isPlatformEmbedded && d.ZP.focus())
    },
    onDismissClick: () => {
      C("dismiss")
    }
  }
}