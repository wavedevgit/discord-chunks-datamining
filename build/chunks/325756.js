/** Chunk was on 94678 **/
/** chunk id: 325756, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk529030 = require("./529030.js"),
  Chunk539488 = require("./539488.js"),
  Chunk696273 = require("./696273.js"),
  Chunk459547 = require("./459547.js");
Chunk834647({
  target: "Date",
  proto: true,
  forced: require("./486816.js")(function() {
    return null !== new Date(NaN).toJSON() || 1 !== o(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    })
  })
}, {
  toJSON: function(t) {
    var r = s(this),
      e = i(r, "number");
    return "number" != typeof e || isFinite(e) ? "toISOString" in r || "Date" !== c(r) ? r.toISOString() : o(u, r) : null
  }
})