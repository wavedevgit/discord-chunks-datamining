/** Chunk was on 82961 **/
/** chunk id: 819557, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => a,
  z: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk262441 = require("./262441.js");

function o(t) {
  let {
    children: e
  } = t;
  return (0, i.jsx)("div", {
    className: c.cellGroup,
    children: (0, i.jsx)("div", {
      className: c.content,
      children: e
    })
  })
}

function a(t) {
  let {
    icon: e,
    title: n,
    description: l,
    iconClassName: o,
    color: a,
    listType: d = "icon",
    completed: u = false,
    index: x
  } = t;
  return (0, i.jsxs)("div", {
    className: c.cell,
    children: [(() => {
      if ("numbered" === d && null != x)
        if (u) return (0, i.jsx)("div", {
          className: c.number,
          children: (0, i.jsx)(s.sV5, {
            color: "green",
            className: r()(c.icon, o)
          })
        });
        else return (0, i.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: c.number,
          children: x + 1
        });
      if (null != e) return (0, i.jsx)("div", {
        className: c.iconContainer,
        children: (0, i.jsx)(e, {
          color: null != a ? a : "currentColor",
          className: r()(c.icon, o)
        })
      })
    })(), (0, i.jsxs)("div", {
      className: c.textContainer,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: r()({
          [c.completedText]: u
        }),
        children: n
      }), null != l && (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: r()({
          [c.completedText]: u
        }),
        children: l
      })]
    })]
  })
}