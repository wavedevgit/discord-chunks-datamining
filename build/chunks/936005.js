/** Chunk was on web.js **/
/** chunk id: 936005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
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

function a() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
    t = document.createElement("div"),
    n = document.createElement("div");
  for (let [e, n] of r) t.style[e] = n;
  for (let [e, t] of i) n.style[e] = t;
  t.appendChild(n), document.body.appendChild(t), t.className = e;
  let a = {
    width: t.offsetWidth - t.clientWidth,
    height: t.offsetHeight - t.clientHeight
  };
  return document.body.removeChild(t), a
}