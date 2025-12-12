/** Chunk was on web.js **/
/** chunk id: 881952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nd: () => o,
  bk: () => i,
  d3: () => a,
  oP: () => s
});
var Chunk246364 = require("./246364.js");

function i(e) {
  return e === r.wB.APPROVED || e === r.wB.REJECTED
}

function o(e) {
  return e === r.wB.SUBMITTED
}

function a(e) {
  return e.applicationStatus === r.wB.APPROVED && null != e.lastSeen
}

function s(e) {
  return i(e.applicationStatus) && null == e.lastSeen
}