/** Chunk was on web.js **/
/** chunk id: 218872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => i
}), require("./704826.js"), require("./35282.js"), require("./539854.js");
let r = /[^0-9/]/g;

function i(e) {
  let t = e.replace(r, "").split("/"),
    n = t[0],
    i = t[1],
    a = [];
  return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), a.push(n), (parseInt(n, 10) > 1 || 2 === n.length || null != i && "" !== i) && a.push("/"), null != i && "" !== i && parseInt(i, 10) > 99 && (i = (i + "").substring(0, 2)), a.push(i), a.join("")
}