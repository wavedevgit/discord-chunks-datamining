/** Chunk was on 94678 **/
/** chunk id: 459505, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk664886 = require("./664886.js"),
  Chunk309270 = require("./309270.js"),
  Chunk407057 = require("./407057.js"),
  i = TypeError;
module.exports = function(t, r) {
  var e, u;
  if ("string" === r && o(e = t.toString) && !s(u = n(e, t)) || o(e = t.valueOf) && !s(u = n(e, t)) || "string" !== r && o(e = t.toString) && !s(u = n(e, t))) return u;
  throw new i("Can't convert object to primitive value")
}