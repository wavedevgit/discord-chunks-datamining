/** Chunk was on web.js **/
/** chunk id: 444806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk750390 = require("./750390.js");

function a(e) {
  let {
    graphic: t,
    layout: n
  } = e;
  if ("type" in t) switch (t.type) {
    case "role":
      let {
        color: a
      } = t;
      return (0, r.jsx)("div", {
        className: i.m4,
        style: {
          backgroundColor: a
        }
      });
    case "avatar":
      let {
        src: s
      } = t;
      return (0, r.jsx)("img", {
        className: i.my,
        src: s,
        alt: ""
      });
    case "image":
      let {
        src: o
      } = t;
      return (0, r.jsx)("img", {
        className: i.Sl,
        src: o,
        alt: ""
      });
    default:
      return null
  }
  let l = "inline" === n ? "xs" : "sm",
    c = t;
  return (0, r.jsx)(c, {
    size: l
  })
}