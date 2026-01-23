/** Chunk was on 28636 **/
/** chunk id: 841985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk435582 = require("./435582.js"),
  Chunk283488 = require("./283488.js"),
  Chunk735991 = require("./735991.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk928194 = require("./928194.js"),
  Chunk590354 = require("./590354.js");
let _ = 16 / 9,
  b = 325 / 72;

function f(e) {
  let {
    application: t,
    isHovered: n,
    botBannerUrl: i,
    botBannerUrlAnimated: s,
    iconURL: o
  } = e, h = (0, d.A)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), m = l.useMemo(() => {
    let e = (0, u.Cx)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, c.A)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), {
    imageUrl: _,
    imageUrlAnimated: b
  } = l.useMemo(() => "fetched" === h.state && null != h.url ? {
    imageUrl: h.url
  } : {
    imageUrl: i,
    imageUrlAnimated: s
  }, [h.state, h.url, i, s]), f = null != _, A = null != m;
  return "loading" === h.state ? null : A ? (0, r.jsxs)(r.Fragment, {
    children: [f ? (0, r.jsx)(x, {
      isHovered: n,
      url: _,
      animatedUrl: true
    }) : (0, r.jsx)(p.A, {
      src: m,
      className: a()(g._e, g.IH),
      muted: true
    }), (0, r.jsx)(v, {
      isHovered: n,
      url: m,
      isVideo: true
    })]
  }) : f ? (0, r.jsx)(x, {
    isHovered: n,
    url: _,
    animatedUrl: b
  }) : (0, r.jsx)(j, {
    iconURL: o
  })
}

function x(e) {
  let {
    isHovered: t,
    url: n,
    animatedUrl: i
  } = e, [s, o] = l.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: a()(g._e, g.IH, {
        [g.Kc]: s
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
  } = e, [s, o] = l.useState(false), [c, d] = l.useState(t);
  return (l.useEffect(() => {
    t && d(true)
  }, [t]), c) ? (0, r.jsx)("div", {
    className: a()(g.hY, {
      [g.Q]: !t,
      [g.nR]: t && s
    }),
    onAnimationEnd: () => t ? null : d(false),
    children: i ? (0, r.jsx)(p.A, {
      src: n,
      loop: true,
      autoPlay: true,
      muted: true,
      className: g.IH,
      onLoadedData: () => o(true)
    }) : (0, r.jsx)("img", {
      src: n,
      alt: "",
      className: g.IH,
      onLoad: () => o(true)
    })
  }) : null
}

function j(e) {
  let {
    iconURL: t
  } = e, {
    backgroundGradient: n,
    hasFetchedColors: l
  } = (0, m.d)(t);
  return (0, r.jsx)("div", {
    className: a()(g.IH, g.nY, {
      [g.Kc]: l
    }),
    style: {
      backgroundImage: n
    }
  })
}
let A = function(e) {
  let {
    application: t,
    bannerType: n,
    iconURL: i
  } = e, a = (0, s.bG)([o.A], () => o.A.useReducedMotion), [c, d] = l.useState(false), p = l.useCallback(() => {
    d(true)
  }, []), m = l.useCallback(() => d(false), []), v = (0, u.Ag)(t), A = t.bot, {
    botBannerUrl: y,
    botBannerUrlAnimated: C
  } = l.useMemo(() => (null == A ? true : A.id) == null || (null == A ? true : A.banner) == null ? {} : {
    botBannerUrl: (0, h.z)({
      id: A.id,
      banner: A.banner,
      canAnimate: false,
      size: 600
    }),
    botBannerUrlAnimated: a ? true : (0, h.z)({
      id: A.id,
      banner: A.banner,
      canAnimate: true,
      size: 600
    })
  }, [null == A ? true : A.id, null == A ? true : A.banner, a]);
  return (0, r.jsx)("div", {
    className: g.cI,
    style: {
      aspectRatio: "card" === n ? _ : b
    },
    onMouseEnter: p,
    onFocus: p,
    onMouseLeave: m,
    onBlur: m,
    children: "card" === n && v ? (0, r.jsx)(f, {
      application: t,
      isHovered: c,
      botBannerUrl: null == y ? true : y,
      botBannerUrlAnimated: null == C ? true : C
    }) : null != y ? (0, r.jsx)(x, {
      isHovered: c,
      url: y,
      animatedUrl: C
    }) : (0, r.jsx)(j, {
      iconURL: i
    })
  })
}