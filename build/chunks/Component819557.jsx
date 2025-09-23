/** Chunk was on 93886 **/
/** chunk id: 819557, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  q: () => c,
  z: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk820293 = require("./820293.js");

function s(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: o.cellGroup,
    children: (0, r.jsx)("div", {
      className: o.content,
      children: n
    })
  })
}

function c(e) {
  let {
    icon: n,
    title: t,
    description: i,
    iconClassName: s,
    color: c,
    listType: d = "icon",
    completed: u = false,
    index: f
  } = e;
  return (0, r.jsxs)("div", {
    className: o.cell,
    children: [(() => {
      if ("numbered" === d && null != f)
        if (u) return (0, r.jsx)("div", {
          className: o.number,
          children: (0, r.jsx)(a.sV5, {
            color: "green",
            className: l()(o.icon, s)
          })
        });
        else return (0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: o.number,
          children: f + 1
        });
      if (null != n) return (0, r.jsx)("div", {
        className: o.iconContainer,
        children: (0, r.jsx)(n, {
          color: null != c ? c : "currentColor",
          className: l()(o.icon, s)
        })
      })
    })(), (0, r.jsxs)("div", {
      className: o.textContainer,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: l()({
          [o.completedText]: u
        }),
        children: t
      }), null != i && (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: l()({
          [o.completedText]: u
        }),
        children: i
      })]
    })]
  })
}