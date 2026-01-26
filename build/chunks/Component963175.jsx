/** Chunk was on 39048 **/
/** chunk id: 963175, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk710144 = require("./710144.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk238803 = require("./238803.js");

function m(e) {
  let {
    intiallyExpanded: t = false,
    title: n,
    description: l,
    children: m
  } = e, [p, f] = i.useState(t), h = () => f(e => !e), b = (0, o.GV)();
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)(d.A, {
      className: s()(g.wx, {
        [g.OD]: p && null != l
      }),
      onClick: h,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: i
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            children: n
          }), (0, r.jsx)(a.DUT, {
            onClick: i(h),
            "aria-label": u.intl.string(u.t.e5eQOy),
            "aria-controls": b,
            "aria-expanded": p,
            focusProps: {
              ringTarget: t
            },
            children: (0, r.jsx)(c.A, {
              className: g.OW,
              direction: p ? c.A.Directions.UP : c.A.Directions.DOWN
            })
          })]
        })
      }
    }), p && (0, r.jsxs)("div", {
      id: b,
      children: [null != l && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: g.h_,
        children: l
      }), (0, r.jsx)("div", {
        className: g.yF
      }), (0, r.jsx)("div", {
        className: g.Qs,
        children: m
      })]
    })]
  })
}