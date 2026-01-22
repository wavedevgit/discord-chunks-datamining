/** Chunk was on 35511 **/
/** chunk id: 496608, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk241091 = require("./241091.js"),
  Chunk280173 = require("./280173.js"),
  Chunk381568 = require("./381568.js");
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  find: function(e) {
    var t = o(this),
      n = a(e, arguments.length > 1 ? arguments[1] : true),
      r = i(t, function(e, r) {
        if (n(e, r, t)) return {
          value: e
        }
      }, true);
    return r && r.value
  }
})