/** Chunk was on 8473 **/
n.d(t, {
  f: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(442837),
  o = n(481060),
  l = n(541716),
  s = n(419922),
  c = n(665906),
  u = n(271383),
  d = n(430824),
  p = n(496675),
  m = n(594174),
  f = n(838440),
  h = n(779139),
  g = n(981631),
  _ = n(388032),
  b = n(858006);
let v = e => {
    let {
      channel: t,
      message: n
    } = e, [a, c] = i.useState(!1), u = (0, h.y6)(n.id), d = i.useCallback(() => {
      (0, f.v)({
        type: l.Ie.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, h.TZ)(t, n, u.id)
      })
    }, [t, n, u]);
    return (0, r.jsx)("div", {
      className: b.welcomeCTA,
      children: (0, r.jsxs)(o.zxk, {
        className: b.welcomeCTAButtonOuter,
        innerClassName: b.welcomeCTAButton,
        color: o.Ttl.PRIMARY,
        onMouseEnter: () => c(!0),
        onMouseLeave: () => c(!1),
        onClick: d,
        children: [(0, r.jsx)(s.Z, {
          className: b.welcomeCTASticker,
          isInteracting: a,
          sticker: u,
          size: 28
        }), _.NW.string(_.t["7Tj6HR"])]
      })
    })
  },
  x = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), o = (0, a.e7)([m.default, p.Z, d.Z, u.ZP], () => {
      var e;
      let r = m.default.getCurrentUser(),
        a = (0, c.xl)(n),
        o = p.Z.can(g.Plq.SEND_MESSAGES, n),
        l = null != i && null != r && (null === (e = u.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending),
        s = t.author.bot,
        f = d.Z.getGuild(i),
        h = null != f && (f.systemChannelFlags & g.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return o && !a && !l && !s && h
    });
    return null != i && o ? (0, r.jsx)(v, {
      message: t,
      channel: n
    }) : null
  }