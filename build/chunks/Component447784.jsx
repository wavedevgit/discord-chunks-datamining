/** Chunk was on 2824 **/
/** chunk id: 447784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713517 = require("./713517.js"),
  Chunk68545 = require("./68545.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk761365 = require("./761365.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk836314 = require("./836314.js");
let f = e => {
  let t, n, {
      skuId: i,
      assetId: f,
      user: y,
      claimed: j,
      onSelect: b,
      productName: h,
      a11yLabel: v,
      selectedSkuId: O,
      category: P,
      type: x,
      palette: E
    } = e,
    S = l.useRef(null),
    {
      isHoveringOrFocusing: T
    } = (0, u.A)(S),
    I = !j && T;
  return x === a.R.AVATAR_DECORATION ? (t = {
    type: a.R.AVATAR_DECORATION,
    label: v,
    asset: f
  }, n = (0, r.jsx)(d.i, {
    item: t,
    user: y,
    isHighlighted: I,
    avatarSize: o._3J.SIZE_96
  })) : x === a.R.NAMEPLATE && (t = {
    type: a.R.NAMEPLATE,
    label: v,
    asset: f,
    palette: null != E ? E : "none"
  }, n = (0, r.jsx)(p.A, {
    nameplate: t,
    user: y,
    isHighlighted: I,
    size: "small"
  })), (0, r.jsx)(o.vN3, {
    children: (0, r.jsxs)(o.sqX, {
      ref: S,
      "aria-label": null != h ? h : "",
      onClick: () => {
        null == i || null == b || j || b(i)
      },
      className: s()(g._x, {
        [g.Vp]: !j,
        [g.mr]: I,
        [g.md]: O === i
      }),
      children: [(0, r.jsx)("div", {
        className: s()(g.VH, {
          [g._Q]: x === a.R.AVATAR_DECORATION,
          [g.M4]: x === a.R.NAMEPLATE,
          [g.S1]: P === c.Sm.Trick,
          [g.LX]: P === c.Sm.Treat
        }),
        children: null != t ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(g.i1, {
              [g.Sf]: j
            }),
            children: n
          }), j && (0, r.jsx)(o.rOg, {
            size: "custom",
            width: 48,
            height: 48,
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            className: g.j0
          })]
        }) : null
      }), (0, r.jsxs)("div", {
        className: g.tZ,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/extrabold",
          children: h
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: j ? m.intl.string(m.t["6cfuDj"]) : m.intl.string(m.t.QQsaCc)
        })]
      })]
    })
  })
}