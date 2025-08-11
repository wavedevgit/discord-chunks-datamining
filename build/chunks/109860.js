/** Chunk was on 23357 **/
/** chunk id: 109860, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk795462 = require("./795462.js"),
  Chunk971428 = require("./971428.js"),
  Chunk691593 = require("./691593.js"),
  c = require("./613694.js").Map;
Chunk220159({
  target: "Map",
  stat: true,
  forced: true
}, {
  keyBy: function(e, t) {
    var n = new(i(this) ? this : c);
    s(t);
    var r = s(n.set);
    return a(e, function(e) {
      o(r, n, t(e), e)
    }), n
  }
})