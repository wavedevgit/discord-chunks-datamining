/** Chunk was on 54400 **/
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
  Chunk807276 = require("./807276.js");

function m(e) {
  var t, n, a, m;
  let {
    defaultCategory: h,
    onCategoryChange: f,
    className: b
  } = e, [g, v] = l.useState(h), [S, x] = l.useState(null), y = (0, s.Z)(), P = l.useMemo(() => [{
    name: d.intl.string(d.t["6Zuivx"]),
    value: u.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(o.yDF, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => x(u.KN.Trick),
    onMouseLeave: () => x(null)
  }, {
    name: d.intl.string(d.t["2UeOlY"]),
    value: u.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(o.sq, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => x(u.KN.Treat),
    onMouseLeave: () => x(null)
  }], []), j = l.useCallback(e => {
    v(e.value), f(e.value)
  }, [f]), _ = null == y || null == (n = y.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, O = null == y || null == (m = y.segmentedControlAnimations) || null == (a = m.treat) ? true : a.getAnimationData;
  return (0, r.jsxs)("div", {
    className: i()(p.container, b),
    children: [(0, r.jsx)(c.w, {
      options: P,
      value: g,
      onChange: j
    }), S === u.KN.Trick && null != _ && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.trickAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: _,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(S === u.KN.Trick)
      })
    }), S === u.KN.Treat && null != O && (0, r.jsx)("div", {
      className: i()(p.animationOverlay, p.treatAnimation),
      children: (0, r.jsx)(o.Fmz, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.lottieAnimation,
        importData: O,
        renderer: o.Fmz.Renderers.SVG,
        versionKey: +(S === u.KN.Treat)
      })
    })]
  })
}