/** Chunk was on web.js **/
/** chunk id: 966044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UU: () => s,
  uZ: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk603113 = require("./603113.js");
let a = "popover-portal";

function o() {
  return (0, Chunk951288.jsx)("div", {
    id: a
  })
}

function s(e) {
  let {
    children: t
  } = e, n = document.getElementById(a);
  return null == n ? null : (0, i.createPortal)(t, n)
}