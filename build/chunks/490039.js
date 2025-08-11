/** Chunk was on 23357 **/
/** chunk id: 490039, original params: e,t,n (module,exports,require) **/
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
  race: function(e) {
    var t = this,
      n = i.f(t),
      r = n.reject,
      l = s(function() {
        var i = a(t.resolve);
        c(e, function(e) {
          o(i, t, e).then(n.resolve, r)
        })
      });
    return l.error && r(l.value), n.promise
  }
})