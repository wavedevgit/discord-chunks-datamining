/** Chunk was on 57951 **/
n.d(t, {
  Z: () => p
}), n(266796);
var r = n(200651),
  i = n(192379),
  c = n(120356),
  o = n.n(c),
  a = n(481060),
  l = n(480916),
  s = n(297612),
  u = n(685786);
let p = function(e) {
  let {
    title: t,
    description: n,
    agreement: c,
    disagreement: p,
    onAgree: g,
    onDisagree: f,
    imageClassName: d,
    agreementButtonColor: b = a.zxk.Colors.RED,
    modalType: m,
    channelId: O,
    guildId: y
  } = e;
  i.useEffect(() => {
    (0, l.YT)(m, O, y)
  }, [m, O, y]);
  let j = i.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_DISAGREE_CTA, m, O, y), null == f || f()
    }, [f, m, O, y]),
    h = i.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_AGREE_CTA, m, O, y), null == g || g()
    }, [g, m, O, y]);
  return (0, r.jsxs)(a.Kqy, {
    className: s.gatedContent,
    justify: "center",
    align: "center",
    direction: "vertical",
    children: [(0, r.jsx)("div", {
      className: o()(s.image, d)
    }), (0, r.jsx)("div", {
      className: o()(s.title, u.marginBottom8),
      children: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      className: o()(s.description, u.marginBottom20),
      children: n
    }), (0, r.jsxs)(a.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != p && null != f ? (0, r.jsx)(a.zxk, {
        color: a.Ttl.PRIMARY,
        onClick: j,
        children: p
      }) : null, null != c && null != g ? (0, r.jsx)(a.zxk, {
        color: b,
        onClick: h,
        children: c
      }) : null]
    })]
  })
}