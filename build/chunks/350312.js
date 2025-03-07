/** Chunk was on 32249 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(481060),
  a = n(497505),
  c = n(720293),
  u = n(602667),
  d = n(262693);

function m(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: d.endScreenImageBackground
  })
}

function p(e) {
  let {
    quest: t,
    asset: n
  } = e;
  return null == n ? null : (0, r.jsx)(u.A, {
    questOrQuests: t,
    questContent: a.jn.VIDEO_MODAL_END_CARD,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: d.endScreenCard
    })
  })
}

function v(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: o,
    onCTAClick: l
  } = e;
  return (0, r.jsxs)("div", {
    className: d.endScreenCtaContainer,
    children: [(0, r.jsx)(f, {
      title: n,
      subtitle: o
    }), (0, r.jsx)(E, {
      label: t,
      icon: s.d4D,
      onClick: l
    })]
  })
}

function f(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.endScreenCtaTitleContainer,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: d.endScreenCtaTitle,
      children: t
    }), (0, r.jsx)(s.X6q, {
      variant: "heading-sm/normal",
      className: d.endScreenCtaSubtitle,
      children: n
    })]
  })
}

function E(e) {
  let {
    label: t,
    icon: n,
    onClick: l,
    className: a
  } = e, [c, u] = o.useState(!1), m = () => {
    u(!0)
  }, p = () => {
    u(!1)
  };
  return (0, r.jsxs)(s.P3F, {
    className: i()(d.endScreenCtaBtn, d.accentOnHover, a),
    onMouseEnter: m,
    onMouseLeave: p,
    onFocus: m,
    onBlur: p,
    onClick: l,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: d.endScreenCtaBtnTitle,
      children: t
    }), (0, r.jsx)(n, {
      size: "md",
      color: c ? s.TVs.colors.WHITE : "#B5BAC1",
      className: d.endScreenIcon
    })]
  })
}
let g = function(e) {
  let {
    quest: t,
    ctaBtnLabel: n,
    title: l,
    subtitle: i,
    onCTAClick: s
  } = e, a = o.useMemo(() => (0, c.z)(c.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      asset: a
    }), (0, r.jsx)("div", {
      className: d.endScreenOverlay
    }), (0, r.jsxs)("div", {
      className: d.endScreenContainer,
      children: [(0, r.jsx)(p, {
        quest: t,
        asset: a
      }), (0, r.jsx)(v, {
        title: l,
        subtitle: i,
        ctaBtnLabel: n,
        onCTAClick: s
      })]
    })]
  })
}