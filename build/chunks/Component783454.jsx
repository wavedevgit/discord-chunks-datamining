/** Chunk was on 9536 **/
/** chunk id: 783454, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk404203 = require("./404203.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk618374 = require("./618374.js");

function f(e) {
  let {
    intiallyExpanded: t = false,
    title: n,
    description: l,
    children: f
  } = e, [m, b] = i.useState(t), p = () => b(e => !e), h = (0, o.Dt)();
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(d.Z, {
      className: a()(g.header, {
        [g.headerWithDescription]: m && null != l
      }),
      onClick: p,
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
            onClick: i(p),
            "aria-label": u.intl.string(u.t.e5eQOy),
            "aria-controls": h,
            "aria-expanded": m,
            focusProps: {
              ringTarget: t
            },
            children: (0, r.jsx)(c.Z, {
              className: g.caret,
              direction: m ? c.Z.Directions.UP : c.Z.Directions.DOWN
            })
          })]
        })
      }
    }), m && (0, r.jsxs)("div", {
      id: h,
      children: [null != l && (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: g.description,
        children: l
      }), (0, r.jsx)("div", {
        className: g.divider
      }), (0, r.jsx)("div", {
        className: g.content,
        children: f
      })]
    })]
  })
}