/** Chunk was on 86872 **/
/** chunk id: 590149, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk422665 = require("./422665.js");

function u(e) {
  let {
    icon: n,
    title: t,
    subtitle: r,
    children: u,
    className: d,
    isExpanded: m,
    onExpandedChange: p,
    defaultExpanded: _ = false,
    onOpen: x,
    maxHeight: g
  } = e, [f, N] = i.useState(_), h = i.useRef(null), [v, E] = i.useState(null), I = true !== m, j = I ? m : f;
  i.useEffect(() => {
    j && null != h.current && E(h.current.scrollHeight)
  }, [j, u]);
  let S = i.useCallback(() => {
      let e = !j;
      I || N(e), null == p || p(e), e && null != x && x()
    }, [j, I, p, x]),
    b = i.useMemo(() => {
      if (j) {
        if (null != g) return {
          maxHeight: "number" == typeof g ? "".concat(g, "px") : g
        };
        if (null != v) return {
          maxHeight: "".concat(v, "px")
        }
      }
    }, [g, j, v]);
  return (0, l.jsxs)("div", {
    className: a()(c.accordionContainer, d, {
      [c.opened]: j
    }),
    children: [(0, l.jsxs)(s.P3F, {
      className: c.header,
      onClick: S,
      children: [null != n && (0, l.jsx)("div", {
        className: c.headerIconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: c.title,
        children: [(0, l.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: t
        }), null != r && "" !== r && (0, l.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: r
        })]
      }), (0, l.jsx)("div", {
        className: a()(c.caret, {
          [c.opened]: j
        }),
        children: (0, l.jsx)(o.Z, {
          width: 18,
          height: 18,
          direction: o.Z.Directions.DOWN
        })
      })]
    }), (0, l.jsx)("div", {
      ref: h,
      className: a()(c.content, {
        [c.opened]: j
      }),
      style: b,
      children: u
    })]
  })
}