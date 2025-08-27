/** Chunk was on web.js **/
/** chunk id: 419691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  l: () => c
});
var Chunk321034 = require("./321034.js"),
  Chunk560365 = require("./560365.js"),
  Chunk826466 = require("./826466.js");
let o = "default",
  s = "",
  l = new WeakMap;

function c(e) {
  if ((0, r.gn)()) {
    if ("default" === o) {
      let t = (0, i.r3)(e);
      s = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
    }
    o = "disabled"
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    l.set(e, e.style[t]), e.style[t] = "none"
  }
}

function u(e) {
  if ((0, r.gn)()) "disabled" === o && (o = "restoring", setTimeout(() => {
    (0, a.Q)(() => {
      if ("restoring" === o) {
        let t = (0, i.r3)(e);
        "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = s || ""), s = "", o = "default"
      }
    })
  }, 300));
  else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
    let t = l.get(e),
      n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
  }
}