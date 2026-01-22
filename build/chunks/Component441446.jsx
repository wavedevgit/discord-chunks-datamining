/** Chunk was on web.js **/
/** chunk id: 441446, original params: e,t,n (module,exports,re quire) **/
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
    className: o.ts
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: i = "horizontal",
      className: c
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l, {}), (0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        className: o.cW,
        children: t
      }), (0, r.jsx)("div", {
        className: a()(o.kL, c, {
          [o.YG]: "vertical" === i
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
      className: o.uW,
      children: t
    })
  },
  d = e => (0, r.jsx)("div", {
    className: o.wO,
    children: e.children
  }),
  f = e => (0, r.jsx)("fieldset", {
    className: o.lI,
    children: e.children
  })