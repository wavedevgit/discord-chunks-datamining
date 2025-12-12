/** Chunk was on web.js **/
/** chunk id: 784620, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk46015 = require("./46015.js"),
  Chunk497464 = require("./497464.js"),
  Chunk77826 = require("./77826.js"),
  Chunk382698 = require("./382698.js"),
  Chunk621523 = require("./621523.js"),
  c = Chunk46015("".charAt);
Chunk98405({
  target: "String",
  proto: true,
  forced: Chunk621523(function() {
    return "\uD842" !== "\uD842\uDFB7".at(false)
  })
}, {
  at: function(e) {
    var t = s(o(this)),
      n = t.length,
      r = a(e),
      i = r >= 0 ? r : n + r;
    return i < 0 || i >= n ? true : c(t, i)
  }
})