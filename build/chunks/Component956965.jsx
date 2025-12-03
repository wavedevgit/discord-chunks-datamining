/** Chunk was on 69844 **/
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
  Chunk987060 = require("./987060.js");
let f = 16 / 9,
  _ = 325 / 72;

function b(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: a,
    botBannerUrlAnimated: s,
    iconURL: o
  } = e, m = (0, d.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), h = i.useMemo(() => {
    let e = (0, u.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: f,
    imageUrlAnimated: _
  } = i.useMemo(() => "fetched" === m.state && null != m.url ? {
    imageUrl: m.url
  } : {
    imageUrl: a,
    imageUrlAnimated: s
  }, [m.state, m.url, a, s]), b = null != f, j = null != h;
  return "loading" === m.state ? null : j ? (0, r.jsxs)(r.Fragment, {
    children: [b ? (0, r.jsx)(x, {
      isHovered: n,
      url: f,
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
    url: f,
    animatedUrl: _
  }) : (0, r.jsx)(C, {
    iconURL: o
  })
}

function x(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: a
  } = e, [s, o] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: l()(g.bannerImage, g.bannerContent, {
        [g.loaded]: s
      }),
      onLoad: () => o(true)
    }), null != a ? (0, r.jsx)(v, {
      isHovered: t,
      url: a,
      isVideo: false
    }) : null]
  })
}

function v(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: a
  } = e, [s, o] = i.useState(false), [c, d] = i.useState(t);
  return (i.useEffect(() => {
    t && d(true)
  }, [t]), c) ? (0, r.jsx)("div", {
    className: l()(g.bannerAnimatedContainer, {
      [g.videoFadeOut]: !t,
      [g.videoFadeIn]: t && s
    }),
    onAnimationEnd: () => t ? null : d(false),
    children: a ? (0, r.jsx)(p.Z, {
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
  } = e, l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), [c, d] = i.useState(false), p = i.useCallback(() => {
    d(true)
  }, []), h = i.useCallback(() => d(false), []), v = (0, u.ye)(t), j = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: I
  } = i.useMemo(() => (null == j ? true : j.id) == null || (null == j ? true : j.banner) == null ? {} : {
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
      aspectRatio: "card" === n ? f : _
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
      iconURL: a
    })
  })
}