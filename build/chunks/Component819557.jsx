/** Chunk was on 93886 **/
/** chunk id: 819557, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  q: () => c,
  z: () => o
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk262441 = require("./262441.js");

function o(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: s.cellGroup,
    children: (0, n.jsx)("div", {
      className: s.content,
      children: t
    })
  })
}

function c(e) {
  let {
    icon: t,
    title: a,
    description: r,
    iconClassName: o,
    color: c,
    listType: d = "icon",
    completed: u = false,
    index: m
  } = e;
  return (0, n.jsxs)("div", {
    className: s.cell,
    children: [(() => {
      if ("numbered" === d && null != m)
        if (u) return (0, n.jsx)("div", {
          className: s.number,
          children: (0, n.jsx)(i.sV5, {
            color: "green",
            className: l()(s.icon, o)
          })
        });
        else return (0, n.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: s.number,
          children: m + 1
        });
      if (null != t) return (0, n.jsx)("div", {
        className: s.iconContainer,
        children: (0, n.jsx)(t, {
          color: null != c ? c : "currentColor",
          className: l()(s.icon, o)
        })
      })
    })(), (0, n.jsxs)("div", {
      className: s.textContainer,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: l()({
          [s.completedText]: u
        }),
        children: a
      }), null != r && (0, n.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: l()({
          [s.completedText]: u
        }),
        children: r
      })]
    })]
  })
}