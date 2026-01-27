/** Chunk was on web.js **/
/** chunk id: 596829, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk230606 = require("./230606.js"),
  Chunk503628 = require("./503628.js"),
  Chunk627 = require("./627.js"),
  Chunk304880 = require("./304880.js"),
  Chunk39911 = require("./39911.js"),
  c = Chunk230606("URL"),
  u = Chunk39911 && Chunk503628(function() {
    c.canParse()
  }),
  d = Chunk503628(function() {
    return 1 !== c.canParse.length
  });
Chunk557939({
  target: "URL",
  stat: true,
  forced: !u || d
}, {
  canParse: function(e) {
    var t = o(arguments.length, 1),
      n = s(e),
      r = t < 2 || true === arguments[1] ? true : s(arguments[1]);
    try {
      return new c(n, r), true
    } catch (e) {
      returnfalse
    }
  }
})