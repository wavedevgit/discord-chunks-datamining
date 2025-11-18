/** Chunk was on 4125 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577806 = require("./577806.js");

function m(e) {
  var t, n, a, m;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: b
  } = e, [g, v] = l.useState(h), [P, x] = l.useState(null), y = (0, s.Z)(), j = l.useMemo(() => [{
    name: u.intl.string(u.t["6Zuivx"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => x(d.KN.Trick),
    onMouseLeave: () => x(null)
  }, {
    name: u.intl.string(u.t["2UeOlY"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => x(d.KN.Treat),
    onMouseLeave: () => x(null)
  }], []), S = l.useCallback(e => {
    v(e.value), f(e.value)
  }, [f]), _ = null == y || null == (n = y.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, O = null == y || null == (m = y.segmentedControlAnimations) || null == (a = m.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: i()(p.container, b),
    children: [(0, r.jsx)(c.w, {
      options: j,
      value: g,
      onChange: S
    }), P === d.KN.Trick && null != _ && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: _,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(P === d.KN.Trick)
      })
    }), P === d.KN.Treat && null != O && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: O,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(P === d.KN.Treat)
      })
    })]
  })
}