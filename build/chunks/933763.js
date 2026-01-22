/** Chunk was on 35511 **/
/** chunk id: 933763, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  a = require("./673162.js").filter;
Chunk834647({
  target: "Array",
  proto: true,
  forced: !require("./787692.js")("filter")
}, {
  filter: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : true)
  }
})