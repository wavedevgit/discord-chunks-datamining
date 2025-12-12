/** Chunk was on web.js **/
/** chunk id: 603450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  l: () => c
});
var Chunk21814 = require("./21814.js"),
  Chunk477232 = require("./477232.js"),
  Chunk890532 = require("./890532.js");
let a = "default",
  s = "",
  l = new WeakMap;

function c(e) {
  if ((0, r.gn)()) {
    if ("default" === a) {
      let t = (0, i.r3)(e);
      s = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
    }
    a = "disabled"
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    l.set(e, e.style[t]), e.style[t] = "none"
  }
}

function u(e) {
  if ((0, r.gn)()) "disabled" === a && (a = "restoring", setTimeout(() => {
    (0, o.Q)(() => {
      if ("restoring" === a) {
        let t = (0, i.r3)(e);
        "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = s || ""), s = "", a = "default"
      }
    })
  }, 300));
  else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
    let t = l.get(e),
      n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
  }
}