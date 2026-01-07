/** Chunk was on web.js **/
/** chunk id: 961041, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk630489 = require("./630489.js"),
  Chunk880181 = require("./880181.js"),
  Chunk275717 = require("./275717.js"),
  Chunk845691 = require("./845691.js"),
  Chunk751736 = require("./751736.js"),
  Chunk284955 = require("./284955.js"),
  Chunk511696 = require("./511696.js"),
  Chunk287353 = require("./287353.js"),
  f = Chunk630489 && Chunk630489.prototype,
  p = Chunk751736("species"),
  _ = false,
  m = Chunk880181(Chunk127849.PromiseRejectionEvent);
module.exports = {
  CONSTRUCTOR: Chunk275717("Promise", function() {
    var e = s(i),
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
    return !t && ("BROWSER" === c || "DENO" === c) && !m
  }),
  REJECTION_EVENT: m,
  SUBCLASSING: _
}