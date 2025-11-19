/** Chunk was on web.js **/
/** chunk id: 273031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk820230 = require("./820230.js");

function u(e) {
  let {
    onClick: t,
    children: n,
    tooltip: a,
    dangerous: u = false,
    className: d,
    "aria-label": f
  } = e;
  return (0, r.jsx)(s.u, {
    text: a,
    children: (0, r.jsx)(l.zx, {
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      dangerous: u,
      "aria-label": null != f ? f : a,
      className: d,
      children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
        className: o()(e.props.className, c.actionBarIcon)
      }) : e)
    })
  })
}