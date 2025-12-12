/** Chunk was on web.js **/
/** chunk id: 227481, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk840475 = require("./840475.js"),
  Chunk914331 = require("./914331.js"),
  Chunk77826 = require("./77826.js"),
  a = Chunk840475.aTypedArray;
(0, Chunk840475.exportTypedArrayMethod)("at", function(e) {
  var t = a(this),
    n = i(t),
    r = o(e),
    s = r >= 0 ? r : n + r;
  return s < 0 || s >= n ? true : t[s]
})