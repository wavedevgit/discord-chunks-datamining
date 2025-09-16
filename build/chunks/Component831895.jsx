/** Chunk was on 54400 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk807276 = require("./807276.js");

function x(e) {
  var t, n, l, x;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: _
  } = e, [m, j] = i.useState(h), [g, b] = i.useState(null), L = (0, C.Z)(), y = i.useMemo(() => [{
    name: u.intl.string(u.t["6Zuiv7"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(d.KN.Trick),
    onMouseLeave: () => b(null)
  }, {
    name: u.intl.string(u.t["2UeOlZ"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(d.KN.Treat),
    onMouseLeave: () => b(null)
  }], []), S = i.useCallback(e => {
    j(e.value), f(e.value)
  }, [f]), v = null == L || null == (n = L.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, E = null == L || null == (x = L.segmentedControlAnimations) || null == (l = x.treat) ? true : l.getAnimationData;
  return (0, r.jsxs)("div", {
    className: a()(p.container, _),
    children: [(0, r.jsx)(c.w, {
      options: y,
      value: m,
      onChange: S
    }), g === d.KN.Trick && null != v && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(s.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: v,
        renderer: s.F.Renderers.SVG,
        versionKey: +(g === d.KN.Trick)
      })
    }), g === d.KN.Treat && null != E && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(s.F, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: E,
        renderer: s.F.Renderers.SVG,
        versionKey: +(g === d.KN.Treat)
      })
    })]
  })
}