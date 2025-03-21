/** Chunk was on 86282 **/
n.d(l, {
  u: () => c
}), n(266796);
var t = n(200651);
n(192379);
var r = n(409794),
  i = n(777207),
  s = n(541822),
  a = n(330711),
  o = n(994542);

function c(e) {
  let {
    benefits: l,
    description: n,
    imgSrc: c,
    title: d,
    tag: u,
    FallbackIcon: m
  } = e, x = null != c ? {
    "--custom-background-url": "url(".concat(c.toString(), ")")
  } : void 0;
  return (0, t.jsx)("div", {
    className: o.container,
    children: (0, t.jsx)(s.Z, {
      className: o.scroller,
      children: (0, t.jsxs)("div", {
        className: o.scrollContent,
        children: [(0, t.jsxs)("div", {
          className: o.header,
          children: [(0, t.jsx)("div", {
            className: o.headerBackground,
            style: x
          }), (0, t.jsx)("div", {
            className: o.headerImage,
            children: null != c ? (0, t.jsx)("img", {
              src: c.toString(),
              alt: ""
            }) : (0, t.jsx)(m, {
              size: "custom",
              color: "var(--text-muted)",
              height: 96,
              width: 96
            })
          })]
        }), (0, t.jsxs)("div", {
          className: o.content,
          children: [(0, t.jsxs)("div", {
            className: o.details,
            children: [null != u && (0, t.jsx)("div", {
              children: u
            }), (0, t.jsx)(r.X, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              children: d
            }), null != n && "" !== n && (0, t.jsx)(i.x, {
              color: "text-normal",
              variant: "text-md/normal",
              className: o.description,
              children: n
            })]
          }), null != l && (0, t.jsxs)("div", {
            className: o.benefits,
            children: [(0, t.jsx)(i.x, {
              color: "header-secondary",
              variant: "eyebrow",
              children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
            }), l]
          })]
        })]
      })
    })
  })
}