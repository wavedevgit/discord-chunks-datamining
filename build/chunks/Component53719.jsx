/** Chunk was on web.js **/
/** chunk id: 53719, original params: e,t,n (module,exports,re quire) **/
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
  Chunk290223 = require("./290223.js");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: i,
    className: c
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), i(e)
  };
  return (0, r.jsx)(s.m, {
    text: n,
    children: (0, r.jsx)(o.DUT, {
      "aria-label": n,
      onClick: u,
      className: a()(l.hP, c),
      children: (0, r.jsx)(t, {
        className: l.Kk,
        color: "currentColor"
      })
    })
  })
}