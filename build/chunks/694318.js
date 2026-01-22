/** Chunk was on web.js **/
/** chunk id: 694318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cx: () => o,
  iJ: () => s,
  kf: () => l
});
var Chunk785823 = require("./785823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return true !== e && e.type !== a.rbe.DM
}

function o(e) {
  var t, n;
  return null != (t = null == (n = i.default.getUser(e)) ? true : n.hasFlag(a.nhx.SPAMMER)) && t
}

function l(e) {
  return o(e.author.id) && !(0, r.ER)(e)
}