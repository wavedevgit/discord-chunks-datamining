/** Chunk was on web.js **/
/** chunk id: 545093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk280509 = require("./280509.js");

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
  return (0, r.jsx)(o.u, {
    text: i,
    position: "bottom",
    children: (0, r.jsx)(s.kL8, {
      onClick: e => {
        t(e)
      },
      "aria-label": i,
      className: a()(l.button, c),
      children: (0, r.jsx)("div", {
        className: l.buttonInner,
        children: u
      })
    })
  })
}