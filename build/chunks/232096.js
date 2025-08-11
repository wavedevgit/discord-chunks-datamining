/** Chunk was on web.js **/
/** chunk id: 232096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
let r = [
    ["position", "absolute"],
    ["top", "-100px"],
    ["left", "-100px"],
    ["width", "100px"],
    ["height", "100px"],
    ["overflow", "scroll"]
  ],
  i = [
    ["width", "200px"],
    ["height", "200px"]
  ];

function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
    t = document.createElement("div"),
    n = document.createElement("div");
  for (let [e, n] of r) exports.style[module] = require;
  for (let [e, t] of i) require.style[module] = exports;
  exports.appendChild(require), document.body.appendChild(exports), exports.className = module;
  let o = {
    width: exports.offsetWidth - exports.clientWidth,
    height: exports.offsetHeight - exports.clientHeight
  };
  return document.body.removeChild(exports), o
}