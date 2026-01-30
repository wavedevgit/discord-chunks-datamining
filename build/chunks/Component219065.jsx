/** Chunk was on web.js **/
/** chunk id: 219065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hq: () => c,
  LB: () => f,
  MG: () => d,
  nB: () => l,
  wn: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk798233 = require("./798233.js");
let l = () => (0, r.jsx)("hr", {
    className: s.ts
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: i = "horizontal",
      className: c
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l, {}), (0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        className: s.cW,
        children: t
      }), (0, r.jsx)("div", {
        className: a()(s.kL, c, {
          [s.YG]: "vertical" === i
        }),
        children: n
      })]
    })
  },
  u = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: s.uW,
      children: t
    })
  },
  d = e => (0, r.jsx)("div", {
    className: s.wO,
    children: e.children
  }),
  f = e => (0, r.jsx)("fieldset", {
    className: s.lI,
    children: e.children
  })