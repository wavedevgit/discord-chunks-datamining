/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(325008),
  i = n(973326),
  o = n(332916),
  a = n(4340),
  s = n(644659).get,
  l = RegExp.prototype,
  c = TypeError;
r && i && a(l, "dotAll", {
  configurable: !0,
  get: function() {
    if (this !== l) {
      if ("RegExp" === o(this)) return !!s(this).dotAll;
      throw c("Incompatible receiver, RegExp required")
    }
  }
})