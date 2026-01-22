/** Chunk was on web.js **/
/** chunk id: 947204, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk410323 = require("./410323.js"),
  Chunk321727 = require("./321727.js"),
  Chunk120394 = require("./120394.js"),
  Chunk304880 = require("./304880.js"),
  Chunk503628 = require("./503628.js"),
  c = Chunk410323("".charAt);
Chunk557939({
  target: "String",
  proto: true,
  forced: Chunk503628(function() {
    return "\uD842" !== "\uD842\uDFB7".at(false)
  })
}, {
  at: function(e) {
    var t = o(a(this)),
      n = t.length,
      r = s(e),
      i = r >= 0 ? r : n + r;
    return i < 0 || i >= n ? true : c(t, i)
  }
})