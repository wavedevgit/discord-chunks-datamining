/** Chunk was on 50448 **/
/** chunk id: 783226, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk475424 = require("./475424.js"),
  Chunk879257 = require("./879257.js"),
  Chunk288510 = require("./288510.js"),
  Chunk6837 = require("./6837.js");
Chunk220159({
  target: "Date",
  proto: true,
  forced: require("./779688.js")(function() {
    return null !== new Date(NaN).toJSON() || 1 !== o(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    })
  })
}, {
  toJSON: function(t) {
    var r = i(this),
      n = u(r, "number");
    return "number" != typeof n || isFinite(n) ? "toISOString" in r || "Date" !== c(r) ? r.toISOString() : o(s, r) : null
  }
})