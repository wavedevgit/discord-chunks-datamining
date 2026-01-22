/** Chunk was on 35511 **/
/** chunk id: 709044, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk554987 = require("./554987.js"),
  Chunk309270 = require("./309270.js"),
  Chunk999843 = require("./999843.js"),
  l = require("./463843.js").Map;
Chunk834647({
  target: "Map",
  stat: true,
  forced: true
}, {
  keyBy: function(e, t) {
    var n = new(i(this) ? this : l);
    s(t);
    var r = s(n.set);
    return o(e, function(e) {
      a(r, n, t(e), e)
    }), n
  }
})