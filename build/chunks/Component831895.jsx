/** Chunk was on 23242 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761768 = require("./761768.js");

function m(e) {
  var t, n, i, m;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: g
  } = e, [y, j] = l.useState(h), [v, b] = l.useState(null), O = (0, o.Z)(), S = l.useMemo(() => [{
    name: d.intl.string(d.t["6Zuivx"]),
    value: u.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(s.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.KN.Trick),
    onMouseLeave: () => b(null)
  }, {
    name: d.intl.string(d.t["2UeOlY"]),
    value: u.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(s.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.KN.Treat),
    onMouseLeave: () => b(null)
  }], []), x = l.useCallback(e => {
    j(e.value), f(e.value)
  }, [f]), P = null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, E = null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat) ? true : i.getAnimationData;
  return (0, r.jsxs)("div", {
    className: a()(p.container, g),
    children: [(0, r.jsx)(c.w, {
      options: S,
      value: y,
      onChange: x
    }), v === u.KN.Trick && null != P && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(s.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: P,
        renderer: s.Fmz.Renderers.SVG,
        versionKey: +(v === u.KN.Trick)
      })
    }), v === u.KN.Treat && null != E && (0, r.jsx)("div", {
      className: a()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(s.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: E,
        renderer: s.Fmz.Renderers.SVG,
        versionKey: +(v === u.KN.Treat)
      })
    })]
  })
}