/** Chunk was on 23357 **/
/** chunk id: 626481, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk424353 = require("./424353.js"),
  Chunk498996 = require("./498996.js"),
  Chunk689933 = require("./689933.js"),
  Chunk602168 = require("./602168.js"),
  Chunk691593 = require("./691593.js"),
  Chunk134546 = require("./134546.js"),
  u = Chunk424353.Promise,
  d = false;
Chunk220159({
  target: "Promise",
  stat: true,
  forced: !u || !u.try || Chunk134546(function() {
    u.try(function(e) {
      d = 8 === e
    }, 8)
  }).error || !d
}, {
  try: function(e) {
    var t = arguments.length > 1 ? i(arguments, 1) : [],
      n = s.f(this),
      r = l(function() {
        return a(c(e), true, t)
      });
    return (r.error ? n.reject : n.resolve)(r.value), n.promise
  }
})