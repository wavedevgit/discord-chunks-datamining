/** Chunk was on 92504 **/
/** chunk id: 956965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk381993 = require("./381993.js");
let b = 16 / 9,
  g = 325 / 72;

function x(e) {
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
  }), h = r.useMemo(() => {
    let e = (0, u.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: b,
    imageUrlAnimated: g
  } = r.useMemo(() => "fetched" === m.state && null != m.url ? {
    imageUrl: m.url
  } : {
    imageUrl: i,
    imageUrlAnimated: s
  }, [m.state, m.url, i, s]), x = null != b, _ = null != h;
  return "loading" === m.state ? null : _ ? (0, a.jsxs)(a.Fragment, {
    children: [x ? (0, a.jsx)(v, {
      isHovered: n,
      url: b,
      animatedUrl: true
    }) : (0, a.jsx)(p.Z, {
      src: h,
      className: l()(f.bannerImage, f.bannerContent),
      muted: true
    }), (0, a.jsx)(C, {
      isHovered: n,
      url: h,
      isVideo: true
    })]
  }) : x ? (0, a.jsx)(v, {
    isHovered: n,
    url: b,
    animatedUrl: g
  }) : (0, a.jsx)(j, {
    iconURL: o
  })
}

function v(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: i
  } = e, [s, o] = r.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      src: n,
      alt: "",
      className: l()(f.bannerImage, f.bannerContent, {
        [f.loaded]: s
      }),
      onLoad: () => o(true)
    }), null != i ? (0, a.jsx)(C, {
      isHovered: t,
      url: i,
      isVideo: false
    }) : null]
  })
}

function C(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: i
  } = e, [s, o] = r.useState(false), [c, d] = r.useState(t);
  return (r.useEffect(() => {
    t && d(true)
  }, [t]), c) ? (0, a.jsx)("div", {
    className: l()(f.bannerAnimatedContainer, {
      [f.videoFadeOut]: !t,
      [f.videoFadeIn]: t && s
    }),
    onAnimationEnd: () => t ? null : d(false),
    children: i ? (0, a.jsx)(p.Z, {
      src: n,
      loop: true,
      autoPlay: true,
      muted: true,
      className: f.bannerContent,
      onLoadedData: () => o(true)
    }) : (0, a.jsx)("img", {
      src: n,
      alt: "",
      className: f.bannerContent,
      onLoad: () => o(true)
    })
  }) : null
}

function j(e) {
  let {
    iconURL: t
  } = e, {
    backgroundGradient: n,
    hasFetchedColors: r
  } = (0, h.u)(t);
  return (0, a.jsx)("div", {
    className: l()(f.bannerContent, f.bannerGradient, {
      [f.loaded]: r
    }),
    style: {
      backgroundImage: n
    }
  })
}
let _ = function(e) {
  let {
    application: t,
    bannerType: n,
    iconURL: i
  } = e, l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), [c, d] = r.useState(false), p = r.useCallback(() => {
    d(true)
  }, []), h = r.useCallback(() => d(false), []), C = (0, u.ye)(t), _ = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: I
  } = r.useMemo(() => (null == _ ? true : _.id) == null || (null == _ ? true : _.banner) == null ? {} : {
    botBannerUrl: (0, m.aN)({
      id: _.id,
      banner: _.banner,
      canAnimate: false,
      size: 600
    }),
    botBannerUrlAnimated: l ? true : (0, m.aN)({
      id: _.id,
      banner: _.banner,
      canAnimate: true,
      size: 600
    })
  }, [null == _ ? true : _.id, null == _ ? true : _.banner, l]);
  return (0, a.jsx)("div", {
    className: f.bannerContainer,
    style: {
      aspectRatio: "card" === n ? b : g
    },
    onMouseEnter: p,
    onFocus: p,
    onMouseLeave: h,
    onBlur: h,
    children: "card" === n && C ? (0, a.jsx)(x, {
      application: t,
      isHovered: c,
      botBannerUrl: null == y ? true : y,
      botBannerUrlAnimated: null == I ? true : I
    }) : null != y ? (0, a.jsx)(v, {
      isHovered: c,
      url: y,
      animatedUrl: I
    }) : (0, a.jsx)(j, {
      iconURL: i
    })
  })
}