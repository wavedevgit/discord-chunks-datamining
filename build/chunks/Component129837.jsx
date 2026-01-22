/** Chunk was on web.js **/
/** chunk id: 129837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk56370 = require("./56370.jsx"),
  Chunk112317 = require("./112317.jsx"),
  Chunk630521 = require("./630521.js");
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
  } = (0, o.w6)();
  if (null == n) return null;
  let d = "custom" === i && null != c ? {
      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? "".concat(f(c, u), "px") : "0px",
      "--custom-caret-offset-y": ["left", "right"].includes(n) ? "".concat(f(c, u), "px") : "0px"
    } : true,
    p = a()(l.caret, l["caret--".concat(n)], l["caret--".concat(i)]);
  return (0, r.jsx)("div", {
    className: p,
    style: d,
    children: (0, r.jsx)(s.a, {})
  })
}