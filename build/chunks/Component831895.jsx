/** Chunk was on 37786 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk226690 = require("./226690.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577806 = require("./577806.js");

function _(e) {
  var t, n, a, _;
  let {
    defaultCategory: f,
    onCategoryChange: h,
    className: m
  } = e, [x, j] = i.useState(f), [g, b] = i.useState(null), L = (0, d.Z)(), y = i.useMemo(() => [{
    name: u.intl.string(u.t["6Zuiv7"]),
    value: C.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(s.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(C.KN.Trick),
    onMouseLeave: () => b(null)
  }, {
    name: u.intl.string(u.t["2UeOlZ"]),
    value: C.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(s.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(C.KN.Treat),
    onMouseLeave: () => b(null)
  }], []), v = i.useCallback(e => {
    j(e.value), h(e.value)
  }, [h]), S = null == L || null == (n = L.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, O = null == L || null == (_ = L.segmentedControlAnimations) || null == (a = _.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: o()(p.container, m),
    children: [(0, r.jsx)(c.w, {
      options: y,
      value: x,
      onChange: v
    }), g === C.KN.Trick && null != S && (0, r.jsx)("div", {
      className: o()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(l.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: S,
        renderer: l.F.Renderers.SVG,
        versionKey: +(g === C.KN.Trick)
      })
    }), g === C.KN.Treat && null != O && (0, r.jsx)("div", {
      className: o()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(l.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: O,
        renderer: l.F.Renderers.SVG,
        versionKey: +(g === C.KN.Treat)
      })
    })]
  })
}