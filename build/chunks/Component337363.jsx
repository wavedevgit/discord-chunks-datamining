/** Chunk was on web.js **/
/** chunk id: 337363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk903365 = require("./903365.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk192998 = require("./192998.js");
let c = 8,
  u = 200,
  d = 272,
  f = (e, t) => {
    let n = (t ? d : u) / 2 - c;
    return Math.max(-n, Math.min(n, e))
  };

function p(e) {
  let {
    caretConfig: t
  } = e, {
    position: n,
    align: i,
    customOffset: c
  } = t, {
    isRichTooltip: u
  } = (0, s.nr)();
  if (null == n) return null;
  let d = "custom" === i && null != c ? {
      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? "".concat(f(c, u), "px") : "0px",
      "--custom-caret-offset-y": ["left", "right"].includes(n) ? "".concat(f(c, u), "px") : "0px"
    } : true,
    p = o()(l.caret, l["caret--".concat(n)], l["caret--".concat(i)]);
  return (0, r.jsx)("div", {
    className: p,
    style: d,
    children: (0, r.jsx)(a.V, {})
  })
}