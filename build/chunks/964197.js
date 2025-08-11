/** Chunk was on 23357 **/
/** chunk id: 964197, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk592802 = require("./592802.js"),
  Chunk565130 = require("./565130.js"),
  Chunk91345 = require("./91345.js"),
  c = Chunk178476("URL");
Chunk220159({
  target: "URL",
  stat: true,
  forced: !Chunk91345
}, {
  parse: function(e) {
    var t = a(arguments.length, 1),
      n = i(e),
      r = t < 2 || true === arguments[1] ? true : i(arguments[1]);
    try {
      return new c(n, r)
    } catch (e) {
      return null
    }
  }
})