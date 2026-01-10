/** Chunk was on 83772 **/
/** chunk id: 819557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => u,
  z: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk932599 = require("./932599.js");

function o(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: a.cellGroup,
    children: (0, r.jsx)("div", {
      className: a.content,
      children: t
    })
  })
}

function u(e) {
  let {
    icon: t,
    title: n,
    description: l,
    iconClassName: o,
    color: u,
    listType: c = "icon",
    completed: d = false,
    index: m
  } = e;
  return (0, r.jsxs)("div", {
    className: a.cell,
    children: [(() => {
      if ("numbered" === c && null != m)
        if (d) return (0, r.jsx)("div", {
          className: a.number,
          children: (0, r.jsx)(s.sV5, {
            color: "green",
            className: i()(a.icon, o)
          })
        });
        else return (0, r.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: a.number,
          children: m + 1
        });
      if (null != t) return (0, r.jsx)("div", {
        className: a.iconContainer,
        children: (0, r.jsx)(t, {
          color: null != u ? u : "currentColor",
          className: i()(a.icon, o)
        })
      })
    })(), (0, r.jsxs)("div", {
      className: a.textContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: i()({
          [a.completedText]: d
        }),
        children: n
      }), null != l && (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: i()({
          [a.completedText]: d
        }),
        children: l
      })]
    })]
  })
}