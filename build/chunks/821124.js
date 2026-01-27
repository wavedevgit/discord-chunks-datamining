/** Chunk was on web.js **/
/** chunk id: 821124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NK: () => o,
  Oe: () => s,
  ar: () => a,
  mf: () => i
});
var Chunk513461 = require("./513461.js");

function i(e) {
  return e === r.B5.APPROVED || e === r.B5.REJECTED
}

function a(e) {
  return e === r.B5.SUBMITTED
}

function o(e) {
  return e.applicationStatus === r.B5.APPROVED && null != e.lastSeen
}

function s(e) {
  return i(e.applicationStatus) && null == e.lastSeen
}