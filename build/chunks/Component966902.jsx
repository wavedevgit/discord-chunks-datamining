/** Chunk was on web.js **/
/** chunk id: 966902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk168179 = require("./168179.jsx"),
  Chunk437437 = require("./437437.js");
let l = 12,
  c = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 240,
      n = t / 2 - l;
    return Math.max(-n, Math.min(n, e))
  };

function u(e) {
  let {
    caretConfig: t,
    className: n
  } = e, {
    position: i,
    align: l,
    customOffset: u
  } = t, d = "custom" === l && true !== u ? {
    "--custom-caret-offset-x": ["top", "bottom"].includes(i) ? "".concat(c(u), "px") : "0px",
    "--custom-caret-offset-y": ["left", "right"].includes(i) ? "".concat(c(u), "px") : "0px"
  } : true, f = a()(s.caret, s["caret--".concat(i)], s["caret--".concat(l)], n);
  return (0, r.jsx)("div", {
    className: f,
    style: d,
    children: (0, r.jsx)(o.v, {})
  })
}