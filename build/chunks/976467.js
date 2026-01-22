/** Chunk was on 35511 **/
/** chunk id: 976467, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk308227 = require("./308227.js"),
  Chunk145595 = require("./145595.js"),
  Chunk309270 = require("./309270.js"),
  Chunk800403 = require("./800403.js"),
  Chunk84475 = require("./84475.js"),
  Chunk61748 = require("./61748.js"),
  Chunk45388 = require("./45388.js"),
  Chunk780940 = require("./780940.js"),
  Chunk738538 = require("./738538.js"),
  p = Chunk145595 && Chunk145595.prototype,
  h = Chunk61748("species"),
  f = false,
  m = Chunk309270(Chunk308227.PromiseRejectionEvent);
module.exports = {
  CONSTRUCTOR: Chunk800403("Promise", function() {
    var e = s(a),
      t = e !== String(a);
    if (!t && 66 === d || u && !(p.catch && p.finally)) returntrue;
    if (!d || d < 51 || !/native code/.test(e)) {
      var n = new a(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((n.constructor = {})[h] = r, !(f = n.then(function() {}) instanceof r)) returntrue
    }
    return !t && ("BROWSER" === c || "DENO" === c) && !m
  }),
  REJECTION_EVENT: m,
  SUBCLASSING: f
}