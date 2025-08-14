/** Chunk was on web.js **/
/** chunk id: 233715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk422499 = require("./422499.js");
let l = 2e3;

function c(e) {
  let {
    children: t,
    className: n,
    flashKey: o
  } = e, [c, u] = i.useState(false), d = i.useRef(null);
  return i.useEffect(() => (u(true), d.current = window.setTimeout(() => {
    u(false)
  }, l), () => {
    null != d.current && clearTimeout(d.current)
  }), [o]), (0, r.jsx)("div", {
    "data-flash": c,
    className: a()(s.flash, n),
    children: t
  })
}