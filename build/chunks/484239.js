/** Chunk was on 53485 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(314684),
  o = n(404615),
  c = n(743612),
  d = n(735825),
  u = n(596470),
  m = n(721239),
  g = n(557634),
  p = n(992429);
let h = e => {
  var t;
  let n, i, {
      title: h,
      titleClassName: f,
      buttonClassName: b,
      perkImage: N,
      isCarousel: x,
      onCtaClick: _,
      perkComponent: E,
      subtitle: j = "",
      descriptionCta: C = "",
      cardVariant: O,
      subtitleClassName: v,
      imageOverlayText: S
    } = e,
    T = (0, o._)(O),
    I = (0, l.Er)(),
    y = (null == I ? void 0 : I.nitroTenureStatus) === d.EB.REDEEMABLE;
  switch (null == I ? void 0 : I.nitroTenureStatus) {
    case d.EB.REDEEMABLE:
      n = p, i = "unlocked icon";
      break;
    case d.EB.PENDING:
      n = m, i = "locked icon";
      break;
    case d.EB.REDEEMED:
      n = g, i = "thumbs up icon";
      break;
    default:
      n = void 0, i = ""
  }
  let A = null != S;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: s()(u.cover, u.below)
    }), (0, r.jsx)(c.Z, {
      title: h,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: T,
      titleClassName: f,
      subtitle: j,
      subtitleClassName: v
    }), null != N && (0, r.jsxs)("div", {
      className: s()(u.relative, {
        [u.cardImage]: !x
      }),
      children: [(0, r.jsx)("img", {
        src: N,
        alt: "",
        className: x ? A ? u.carouselCardImageGrayscale : u.carouselCardImage : ""
      }), A ? (0, r.jsx)("div", {
        className: u.imageOverlayTextContainer,
        children: (0, r.jsx)(a.Text, {
          className: u.imageOverlayText,
          variant: "text-md/bold",
          children: S
        })
      }) : null]
    }), null != E && (0, r.jsxs)("div", {
      className: u.cardIllustrationNoHover,
      children: [E, 0 !== C.length && null != _ && (0, r.jsx)(a.zxk, {
        className: b,
        disabled: !y,
        fullWidth: !0,
        onClick: _,
        children: (0, r.jsxs)("div", {
          className: null == T ? void 0 : null === (t = T.descriptionCta) || void 0 === t ? void 0 : t.className,
          children: [(0, r.jsx)("img", {
            alt: i,
            src: n
          }), C]
        })
      })]
    })]
  })
}