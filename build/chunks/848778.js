/** Chunk was on web.js **/
/** chunk id: 848778, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk446474 = require("./446474.js"),
  Chunk514575 = require("./514575.js"),
  Chunk560062 = require("./560062.js"),
  Chunk742388 = require("./742388.js"),
  Chunk2871 = require("./2871.js");
Chunk557939({
  target: "Promise",
  stat: true,
  forced: require("./980210.js")
}, {
  allSettled: function(e) {
    var t = this,
      n = s.f(t),
      r = n.resolve,
      c = n.reject,
      u = o(function() {
        var n = a(t.resolve),
          s = [],
          o = 0,
          c = 1;
        l(e, function(e) {
          var a = o++,
            l = false;
          c++, i(n, t, e).then(function(e) {
            !l && (l = true, s[a] = {
              status: "fulfilled",
              value: e
            }, --c || r(s))
          }, function(e) {
            !l && (l = true, s[a] = {
              status: "rejected",
              reason: e
            }, --c || r(s))
          })
        }), --c || r(s)
      });
    return u.error && c(u.value), n.promise
  }
})