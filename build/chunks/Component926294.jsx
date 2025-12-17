/** Chunk was on web.js **/
/** chunk id: 926294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l,
  G: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk171532 = require("./171532.js");

function l() {
  let [e] = Chunk473749.useState(() => Math.floor(1600 * Math.random()) / 1e3);
  return (0, Chunk54381.jsx)("div", {
    className: o()(Chunk171532.cardImageContainer, Chunk171532.placeholderCard),
    style: {
      animationDelay: "".concat(module, "s")
    }
  })
}

function c() {
  let [e] = Chunk473749.useState(() => Math.floor(60 * Math.random()) + 20);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk171532.placeholderText,
    style: {
      width: "".concat(module, "%")
    }
  })
}