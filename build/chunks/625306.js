/** Chunk was on web.js **/
/** chunk id: 625306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IH: () => o,
  Z$: () => s,
  qC: () => a
}), require("./539854.js");
let r = 10,
  i = [];

function o(e) {
  for (i.push(e); i.length > r;) i.shift()
}

function a() {
  return i.join(" -> ")
}

function s() {
  return i.length > 0 ? i[i.length - 1] : null
}