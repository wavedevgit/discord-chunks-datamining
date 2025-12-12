/** Chunk was on web.js **/
/** chunk id: 881952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nd: () => a,
  bk: () => i,
  d3: () => o,
  oP: () => s
});
var Chunk246364 = require("./246364.js");

function i(e) {
  return e === r.wB.APPROVED || e === r.wB.REJECTED
}

function a(e) {
  return e === r.wB.SUBMITTED
}

function o(e) {
  return e.applicationStatus === r.wB.APPROVED && null != e.lastSeen
}

function s(e) {
  return i(e.applicationStatus) && null == e.lastSeen
}