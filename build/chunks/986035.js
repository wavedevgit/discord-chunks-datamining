/** Chunk was on 78114 **/
n.d(t, {
  Z: () => p
}), n(266796);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(480916),
  c = n(600164),
  u = n(258083),
  d = n(802138);
let p = function(e) {
  let {
    title: t,
    description: n,
    agreement: l,
    disagreement: p,
    onAgree: h,
    onDisagree: f,
    imageClassName: m,
    agreementButtonColor: g = a.zxk.Colors.RED,
    modalType: b,
    channelId: _,
    guildId: C
  } = e;
  i.useEffect(() => {
    (0, s.YT)(b, _, C)
  }, [b, _, C]);
  let v = i.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_DISAGREE_CTA, b, _, C), null == f || f()
    }, [f, b, _, C]),
    y = i.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_AGREE_CTA, b, _, C), null == h || h()
    }, [h, b, _, C]);
  return (0, r.jsxs)(c.Z, {
    className: u.gatedContent,
    justify: c.Z.Justify.CENTER,
    align: c.Z.Align.CENTER,
    direction: c.Z.Direction.VERTICAL,
    children: [(0, r.jsx)("div", {
      className: o()(u.image, m)
    }), (0, r.jsx)("div", {
      className: o()(u.title, d.marginBottom8),
      children: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      className: o()(u.description, d.marginBottom20),
      children: n
    }), (0, r.jsxs)(c.Z, {
      justify: c.Z.Justify.CENTER,
      align: c.Z.Align.CENTER,
      grow: 0,
      children: [null != p && null != f ? (0, r.jsx)(a.zxk, {
        className: u.action,
        size: a.PhG.LARGE,
        color: a.Ttl.PRIMARY,
        onClick: v,
        children: p
      }) : null, null != l && null != h ? (0, r.jsx)(a.zxk, {
        className: u.action,
        color: g,
        size: a.PhG.LARGE,
        onClick: y,
        children: l
      }) : null]
    })]
  })
}