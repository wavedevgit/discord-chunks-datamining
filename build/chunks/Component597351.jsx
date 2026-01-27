/** Chunk was on web.js **/
/** chunk id: 597351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk746775 = require("./746775.js");

function c(e) {
  let {
    onClick: t,
    icon: n,
    tooltip: i,
    className: c
  } = e, u = n({
    color: "currentColor",
    size: "custom",
    width: 20,
    height: 20
  });
  return (0, r.jsx)(o.m, {
    text: i,
    position: "bottom",
    children: (0, r.jsx)(s.sqX, {
      onClick: e => {
        t(e)
      },
      "aria-label": i,
      className: a()(l.x, c),
      children: (0, r.jsx)("div", {
        className: l.h,
        children: u
      })
    })
  })
}