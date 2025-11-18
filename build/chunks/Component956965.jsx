/** Chunk was on 84283 **/
/** chunk id: 956965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk361213 = require("./361213.js"),
  Chunk778569 = require("./778569.js"),
  Chunk783097 = require("./783097.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk829409 = require("./829409.js"),
  Chunk345198 = require("./345198.js");
let _ = 16 / 9,
  f = 325 / 72;

function b(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: i,
    botBannerUrlAnimated: s,
    iconURL: o
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
    imageUrlAnimated: s
  }, [m.state, m.url, i, s]), b = null != _, j = null != h;
  return "loading" === m.state ? null : j ? (0, r.jsxs)(r.Fragment, {
    children: [b ? (0, r.jsx)(x, {
      isHovered: n,
      url: _,
      animatedUrl: true
    }) : (0, r.jsx)(p.Z, {
      src: h,
      className: l()(g.bannerImage, g.bannerContent),
      muted: true
    }), (0, r.jsx)(v, {
      isHovered: n,
      url: h,
      isVideo: true
    })]
  }) : b ? (0, r.jsx)(x, {
    isHovered: n,
    url: _,
    animatedUrl: f
  }) : (0, r.jsx)(C, {
    iconURL: o
  })
}

function x(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: i
  } = e, [s, o] = a.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: l()(g.bannerImage, g.bannerContent, {
        [g.loaded]: s
      }),
      onLoad: () => o(true)
    }), null != i ? (0, r.jsx)(v, {
      isHovered: t,
      url: i,
      isVideo: false
    }) : null]
  })
}

function v(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: i
  } = e, [s, o] = a.useState(false), [c, d] = a.useState(t);
  return (a.useEffect(() => {
    t && d(true)
  }, [t]), c) ? (0, r.jsx)("div", {
    className: l()(g.bannerAnimatedContainer, {
      [g.videoFadeOut]: !t,
      [g.videoFadeIn]: t && s
    }),
    onAnimationEnd: () => t ? null : d(false),
    children: i ? (0, r.jsx)(p.Z, {
      src: n,
      loop: true,
      autoPlay: true,
      muted: true,
      className: g.bannerContent,
      onLoadedData: () => o(true)
    }) : (0, r.jsx)("img", {
      src: n,
      alt: "",
      className: g.bannerContent,
      onLoad: () => o(true)
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
  } = e, l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), [c, d] = a.useState(false), p = a.useCallback(() => {
    d(true)
  }, []), h = a.useCallback(() => d(false), []), v = (0, u.ye)(t), j = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: I
  } = a.useMemo(() => (null == j ? true : j.id) == null || (null == j ? true : j.banner) == null ? {} : {
    botBannerUrl: (0, m.aN)({
      id: j.id,
      banner: j.banner,
      canAnimate: false,
      size: 600
    }),
    botBannerUrlAnimated: l ? true : (0, m.aN)({
      id: j.id,
      banner: j.banner,
      canAnimate: true,
      size: 600
    })
  }, [null == j ? true : j.id, null == j ? true : j.banner, l]);
  return (0, r.jsx)("div", {
    className: g.bannerContainer,
    style: {
      aspectRatio: "card" === n ? _ : f
    },
    onMouseEnter: p,
    onFocus: p,
    onMouseLeave: h,
    onBlur: h,
    children: "card" === n && v ? (0, r.jsx)(b, {
      application: t,
      isHovered: c,
      botBannerUrl: null == y ? true : y,
      botBannerUrlAnimated: null == I ? true : I
    }) : null != y ? (0, r.jsx)(x, {
      isHovered: c,
      url: y,
      animatedUrl: I
    }) : (0, r.jsx)(C, {
      iconURL: i
    })
  })
}