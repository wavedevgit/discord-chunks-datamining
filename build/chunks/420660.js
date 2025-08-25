/** Chunk was on web.js **/
/** chunk id: 420660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./35282.js");
var Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return e.type === i.IIU.STREAMING && null != e.url && r.d.test(e.url)
}

function a(e) {
  return null != e && (Array.isArray(e) ? e.some(o) : o(e))
}