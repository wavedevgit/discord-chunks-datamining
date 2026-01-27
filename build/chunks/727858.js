/** Chunk was on web.js **/
/** chunk id: 727858, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257943 = require("./257943.js"),
  Chunk614886 = require("./614886.js"),
  Chunk647055 = require("./647055.js"),
  Chunk485155 = require("./485155.js"),
  s = require("./883972.js").get,
  l = RegExp.prototype,
  c = TypeError;
Chunk257943 && Chunk614886 && Chunk485155(l, "dotAll", {
  configurable: true,
  get: function() {
    if (this !== l) {
      if ("RegExp" === a(this)) return !!s(this).dotAll;
      throw new c("Incompatible receiver, RegExp required")
    }
  }
})