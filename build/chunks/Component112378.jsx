/** Chunk was on web.js **/
/** chunk id: 112378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk298063 = require("./298063.js"),
  Chunk658122 = require("./658122.js");

function s(e) {
  let t = i.useRef(null),
    [n, s] = i.useState(null),
    l = (0, a.Y)("MenuLabel");
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