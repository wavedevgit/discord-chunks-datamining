/** Chunk was on 29679 **/
/** chunk id: 783454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk404203 = require("./404203.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790757 = require("./790757.js");

function m(e) {
  let {
    intiallyExpanded: t = false,
    title: n,
    description: l,
    children: m
  } = e, [p, f] = i.useState(t), h = () => f(e => !e), b = (0, o.Dt)();
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(d.Z, {
      className: a()(g.header, {
        [g.headerWithDescription]: p && null != l
      }),
      onClick: h,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: i
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            children: n
          }), (0, r.jsx)(s.P3F, {
            onClick: i(h),
            "aria-label": u.intl.string(u.t.e5eQOy),
            "aria-controls": b,
            "aria-expanded": p,
            focusProps: {
              ringTarget: t
            },
            children: (0, r.jsx)(c.Z, {
              className: g.caret,
              direction: p ? c.Z.Directions.UP : c.Z.Directions.DOWN
            })
          })]
        })
      }
    }), p && (0, r.jsxs)("div", {
      id: b,
      children: [null != l && (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: g.description,
        children: l
      }), (0, r.jsx)("div", {
        className: g.divider
      }), (0, r.jsx)("div", {
        className: g.content,
        children: m
      })]
    })]
  })
}