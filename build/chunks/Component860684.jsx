/** Chunk was on web.js **/
/** chunk id: 860684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk851166 = require("./851166.js");

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
    default:
      return null
  }
  let s = "inline" === n ? "xs" : "sm",
    l = t;
  return (0, r.jsx)(l, {
    size: s
  })
}