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
    defaultCategory: f,
    onCategoryChange: g,
    className: j
  } = e, [y, h] = r.useState(f), [v, b] = r.useState(null), O = (0, o.A)(), x = r.useMemo(() => [{
    name: d.intl.string(d.t["6Zuivx"]),
    value: u.Sm.Trick,
    key: "Trick",
    icon: (0, l.jsx)(a.VPb, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.Sm.Trick),
    onMouseLeave: () => b(null)
  }, {
    name: d.intl.string(d.t["2UeOlY"]),
    value: u.Sm.Treat,
    key: "Treat",
    icon: (0, l.jsx)(a.pZW, {
      size: "sm",
      color: "currentColor"
    }),
    onMouseEnter: () => b(u.Sm.Treat),
    onMouseLeave: () => b(null)
  }], []), P = r.useCallback(e => {
    h(e.value), g(e.value)
  }, [g]), S = null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick) ? true : t.getAnimationData, E = null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat) ? true : i.getAnimationData;
  return (0, l.jsxs)("div", {
    className: s()(p.kL, j),
    children: [(0, l.jsx)(c.R, {
      options: x,
      value: y,
      onChange: P
    }), v === u.Sm.Trick && null != S && (0, l.jsx)("div", {
      className: s()(p.Do, p.yf),
      children: (0, l.jsx)(a.akl, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.I3,
        importData: S,
        renderer: a.akl.Renderers.SVG,
        versionKey: +(v === u.Sm.Trick)
      })
    }), v === u.Sm.Treat && null != E && (0, l.jsx)("div", {
      className: s()(p.Do, p.vu),
      children: (0, l.jsx)(a.akl, {
        shouldAnimate: true,
        loop: true,
        autoplay: true,
        className: p.I3,
        importData: E,
        renderer: a.akl.Renderers.SVG,
        versionKey: +(v === u.Sm.Treat)
      })
    })]
  })
}