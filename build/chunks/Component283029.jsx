/** Chunk was on web.js **/
/** chunk id: 283029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk221981 = require("./221981.js");
let s = function(e) {
  let {
    className: t,
    imageClassName: i,
    boostInCooldown: s,
    useReducedMotion: l
  } = e;
  return (0, r.jsx)("div", {
    className: a()(o.imageWrapper, t, {
      [o.cooldown]: s
    }),
    children: (0, r.jsx)("img", {
      className: a()(o.image, i, {
        [o.cooldownImage]: s
      }),
      src: s ? n(971149) : l ? n(908635) : n(83957),
      alt: ""
    })
  })
}