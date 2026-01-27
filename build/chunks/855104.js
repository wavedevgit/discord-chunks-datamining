/** Chunk was on web.js **/
/** chunk id: 855104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  gN: () => a,
  kj: () => o,
  r_: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk505274 = require("./505274.js");

function a() {
  return (0, r.bG)([i.A], () => i.A.balance)
}

function o(e) {
  return (0, r.bG)([i.A], () => {
    var t;
    return null != e && (null != (t = i.A.balance) ? t : 0) >= e
  })
}

function s() {
  return i.A.getCurrentBalance()
}