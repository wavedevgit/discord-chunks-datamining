/** Chunk was on 90728 (f68c32709458369a.js) **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(442837),
  s = n(607070),
  c = n(361213),
  d = n(778569),
  u = n(783097),
  p = n(70097),
  m = n(768581),
  h = n(829409),
  g = n(481355);
let _ = 16 / 9,
  f = 325 / 72;

function v(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: i,
    botBannerUrlAnimated: o,
    iconURL: s
  } = e, m = (0, d.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), h = a.useMemo(() => {
    let e = (0, u.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: _,
    imageUrlAnimated: f
  } = a.useMemo(() => "fetched" === m.state && null != m.url ? {
    imageUrl: m.url
  } : {
    imageUrl: i,
    imageUrlAnimated: o
  }, [m.state, m.url, i, o]), v = null != _, j = null != h;
  return "loading" === m.state ? null : j ? (0, r.jsxs)(r.Fragment, {
    children: [v ? (0, r.jsx)(b, {
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
  }) : v ? (0, r.jsx)(b, {
    isHovered: n,
    url: _,
    animatedUrl: f
  }) : (0, r.jsx)(C, {
    iconURL: s
  })
}

function b(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: i
  } = e, [o, s] = a.useState(!1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: l()(g.bannerImage, g.bannerContent, {
        [g.loaded]: o
      }),
      onLoad: () => s(!0)
    }), null != i ? (0, r.jsx)(x, {
      isHovered: t,
      url: i,
      isVideo: !1
    }) : null]
  })
}

function x(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: i
  } = e, [o, s] = a.useState(!1), [c, d] = a.useState(t);
  return (a.useEffect(() => {
    t && d(!0)
  }, [t]), c) ? (0, r.jsx)("div", {
    className: l()(g.bannerAnimatedContainer, {
      [g.videoFadeOut]: !t,
      [g.videoFadeIn]: t && o
    }),
    onAnimationEnd: () => t ? null : d(!1),
    children: i ? (0, r.jsx)(p.Z, {
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
    hasFetchedColors: a
  } = (0, h.u)(t);
  return (0, r.jsx)("div", {
    className: l()(g.bannerContent, g.bannerGradient, {
      [g.loaded]: a
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
    iconURL: i
  } = e, l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), [c, d] = a.useState(!1), p = a.useCallback(() => {
    d(!0)
  }, []), h = a.useCallback(() => d(!1), []), x = (0, u.ye)(t), j = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: O
  } = a.useMemo(() => (null == j ? void 0 : j.id) == null || (null == j ? void 0 : j.banner) == null ? {} : {
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
    children: "card" === n && x ? (0, r.jsx)(v, {
      application: t,
      isHovered: c,
      botBannerUrl: null == y ? void 0 : y,
      botBannerUrlAnimated: null == O ? void 0 : O
    }) : null != y ? (0, r.jsx)(b, {
      isHovered: c,
      url: y,
      animatedUrl: O
    }) : (0, r.jsx)(C, {
      iconURL: i
    })
  })
}