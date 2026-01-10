/** Chunk was on 84249 **/
/** chunk id: 590149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk335541 = require("./335541.js");

function d(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    children: d,
    className: u,
    isExpanded: m,
    onExpandedChange: p,
    defaultExpanded: h = false,
    onOpen: f,
    maxHeight: x
  } = e, [b, g] = r.useState(h), v = r.useRef(null), [j, y] = r.useState(null), C = true !== m, _ = C ? m : b;
  r.useEffect(() => {
    _ && null != v.current && y(v.current.scrollHeight)
  }, [_, d]);
  let S = r.useCallback(() => {
      let e = !_;
      C || g(e), null == p || p(e), e && null != f && f()
    }, [_, C, p, f]),
    E = r.useMemo(() => {
      if (_) {
        if (null != x) return {
          maxHeight: "number" == typeof x ? "".concat(x, "px") : x
        };
        if (null != j) return {
          maxHeight: "".concat(j, "px")
        }
      }
    }, [x, _, j]);
  return (0, a.jsxs)("div", {
    className: l()(c.accordionContainer, u, {
      [c.opened]: _
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
        }), null != i && "" !== i && (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: i
        })]
      }), (0, a.jsx)("div", {
        className: l()(c.caret, {
          [c.opened]: _
        }),
        children: (0, a.jsx)(o.Z, {
          width: 20,
          height: 20,
          direction: o.Z.Directions.RIGHT
        })
      })]
    }), (0, a.jsx)("div", {
      ref: v,
      className: l()(c.content, {
        [c.opened]: _
      }),
      style: E,
      children: d
    })]
  })
}