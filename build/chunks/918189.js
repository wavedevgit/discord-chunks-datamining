/** Chunk was on 35511 **/
/** chunk id: 918189, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk693755 = require("./693755.js"),
  Chunk57284 = require("./57284.js"),
  Chunk564399 = require("./564399.js"),
  s = Chunk675879("".replace),
  l = RegExp("^[" + Chunk564399 + "]+"),
  c = RegExp("(^|[^" + Chunk564399 + "])[" + Chunk564399 + "]+$"),
  u = function(e) {
    return function(t) {
      var n = o(a(t));
      return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n
    }
  };
module.exports = {
  start: u(1),
  end: u(2),
  trim: u(3)
}