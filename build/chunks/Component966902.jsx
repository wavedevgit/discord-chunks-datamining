/** Chunk was on web.js **/
/** chunk id: 966902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => _
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk920155 = require("./920155.jsx"),
  Chunk168179 = require("./168179.jsx"),
  Chunk945909 = require("./945909.js"),
  Chunk805508 = require("./805508.js");
let d = 12,
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 240,
      n = t / 2 - d;
    return Math.max(-n, Math.min(n, e))
  };

function _(e) {
  let {
    className: t
  } = e, n = i.useContext(s.I);
  if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
  let {
    position: a,
    caretConfig: d
  } = n, _ = (0, c.z)(a), {
    align: p,
    customOffset: h
  } = d, m = "custom" === p && true !== h ? {
    "--custom-caret-offset-x": ["top", "bottom"].includes(_) ? "".concat(f(h), "px") : "0px",
    "--custom-caret-offset-y": ["left", "right"].includes(_) ? "".concat(f(h), "px") : "0px"
  } : true, g = o()(u.caret, u["caret--".concat(_)], u["caret--".concat(p)], t);
  return (0, r.jsx)("div", {
    className: g,
    style: m,
    children: (0, r.jsx)(l.v, {})
  })
}