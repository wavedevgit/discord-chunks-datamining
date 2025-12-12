/** Chunk was on web.js **/
/** chunk id: 860684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk266585 = require("./266585.js");

function o(e) {
  let {
    graphic: t,
    layout: n
  } = e;
  if ("type" in t) switch (t.type) {
    case "role":
      let {
        color: o
      } = t;
      return (0, r.jsx)("div", {
        className: i.roleDot,
        style: {
          backgroundColor: o
        }
      });
    case "avatar":
      let {
        src: a
      } = t;
      return (0, r.jsx)("img", {
        className: i.avatar,
        src: a,
        alt: ""
      });
    case "image":
      let {
        src: s
      } = t;
      return (0, r.jsx)("img", {
        className: i.image,
        src: s,
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