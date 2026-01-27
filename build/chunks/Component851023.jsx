/** Chunk was on web.js **/
/** chunk id: 851023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk101555 = require("./101555.jsx"),
  Chunk238855 = require("./238855.js");

function u(e) {
  let {
    onClick: t,
    children: n,
    tooltip: a,
    dangerous: u = false,
    className: d,
    "aria-label": f
  } = e;
  return (0, r.jsx)(s.m, {
    text: a,
    children: (0, r.jsx)(l.$n, {
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      dangerous: u,
      "aria-label": null != f ? f : a,
      className: d,
      children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
        className: o()(e.props.className, c.l)
      }) : e)
    })
  })
}