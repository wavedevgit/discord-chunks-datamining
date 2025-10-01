/** Chunk was on 37786 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577806 = require("./577806.js");

function p(e) {
  var t, n, a, p;
  let {
    defaultCategory: _,
    onCategoryChange: f,
    className: h
  } = e, [m, x] = i.useState(_), [j, g] = i.useState(null), b = (0, s.Z)(), L = i.useMemo(() => [{
    name: c.intl.string(c.t["6Zuiv7"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(l.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Trick),
    onMouseLeave: () => g(null)
  }, {
    name: c.intl.string(c.t["2UeOlZ"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(l.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Treat),
    onMouseLeave: () => g(null)
  }], []), y = i.useCallback(e => {
    x(e.value), f(e.value)
  }, [f]), v = null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, S = null == b || null == (p = b.segmentedControlAnimations) || null == (a = p.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: o()(u.container, h),
    children: [(0, r.jsx)(C.w, {
      options: L,
      value: m,
      onChange: y
    }), j === d.KN.Trick && null != v && (0, r.jsx)("div", {
      className: o()(u.animationOverlay, u.trickAnimation),
      children: (0, r.jsx)(l.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: v,
        renderer: l.Fmz.Renderers.SVG,
        versionKey: +(j === d.KN.Trick)
      })
    }), j === d.KN.Treat && null != S && (0, r.jsx)("div", {
      className: o()(u.animationOverlay, u.treatAnimation),
      children: (0, r.jsx)(l.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: S,
        renderer: l.Fmz.Renderers.SVG,
        versionKey: +(j === d.KN.Treat)
      })
    })]
  })
}