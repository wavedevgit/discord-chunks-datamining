/** Chunk was on web.js **/
/** chunk id: 993155, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk580983 = require("./580983.js"),
  Chunk896471 = require("./896471.js"),
  Chunk655745 = require("./655745.js"),
  Chunk555648 = require("./555648.js"),
  Chunk683385 = require("./683385.js");
Chunk98405({
  target: "Promise",
  stat: true,
  forced: require("./168527.js")
}, {
  allSettled: function(e) {
    var t = this,
      n = o.f(t),
      r = n.resolve,
      c = n.reject,
      u = s(function() {
        var n = a(t.resolve),
          o = [],
          s = 0,
          c = 1;
        l(e, function(e) {
          var a = s++,
            l = false;
          c++, i(n, t, e).then(function(e) {
            !l && (l = true, o[a] = {
              status: "fulfilled",
              value: e
            }, --c || r(o))
          }, function(e) {
            !l && (l = true, o[a] = {
              status: "rejected",
              reason: e
            }, --c || r(o))
          })
        }), --c || r(o)
      });
    return u.error && c(u.value), n.promise
  }
})