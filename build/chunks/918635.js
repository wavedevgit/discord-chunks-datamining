/** Chunk was on 35511 **/
/** chunk id: 918635, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk999843 = require("./999843.js"),
  Chunk683570 = require("./683570.js"),
  Chunk794938 = require("./794938.js"),
  Chunk564904 = require("./564904.js"),
  Chunk554987 = require("./554987.js"),
  Chunk655246 = require("./655246.js"),
  d = "No one promise resolved";
Chunk834647({
  target: "Promise",
  stat: true,
  forced: Chunk655246
}, {
  any: function(e) {
    var t = this,
      n = i("AggregateError"),
      r = s.f(t),
      u = r.resolve,
      p = r.reject,
      h = l(function() {
        var r = o(t.resolve),
          i = [],
          s = 0,
          l = 1,
          h = false;
        c(e, function(e) {
          var o = s++,
            c = false;
          l++, a(r, t, e).then(function(e) {
            c || h || (h = true, u(e))
          }, function(e) {
            !c && !h && (c = true, i[o] = e, --l || p(new n(i, d)))
          })
        }), --l || p(new n(i, d))
      });
    return h.error && p(h.value), r.promise
  }
})