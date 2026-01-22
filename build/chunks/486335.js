/** Chunk was on web.js **/
/** chunk id: 486335, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk906046 = require("./906046.js"),
  a = require("./581070.js")(),
  Chunk353841 = require("./353841.js"),
  Chunk267768 = require("./267768.js");
if (a) {
  var l = Chunk906046("RegExp.prototype.exec"),
    c = {},
    u = function() {
      throw c
    },
    d = {
      toString: u,
      valueOf: u
    };
  "symbol" == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = u), r = function(e) {
    if (!e || "object" != typeof e) returnfalse;
    var t = o(e, "lastIndex");
    if (!(t && s(t, "value"))) returnfalse;
    try {
      l(e, d)
    } catch (e) {
      return e === c
    }
  }
} else {
  var f = Chunk906046("Object.prototype.toString"),
    p = "[object RegExp]";
  r = function(e) {
    return !!e && ("object" == typeof e || "function" == typeof e) && f(e) === p
  }
}
module.exports = r