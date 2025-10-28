/** Chunk was on 96604 **/
/** chunk id: 590149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk422665 = require("./422665.js");

function d(e) {
  let {
    icon: t,
    title: n,
    subtitle: l,
    children: d,
    className: u,
    isExpanded: m,
    onExpandedChange: p,
    defaultExpanded: h = false,
    onOpen: x,
    maxHeight: f
  } = e, [g, b] = r.useState(h), v = true !== m, j = v ? m : g, _ = r.useCallback(() => {
    let e = !j;
    v || b(e), null == p || p(e), e && null != x && x()
  }, [j, v, p, x]), y = r.useMemo(() => {
    if (null != f && j) return {
      maxHeight: "number" == typeof f ? "".concat(f, "px") : f
    }
  }, [f, j]);
  return (0, a.jsxs)("div", {
    className: i()(c.accordionContainer, u, {
      [c.opened]: j
    }),
    children: [(0, a.jsxs)(o.P3F, {
      className: c.header,
      onClick: _,
      children: [null != t && (0, a.jsx)("div", {
        className: c.headerIconWrapper,
        children: t
      }), (0, a.jsxs)("div", {
        className: c.title,
        children: [(0, a.jsx)(o.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: n
        }), null != l && "" !== l && (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: l
        })]
      }), (0, a.jsx)("div", {
        className: i()(c.caret, {
          [c.opened]: j
        }),
        children: (0, a.jsx)(s.Z, {
          width: 18,
          height: 18,
          direction: s.Z.Directions.DOWN
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(c.content, {
        [c.opened]: j
      }),
      style: y,
      children: d
    })]
  })
}