/** Chunk was on web.js **/
/** chunk id: 907596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u,
  M: () => c
});
var Chunk408713 = require("./408713.js"),
  Chunk297987 = require("./297987.js"),
  Chunk17118 = require("./17118.js");
let o = "default",
  s = "",
  l = new WeakMap;

function c(e) {
  if ((0, r.un)()) {
    if ("default" === o) {
      let t = (0, i.TW)(e);
      s = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
    }
    o = "disabled"
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    l.set(e, e.style[t]), e.style[t] = "none"
  }
}

function u(e) {
  if ((0, r.un)()) "disabled" === o && (o = "restoring", setTimeout(() => {
    (0, a.v)(() => {
      if ("restoring" === o) {
        let t = (0, i.TW)(e);
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