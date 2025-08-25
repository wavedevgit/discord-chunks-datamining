/** Chunk was on web.js **/
/** chunk id: 493892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DQ: () => l,
  He: () => s,
  P1: () => a
});
var Chunk825829 = require("./825829.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return true !== e && e.type !== o.d4z.DM
}

function s(e) {
  var t, n;
  return null != (n = null == (t = i.default.getUser(e)) ? true : t.hasFlag(o.xW$.SPAMMER)) && n
}

function l(e) {
  return s(e.author.id) && !(0, r.nY)(e)
}