/** Chunk was on 2824 **/
/** chunk id: 447784, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713517 = require("./713517.js"),
  Chunk674658 = require("./674658.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk761365 = require("./761365.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk836314 = require("./836314.js");
let P = e => {
  var n;
  let t, i, {
      skuId: P,
      user: j,
      claimed: h,
      onSelect: _,
      selectedSkuId: x
    } = e,
    [T, A] = r.useState(null),
    O = r.useCallback(e => {
      A(e)
    }, []),
    S = r.useMemo(() => ({
      current: T
    }), [T]),
    {
      isHoveringOrFocusing: I
    } = (0, u.A)(S),
    b = !h && I,
    {
      product: y
    } = (0, c.q)(P);
  if (null == y) return null;
  let v = y.items[0];
  return null == v ? null : ((0, d.T)(v) ? (i = a.R.AVATAR_DECORATION, t = (0, l.jsx)(m.i, {
    item: v,
    user: j,
    isHighlighted: b,
    avatarSize: o._3J.SIZE_96
  })) : (0, p.F)(v) && (i = a.R.NAMEPLATE, t = (0, l.jsx)(E.A, {
    nameplate: v,
    user: j,
    isHighlighted: b,
    size: "small"
  })), (0, l.jsx)(o.vN3, {
    children: (0, l.jsxs)(o.sqX, {
      ref: O,
      "aria-label": null != (n = y.name) ? n : "",
      onClick: () => {
        null == P || null == _ || h || _(P)
      },
      className: s()(f._x, {
        [f.Vp]: !h,
        [f.mr]: b,
        [f.md]: x === P
      }),
      children: [(0, l.jsx)("div", {
        className: s()(f.VH, {
          [f._Q]: i === a.R.AVATAR_DECORATION,
          [f.M4]: i === a.R.NAMEPLATE
        }),
        children: null != t ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: s()(f.i1, {
              [f.Sf]: h
            }),
            children: t
          }), h && (0, l.jsx)(o.rOg, {
            size: "custom",
            width: 48,
            height: 48,
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            className: f.j0
          })]
        }) : null
      }), (0, l.jsxs)("div", {
        className: f.tZ,
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-md/extrabold",
          children: y.name
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: h ? g.intl.string(g.t["6cfuDj"]) : g.intl.string(g.t.QQsaCc)
        })]
      })]
    })
  }))
}