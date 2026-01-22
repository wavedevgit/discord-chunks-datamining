/** Chunk was on 35511 **/
/** chunk id: 743254, original params: e,t,n (module,exports,require) **/
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
  allSettled: function(e) {
    var t = this,
      n = i.f(t),
      r = n.resolve,
      c = n.reject,
      u = s(function() {
        var n = o(t.resolve),
          i = [],
          s = 0,
          c = 1;
        l(e, function(e) {
          var o = s++,
            l = false;
          c++, a(n, t, e).then(function(e) {
            !l && (l = true, i[o] = {
              status: "fulfilled",
              value: e
            }, --c || r(i))
          }, function(e) {
            !l && (l = true, i[o] = {
              status: "rejected",
              reason: e
            }, --c || r(i))
          })
        }), --c || r(i)
      });
    return u.error && c(u.value), n.promise
  }
})