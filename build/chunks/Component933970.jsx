/** Chunk was on web.js **/
/** chunk id: 933970, original params: e,t,n (module,exports,re quire) **/
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
  Chunk573700 = require("./573700.js");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: i,
    className: c
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), i(e)
  };
  return (0, r.jsx)(o.u, {
    text: n,
    children: (0, r.jsx)(s.P3F, {
      "aria-label": n,
      onClick: u,
      className: a()(l.actionButton, c),
      children: (0, r.jsx)(t, {
        className: l.icon,
        color: "currentColor"
      })
    })
  })
}