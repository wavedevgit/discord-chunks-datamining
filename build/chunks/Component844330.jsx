/** Chunk was on 90228 **/
/** chunk id: 844330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk314516 = require("./314516.js");

function d(e) {
  let {
    icon: t,
    title: n,
    subtitle: r,
    children: d,
    className: u,
    isExpanded: m,
    onExpandedChange: p,
    defaultExpanded: h = false,
    onOpen: x,
    maxHeight: g
  } = e, [f, b] = l.useState(h), v = l.useRef(null), [j, _] = l.useState(null), y = true !== m, A = y ? m : f;
  l.useEffect(() => {
    A && null != v.current && _(v.current.scrollHeight)
  }, [A, d]);
  let C = l.useCallback(() => {
      let e = !A;
      y || b(e), null == p || p(e), e && null != x && x()
    }, [A, y, p, x]),
    S = l.useMemo(() => {
      if (A) {
        if (null != g) return {
          maxHeight: "number" == typeof g ? "".concat(g, "px") : g
        };
        if (null != j) return {
          maxHeight: "".concat(j, "px")
        }
      }
    }, [g, A, j]);
  return (0, a.jsxs)("div", {
    className: i()(c.Yt, u, {
      [c.Sg]: A
    }),
    children: [(0, a.jsxs)(s.DUT, {
      className: c.wx,
      onClick: C,
      children: [null != t && (0, a.jsx)("div", {
        className: c.Y5,
        children: t
      }), (0, a.jsxs)("div", {
        className: c.DD,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        }), null != r && "" !== r && (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: r
        })]
      }), (0, a.jsx)("div", {
        className: i()(c.OW, {
          [c.Sg]: A
        }),
        children: (0, a.jsx)(o.A, {
          width: 20,
          height: 20,
          direction: o.A.Directions.RIGHT
        })
      })]
    }), (0, a.jsx)("div", {
      ref: v,
      className: i()(c.Qs, {
        [c.Sg]: A
      }),
      style: S,
      children: d
    })]
  })
}