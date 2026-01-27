/** Chunk was on web.js **/
/** chunk id: 437839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk27551 = require("./27551.js");

function d(e) {
  let {
    onClick: t,
    disabled: n = false
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: u.me
    }), (0, r.jsx)("div", {
      className: u.kL,
      children: (0, r.jsx)("div", {
        className: u.UD,
        children: (0, r.jsx)(l.A, {
          className: u.x6,
          childClassName: o()(u.Z4, {
            [u.r9]: n,
            [u.xb]: !n
          }),
          onClick: t,
          disabled: n,
          isActive: false,
          noHover: n,
          "aria-label": c.intl.string(c.t.oeb1vg),
          children: (0, r.jsx)(s.lX7, {
            size: "xs",
            color: "currentColor",
            className: u.AO
          })
        })
      })
    })]
  })
}
let f = Chunk64700.memo(d)