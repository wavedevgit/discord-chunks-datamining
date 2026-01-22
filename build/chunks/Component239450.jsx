/** Chunk was on web.js **/
/** chunk id: 239450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./264879.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk610145 = require("./610145.js");

function o(e) {
  let {
    thumbnails: t,
    variant: n = "gallery",
    className: i
  } = e;
  if ("stacked" === n) {
    let e = Math.min(t.length, 2);
    return (0, r.jsx)("div", {
      className: a()(s.qH, i, {
        [s.qK]: 1 === e,
        [s.xs]: 2 === e
      }),
      children: t.slice(0, 2).map((e, t) => (0, r.jsx)("img", {
        alt: "Clip preview",
        className: s.M3,
        src: e,
        "data-index": t
      }, "".concat(e, "-").concat(t)))
    })
  }
  let o = Math.min(t.length, 4);
  return (0, r.jsx)("div", {
    className: a()(s.bF, i, {
      [s.tK]: 1 === o,
      [s.y0]: 2 === o,
      [s.rm]: 3 === o,
      [s.E1]: o >= 4
    }),
    children: t.slice(0, 4).map((e, t) => (0, r.jsx)("img", {
      alt: "Clip preview",
      className: s.N3,
      src: e,
      "data-index": t
    }, "".concat(e, "-").concat(t))).reverse()
  })
}