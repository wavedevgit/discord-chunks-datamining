/** Chunk was on 39048 **/
/** chunk id: 196827, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m,
  u: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk971630 = require("./971630.js"),
  Chunk694336 = require("./694336.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk591859 = require("./591859.js");
let g = e => {
    let {
      value: t,
      isPercent: n
    } = e;
    if (null == t) return null;
    let {
      formattedValue: i,
      isPositive: s
    } = (0, o.TP)(t, n);
    return (0, r.jsxs)("div", {
      className: u.Rx,
      children: [(0, r.jsx)(c.A, {
        className: l()(u.gv, {
          [u.fk]: !s
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: u.ck,
        children: d.intl.format(d.t.OTHOvZ, {
          value: i
        })
      })]
    })
  },
  m = e => {
    let {
      label: t,
      sublabel: n,
      value: i,
      additionalContent: l,
      tooltip: o
    } = e;
    return (0, r.jsxs)("div", {
      className: u.kL,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: u._A,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            className: u.Pf,
            children: t
          }), null != o && (0, r.jsx)(s.m, {
            text: o,
            children: (0, r.jsx)(a.mir, {
              size: "xs",
              color: "currentColor",
              className: u.F6
            })
          }), null != n ? (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: u.$B,
            children: n
          }) : null]
        }), (0, r.jsx)(a.Text, {
          className: u.Uq,
          variant: "text-sm/normal",
          children: i
        })]
      }), l]
    })
  }