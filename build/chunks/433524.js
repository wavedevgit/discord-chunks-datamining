/** Chunk was on web.js **/
/** chunk id: 433524, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk923646 = require("./923646.js"),
  Chunk796138 = require("./796138.js"),
  Chunk573078 = require("./573078.js"),
  s = require("./199838.js").get,
  l = RegExp.prototype,
  c = TypeError;
Chunk507604 && Chunk923646 && Chunk573078(l, "dotAll", {
  configurable: true,
  get: function() {
    if (this !== l) {
      if ("RegExp" === a(this)) return !!s(this).dotAll;
      throw new c("Incompatible receiver, RegExp required")
    }
  }
})