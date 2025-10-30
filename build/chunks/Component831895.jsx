/** Chunk was on 31029 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807276 = require("./807276.js");

function p(e) {
  var t, n, a, p;
  let {
    defaultCategory: _,
    onCategoryChange: h,
    className: m
  } = e, [f, x] = i.useState(_), [g, j] = i.useState(null), b = (0, s.Z)(), L = i.useMemo(() => [{
    name: c.intl.string(c.t["6Zuivx"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => j(d.KN.Trick),
    onMouseLeave: () => j(null)
  }, {
    name: c.intl.string(c.t["2UeOlY"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => j(d.KN.Treat),
    onMouseLeave: () => j(null)
  }], []), y = i.useCallback(e => {
    x(e.value), h(e.value)
  }, [h]), v = null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, S = null == b || null == (p = b.segmentedControlAnimations) || null == (a = p.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: l()(u.container, m),
    children: [(0, r.jsx)(C.w, {
      options: L,
      value: f,
      onChange: y
    }), g === d.KN.Trick && null != v && (0, r.jsx)("div", {
      className: l()(u.animationOverlay, u.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: v,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(g === d.KN.Trick)
      })
    }), g === d.KN.Treat && null != S && (0, r.jsx)("div", {
      className: l()(u.animationOverlay, u.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: S,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(g === d.KN.Treat)
      })
    })]
  })
}