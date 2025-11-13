/** Chunk was on 54400 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk347896 = require("./347896.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807276 = require("./807276.js");

function m(e) {
  var t, n, l, m;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: b
  } = e, [g, v] = a.useState(h), [x, P] = a.useState(null), j = (0, s.Z)(), y = a.useMemo(() => [{
    name: u.intl.string(u.t["6Zuivx"]),
    value: d.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => P(d.KN.Trick),
    onMouseLeave: () => P(null)
  }, {
    name: u.intl.string(u.t["2UeOlY"]),
    value: d.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => P(d.KN.Treat),
    onMouseLeave: () => P(null)
  }], []), S = a.useCallback(e => {
    v(e.value), f(e.value)
  }, [f]), _ = null == j || null == (n = j.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, O = null == j || null == (m = j.segmentedControlAnimations) || null == (l = m.treat) ? true : l.getAnimationData;
  return (0, r.jsxs)("div", {
    className: i()(p.container, b),
    children: [(0, r.jsx)(c.w, {
      options: y,
      value: g,
      onChange: S
    }), x === d.KN.Trick && null != _ && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: _,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(x === d.KN.Trick)
      })
    }), x === d.KN.Treat && null != O && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: O,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(x === d.KN.Treat)
      })
    })]
  })
}