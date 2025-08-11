/** Chunk was on 23357 **/
/** chunk id: 127098, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk717130 = require("./717130.js"),
  Chunk565130 = require("./565130.js"),
  Chunk906898 = require("./906898.js"),
  s = Chunk764908("".replace),
  c = RegExp("^[" + Chunk906898 + "]+"),
  l = RegExp("(^|[^" + Chunk906898 + "])[" + Chunk906898 + "]+$"),
  u = function(e) {
    return function(t) {
      var n = a(o(t));
      return 1 & e && (n = s(n, c, "")), 2 & e && (n = s(n, l, "$1")), n
    }
  };
module.exports = {
  start: u(1),
  end: u(2),
  trim: u(3)
}