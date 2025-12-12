/** Chunk was on web.js **/
/** chunk id: 966902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => p
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk920155 = require("./920155.jsx"),
  Chunk168179 = require("./168179.jsx"),
  Chunk945909 = require("./945909.js"),
  Chunk647623 = require("./647623.js");
let d = 12,
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 240,
      n = t / 2 - d;
    return Math.max(-n, Math.min(n, e))
  };

function p(e) {
  let {
    className: t
  } = e, n = i.useContext(s.I);
  if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
  let {
    position: a,
    caretConfig: d
  } = n, p = (0, c.z)(a), {
    align: _,
    customOffset: m
  } = d, h = "custom" === _ && true !== m ? {
    "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? "".concat(f(m), "px") : "0px",
    "--custom-caret-offset-y": ["left", "right"].includes(p) ? "".concat(f(m), "px") : "0px"
  } : true, g = o()(u.caret, u["caret--".concat(p)], u["caret--".concat(_)], t);
  return (0, r.jsx)("div", {
    className: g,
    style: h,
    children: (0, r.jsx)(l.v, {})
  })
}