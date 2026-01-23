/** Chunk was on 2824 **/
/** chunk id: 763327, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk552736 = require("./552736.js"),
  Chunk68545 = require("./68545.js"),
  Chunk218093 = require("./218093.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk150211 = require("./150211.js");

function m(e) {
  var t, n, i, m;
  let {
    defaultCategory: g,
    onCategoryChange: f,
    className: y
  } = e, [j, b] = l.useState(g), [h, v] = l.useState(null), O = (0, o.A)(), P = l.useMemo(() => [{
    name: d.intl.string(d.t["6Zuivx"]),
    value: u.Sm.Trick,
    key: "Trick",
    icon: (0, r.jsx)(a.VPb, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => v(u.Sm.Trick),
    onMouseLeave: () => v(null)
  }, {
    name: d.intl.string(d.t["2UeOlY"]),
    value: u.Sm.Treat,
    key: "Treat",
    icon: (0, r.jsx)(a.pZW, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => v(u.Sm.Treat),
    onMouseLeave: () => v(null)
  }], []), E = l.useCallback(e => {
    b(e.value), f(e.value)
  }, [f]), x = null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, S = null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat) ? true : i.getAnimationData;
  return (0, r.jsxs)("div", {
    className: s()(p.kL, y),
    children: [(0, r.jsx)(c.R, {
      options: P,
      value: j,
      onChange: E
    }), h === u.Sm.Trick && null != x && (0, r.jsx)("div", {
      className: s()(p.Do, p.yf),
      children: (0, r.jsx)(a.akl, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.I3,
        importData: x,
        renderer: a.akl.Renderers.SVG,
        versionKey: +(h === u.Sm.Trick)
      })
    }), h === u.Sm.Treat && null != S && (0, r.jsx)("div", {
      className: s()(p.Do, p.vu),
      children: (0, r.jsx)(a.akl, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.I3,
        importData: S,
        renderer: a.akl.Renderers.SVG,
        versionKey: +(h === u.Sm.Treat)
      })
    })]
  })
}