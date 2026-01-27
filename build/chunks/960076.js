/** Chunk was on web.js **/
/** chunk id: 960076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./747238.js");
var Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  return e.type === i.$pd.STREAMING && null != e.url && r.yz.test(e.url)
}

function o(e) {
  return null != e && (Array.isArray(e) ? e.some(a) : a(e))
}