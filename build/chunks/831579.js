/** Chunk was on web.js **/
/** chunk id: 831579, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk154028 = require("./154028.js"),
  Chunk621523 = require("./621523.js"),
  Chunk338045 = require("./338045.js"),
  Chunk382698 = require("./382698.js"),
  Chunk394227 = require("./394227.js"),
  c = Chunk154028("URL"),
  u = Chunk394227 && Chunk621523(function() {
    c.canParse()
  }),
  d = Chunk621523(function() {
    return 1 !== c.canParse.length
  });
Chunk98405({
  target: "URL",
  stat: true,
  forced: !u || d
}, {
  canParse: function(e) {
    var t = a(arguments.length, 1),
      n = s(e),
      r = t < 2 || true === arguments[1] ? true : s(arguments[1]);
    try {
      return new c(n, r), true
    } catch (e) {
      returnfalse
    }
  }
})