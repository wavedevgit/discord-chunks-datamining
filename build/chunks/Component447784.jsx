/** Chunk was on 2824 **/
/** chunk id: 447784, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k: () => j
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
let j = e => {
  var n;
  let t, i, {
      skuId: j,
      user: x,
      claimed: h,
      onSelect: T,
      selectedSkuId: P
    } = e,
    [S, A] = l.useState(null),
    b = l.useCallback(e => {
      A(e)
    }, []),
    y = l.useMemo(() => ({
      current: S
    }), [S]),
    {
      isHoveringOrFocusing: I
    } = (0, u.A)(y),
    O = !h && I,
    {
      product: v
    } = (0, c.q)(j);
  if (null == v) return null;
  let _ = v.items[0];
  return null == _ ? null : ((0, d.T)(_) ? (i = a.R.AVATAR_DECORATION, t = (0, r.jsx)(m.i, {
    item: _,
    user: x,
    isHighlighted: O,
    avatarSize: o._3J.SIZE_96
  })) : (0, p.F)(_) && (i = a.R.NAMEPLATE, t = (0, r.jsx)(g.A, {
    nameplate: _,
    user: x,
    isHighlighted: O,
    size: "small"
  })), (0, r.jsx)(o.vN3, {
    children: (0, r.jsxs)(o.sqX, {
      ref: b,
      "aria-label": null != (n = v.name) ? n : "",
      onClick: () => {
        null == j || null == T || h || T(j)
      },
      className: s()(E._x, {
        [E.Vp]: !h,
        [E.mr]: O,
        [E.md]: P === j
      }),
      children: [(0, r.jsx)("div", {
        className: s()(E.VH, {
          [E._Q]: i === a.R.AVATAR_DECORATION,
          [E.M4]: i === a.R.NAMEPLATE
        }),
        children: null != t ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(E.i1, {
              [E.Sf]: h
            }),
            children: t
          }), h && (0, r.jsx)(o.rOg, {
            size: "custom",
            width: 48,
            height: 48,
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            className: E.j0
          })]
        }) : null
      }), (0, r.jsxs)("div", {
        className: E.tZ,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/extrabold",
          children: v.name
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: h ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc)
        })]
      })]
    })
  }))
}