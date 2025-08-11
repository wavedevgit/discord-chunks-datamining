/** Chunk was on 23357 **/
/** chunk id: 86520, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk691593 = require("./691593.js"),
  Chunk602168 = require("./602168.js"),
  Chunk134546 = require("./134546.js"),
  Chunk795462 = require("./795462.js");
Chunk220159({
  target: "Promise",
  stat: true,
  forced: require("./806414.js")
}, {
  allSettled: function(e) {
    var t = this,
      n = i.f(t),
      r = n.resolve,
      l = n.reject,
      u = s(function() {
        var n = a(t.resolve),
          i = [],
          s = 0,
          l = 1;
        c(e, function(e) {
          var a = s++,
            c = false;
          l++, o(n, t, e).then(function(e) {
            !c && (c = true, i[a] = {
              status: "fulfilled",
              value: e
            }, --l || r(i))
          }, function(e) {
            !c && (c = true, i[a] = {
              status: "rejected",
              reason: e
            }, --l || r(i))
          })
        }), --l || r(i)
      });
    return u.error && l(u.value), n.promise
  }
})