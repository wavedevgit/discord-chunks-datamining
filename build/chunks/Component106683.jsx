/** Chunk was on web.js **/
/** chunk id: 106683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk720312 = require("./720312.js"),
  Chunk564546 = require("./564546.js");

function s(e) {
  let t = i.useRef(null),
    [n, s] = i.useState(null),
    l = (0, a.c)("MenuLabel");
  return (i.useLayoutEffect(() => {
    if (l && null != t.current) {
      let {
        scrollWidth: e,
        clientWidth: n
      } = t.current;
      e > n ? s(e - n) : s(null)
    }
  }, [l, e.children]), l) ? (0, r.jsx)("div", {
    className: o.marqueeContainer,
    "data-overflow": null != n ? "" : true,
    children: (0, r.jsx)("span", {
      ref: t,
      className: o.marqueeText,
      style: null != n ? {
        "--custom-marquee-overflow": "".concat(n, "px")
      } : true,
      children: e.children
    })
  }) : e.children
}