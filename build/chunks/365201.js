/** Chunk was on 35511 **/
/** chunk id: 365201, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk486816 = require("./486816.js"),
  Chunk978887 = require("./978887.js"),
  Chunk57284 = require("./57284.js"),
  Chunk633555 = require("./633555.js"),
  c = Chunk683570("URL"),
  u = Chunk633555 && Chunk486816(function() {
    c.canParse()
  }),
  d = Chunk486816(function() {
    return 1 !== c.canParse.length
  });
Chunk834647({
  target: "URL",
  stat: true,
  forced: !u || d
}, {
  canParse: function(e) {
    var t = i(arguments.length, 1),
      n = s(e),
      r = t < 2 || true === arguments[1] ? true : s(arguments[1]);
    try {
      return new c(n, r), true
    } catch (e) {
      returnfalse
    }
  }
})