/** Chunk was on 35511 **/
/** chunk id: 898804, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk999843 = require("./999843.js"),
  Chunk794938 = require("./794938.js"),
  Chunk564904 = require("./564904.js"),
  Chunk554987 = require("./554987.js");
Chunk834647({
  target: "Promise",
  stat: true,
  forced: require("./655246.js")
}, {
  race: function(e) {
    var t = this,
      n = i.f(t),
      r = n.reject,
      c = s(function() {
        var i = o(t.resolve);
        l(e, function(e) {
          a(i, t, e).then(n.resolve, r)
        })
      });
    return c.error && r(c.value), n.promise
  }
})