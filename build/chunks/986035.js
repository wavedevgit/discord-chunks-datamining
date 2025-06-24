/** Chunk was on 57951 **/
n.d(t, {
  Z: () => p
}), n(953529);
var r = n(255367),
  i = n(73800),
  o = n(120356),
  c = n.n(o),
  a = n(481060),
  l = n(480916),
  s = n(352075),
  u = n(20493);
let p = function(e) {
  let {
    title: t,
    description: n,
    agreement: o,
    disagreement: p,
    onAgree: g,
    onDisagree: d,
    imageClassName: f,
    agreementButtonColor: b = a.zxk.Colors.RED,
    modalType: m,
    channelId: y,
    guildId: O
  } = e;
  i.useEffect(() => {
    (0, l.YT)(m, y, O)
  }, [m, y, O]);
  let j = i.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_DISAGREE_CTA, m, y, O), null == d || d()
    }, [d, m, y, O]),
    h = i.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_AGREE_CTA, m, y, O), null == g || g()
    }, [g, m, y, O]);
  return (0, r.jsxs)(a.Kqy, {
    className: s.gatedContent,
    justify: "center",
    align: "center",
    direction: "vertical",
    children: [(0, r.jsx)("div", {
      className: c()(s.image, f)
    }), (0, r.jsx)("div", {
      className: c()(s.title, u.marginBottom8),
      children: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      className: c()(s.description, u.marginBottom20),
      children: n
    }), (0, r.jsxs)(a.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != p && null != d ? (0, r.jsx)(a.zxk, {
        color: a.Ttl.PRIMARY,
        onClick: j,
        children: p
      }) : null, null != o && null != g ? (0, r.jsx)(a.zxk, {
        color: b,
        onClick: h,
        children: o
      }) : null]
    })]
  })
}