/** Chunk was on web.js **/
/** chunk id: 545375, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk36935 = require("./36935.js"),
  Chunk339626 = require("./339626.js"),
  Chunk521351 = require("./521351.js"),
  Chunk997159 = require("./997159.js"),
  Chunk380744 = require("./380744.js"),
  Chunk676528 = require("./676528.js"),
  Chunk105712 = require("./105712.js"),
  Chunk123166 = require("./123166.js"),
  f = Chunk36935 && Chunk36935.prototype,
  p = Chunk380744("species"),
  _ = false,
  h = Chunk339626(Chunk860511.PromiseRejectionEvent);
module.exports = {
  CONSTRUCTOR: Chunk521351("Promise", function() {
    var e = o(i),
      t = e !== String(i);
    if (!t && 66 === d || u && !(f.catch && f.finally)) returntrue;
    if (!d || d < 51 || !/native code/.test(e)) {
      var n = new i(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((n.constructor = {})[p] = r, !(_ = n.then(function() {}) instanceof r)) returntrue
    }
    return !t && ("BROWSER" === c || "DENO" === c) && !h
  }),
  REJECTION_EVENT: h,
  SUBCLASSING: _
}