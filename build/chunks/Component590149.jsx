/** Chunk was on 86872 **/
/** chunk id: 590149, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk422665 = require("./422665.js");

function u(e) {
  let {
    icon: n,
    title: t,
    subtitle: a,
    children: u,
    className: d,
    isExpanded: m,
    onExpandedChange: p,
    defaultExpanded: _ = false,
    onOpen: x,
    maxHeight: g
  } = e, [N, h] = l.useState(_), f = true !== m, E = f ? m : N, I = l.useCallback(() => {
    let e = !E;
    f || h(e), null == p || p(e), e && null != x && x()
  }, [E, f, p, x]), v = l.useMemo(() => {
    if (null != g && E) return {
      maxHeight: "number" == typeof g ? "".concat(g, "px") : g
    }
  }, [g, E]);
  return (0, i.jsxs)("div", {
    className: r()(c.accordionContainer, d, {
      [c.opened]: E
    }),
    children: [(0, i.jsxs)(s.P3F, {
      className: c.header,
      onClick: I,
      children: [null != n && (0, i.jsx)("div", {
        className: c.headerIconWrapper,
        children: n
      }), (0, i.jsxs)("div", {
        className: c.title,
        children: [(0, i.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: t
        }), null != a && "" !== a && (0, i.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: a
        })]
      }), (0, i.jsx)("div", {
        className: r()(c.caret, {
          [c.opened]: E
        }),
        children: (0, i.jsx)(o.Z, {
          width: 18,
          height: 18,
          direction: o.Z.Directions.DOWN
        })
      })]
    }), (0, i.jsx)("div", {
      className: r()(c.content, {
        [c.opened]: E
      }),
      style: v,
      children: u
    })]
  })
}