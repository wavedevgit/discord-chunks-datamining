/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => u
}), n(266796), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(565138),
  o = n(695346),
  a = n(506071),
  s = n(353254),
  c = n(793669);

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: p
  } = e, h = o.QK.useSetting(), f = (0, a.n)(), [g, m] = (0, s.Z)(t, f && h);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      ref: g,
      className: c.coverImageContainer,
      children: null != m && (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: c.coverImage
      })
    }), (0, r.jsx)("div", {
      className: c.guildIconContainer,
      children: (0, r.jsx)(l.Z, {
        guild: u,
        size: l.Z.Sizes.XLARGE
      })
    }), (0, r.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      className: c.ctaTitle,
      children: n
    }), (0, r.jsx)(i.Text, {
      className: c.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: d
    }), p]
  })
}