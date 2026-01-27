/** Chunk was on web.js **/
/** chunk id: 14665, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk741623 = require("./741623.js"),
  Chunk353841 = require("./353841.js"),
  a = {
    __proto__: null,
    "[[Configurable]]": true,
    "[[Enumerable]]": true,
    "[[Get]]": true,
    "[[Set]]": true,
    "[[Value]]": true,
    "[[Writable]]": true
  };
module.exports = function(e) {
  if (!e || "object" != typeof e) returnfalse;
  for (var t in e)
    if (i(e, t) && !a[t]) returnfalse;
  var n = i(e, "[[Value]]") || i(e, "[[Writable]]"),
    o = i(e, "[[Get]]") || i(e, "[[Set]]");
  if (n && o) throw new r("Property Descriptors may not be both accessor and data descriptors");
  returntrue
}