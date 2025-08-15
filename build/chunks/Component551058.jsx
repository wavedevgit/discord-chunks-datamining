/** Chunk was on web.js **/
/** chunk id: 551058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk39395 = require("./39395.js");
let c = 16,
  u = Chunk73800.memo(function(e) {
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
      className: o()(l.wrapper, i),
      children: [(0, r.jsxs)(s.P3F, {
        onClick: d,
        onKeyDown: e => e.stopPropagation(),
        className: o()(l.header, {
          [l.interactive]: null != u
        }),
        "aria-expanded": null != u ? !u : true,
        "aria-label": f,
        children: [null != a && (0, r.jsx)("div", {
          "aria-hidden": true,
          className: l.headerIcon,
          children: a
        }), (0, r.jsx)("span", {
          className: l.headerLabel,
          children: t
        }), null != u ? (0, r.jsx)(s.CJ0, {
          size: "custom",
          color: "currentColor",
          className: o()(l.headerCollapseIcon, {
            [l.headerCollapseIconCollapsed]: u
          }),
          height: c,
          width: c
        }) : null]
      }), n]
    })
  })