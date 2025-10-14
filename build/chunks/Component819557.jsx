/** Chunk was on 93886 **/
/** chunk id: 819557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => u,
  z: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk262441 = require("./262441.js");

function s(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: o.cellGroup,
    children: (0, r.jsx)("div", {
      className: o.content,
      children: t
    })
  })
}

function u(e) {
  let {
    icon: t,
    title: n,
    description: i,
    iconClassName: s,
    color: u,
    listType: c = "icon",
    completed: d = false,
    index: p
  } = e;
  return (0, r.jsxs)("div", {
    className: o.cell,
    children: [(() => {
      if ("numbered" === c && null != p)
        if (d) return (0, r.jsx)("div", {
          className: o.number,
          children: (0, r.jsx)(a.sV5, {
            color: "green",
            className: l()(o.icon, s)
          })
        });
        else return (0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: o.number,
          children: p + 1
        });
      if (null != t) return (0, r.jsx)("div", {
        className: o.iconContainer,
        children: (0, r.jsx)(t, {
          color: null != u ? u : "currentColor",
          className: l()(o.icon, s)
        })
      })
    })(), (0, r.jsxs)("div", {
      className: o.textContainer,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: l()({
          [o.completedText]: d
        }),
        children: n
      }), null != i && (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: l()({
          [o.completedText]: d
        }),
        children: i
      })]
    })]
  })
}