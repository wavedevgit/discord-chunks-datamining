/** Chunk was on web.js **/
/** chunk id: 197831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk423193 = require("./423193.js");
let d = e => {
  let {
    className: t,
    options: n
  } = e, i = (0, o.e7)([c.Z], () => (0, s.wj)(c.Z.theme));
  return null == n ? null : null != n ? n.animated ? (0, r.jsx)(l.Z, {
    src: n.getSrc(i),
    className: a()(u.customConfetti, t),
    style: n.style,
    loop: false,
    muted: true,
    autoPlay: true
  }) : (0, r.jsx)("img", {
    src: n.getSrc(i),
    className: a()(u.customConfetti, t),
    style: n.style,
    alt: "",
    "aria-hidden": "true"
  }) : null
}