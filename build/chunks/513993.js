/** Chunk was on web.js **/
/** chunk id: 513993, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk321727 = require("./321727.js"),
  Chunk304880 = require("./304880.js"),
  Chunk633851 = require("./633851.js"),
  s = Chunk410323("".replace),
  l = RegExp("^[" + Chunk633851 + "]+"),
  c = RegExp("(^|[^" + Chunk633851 + "])[" + Chunk633851 + "]+$"),
  u = function(e) {
    return function(t) {
      var n = a(i(t));
      return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n
    }
  };
module.exports = {
  start: u(1),
  end: u(2),
  trim: u(3)
}