/** Chunk was on 4125 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577806 = require("./577806.js");

function p(e) {
  var t, n, l, p;
  let {
    defaultCategory: f,
    onCategoryChange: h,
    className: x
  } = e, [m, _] = i.useState(f), [j, g] = i.useState(null), b = (0, s.Z)(), y = i.useMemo(() => [{
    name: c.intl.string(c.t["6Zuivx"]),
    value: C.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(C.KN.Trick),
    onMouseLeave: () => g(null)
  }, {
    name: c.intl.string(c.t["2UeOlY"]),
    value: C.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(C.KN.Treat),
    onMouseLeave: () => g(null)
  }], []), L = i.useCallback(e => {
    _(e.value), h(e.value)
  }, [h]), v = null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, S = null == b || null == (p = b.segmentedControlAnimations) || null == (l = p.treat) ? true : l.getAnimationData;
  return (0, r.jsxs)("div", {
    className: a()(u.container, x),
    children: [(0, r.jsx)(d.w, {
      options: y,
      value: m,
      onChange: L
    }), j === C.KN.Trick && null != v && (0, r.jsx)("div", {
      className: a()(u.animationOverlay, u.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: v,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(j === C.KN.Trick)
      })
    }), j === C.KN.Treat && null != S && (0, r.jsx)("div", {
      className: a()(u.animationOverlay, u.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: u.lottieAnimation,
        importData: S,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(j === C.KN.Treat)
      })
    })]
  })
}