/** Chunk was on web.js **/
/** chunk id: 797670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk483832 = require("./483832.js");

function u(e) {
  let {
    guild: t,
    size: n
  } = e, i = (0, l.EB)(t, n, false, true), u = (0, l.gM)(t);
  return (0, r.jsx)(s.ZP, {
    className: c.iconContainer,
    mask: s.ZP.Masks.SQUIRCLE,
    width: n,
    height: n,
    children: null != i ? (0, r.jsx)("img", {
      src: i,
      alt: t.name,
      height: n,
      width: n
    }) : (0, r.jsx)("div", {
      className: c.textContainer,
      children: (0, r.jsx)(o.Text, {
        className: a()({
          [c.smallText]: 20 === n
        }),
        color: "text-subtle",
        variant: "text-md/semibold",
        children: u
      })
    })
  })
}