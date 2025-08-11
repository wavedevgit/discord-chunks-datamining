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
  _ = Chunk751736("species"),
  p = false,
  h = Chunk880181(Chunk127849.PromiseRejectionEvent);
module.exports = {
  CONSTRUCTOR: Chunk275717("Promise", function() {
    var e = Chunk845691(Chunk630489),
      t = module !== String(Chunk630489);
    if (!exports && 66 === Chunk287353 || Chunk511696 && !(f.catch && f.finally)) returntrue;
    if (!Chunk287353 || Chunk287353 < 51 || !/native code/.test(module)) {
      var n = new Chunk630489(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((require.constructor = {})[_] = Chunk127849, !(p = require.then(function() {}) instanceof Chunk127849)) returntrue
    }
    return !exports && ("BROWSER" === Chunk284955 || "DENO" === Chunk284955) && !h
  }),
  REJECTION_EVENT: h,
  SUBCLASSING: p
}