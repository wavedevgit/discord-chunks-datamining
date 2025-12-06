/** Chunk was on 75393 **/
/** chunk id: 590149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk422665 = require("./422665.js");

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
    maxHeight: f
  } = e, [b, g] = l.useState(h), v = l.useRef(null), [j, _] = l.useState(null), y = true !== m, C = y ? m : b;
  l.useEffect(() => {
    C && null != v.current && _(v.current.scrollHeight)
  }, [C, d]);
  let S = l.useCallback(() => {
      let e = !C;
      y || g(e), null == p || p(e), e && null != x && x()
    }, [C, y, p, x]),
    N = l.useMemo(() => {
      if (C) {
        if (null != f) return {
          maxHeight: "number" == typeof f ? "".concat(f, "px") : f
        };
        if (null != j) return {
          maxHeight: "".concat(j, "px")
        }
      }
    }, [f, C, j]);
  return (0, a.jsxs)("div", {
    className: i()(c.accordionContainer, u, {
      [c.opened]: C
    }),
    children: [(0, a.jsxs)(s.P3F, {
      className: c.header,
      onClick: S,
      children: [null != t && (0, a.jsx)("div", {
        className: c.headerIconWrapper,
        children: t
      }), (0, a.jsxs)("div", {
        className: c.title,
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
        className: i()(c.caret, {
          [c.opened]: C
        }),
        children: (0, a.jsx)(o.Z, {
          width: 20,
          height: 20,
          direction: o.Z.Directions.RIGHT
        })
      })]
    }), (0, a.jsx)("div", {
      ref: v,
      className: i()(c.content, {
        [c.opened]: C
      }),
      style: N,
      children: d
    })]
  })
}