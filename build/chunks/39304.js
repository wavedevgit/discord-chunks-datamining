/** Chunk was on web.js **/
/** chunk id: 39304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HV: () => s,
  WQ: () => a,
  lK: () => o
}), require("./321073.js");
let r = 10,
  i = [];

function a(e) {
  for (i.push(e); i.length > r;) i.shift()
}

function o() {
  return i.join(" -> ")
}

function s() {
  return i.length > 0 ? i[i.length - 1] : null
}