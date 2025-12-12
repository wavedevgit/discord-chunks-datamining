/** Chunk was on web.js **/
/** chunk id: 283080, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  EA: () => a
}), require("./388685.js"), require("./54381.js"), require("./473749.js");
let i = {};

function o(e, t) {
  let n = e.length > t ? t : e.length;
  return e.substring(0, n).padEnd(t, " ")
}

function a() {
  return 0 === Object.keys(i).length ? "" : "Component Render Stats (microseconds):\n" + "|".concat(o("id", 20), "|").concat(o("Mounts", 8), "|").concat(o("Mount Mean", 20), "|").concat(o("Updates", 8), "|").concat(o("Update Mean", 20), "|").concat(o("Nested", 8), "|").concat(o("Nested Mean", 20), "|\n") + Object.entries(i).map(e => {
    let [t, n] = e;
    return "|".concat(o(t, 20), "|").concat(o(n.mount.count.toString(), 8), "|").concat(o(n.mount.mean.toString(), 20), "|").concat(o(n.update.count.toString(), 8), "|").concat(o(n.update.mean.toString(), 20), "|").concat(o(n.nestedUpdate.count.toString(), 8), "|").concat(o(n.nestedUpdate.mean.toString(), 20), "|\n")
  })
}