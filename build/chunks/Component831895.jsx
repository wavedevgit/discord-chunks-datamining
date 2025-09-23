/** Chunk was on 37786 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk226690 = require("./226690.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577806 = require("./577806.js");

function _(e) {
  var t, n, o, _;
  let {
    defaultCategory: f,
    onCategoryChange: h,
    className: x
  } = e, [m, j] = i.useState(f), [b, g] = i.useState(null), L = (0, C.Z)(), y = i.useMemo(() => [{
    name: u.intl.string(u.t["6Zuiv7"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(s.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Trick),
    onMouseLeave: () => g(null)
  }, {
    name: u.intl.string(u.t["2UeOlZ"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(s.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => g(d.KN.Treat),
    onMouseLeave: () => g(null)
  }], []), v = i.useCallback(e => {
    j(e.value), h(e.value)
  }, [h]), S = null == L || null == (n = L.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, O = null == L || null == (_ = L.segmentedControlAnimations) || null == (o = _.treat) ? true : o.getAnimationData;
  return (0, r.jsxs)("div", {
    className: a()(p.container, x),
    children: [(0, r.jsx)(c.w, {
      options: y,
      value: m,
      onChange: v
    }), b === d.KN.Trick && null != S && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(l.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: S,
        renderer: l.F.Renderers.SVG,
        versionKey: +(b === d.KN.Trick)
      })
    }), b === d.KN.Treat && null != O && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(l.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: O,
        renderer: l.F.Renderers.SVG,
        versionKey: +(b === d.KN.Treat)
      })
    })]
  })
}