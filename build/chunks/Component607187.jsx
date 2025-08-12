/** Chunk was on web.js **/
/** chunk id: 607187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk99139 = require("./99139.js");
let l = Chunk73800.forwardRef(function(e, t) {
  let {
    children: n,
    className: i,
    style: o,
    noBorder: l = false,
    participantUserId: c
  } = e;
  return (0, r.jsx)("div", {
    className: a()(i, s.tile, {
      [s.noBorder]: l
    }),
    style: o,
    ref: t,
    "data-selenium-video-tile": c,
    children: n
  })
})