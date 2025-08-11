/** Chunk was on 23357 **/
/** chunk id: 350935, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk691593 = require("./691593.js"),
  Chunk178476 = require("./178476.js"),
  Chunk602168 = require("./602168.js"),
  Chunk134546 = require("./134546.js"),
  Chunk795462 = require("./795462.js"),
  Chunk806414 = require("./806414.js"),
  d = "No one promise resolved";
Chunk220159({
  target: "Promise",
  stat: true,
  forced: Chunk806414
}, {
  any: function(e) {
    var t = this,
      n = i("AggregateError"),
      r = s.f(t),
      u = r.resolve,
      p = r.reject,
      h = c(function() {
        var r = a(t.resolve),
          i = [],
          s = 0,
          c = 1,
          h = false;
        l(e, function(e) {
          var a = s++,
            l = false;
          c++, o(r, t, e).then(function(e) {
            l || h || (h = true, u(e))
          }, function(e) {
            !l && !h && (l = true, i[a] = e, --c || p(new n(i, d)))
          })
        }), --c || p(new n(i, d))
      });
    return h.error && p(h.value), r.promise
  }
})