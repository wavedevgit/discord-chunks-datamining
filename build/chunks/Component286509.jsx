/** Chunk was on web.js **/
/** chunk id: 286509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk926157 = require("./926157.js");
let c = 16,
  u = Chunk64700.memo(function(e) {
    let {
      children: t,
      trailing: n,
      className: i,
      icon: a,
      isCollapsed: u,
      onClick: d,
      "aria-label": f
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(l.iE, i),
      children: [(0, r.jsxs)(s.DUT, {
        onClick: d,
        onKeyDown: e => e.stopPropagation(),
        className: o()(l.wx, {
          [l.bG]: null != u
        }),
        "aria-expanded": null != u ? !u : true,
        "aria-label": f,
        children: [null != a && (0, r.jsx)("div", {
          "aria-hidden": true,
          className: l.nr,
          children: a
        }), (0, r.jsx)("span", {
          className: l.Gp,
          children: t
        }), null != u ? (0, r.jsx)(s.abt, {
          size: "custom",
          color: "currentColor",
          className: o()(l.Cj, {
            [l.Tu]: u
          }),
          height: c,
          width: c
        }) : null]
      }), n]
    })
  })