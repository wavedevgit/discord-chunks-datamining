/** Chunk was on web.js **/
/** chunk id: 493892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DQ: () => l,
  He: () => s,
  P1: () => o
});
var Chunk825829 = require("./825829.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return true !== e && e.type !== a.d4z.DM
}

function s(e) {
  var t, n;
  return null != (n = null == (t = i.default.getUser(e)) ? true : t.hasFlag(a.xW$.SPAMMER)) && n
}

function l(e) {
  return s(e.author.id) && !(0, r.nY)(e)
}