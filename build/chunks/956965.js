/** Chunk was on 37697 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(442837),
  s = n(607070),
  c = n(361213),
  d = n(778569),
  u = n(783097),
  p = n(70097),
  m = n(768581),
  h = n(829409),
  g = n(360486);
let _ = 16 / 9,
  f = 325 / 72;

function b(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: a,
    botBannerUrlAnimated: o,
    iconURL: s
  } = e, m = (0, d.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), h = i.useMemo(() => {
    let e = (0, u.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: _,
    imageUrlAnimated: f
  } = i.useMemo(() => "fetched" === m.state && null != m.url ? {
    imageUrl: m.url
  } : {
    imageUrl: a,
    imageUrlAnimated: o
  }, [m.state, m.url, a, o]), b = null != _, j = null != h;
  return "loading" === m.state ? null : j ? (0, r.jsxs)(r.Fragment, {
    children: [b ? (0, r.jsx)(v, {
      isHovered: n,
      url: _,
      animatedUrl: void 0
    }) : (0, r.jsx)(p.Z, {
      src: h,
      className: l()(g.bannerImage, g.bannerContent),
      muted: !0
    }), (0, r.jsx)(x, {
      isHovered: n,
      url: h,
      isVideo: !0
    })]
  }) : b ? (0, r.jsx)(v, {
    isHovered: n,
    url: _,
    animatedUrl: f
  }) : (0, r.jsx)(C, {
    iconURL: s
  })
}

function v(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: a
  } = e, [o, s] = i.useState(!1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: l()(g.bannerImage, g.bannerContent, {
        [g.loaded]: o
      }),
      onLoad: () => s(!0)
    }), null != a ? (0, r.jsx)(x, {
      isHovered: t,
      url: a,
      isVideo: !1
    }) : null]
  })
}

function x(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: a
  } = e, [o, s] = i.useState(!1), [c, d] = i.useState(t);
  return (i.useEffect(() => {
    t && d(!0)
  }, [t]), c) ? (0, r.jsx)("div", {
    className: l()(g.bannerAnimatedContainer, {
      [g.videoFadeOut]: !t,
      [g.videoFadeIn]: t && o
    }),
    onAnimationEnd: () => t ? null : d(!1),
    children: a ? (0, r.jsx)(p.Z, {
      src: n,
      loop: !0,
      autoPlay: !0,
      muted: !0,
      className: g.bannerContent,
      onLoadedData: () => s(!0)
    }) : (0, r.jsx)("img", {
      src: n,
      alt: "",
      className: g.bannerContent,
      onLoad: () => s(!0)
    })
  }) : null
}

function C(e) {
  let {
    iconURL: t
  } = e, {
    backgroundGradient: n,
    hasFetchedColors: i
  } = (0, h.u)(t);
  return (0, r.jsx)("div", {
    className: l()(g.bannerContent, g.bannerGradient, {
      [g.loaded]: i
    }),
    style: {
      backgroundImage: n
    }
  })
}
let j = function(e) {
  let {
    application: t,
    bannerType: n,
    iconURL: a
  } = e, l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), [c, d] = i.useState(!1), p = i.useCallback(() => {
    d(!0)
  }, []), h = i.useCallback(() => d(!1), []), x = (0, u.ye)(t), j = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: I
  } = i.useMemo(() => (null == j ? void 0 : j.id) == null || (null == j ? void 0 : j.banner) == null ? {} : {
    botBannerUrl: (0, m.aN)({
      id: j.id,
      banner: j.banner,
      canAnimate: !1,
      size: 600
    }),
    botBannerUrlAnimated: l ? void 0 : (0, m.aN)({
      id: j.id,
      banner: j.banner,
      canAnimate: !0,
      size: 600
    })
  }, [null == j ? void 0 : j.id, null == j ? void 0 : j.banner, l]);
  return (0, r.jsx)("div", {
    className: g.bannerContainer,
    style: {
      aspectRatio: "card" === n ? _ : f
    },
    onMouseEnter: p,
    onFocus: p,
    onMouseLeave: h,
    onBlur: h,
    children: "card" === n && x ? (0, r.jsx)(b, {
      application: t,
      isHovered: c,
      botBannerUrl: null == y ? void 0 : y,
      botBannerUrlAnimated: null == I ? void 0 : I
    }) : null != y ? (0, r.jsx)(v, {
      isHovered: c,
      url: y,
      animatedUrl: I
    }) : (0, r.jsx)(C, {
      iconURL: a
    })
  })
}