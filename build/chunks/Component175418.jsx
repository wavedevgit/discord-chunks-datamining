/** Chunk was on web.js **/
/** chunk id: 175418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk589518 = require("./589518.js");
let l = e => {
  let {
    className: t,
    color: n = "header-primary",
    responsive: i = true,
    children: l
  } = e;
  return (0, r.jsx)(o.Heading, {
    className: a()(s.header, t, i && s.responsive),
    variant: "display-md",
    color: n,
    children: l
  })
}