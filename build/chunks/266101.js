/** Chunk was on web.js **/
/** chunk id: 266101, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk621523 = require("./621523.js"),
  Chunk179122 = require("./179122.js"),
  Chunk759319 = require("./759319.js"),
  s = Error.prototype.toString;
module.exports = Chunk621523(function() {
  if (r) {
    var e = Object.create(Object.defineProperty({}, "name", {
      get: function() {
        return this === e
      }
    }));
    if ("true" !== s.call(e)) returntrue
  }
  return "2: 1" !== s.call({
    message: 1,
    name: 2
  }) || "Error" !== s.call({})
}) ? function() {
  var e = a(this),
    t = o(e.name, "Error"),
    n = o(e.message);
  return t ? n ? t + ": " + n : t : n
} : s