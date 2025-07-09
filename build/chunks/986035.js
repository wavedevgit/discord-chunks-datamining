/** Chunk was on 57951 **/
n.d(t, {
  Z: () => g
}), n(953529);
var r = n(255367),
  i = n(73800),
  o = n(120356),
  c = n.n(o),
  a = n(755721),
  l = n(481060),
  s = n(480916),
  u = n(352075),
  p = n(20493);
let g = function(e) {
  let {
    title: t,
    description: n,
    agreement: o,
    disagreement: g,
    onAgree: d,
    onDisagree: f,
    imageClassName: b,
    agreementButtonColor: m = a.zx.Colors.RED,
    modalType: y,
    channelId: O,
    guildId: j
  } = e;
  i.useEffect(() => {
    (0, s.YT)(y, O, j)
  }, [y, O, j]);
  let v = i.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_DISAGREE_CTA, y, O, j), null == f || f()
    }, [f, y, O, j]),
    x = i.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_AGREE_CTA, y, O, j), null == d || d()
    }, [d, y, O, j]);
  return (0, r.jsxs)(l.Kqy, {
    className: u.gatedContent,
    justify: "center",
    align: "center",
    direction: "vertical",
    children: [(0, r.jsx)("div", {
      className: c()(u.image, b)
    }), (0, r.jsx)("div", {
      className: c()(u.title, p.marginBottom8),
      children: t
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/medium",
      className: c()(u.description, p.marginBottom20),
      children: n
    }), (0, r.jsxs)(l.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != g && null != f ? (0, r.jsx)(l.zxk, {
        variant: "secondary",
        text: g,
        onClick: v
      }) : null, null != o && null != d ? (0, r.jsx)(a.zx, {
        color: m,
        onClick: x,
        children: o
      }) : null]
    })]
  })
}