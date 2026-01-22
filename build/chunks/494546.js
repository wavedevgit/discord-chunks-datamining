/** Chunk was on 35511 **/
/** chunk id: 494546, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk978887 = require("./978887.js"),
  Chunk57284 = require("./57284.js"),
  Chunk633555 = require("./633555.js"),
  l = Chunk683570("URL");
Chunk834647({
  target: "URL",
  stat: true,
  forced: !Chunk633555
}, {
  parse: function(e) {
    var t = o(arguments.length, 1),
      n = i(e),
      r = t < 2 || true === arguments[1] ? true : i(arguments[1]);
    try {
      return new l(n, r)
    } catch (e) {
      return null
    }
  }
})