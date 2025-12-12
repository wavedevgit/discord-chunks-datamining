/** Chunk was on web.js **/
/** chunk id: 926033, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk166691 = require("./166691.js"),
  a = require("./195653.js")(),
  Chunk706165 = require("./706165.js"),
  Chunk566817 = require("./566817.js");
if (a) {
  var l = Chunk166691("RegExp.prototype.exec"),
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
    var t = s(e, "lastIndex");
    if (!(t && o(t, "value"))) returnfalse;
    try {
      l(e, d)
    } catch (e) {
      return e === c
    }
  }
} else {
  var f = Chunk166691("Object.prototype.toString"),
    p = "[object RegExp]";
  r = function(e) {
    return !!e && ("object" == typeof e || "function" == typeof e) && f(e) === p
  }
}
module.exports = r