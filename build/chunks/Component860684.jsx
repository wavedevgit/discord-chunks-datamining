/** Chunk was on web.js **/
/** chunk id: 860684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk266585 = require("./266585.js");

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
        className: i.roleDot,
        style: {
          backgroundColor: a
        }
      });
    case "avatar":
      let {
        src: o
      } = t;
      return (0, r.jsx)("img", {
        className: i.avatar,
        src: o,
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