/** Chunk was on 35511 **/
/** chunk id: 321344, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk308227 = require("./308227.js"),
  Chunk421236 = require("./421236.js"),
  Chunk596479 = require("./596479.js"),
  Chunk794938 = require("./794938.js"),
  Chunk999843 = require("./999843.js"),
  Chunk564904 = require("./564904.js"),
  u = Chunk308227.Promise,
  d = false;
Chunk834647({
  target: "Promise",
  stat: true,
  forced: !u || !u.try || Chunk564904(function() {
    u.try(function(e) {
      d = 8 === e
    }, 8)
  }).error || !d
}, {
  try: function(e) {
    var t = arguments.length > 1 ? i(arguments, 1) : [],
      n = s.f(this),
      r = c(function() {
        return o(l(e), true, t)
      });
    return (r.error ? n.reject : n.resolve)(r.value), n.promise
  }
})