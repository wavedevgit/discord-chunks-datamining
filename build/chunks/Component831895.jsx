/** Chunk was on 23242 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  var t, n, i, p;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: g
  } = e, [v, j] = r.useState(h), [y, b] = r.useState(null), S = (0, o.Z)(), x = r.useMemo(() => [{
    name: d.intl.string(d.t["6Zuivx"]),
    value: u.KN.Trick,
    key: "Trick",
    icon: (0, l.jsx)(s.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.KN.Trick),
    onMouseLeave: () => b(null)
  }, {
    name: d.intl.string(d.t["2UeOlY"]),
    value: u.KN.Treat,
    key: "Treat",
    icon: (0, l.jsx)(s.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.KN.Treat),
    onMouseLeave: () => b(null)
  }], []), P = r.useCallback(e => {
    j(e.value), f(e.value)
  }, [f]), O = null == S || null == (n = S.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, E = null == S || null == (p = S.segmentedControlAnimations) || null == (i = p.treat) ? true : i.getAnimationData;
  return (0, l.jsxs)("div", {
    className: a()(m.container, g),
    children: [(0, l.jsx)(c.w, {
      options: x,
      value: v,
      onChange: P
    }), y === u.KN.Trick && null != O && (0, l.jsx)("div", {
      className: a()(m.animationOverlay, m.trickAnimation),
      children: (0, l.jsx)(s.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: m.lottieAnimation,
        importData: O,
        renderer: s.Fmz.Renderers.SVG,
        versionKey: +(y === u.KN.Trick)
      })
    }), y === u.KN.Treat && null != E && (0, l.jsx)("div", {
      className: a()(m.animationOverlay, m.treatAnimation),
      children: (0, l.jsx)(s.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: m.lottieAnimation,
        importData: E,
        renderer: s.Fmz.Renderers.SVG,
        versionKey: +(y === u.KN.Treat)
      })
    })]
  })
}