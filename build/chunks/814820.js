/** Chunk was on 52272 **/
n.d(t, {
  f: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
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
    } = e, [o, c] = i.useState(!1), u = (0, h.y6)(n.id), d = i.useCallback(() => {
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
      children: (0, r.jsxs)(a.zxk, {
        className: b.welcomeCTAButtonOuter,
        innerClassName: b.welcomeCTAButton,
        color: a.Ttl.PRIMARY,
        onMouseEnter: () => c(!0),
        onMouseLeave: () => c(!1),
        onClick: d,
        children: [(0, r.jsx)(s.Z, {
          className: b.welcomeCTASticker,
          isInteracting: o,
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
    } = e, i = n.getGuildId(), a = (0, o.e7)([m.default, p.Z, d.Z, u.ZP], () => {
      var e;
      let r = m.default.getCurrentUser(),
        o = (0, c.xl)(n),
        a = p.Z.can(g.Plq.SEND_MESSAGES, n),
        l = null != i && null != r && (null === (e = u.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending),
        s = t.author.bot,
        f = d.Z.getGuild(i),
        h = null != f && (f.systemChannelFlags & g.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !o && !l && !s && h
    });
    return null != i && a ? (0, r.jsx)(v, {
      message: t,
      channel: n
    }) : null
  }