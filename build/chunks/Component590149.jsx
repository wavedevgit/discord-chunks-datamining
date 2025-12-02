/** Chunk was on 34061 **/
/** chunk id: 590149, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk422665 = require("./422665.js");

function d(e) {
  let {
    icon: l,
    title: n,
    subtitle: i,
    children: d,
    className: o,
    isExpanded: m,
    onExpandedChange: g,
    defaultExpanded: x = false,
    onOpen: h,
    maxHeight: j
  } = e, [p, v] = a.useState(x), N = a.useRef(null), [f, E] = a.useState(null), _ = true !== m, Z = _ ? m : p;
  a.useEffect(() => {
    Z && null != N.current && E(N.current.scrollHeight)
  }, [Z, d]);
  let P = a.useCallback(() => {
      let e = !Z;
      _ || v(e), null == g || g(e), e && null != h && h()
    }, [Z, _, g, h]),
    S = a.useMemo(() => {
      if (Z) {
        if (null != j) return {
          maxHeight: "number" == typeof j ? "".concat(j, "px") : j
        };
        if (null != f) return {
          maxHeight: "".concat(f, "px")
        }
      }
    }, [j, Z, f]);
  return (0, t.jsxs)("div", {
    className: r()(c.accordionContainer, o, {
      [c.opened]: Z
    }),
    children: [(0, t.jsxs)(s.P3F, {
      className: c.header,
      onClick: P,
      children: [null != l && (0, t.jsx)("div", {
        className: c.headerIconWrapper,
        children: l
      }), (0, t.jsxs)("div", {
        className: c.title,
        children: [(0, t.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: n
        }), null != i && "" !== i && (0, t.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: i
        })]
      }), (0, t.jsx)("div", {
        className: r()(c.caret, {
          [c.opened]: Z
        }),
        children: (0, t.jsx)(u.Z, {
          width: 18,
          height: 18,
          direction: u.Z.Directions.DOWN
        })
      })]
    }), (0, t.jsx)("div", {
      ref: N,
      className: r()(c.content, {
        [c.opened]: Z
      }),
      style: S,
      children: d
    })]
  })
}