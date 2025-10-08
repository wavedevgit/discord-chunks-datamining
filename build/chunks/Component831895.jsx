/** Chunk was on 37786 **/
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
  Chunk577806 = require("./577806.js");

function p(e) {
  var t, n, a, p;
  let {
    defaultCategory: _,
    onCategoryChange: f,
    className: h
  } = e, [m, x] = i.useState(_), [j, g] = i.useState(null), b = (0, s.Z)(), y = i.useMemo(() => [{
    name: c.intl.string(c.t["6Zuiv7"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Trick),
    onMouseLeave: () => g(null)
  }, {
    name: c.intl.string(c.t["2UeOlZ"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Treat),
    onMouseLeave: () => g(null)
  }], []), v = i.useCallback(e => {
    x(e.value), f(e.value)
  }, [f]), L = null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, S = null == b || null == (p = b.segmentedControlAnimations) || null == (a = p.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: l()(u.container, h),
    children: [(0, r.jsx)(C.w, {
      options: y,
      value: m,
      onChange: v
    }), j === d.KN.Trick && null != L && (0, r.jsx)("div", {
      className: l()(u.animationOverlay, u.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: L,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(j === d.KN.Trick)
      })
    }), j === d.KN.Treat && null != S && (0, r.jsx)("div", {
      className: l()(u.animationOverlay, u.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: S,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(j === d.KN.Treat)
      })
    })]
  })
}