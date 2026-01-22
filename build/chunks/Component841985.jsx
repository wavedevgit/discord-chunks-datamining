/** Chunk was on 28636 **/
/** chunk id: 841985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk435582 = require("./435582.js"),
  Chunk283488 = require("./283488.js"),
  Chunk735991 = require("./735991.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk928194 = require("./928194.js"),
  Chunk590354 = require("./590354.js");
let f = 16 / 9,
  g = 325 / 72;

function x(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: r,
    botBannerUrlAnimated: s,
    iconURL: c
  } = e, h = (0, d.A)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), m = a.useMemo(() => {
    let e = (0, u.Cx)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, o.A)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: f,
    imageUrlAnimated: g
  } = a.useMemo(() => "fetched" === h.state && null != h.url ? {
    imageUrl: h.url
  } : {
    imageUrl: r,
    imageUrlAnimated: s
  }, [h.state, h.url, r, s]), x = null != f, _ = null != m;
  return "loading" === h.state ? null : _ ? (0, l.jsxs)(l.Fragment, {
    children: [x ? (0, l.jsx)(v, {
      isHovered: n,
      url: f,
      animatedUrl: true
    }) : (0, l.jsx)(p.A, {
      src: m,
      className: i()(b._e, b.IH),
      muted: true
    }), (0, l.jsx)(j, {
      isHovered: n,
      url: m,
      isVideo: true
    })]
  }) : x ? (0, l.jsx)(v, {
    isHovered: n,
    url: f,
    animatedUrl: g
  }) : (0, l.jsx)(A, {
    iconURL: c
  })
}

function v(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: r
  } = e, [s, c] = a.useState(false);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("img", {
      src: n,
      alt: "",
      className: i()(b._e, b.IH, {
        [b.Kc]: s
      }),
      onLoad: () => c(true)
    }), null != r ? (0, l.jsx)(j, {
      isHovered: t,
      url: r,
      isVideo: false
    }) : null]
  })
}

function j(e) {
  let {
    isHovered: t,
    url: n,
    isVideo: r
  } = e, [s, c] = a.useState(false), [o, d] = a.useState(t);
  return (a.useEffect(() => {
    t && d(true)
  }, [t]), o) ? (0, l.jsx)("div", {
    className: i()(b.hY, {
      [b.Q]: !t,
      [b.nR]: t && s
    }),
    onAnimationEnd: () => t ? null : d(false),
    children: r ? (0, l.jsx)(p.A, {
      src: n,
      loop: true,
      autoPlay: true,
      muted: true,
      className: b.IH,
      onLoadedData: () => c(true)
    }) : (0, l.jsx)("img", {
      src: n,
      alt: "",
      className: b.IH,
      onLoad: () => c(true)
    })
  }) : null
}

function A(e) {
  let {
    iconURL: t
  } = e, {
    backgroundGradient: n,
    hasFetchedColors: a
  } = (0, m.d)(t);
  return (0, l.jsx)("div", {
    className: i()(b.IH, b.nY, {
      [b.Kc]: a
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
    iconURL: r
  } = e, i = (0, s.bG)([c.A], () => c.A.useReducedMotion), [o, d] = a.useState(false), p = a.useCallback(() => {
    d(true)
  }, []), m = a.useCallback(() => d(false), []), j = (0, u.Ag)(t), _ = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: O
  } = a.useMemo(() => (null == _ ? true : _.id) == null || (null == _ ? true : _.banner) == null ? {} : {
    botBannerUrl: (0, h.z)({
      id: _.id,
      banner: _.banner,
      canAnimate: false,
      size: 600
    }),
    botBannerUrlAnimated: i ? true : (0, h.z)({
      id: _.id,
      banner: _.banner,
      canAnimate: true,
      size: 600
    })
  }, [null == _ ? true : _.id, null == _ ? true : _.banner, i]);
  return (0, l.jsx)("div", {
    className: b.cI,
    style: {
      aspectRatio: "card" === n ? f : g
    },
    onMouseEnter: p,
    onFocus: p,
    onMouseLeave: m,
    onBlur: m,
    children: "card" === n && j ? (0, l.jsx)(x, {
      application: t,
      isHovered: o,
      botBannerUrl: null == y ? true : y,
      botBannerUrlAnimated: null == O ? true : O
    }) : null != y ? (0, l.jsx)(v, {
      isHovered: o,
      url: y,
      animatedUrl: O
    }) : (0, l.jsx)(A, {
      iconURL: r
    })
  })
}