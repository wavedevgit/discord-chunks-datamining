/** Chunk was on web.js **/
/** chunk id: 10464, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./583741.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk507232 = require("./507232.js");

function s(e) {
  let {
    thumbnails: t,
    variant: n = "gallery",
    className: i
  } = e;
  if ("stacked" === n) {
    let e = Math.min(t.length, 2);
    return (0, r.jsx)("div", {
      className: a()(o.thumbnailStackStacked, i, {
        [o["stacked-1"]]: 1 === e,
        [o["stacked-2"]]: 2 === e
      }),
      children: t.slice(0, 2).map((e, t) => (0, r.jsx)("img", {
        alt: "Clip preview",
        className: o.thumbnailStacked,
        src: e,
        "data-index": t
      }, "".concat(e, "-").concat(t)))
    })
  }
  let s = Math.min(t.length, 4);
  return (0, r.jsx)("div", {
    className: a()(o.thumbnailStackGallery, i, {
      [o["gallery-height-1"]]: 1 === s,
      [o["gallery-height-2"]]: 2 === s,
      [o["gallery-height-3"]]: 3 === s,
      [o["gallery-height-max"]]: s >= 4
    }),
    children: t.slice(0, 4).map((e, t) => (0, r.jsx)("img", {
      alt: "Clip preview",
      className: o.thumbnailGallery,
      src: e,
      "data-index": t
    }, "".concat(e, "-").concat(t))).reverse()
  })
}