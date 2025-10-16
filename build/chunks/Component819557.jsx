/** Chunk was on 93886 **/
/** chunk id: 819557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c,
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
    className: a.cellGroup,
    children: (0, r.jsx)("div", {
      className: a.content,
      children: t
    })
  })
}

function c(e) {
  let {
    icon: t,
    title: n,
    description: i,
    iconClassName: s,
    color: c,
    listType: d = "icon",
    completed: u = false,
    index: p
  } = e;
  return (0, r.jsxs)("div", {
    className: a.cell,
    children: [(() => {
      if ("numbered" === d && null != p)
        if (u) return (0, r.jsx)("div", {
          className: a.number,
          children: (0, r.jsx)(o.sV5, {
            color: "green",
            className: l()(a.icon, s)
          })
        });
        else return (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: a.number,
          children: p + 1
        });
      if (null != t) return (0, r.jsx)("div", {
        className: a.iconContainer,
        children: (0, r.jsx)(t, {
          color: null != c ? c : "currentColor",
          className: l()(a.icon, s)
        })
      })
    })(), (0, r.jsxs)("div", {
      className: a.textContainer,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: l()({
          [a.completedText]: u
        }),
        children: n
      }), null != i && (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: l()({
          [a.completedText]: u
        }),
        children: i
      })]
    })]
  })
}