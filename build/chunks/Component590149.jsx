/** Chunk was on 74705 **/
/** chunk id: 590149, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk335541 = require("./335541.js");

function d(e) {
  let {
    icon: n,
    title: t,
    subtitle: i,
    children: d,
    className: s,
    isExpanded: f,
    onExpandedChange: u,
    defaultExpanded: b = false,
    onOpen: x,
    maxHeight: m
  } = e, [v, _] = r.useState(b), h = r.useRef(null), [C, I] = r.useState(null), g = true !== f, S = g ? f : v;
  r.useEffect(() => {
    S && null != h.current && I(h.current.scrollHeight)
  }, [S, d]);
  let k = r.useCallback(() => {
      let e = !S;
      g || _(e), null == u || u(e), e && null != x && x()
    }, [S, g, u, x]),
    N = r.useMemo(() => {
      if (S) {
        if (null != m) return {
          maxHeight: "number" == typeof m ? "".concat(m, "px") : m
        };
        if (null != C) return {
          maxHeight: "".concat(C, "px")
        }
      }
    }, [m, S, C]);
  return (0, a.jsxs)("div", {
    className: c()(p.accordionContainer, s, {
      [p.opened]: S
    }),
    children: [(0, a.jsxs)(o.P3F, {
      className: p.header,
      onClick: k,
      children: [null != n && (0, a.jsx)("div", {
        className: p.headerIconWrapper,
        children: n
      }), (0, a.jsxs)("div", {
        className: p.title,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: t
        }), null != i && "" !== i && (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: i
        })]
      }), (0, a.jsx)("div", {
        className: c()(p.caret, {
          [p.opened]: S
        }),
        children: (0, a.jsx)(l.Z, {
          width: 20,
          height: 20,
          direction: l.Z.Directions.RIGHT
        })
      })]
    }), (0, a.jsx)("div", {
      ref: h,
      className: c()(p.content, {
        [p.opened]: S
      }),
      style: N,
      children: d
    })]
  })
}